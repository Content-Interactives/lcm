import React, { useState, useEffect } from 'react';
import './LCM.css';

// Utility functions
const getPrimeFactors = (num) => {
	const factors = {};
	let divisor = 2;
	let tempNum = num;
	
	while (tempNum > 1) {
		while (tempNum % divisor === 0) {
			factors[divisor] = (factors[divisor] || 0) + 1;
			tempNum /= divisor;
		}
		divisor++;
	}
	return factors;
};

const isPrime = (num) => {
	if (num <= 1) return false;
	if (num <= 3) return true;
	if (num % 2 === 0 || num % 3 === 0) return false;
	
	for (let i = 5; i * i <= num; i += 6) {
		if (num % i === 0 || num % (i + 2) === 0) return false;
	}
	return true;
};

const buildFactorTree = (num) => {
	if (num <= 0) return [];
	
	// Special case for 1 - show it as a single node
	if (num === 1) {
		return [{
			id: 1,
			value: 1,
			level: 0,
			x: 0,
			y: 0,
			isPrime: false, // 1 is not prime
			parentId: null
		}];
	}
	
	const tree = [];
	let nextId = 1;
	
	// Add root node
	tree.push({
		id: nextId++,
		value: num,
		level: 0,
		x: 0,
		y: 0,
		isPrime: isPrime(num),
		parentId: null
	});
	
	// Queue to process nodes level by level
	const queue = [{ value: num, level: 0, x: 0, y: 0, id: 1 }];
	
	while (queue.length > 0) {
		const current = queue.shift();
		const factors = getPrimeFactors(current.value);
		
		// Skip if this node is prime
		if (Object.keys(factors).length === 0 || current.value <= 1) {
			continue;
		}
		
		// Get first factor and remaining value
		const firstFactor = Object.keys(factors)[0];
		const firstFactorValue = parseInt(firstFactor);
		const remainingValue = current.value / firstFactorValue;
		
		// Add left child (first factor)
		if (firstFactorValue !== 1 && firstFactorValue !== current.value) {
			const leftChild = {
				id: nextId++,
				value: firstFactorValue,
				level: current.level + 1,
				x: current.x - 1,
				y: current.y + 1,
				isPrime: isPrime(firstFactorValue),
				parentId: current.id
			};
			tree.push(leftChild);
		}
		
		// Add right child (remaining value)
		if (remainingValue > 1) {
			const rightChild = {
				id: nextId++,
				value: remainingValue,
				level: current.level + 1,
				x: current.x + 1,
				y: current.y + 1,
				isPrime: isPrime(remainingValue),
				parentId: current.id
			};
			tree.push(rightChild);
			
			// If right child is not prime, add it to queue for further processing
			if (!rightChild.isPrime) {
				queue.push({
					value: remainingValue,
					level: current.level + 1,
					x: current.x + 1,
					y: current.y + 1,
					id: rightChild.id
				});
			}
		}
	}
	
	return tree;
};

