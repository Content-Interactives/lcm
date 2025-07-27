import React, { useState, useEffect } from 'react';

// CSS styles for dynamic factor trees
const dynamicTreeStyles = `
	/* Dynamic Factor Tree Styles */
	.factor-tree-container {
		position: relative;
		min-height: 300px;
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}

	/* Node animation */
	.node-animate {
		animation: nodeAppear 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
	}

	@keyframes nodeAppear {
		from {
			opacity: 0;
			transform: translateX(-50%) scale(0.5);
		}
		to {
			opacity: 1;
			transform: translateX(-50%) scale(1);
		}
	}
`;

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
	console.log('buildFactorTree called with:', num);
	
	if (num <= 1) return [];
	
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
	
	console.log('Final tree structure:', tree);
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

	// Animate tree
	const animateTree = () => {
		console.log('animateTree called with number:', number);
		
		try {
			setTreeAnimationStep(0);
			
			const num = parseInt(number);
			if (isNaN(num) || num <= 0) {
				console.error('Invalid input for tree:', number);
				return;
			}
			
			const tree = buildFactorTree(num);
			console.log('Tree built:', tree);
			setFactorTree(tree);
			
			// Animate each node step by step
			tree.forEach((node, index) => {
				setTimeout(() => {
					console.log(`Tree: Animating node ${index + 1}/${tree.length}:`, node.value);
					setTreeAnimationStep(index + 1);
					
					// Call onAnimationComplete when all nodes are animated
					if (index === tree.length - 1 && onAnimationComplete) {
						setTimeout(() => onAnimationComplete(treeId), 500);
					}
				}, index * 500); // 500ms delay between each node
			});
		} catch (error) {
			console.error('Error in animateTree:', error);
		}
	};

	// Reset tree
	const resetTree = () => {
		console.log('resetTree called');
		setTreeAnimationStep(0);
		setFactorTree([]);
	};

	// Auto-animate when show changes
	useEffect(() => {
		if (show && number) {
			animateTree();
		}
	}, [show, number]);

	// Render tree component
	const renderTree = () => (
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
				if (node.isPrime) return null;
				
				// Find child nodes
				const children = factorTree.filter(n => n.parentId === node.id);
				
				return children.map((child, childIndex) => {
					// Calculate positions
					const parentX = 100 + (node.x * 30);
					const parentY = 50 + (node.y * 65);
					
					// Determine if this is a left or right child
					const isLeftChild = child.x < node.x;
					const lineClass = isLeftChild ? 'left' : 'right';
					
					return (
						<div
							key={`line-${treeId}-${node.id}-${child.id}`}
							className={`factor-tree-line ${lineClass} ${isVisible ? 'static-line-appear' : ''}`}
							style={{
								position: 'absolute',
								left: `${parentX}px`,
								top: `${parentY + 20}px`,
								height: '40px',
								opacity: isVisible ? 1 : 0,
								transition: 'opacity 0.3s ease'
							}}
						/>
					);
				});
			})}
			
			{/* All nodes */}
			{factorTree.map((node, index) => {
				const isVisible = index < treeAnimationStep;
				
				// Calculate position
				const xPos = 100 + (node.x * 30);
				const yPos = 30 + (node.y * 68);
				
				let nodeClass = 'factor-tree-node';
				if (node.level === 0) {
					nodeClass += ' root';
				} else if (node.isPrime) {
					nodeClass += ' prime';
				} else {
					nodeClass += ' non-prime';
				}
				
				return (
					<div
						key={`node-${treeId}-${node.id}`}
						className={`${nodeClass} ${isVisible ? 'node-animate' : ''}`}
						style={{
							position: 'absolute',
							left: xPos,
							top: yPos,
							opacity: isVisible ? 1 : 0,
							transform: 'translateX(-50%)',
							transition: 'opacity 0.3s ease'
						}}
					>
						{node.value}
					</div>
				);
			})}
		</div>
	);

	return (
		<>
			{/* Inject CSS styles */}
			<style>{dynamicTreeStyles}</style>
			
			<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10, pointerEvents: 'none', ...containerStyle }}>
				{show && renderTree()}
			</div>
		</>
	);
};

// Export the component and utility functions
export { DynamicFactorTree, buildFactorTree, getPrimeFactors, isPrime };
export default DynamicFactorTree;