// Main DynamicFactorTree component (singular)
const DynamicFactorTree = ({ 
	number, 
	show = false, 
	onAnimationComplete = null,
	containerStyle = {},
	position = { left: '50%', top: '50%' },
	treeId = 'tree'
}) => {
	const [factorTree, setFactorTree] = useState([]);
	const [treeAnimationStep, setTreeAnimationStep] = useState(0);
	const [isShrinking, setIsShrinking] = useState(false);

	// Animate tree
	const animateTree = () => {
		
		try {
			setTreeAnimationStep(0);
			setIsShrinking(false);
			
			const num = parseInt(number);
			if (isNaN(num) || num <= 0) {
				console.error('Invalid input for tree:', number);
				return;
			}
			
			const tree = buildFactorTree(num);
			
			setFactorTree(tree);
			
			// Handle empty tree case (for numbers <= 1)
			if (tree.length === 0) {
				if (onAnimationComplete) {
					setTimeout(() => onAnimationComplete(treeId), 100);
				}
				return;
			}
			
			// If there's only one node (prime number), show it immediately
			if (tree.length === 1) {
				setTreeAnimationStep(1);
				// Start shrinking after a delay
				setTimeout(() => {
					setIsShrinking(true);
					if (onAnimationComplete) {
						setTimeout(() => onAnimationComplete(treeId), 800);
					}
				}, 1000);
				return;
			}
			
			// Animate each node step by step
			tree.forEach((node, index) => {
				setTimeout(() => {
					setTreeAnimationStep(index + 1);
					
					// When all nodes are animated, start shrinking after a delay
					if (index === tree.length - 1) {
						setTimeout(() => {
							setIsShrinking(true);
							if (onAnimationComplete) {
								setTimeout(() => onAnimationComplete(treeId), 800);
							}
						}, 800);
					}
				}, index * 500); // 500ms delay between each node
			});
		} catch (error) {
			console.error('Error in animateTree:', error);
		}
	};

	// Reset tree
	const resetTree = () => {
		setTreeAnimationStep(0);
		setIsShrinking(false);
		setFactorTree([]);
	};

	// Auto-animate when show changes
	useEffect(() => {
		if (show && number) {
			animateTree();
		} else {
		}
	}, [show, number]);

	// Render tree component
	const renderTree = () => {
		// Separate root and non-root elements for better control
		const rootNode = factorTree.find(node => node.level === 0);
		const nonRootNodes = factorTree.filter(node => node.level > 0);
		const nonRootLines = factorTree
			.filter(node => node.level > 0 && !node.isPrime)
			.flatMap(node => {
				const children = factorTree.filter(n => n.parentId === node.id);
				return children.map(child => ({
					node,
					child,
					key: `line-${treeId}-${node.id}-${child.id}`
				}));
			});

		return (
			<div 
				className="factor-tree-container" 
				style={{ 
					position: 'absolute', 
					left: position.left, 
					top: position.top, 
					transform: 'translate(-50%, -50%)', 
					width: '100%', 
					height: '100%' 
				}}
			>
				{/* CSS-styled lines instead of SVG */}
				{factorTree.map((node, index) => {
					const isVisible = index < treeAnimationStep;
					
					// Only draw lines if this node has children (not prime)
					if (node.isPrime) {
						return null;
					}
					
					// Find child nodes
					const children = factorTree.filter(n => n.parentId === node.id);
					
					return children.map((child, childIndex) => {
						// Calculate positions
						const parentX = 100 + (node.x * 30);
						const parentY = 50 + (node.y * 65);
						
						// Determine if this is a left or right child
						const isLeftChild = child.x < node.x;
						const lineClass = isLeftChild ? 'left' : 'right';
						
						// Apply shrinking animation to ALL lines when shrinking (including root lines)
						const shouldShrink = isShrinking;
						const shrinkLineClass = shouldShrink ? `shrink-out-line ${lineClass}` : '';
						
						return (
							<div
								key={`line-${treeId}-${node.id}-${child.id}`}
								className={`factor-tree-line ${lineClass} ${isVisible ? `dynamic-line-appear ${lineClass}` : ''} ${shrinkLineClass}`}
								style={{
									position: 'absolute',
									left: `${parentX}px`,
									top: `${parentY + 20}px`,
									height: '40px',
									opacity: isVisible ? 1 : 0,
									transition: 'opacity 0.3s ease, transform 0.8s ease, scale 0.8s ease'
								}}
							/>
						);
					});
				})}
				
				{/* Root node (never shrinks) */}
				{rootNode && (
					<div
						key={`node-${treeId}-${rootNode.id}`}
						className={`factor-tree-node dynamic-factor-tree-node root ${rootNode.level === 0 || rootNode.isPrime ? 'dynamic-node-animate' : 'dynamic-node-animate-non-prime'}`}
						style={{
							position: 'absolute',
							left: 100 + (rootNode.x * 30),
							top: 30 + (rootNode.y * 68),
							opacity: 0 < treeAnimationStep ? 1 : 0,
							transform: 'translateX(-50%)',
							transition: 'opacity 0.3s ease, transform 0.8s ease, scale 0.8s ease'
						}}
					>
						{rootNode.value}
					</div>
				)}
				
				{/* Non-root nodes (all shrink together) */}
				{nonRootNodes.map((node, index) => {
					const isVisible = index < treeAnimationStep;
					
					// Calculate position
					const xPos = 100 + (node.x * 30);
					const yPos = 30 + (node.y * 68);
					
					let nodeClass = 'factor-tree-node dynamic-factor-tree-node';
					if (node.isPrime) {
						nodeClass += ' prime';
					} else {
						nodeClass += ' non-prime';
					}
					
					// Use appropriate shrinking animation based on node type
					const shrinkClass = isShrinking ? (node.isPrime ? 'shrink-out' : 'shrink-out-non-prime') : '';
					
					return (
						<div
							key={`node-${treeId}-${node.id}`}
							className={`${nodeClass} ${isVisible ? (node.isPrime ? 'dynamic-node-animate' : 'dynamic-node-animate-non-prime') : ''} ${shrinkClass}`}
							style={{
								position: 'absolute',
								left: xPos,
								top: yPos,
								opacity: isVisible ? 1 : 0,
								transform: 'translateX(-50%)',
								transition: 'opacity 0.3s ease, transform 0.8s ease, scale 0.8s ease'
							}}
						>
							{node.value}
						</div>
					);
				})}
			</div>
		);
	};

	return (
		<>
			<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10, pointerEvents: 'none', ...containerStyle }}>
				{show && renderTree()}
			</div>
		</>
	);
};

// Export the component and utility functions
export { DynamicFactorTree, buildFactorTree, getPrimeFactors, isPrime };
export default DynamicFactorTree;
