import React, { useState } from 'react';
import FlexiWave from '../assets/All Flexi Poses/PNG/Flexi_Wave.png';
import FlexiTeacher from '../assets/All Flexi Poses/PNG/Flexi_Teacher.png';
import FlexiTelescope from '../assets/All Flexi Poses/PNG/Flexi_Telescope.png';
import FlexiPoint from '../assets/All Flexi Poses/PNG/Flexi_Point.png';
import FlexiThumbsUp from '../assets/All Flexi Poses/PNG/Flexi_ThumbsUp.png';
import './LCM.css';

const LCM = () => {
	const [isAnimating, setIsAnimating] = useState(false);
	const [currentStep, setCurrentStep] = useState('initial'); // 'initial', 'explore', 'continue1', 'continue2', etc.
	const [isExploreShrinking, setIsExploreShrinking] = useState(false);
	const [isTextShrinking, setIsTextShrinking] = useState(false);
	const [showNumbers, setShowNumbers] = useState(false);
	const [showNewText, setShowNewText] = useState(false);
	const [showContinue, setShowContinue] = useState(false);
	const [isContinueShrinking, setIsContinueShrinking] = useState(false);
	const [isLCMFadingOut, setIsLCMFadingOut] = useState(false);
	const [isNumbersMoving, setIsNumbersMoving] = useState(false);
	const [showLines, setShowLines] = useState(false);
	const [showFirstPrimes, setShowFirstPrimes] = useState(false);
	const [showSecondLines, setShowSecondLines] = useState(false);
	const [showSecondPrimes, setShowSecondPrimes] = useState(false);
	const [fadeNonPrimes, setFadeNonPrimes] = useState(false);
	const [showSecondStepText, setShowSecondStepText] = useState(false);
	const [showSecondContinue, setShowSecondContinue] = useState(false);
	const [isSecondContinueShrinking, setIsSecondContinueShrinking] = useState(false);
	const [linesShrink, setLinesShrink] = useState(false);
	const [secondLinesShrink, setSecondLinesShrink] = useState(false);
	const [firstLinesShrink, setFirstLinesShrink] = useState(false);
	const [nonPrimesFadeOut, setNonPrimesFadeOut] = useState(false);
	const [firstPrimesMoveDown, setFirstPrimesMoveDown] = useState(false);
	const [secondPrimesMoveUp, setSecondPrimesMoveUp] = useState(false);
	const [primesGroupTogether, setPrimesGroupTogether] = useState(false);
	const [mainNumbersMoveDown, setMainNumbersMoveDown] = useState(false);
	const [showMultiplicationSymbols, setShowMultiplicationSymbols] = useState(false);
	const [showSeparatingLines, setShowSeparatingLines] = useState(false);
	const [showSeparatingLinesRight, setShowSeparatingLinesRight] = useState(false);
	const [showPowerExpressions, setShowPowerExpressions] = useState(false);
	const [showFinalText, setShowFinalText] = useState(false);
	const [showThirdContinue, setShowThirdContinue] = useState(false);
	const [isThirdContinueShrinking, setIsThirdContinueShrinking] = useState(false);
	const [fadeOutPrimes, setFadeOutPrimes] = useState(false);
	const [multiplicationSymbolsFadeOut, setMultiplicationSymbolsFadeOut] = useState(false);
	const [separatingLinesFadeOut, setSeparatingLinesFadeOut] = useState(false);
	const [powerExpressionsFadeOut, setPowerExpressionsFadeOut] = useState(false);
	const [exponentsMoveTogether, setExponentsMoveTogether] = useState(false);
	const [showFinalMultiplication, setShowFinalMultiplication] = useState(false);
	const [showLCMText, setShowLCMText] = useState(false);
	const [exponentsJumpOut, setExponentsJumpOut] = useState(false);
	const [showReplacementNumbers, setShowReplacementNumbers] = useState(false);
	const [replacementNumbersJumpIn, setReplacementNumbersJumpIn] = useState(false);
	const [replacementNumbersFadeOut, setReplacementNumbersFadeOut] = useState(false);
	const [multiplicationSymbolFadeOut, setMultiplicationSymbolFadeOut] = useState(false);
	const [showFinalResult, setShowFinalResult] = useState(false);
	const [finalResultJumpIn, setFinalResultJumpIn] = useState(false);
	const [lcmTextMoveRight, setLcmTextMoveRight] = useState(false);
	const [showFinalMessage, setShowFinalMessage] = useState(false);
	const [showFinalButton, setShowFinalButton] = useState(false);
	const [isFinalButtonShrinking, setIsFinalButtonShrinking] = useState(false);
	const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
	const [isWelcomeFadingOut, setIsWelcomeFadingOut] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const [finalElementsJumpOut, setFinalElementsJumpOut] = useState(false);
	const [showRedElements, setShowRedElements] = useState(false);
	const [redElementsJumpIn, setRedElementsJumpIn] = useState(false);
	const [inputValue1, setInputValue1] = useState('12');
	const [inputValue2, setInputValue2] = useState('18');
	const [inputsModified, setInputsModified] = useState(false);
	const [lcmTextMoveDown, setLcmTextMoveDown] = useState(false);
	const [lcmAnswerMoveDown, setLcmAnswerMoveDown] = useState(false);
	const [showFinalFlexi, setShowFinalFlexi] = useState(false);
	const [solveButtonClicked, setSolveButtonClicked] = useState(false);
	const [inputsJumpOut, setInputsJumpOut] = useState(false);
	const [isSolveButtonShrinking, setIsSolveButtonShrinking] = useState(false);
	const [purpleTextJumpIn, setPurpleTextJumpIn] = useState(false);
	const [isFlexiFadingOut, setIsFlexiFadingOut] = useState(false);
	
	// Dynamic factor tree state variables
	const [factorTree1, setFactorTree1] = useState([]);
	const [factorTree2, setFactorTree2] = useState([]);
	const [showDynamicTree1, setShowDynamicTree1] = useState(false);
	const [showDynamicTree2, setShowDynamicTree2] = useState(false);
	const [treeAnimationStep1, setTreeAnimationStep1] = useState(0);
	const [treeAnimationStep2, setTreeAnimationStep2] = useState(0);
	
	// Track screen size
	React.useEffect(() => {
		const checkScreenSize = () => {
			setIsSmallScreen(window.innerWidth <= 500);
		};

		// Check on mount
		checkScreenSize();

		// Add event listener
		window.addEventListener('resize', checkScreenSize);

		// Cleanup
		return () => window.removeEventListener('resize', checkScreenSize);
	}, []);

	const handleReset = () => {
		setCurrentStep('initial');
		// Reset all states to initial values
		setIsAnimating(false);
		setIsExploreShrinking(false);
		setIsTextShrinking(false);
		setShowNumbers(false);
		setShowNewText(false);
		setShowContinue(false);
		setIsContinueShrinking(false);
		setIsLCMFadingOut(false);
		setIsNumbersMoving(false);
		setShowLines(false);
		setShowFirstPrimes(false);
		setShowSecondLines(false);
		setShowSecondPrimes(false);
		setFadeNonPrimes(false);
		setShowSecondStepText(false);
		setShowSecondContinue(false);
		setIsSecondContinueShrinking(false);
		setLinesShrink(false);
		setSecondLinesShrink(false);
		setFirstLinesShrink(false);
		setNonPrimesFadeOut(false);
		setFirstPrimesMoveDown(false);
		setSecondPrimesMoveUp(false);
		setPrimesGroupTogether(false);
		setMainNumbersMoveDown(false);
		setShowMultiplicationSymbols(false);
		setShowSeparatingLines(false);
		setShowSeparatingLinesRight(false);
		setShowPowerExpressions(false);
		setShowFinalText(false);
		setShowThirdContinue(false);
		setIsThirdContinueShrinking(false);
		setFadeOutPrimes(false);
		setMultiplicationSymbolsFadeOut(false);
		setSeparatingLinesFadeOut(false);
		setPowerExpressionsFadeOut(false);
		setExponentsMoveTogether(false);
		setShowFinalMultiplication(false);
		setShowLCMText(false);
		setExponentsJumpOut(false);
		setShowReplacementNumbers(false);
		setReplacementNumbersJumpIn(false);
		setReplacementNumbersFadeOut(false);
		setMultiplicationSymbolFadeOut(false);
		setShowFinalResult(false);
		setFinalResultJumpIn(false);
		setLcmTextMoveRight(false);
		setShowFinalMessage(false);
		setShowFinalButton(false);
		setShowWelcomeMessage(true);
		setIsWelcomeFadingOut(false);
		setFinalElementsJumpOut(false);
		setShowRedElements(false);
		setRedElementsJumpIn(false);
		setInputValue1('12');
		setInputValue2('18');
		setInputsModified(false);
		setSolveButtonClicked(false);
		setInputsJumpOut(false);
		setIsSolveButtonShrinking(false);
		setPurpleTextJumpIn(false);
		setLcmTextMoveDown(false);
		setLcmAnswerMoveDown(false);
		setShowFinalFlexi(false);
		setIsFlexiFadingOut(false);
		
		// Reset dynamic trees
		resetDynamicTrees();
	};

	const handleContinue = () => {
		setCurrentStep('continue1');
		setIsContinueShrinking(true);
		setTimeout(() => {
			setShowContinue(false);
			// Keep isContinueShrinking true for the full animation duration
			setTimeout(() => {
				setIsContinueShrinking(false);
				setShowNewText(false);
			}, 200); // Wait for flexi fade-out animation to complete (0.2s)
			setIsLCMFadingOut(true);
			setTimeout(() => {
				setIsNumbersMoving(true);
				setTimeout(() => {
					setShowLines(true);
					setTimeout(() => {
						setShowFirstPrimes(true);
						setTimeout(() => {
							setShowSecondLines(true);
							setTimeout(() => {
								setShowSecondPrimes(true);
								setTimeout(() => {
									setFadeNonPrimes(true);
									setTimeout(() => {
										setShowSecondStepText(true);
										setTimeout(() => {
											setShowSecondContinue(true);
										}, 800);
									}, 300);
								}, 500);
							}, 300);
						}, 300);
					}, 300);
				}, 600);
			}, 500);
		}, 700); // Increased from 500ms to 700ms to account for flexi fade-out animation
	};

	const handleSecondContinue = () => {
		// TODO: Add third step animation logic here
		setIsSecondContinueShrinking(true);
		setTimeout(() => {
			setShowSecondContinue(false);
			setShowSecondStepText(false);
			setIsSecondContinueShrinking(false);
			setTimeout(() => {
				// Step 1: Second set of lines shrink first
				setSecondLinesShrink(true);
				setTimeout(() => {
					// Step 2: Non-prime numbers (6 and 9) fade out
					setNonPrimesFadeOut(true);
					setTimeout(() => {
						// Step 3: First set of lines shrink
						setFirstLinesShrink(true);
						setTimeout(() => {
							// Step 4: First prime factors (2's) move down and left
							setFirstPrimesMoveDown(true);
							setSecondPrimesMoveUp(true);
							setMainNumbersMoveDown(true);
							setTimeout(() => {
								// Step 5: Group the primes together
								setPrimesGroupTogether(true);
								setTimeout(() => {
									// Step 6: Show multiplication symbols
									setShowMultiplicationSymbols(true);
									setTimeout(() => {
										// Step 7: Show separating lines under both sets of 2's and 3's simultaneously
										setShowSeparatingLines(true);
										setShowSeparatingLinesRight(true);
										setTimeout(() => {
											// Step 8: Show power expressions (2² and 3²)
											setShowPowerExpressions(true);
											setTimeout(() => {
												// Step 9: Show final text
												setShowFinalText(true);
												setTimeout(() => {
													// Step 10: Show third continue button
													setShowThirdContinue(true);
												}, 800);
											}, 1000);
										}, 600);
									}, 600);
								}, 600);
							}, 600);
						}, 500);
					}, 500);
				}, 500);
			}, 600); // Increased from 400ms to 600ms to account for flexi fade-out animation
		}, 500); // Increased from 300ms to 500ms to account for flexi fade-out animation
	};

	const handleThirdContinue = () => {
		// TODO: Add fourth step animation logic here
		setIsThirdContinueShrinking(true);
		setTimeout(() => {
			setShowThirdContinue(false);
			setShowFinalText(false);
			setIsThirdContinueShrinking(false);
			setFadeOutPrimes(true);
			setMultiplicationSymbolsFadeOut(true);
			setTimeout(() => {
				setSeparatingLinesFadeOut(true);
				setTimeout(() => {
					setPowerExpressionsFadeOut(true);
					setTimeout(() => {
						setExponentsMoveTogether(true);
						setTimeout(() => {
							setShowFinalMultiplication(true);
							setShowLCMText(true);
							setTimeout(() => {
								setExponentsJumpOut(true);
								setTimeout(() => {
									setShowReplacementNumbers(true);
									setTimeout(() => {
										setReplacementNumbersJumpIn(true);
										setTimeout(() => {
											setReplacementNumbersFadeOut(true);
											setMultiplicationSymbolFadeOut(true);
											setTimeout(() => {
												setShowFinalResult(true);
												setTimeout(() => {
													setFinalResultJumpIn(true);
													setLcmTextMoveRight(true);
													setTimeout(() => {
														setShowFinalMessage(true);
														setTimeout(() => {
															setShowFinalButton(true);
														}, 800);
													}, 1000);
												}, 100); // Small delay before jump-in starts
											}, 1000); // Wait for fade out to complete
										}, 1000); // Wait for jump-in to complete before fade out
									}, 100); // Small delay before jump-in starts
								}, 800); // Wait for jump-out to complete
							}, 1000); // Wait for LCM text to appear first
						}, 600); // Wait for exponents to move first
					}, 500); // Wait for power expressions to fade out first
				}, 500); // Wait for separating lines to fade out first
			}, 500); // Wait for multiplication symbols to fade out first
			// Add next step logic here
		}, 700); // Increased from 500ms to 700ms to account for flexi fade-out animation
	};

	const handleExploreClick = () => {
		setCurrentStep('explore');
		setIsAnimating(true);
		setIsExploreShrinking(true);
		setIsTextShrinking(true);
		setIsWelcomeFadingOut(true);
		setTimeout(() => {
			setShowWelcomeMessage(false);
			setIsWelcomeFadingOut(false);
		}, 200); // Wait for fade-out animation to complete
		// Add animation logic here as we build the interactive
		setTimeout(() => {
			setIsAnimating(false);
			setShowNumbers(true);
			setTimeout(() => {
				setShowNewText(true);
				setTimeout(() => {
					setShowContinue(true);
				}, 800);
			}, 1700);
		}, 700); // Increased from 500ms to 700ms to account for flexi fade-out animation
	};

	const handleFinalButton = () => {
		setIsFinalButtonShrinking(true);
		setTimeout(() => {
			setShowFinalButton(false);
			setShowFinalMessage(false);
			setIsFinalButtonShrinking(false);
			
			// Reset line-related states to prevent unwanted animations
			setShowLines(false);
			setShowSecondLines(false);
			setShowSeparatingLines(false);
			setShowSeparatingLinesRight(false);
			setFirstLinesShrink(false);
			setSecondLinesShrink(false);
			setLinesShrink(false);
			
			// First: move numbers up and to the left/right
			setIsNumbersMoving(true);
			setLcmTextMoveDown(true);
			setShowRedElements(true);
			setLcmAnswerMoveDown(true); // <-- Move this here so red elements appear and animate at the same time
			// Hide the original elements immediately when red elements appear
			setShowLCMText(false);
			setShowFinalResult(false);
			setTimeout(() => {
				// Then: trigger the jump out animation for original elements
				setFinalElementsJumpOut(true);
				setTimeout(() => {
					// Show red elements after jump out starts
					setTimeout(() => {
						setRedElementsJumpIn(true);
						setTimeout(() => {
							setIsNumbersMoving(false);
							setShowFinalFlexi(true);
						}, 800);
					}, 100);
				}, 700); // Wait for jump out animation to start
			}, 600); // Wait for numbers to move
		}, 700);
	};

	// TEMPORARY: Skip to final step function
	const handleSkipToFinal = () => {
		setCurrentStep('final');
		setShowNumbers(true);
		setShowFinalResult(true);
		setFinalResultJumpIn(true);
		setLcmTextMoveRight(true);
		setShowFinalMessage(true);
		setShowFinalButton(true);
		setShowLCMText(true); // for the LCM = label
		// Hide everything else
		setShowLines(false);
		setShowFirstPrimes(false);
		setShowSecondLines(false);
		setShowSecondPrimes(false);
		setShowMultiplicationSymbols(false);
		setShowSeparatingLines(false);
		setShowSeparatingLinesRight(false);
		setShowPowerExpressions(false);
		setShowFinalMultiplication(false);
		setIsAnimating(false);
		setIsExploreShrinking(false);
		setIsTextShrinking(false);
		setShowNewText(false);
		setShowContinue(false);
		setIsContinueShrinking(false);
		setIsLCMFadingOut(false);
		setIsNumbersMoving(false);
		setFadeNonPrimes(false);
		setShowSecondStepText(false);
		setShowSecondContinue(false);
		setIsSecondContinueShrinking(false);
		setLinesShrink(false);
		setSecondLinesShrink(false);
		setFirstLinesShrink(false);
		setNonPrimesFadeOut(false);
		setFirstPrimesMoveDown(false);
		setSecondPrimesMoveUp(false);
		setPrimesGroupTogether(false);
		setMainNumbersMoveDown(false);
		setShowThirdContinue(false);
		setIsThirdContinueShrinking(false);
		setFadeOutPrimes(false);
		setMultiplicationSymbolsFadeOut(false);
		setSeparatingLinesFadeOut(false);
		setPowerExpressionsFadeOut(false);
		setExponentsMoveTogether(false);
		setExponentsJumpOut(false);
		setShowReplacementNumbers(false);
		setReplacementNumbersJumpIn(false);
		setReplacementNumbersFadeOut(false);
		setMultiplicationSymbolFadeOut(false);
		setShowWelcomeMessage(false);
		setIsWelcomeFadingOut(false);
		setFinalElementsJumpOut(false);
		setShowRedElements(false);
		setRedElementsJumpIn(false);
	};

	const solveSteps = () => {
		// Step 1: Set the solve button as clicked and trigger shrinking animation
		setSolveButtonClicked(true);
		setIsSolveButtonShrinking(true);
		
		setIsFlexiFadingOut(true);
		
		setInputsJumpOut(true);
		setTimeout(() => {
			setPurpleTextJumpIn(true);
		}, 800);
		
		if (inputsModified) {
			setTimeout(() => {
				resetDynamicTrees();
				animateDynamicTree1();
				setTimeout(() => {
					animateDynamicTree2();
				}, 1000);
			}, 1200);
		}
		
		const calculateLCM = (a, b) => {
			// Get prime factors of both numbers
			const getPrimeFactors = (num) => {
				const factors = {};
				let divisor = 2;
				
				// Special case: 2 is prime
				if (num === 2) {
					return {};
				}
				
				while (num > 1) {
					while (num % divisor === 0) {
						factors[divisor] = (factors[divisor] || 0) + 1;
						num /= divisor;
					}
					divisor++;
				}
				return factors;
			};
			
			const factorsA = getPrimeFactors(a);
			const factorsB = getPrimeFactors(b);
			
			// Find the highest power of each prime factor
			const allPrimes = new Set([...Object.keys(factorsA), ...Object.keys(factorsB)]);
			let lcm = 1;
			
			for (const prime of allPrimes) {
				const powerA = factorsA[prime] || 0;
				const powerB = factorsB[prime] || 0;
				const highestPower = Math.max(powerA, powerB);
				lcm *= Math.pow(parseInt(prime), highestPower);
			}
			
			return lcm;
		};
		
		const num1 = parseInt(inputValue1);
		const num2 = parseInt(inputValue2);
		const result = calculateLCM(num1, num2);
	};

	// Dynamic factor tree functions
	const buildFactorTree = (num) => {
		console.log('buildFactorTree called with:', num);
		
		if (num <= 1) return [];
		
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

	const animateDynamicTree1 = () => {
		console.log('animateDynamicTree1 called with inputValue1:', inputValue1);
		
		try {
			setShowDynamicTree1(true);
			setTreeAnimationStep1(0);
			
			const num = parseInt(inputValue1);
			if (isNaN(num) || num <= 0) {
				console.error('Invalid input for tree 1:', inputValue1);
				return;
			}
			
			const tree = buildFactorTree(num);
			console.log('Tree 1 built:', tree);
			setFactorTree1(tree);
			
			// Animate each node step by step
			tree.forEach((node, index) => {
				setTimeout(() => {
					console.log(`Tree 1: Animating node ${index + 1}/${tree.length}:`, node.value);
					setTreeAnimationStep1(index + 1);
				}, index * 500); // 500ms delay between each node
			});
		} catch (error) {
			console.error('Error in animateDynamicTree1:', error);
		}
	};

	const animateDynamicTree2 = () => {
		console.log('animateDynamicTree2 called with inputValue2:', inputValue2);
		console.log('Current showDynamicTree2 state:', showDynamicTree2);
		console.log('Current treeAnimationStep2 state:', treeAnimationStep2);
		
		try {
			setShowDynamicTree2(true);
			console.log('Set showDynamicTree2 to true');
			setTreeAnimationStep2(0);
			console.log('Set treeAnimationStep2 to 0');
			
			const num = parseInt(inputValue2);
			if (isNaN(num) || num <= 0) {
				console.error('Invalid input for tree 2:', inputValue2);
				return;
			}
			
			const tree = buildFactorTree(num);
			console.log('Tree 2 built:', tree);
			setFactorTree2(tree);
			console.log('Set factorTree2 state');
			
			// Animate each node step by step
			tree.forEach((node, index) => {
				setTimeout(() => {
					console.log(`Tree 2: Animating node ${index + 1}/${tree.length}:`, node.value);
					setTreeAnimationStep2(index + 1);
				}, index * 500); // 500ms delay between each node
			});
		} catch (error) {
			console.error('Error in animateDynamicTree2:', error);
		}
	};

	const resetDynamicTrees = () => {
		console.log('resetDynamicTrees called');
		setShowDynamicTree1(false);
		setShowDynamicTree2(false);
		setTreeAnimationStep1(0);
		setTreeAnimationStep2(0);
		setFactorTree1([]);
		setFactorTree2([]);
	};

	return (
		<div className="w-full max-w-[464px] mx-auto px-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)] bg-white rounded-lg select-none">
			<div className="p-4">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-[#5750E3] text-sm font-medium select-none">LCM Explorer</h2>
					<div className="flex gap-2">
						<button 
							className={`text-sm px-3 py-1 rounded border transition-colors ${
								(isAnimating || isContinueShrinking || isExploreShrinking || isTextShrinking || isLCMFadingOut || isNumbersMoving) && !showContinue && !showSecondContinue && !showThirdContinue
									? 'text-gray-400 border-gray-200 cursor-not-allowed'
									: 'text-gray-500 hover:text-gray-700 border-gray-300 hover:border-gray-400'
							}`}
							onClick={handleReset}
							title="Reset interactive"
							disabled={(isAnimating || isContinueShrinking || isExploreShrinking || isTextShrinking || isLCMFadingOut || isNumbersMoving) && !showContinue && !showSecondContinue && !showThirdContinue}
						>
							Reset
						</button>
					</div>
				</div>

				<div className="space-y-4">
					{/* Visual Section */}
					<div className="w-full max-w-[430px] mx-auto bg-white border border-[#5750E3]/30 rounded-md relative overflow-hidden" style={{ minHeight: '370px', height: 'auto' }}>
						<div className="relative w-full max-w-[400px] mx-auto" style={{ minHeight: '420px', height: 'auto' }}>
							{/* TODO: Add LCM visualization content here */}
							{!showNumbers && (
								<div className={`glow-button ${currentStep === 'initial' ? 'simple-glow' : 'simple-glow stopped'} ${isExploreShrinking ? 'shrink-animation' : ''}`} style={{ position: 'absolute', bottom: '0.5rem', right: '0.5rem', zIndex: 3 }}>
									<button
										className={`explore-button select-none ${isExploreShrinking ? 'shrink-animation' : ''}`}
										onClick={handleSkipToFinal}
										disabled={isAnimating}
										style={{ transformOrigin: 'center' }}
									>
										Try My Own!
									</button>
									<button
										className={`explore-button select-none ${isExploreShrinking ? 'shrink-animation' : ''}`}
										onClick={handleExploreClick}
										disabled={isAnimating}
										style={{ transformOrigin: 'center', marginLeft: '0.5rem' }}
									>
										Explore Lesson!
									</button>
								</div>
							)}
							{showNumbers && (
								<div className="flex flex-col items-center gap-4 absolute top-20 left-1/2 transform -translate-x-1/2 w-full">
									<div className="flex items-center text-animation numbers-container w-full" style={{ opacity: 0, animation: 'fadeIn 0.5s ease-out forwards' }}>
										{/* 12 Factor Tree */}
										<div className="relative w-1/2 flex justify-center">
											{/* Main number 12 */}
											<div className={`text-4xl font-bold text-black number-text ${isNumbersMoving ? 'number-move-left' : ''} ${mainNumbersMoveDown ? 'main-numbers-move-down-left' : ''} ${finalElementsJumpOut ? 'final-elements-jump-out-left' : ''}`}>12</div>
											
											{/* Red version of 12 */}
											{showRedElements && (
												<div
													className={`text-4xl font-bold text-red-500 number-text ${isNumbersMoving ? 'number-move-left' : ''} ${inputsJumpOut ? 'input-one-jump-out' : ''} ${mainNumbersMoveDown ? 'main-numbers-move-down-left' : ''} ${redElementsJumpIn ? 'red-elements-jump-in-left' : ''}`}
													style={{ position: 'absolute', top: 0, left: '8rem', transform: 'translateX(-50%)', opacity: redElementsJumpIn ? 1 : 0 }}
												>
													<input
														type="number"
														value={inputValue1}
														onChange={e => {
															const value = e.target.value;
															if (value === '' || /^\d+$/.test(value)) {
																const numValue = parseInt(value) || 0;
																if (numValue > 25) {
																	setInputValue1('25');
																	setInputsModified(true);
																} else if (numValue === 0) {
																	setInputValue1('1');
																	setInputsModified(true);
																} else if (numValue >= 1 || value === '') {
																	setInputValue1(value);
																	if (value !== '12') {
																		setInputsModified(true);
																	}
																}
															}
														}}
														onKeyDown={e => {
															if (e.key === '-' || e.key === 'e' || e.key === 'E') {
																e.preventDefault();
															}
														}}
														max="25"
														className="w-full h-full text-center bg-transparent border-none outline-none text-4xl font-bold text-black"
														style={{
															width: '4.5rem',
															height: '100%',
															textAlign: 'center',
															background: 'transparent',
															border: '2px solid #9ca3af',
															borderRadius: '4px',
															outline: 'none',
															fontSize: '2.25rem',
															fontWeight: 'bold',
															color: '#000000',
															WebkitAppearance: 'none',
															MozAppearance: 'textfield',
															padding: '0.4rem'
														}}
													/>
												</div>
											)}
											
											{/* Purple text for first input */}
											{solveButtonClicked && showRedElements && purpleTextJumpIn && (
												<div
													style={{
														position: 'absolute',
														top: '-50px',
														left: '40%',
														fontSize: '2.25rem',
														fontWeight: 'bold',
														color: '#8b5cf6',
														zIndex: 100,
														pointerEvents: 'none',
														width: '4.5rem',
														height: '100%',
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center'
													}}
													className={`${purpleTextJumpIn ? 'purple-text-jump-in' : ''}`}
												>
													{inputValue1}
												</div>
											)}
											
											{/* Factor Tree Structure for 12 */}
											{/* Lines from main number */}
											{showLines && (
												<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] ${isNumbersMoving ? 'line-move-left' : 'line-appear'} ${firstLinesShrink ? (isNumbersMoving ? 'lines-shrink-move-left' : 'lines-shrink-appear') : ''}`} style={{ left: '86%', transform: 'translateX(-50%)' }}></div>
											)}
											{showLines && (
												<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] ${isNumbersMoving ? 'line-move-left-right' : 'line-appear'} ${firstLinesShrink ? (isNumbersMoving ? 'lines-shrink-move-left-right' : 'lines-shrink-appear') : ''}`} style={{ left: '86%', transform: 'translateX(-50%)' }}></div>
											)}
											
											{/* Left side container for 12 tree */}
											<div className="tree-left-side" style={{ position: 'absolute', left: '0', top: 'calc(100% + 50px)', width: '50%', height: '200px' }}>
												{/* Left factor (2) */}
												{showFirstPrimes && (
													<div className={`absolute text-2xl font-bold text-[#5750E3] prime-text ${isNumbersMoving ? 'prime-move-left-1' : ''} ${firstPrimesMoveDown ? 'first-primes-move-down-left' : ''} ${fadeOutPrimes ? 'prime-fade-out-left-1' : ''}`} style={{ left: '140%', top: '0', transform: 'translateX(-50%)' }}>2</div>
												)}
												
												{/* Multiplication symbol */}
												{showFirstPrimes && showMultiplicationSymbols && (
													<div className={`absolute text-xl font-bold text-[#5750E3] ${multiplicationSymbolsFadeOut ? 'multiplication-symbols-fade-out' : 'multiplication-symbols-fade-in'}`} style={{ left: '67%', top: '-47px', transform: 'translateX(-50%)' }}>×</div>
												)}
												
												{/* Separating line */}
												{showSeparatingLines && (
													<div className={`absolute w-0.5 bg-[#5750E3] ${separatingLinesFadeOut ? 'separating-lines-fade-out-left' : 'separating-lines-fade-in-left'} ${isNumbersMoving ? 'prime-move-left-1' : ''} ${firstPrimesMoveDown ? 'first-primes-move-down-left' : ''}`} style={{ left: '67%', top: '-25px', transform: 'translateX(-50%)' }}></div>
												)}
												
												{/* Power expression (2²) */}
												{showPowerExpressions && (
													<div className={`absolute text-2xl font-bold text-[#5750E3] ${exponentsMoveTogether ? 'exponent-move-up-right' : 'power-expressions-fade-in'} ${exponentsJumpOut ? 'exponents-jump-out-left' : ''} ${isNumbersMoving ? 'prime-move-left-1' : ''} ${firstPrimesMoveDown ? 'first-primes-move-down-left' : ''}`} style={{ left: '58%', top: '25px', transform: 'translateX(-50%)' }}>2²</div>
												)}
												
												{/* Replacement number (4) */}
												{showReplacementNumbers && (
													<div className={`absolute text-2xl font-bold text-[#5750E3] ${replacementNumbersJumpIn ? 'replacement-numbers-jump-in-left' : ''} ${replacementNumbersFadeOut ? 'replacement-numbers-fade-out-left' : ''}`} style={{ left: '50%', top: '15%', transform: 'translate(140px, -70%)', opacity: replacementNumbersJumpIn ? 1 : 0 }}>4</div>
												)}
												
												{/* Multiplication symbol in power expression */}
												{showPowerExpressions && (
													<div className={`absolute text-2xl font-bold text-[#5750E3] ${powerExpressionsFadeOut ? 'power-expressions-fade-out' : 'power-expressions-fade-in'} ${isNumbersMoving ? 'prime-move-left-1' : ''} ${firstPrimesMoveDown ? 'first-primes-move-down-left' : ''}`} style={{ left: '95%', top: '25px', transform: 'translateX(-50%) translateX(35px)' }}>×</div>
												)}
												
												{/* Second factor (3) in power expression */}
												{showPowerExpressions && (
													<div className={`absolute text-2xl font-bold text-[#5750E3] ${powerExpressionsFadeOut ? 'power-expressions-fade-out' : 'power-expressions-fade-in'} ${isNumbersMoving ? 'prime-move-left-1' : ''} ${firstPrimesMoveDown ? 'first-primes-move-down-left' : ''}`} style={{ left: '130%', top: '25px', transform: 'translateX(-50%) translateX(70px)' }}>3</div>
												)}
											</div>
											
											{/* Right side container for 12 tree */}
											<div className="tree-right-side" style={{ position: 'absolute', right: '0', top: 'calc(100% + 50px)', width: '50%', height: '200px' }}>
												{/* Right factor (6) */}
												{showFirstPrimes && (
													<div className={`absolute text-2xl font-bold text-[#5750E3] ${isNumbersMoving ? 'prime-move-left-2-no-opacity' : ''} ${nonPrimesFadeOut ? 'non-primes-fade-out-left' : ''}`} style={{ left: '105%', top: '0', transform: 'translateX(-50%)', opacity: fadeNonPrimes ? 0.5 : 1 }}>6</div>
												)}
												
												{/* Lines under 6 */}
												{showSecondLines && (
													<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] ${isNumbersMoving ? 'line-under-6-left' : 'line-appear'} ${secondLinesShrink ? (isNumbersMoving ? 'lines-shrink-under-6-left' : 'lines-shrink-appear') : ''}`} style={{ left: '105%', top: '15%', transform: 'translateX(-50%)' }}></div>
												)}
												{showSecondLines && (
													<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] ${isNumbersMoving ? 'line-under-6-right' : 'line-appear'} ${secondLinesShrink ? (isNumbersMoving ? 'lines-shrink-under-6-right' : 'lines-shrink-appear') : ''}`} style={{ left: '105%', top: '15%', transform: 'translateX(-50%)' }}></div>
												)}
												
												{/* Left side of 6 breakdown */}
												<div className="sub-tree-left" style={{ position: 'absolute', left: '0', top: '80px', width: '50%', height: '100px' }}>
													{/* Factor 2 under 6 */}
													{showSecondPrimes && (
														<div className={`absolute text-2xl font-bold text-[#5750E3] ${isNumbersMoving ? 'prime-under-6-1' : ''} ${secondPrimesMoveUp ? 'second-primes-move-up-left' : ''} ${fadeOutPrimes ? 'prime-fade-out-left-2' : ''}`} style={{ left: '140%', top: '0', transform: 'translateX(-50%)' }}>2</div>
													)}
													
													{/* Multiplication symbol under 6 */}
													{showSecondPrimes && showMultiplicationSymbols && (
														<div className={`absolute text-xl font-bold text-[#5750E3] ${multiplicationSymbolsFadeOut ? 'multiplication-symbols-fade-out' : 'multiplication-symbols-fade-in'}`} style={{ left: '65%', top: '-127%', transform: 'translateX(-50%)' }}>×</div>
													)}
													
													{/* Separating line under 6 */}
													{showSeparatingLines && (
														<div className={`absolute w-0.5 bg-[#5750E3] ${separatingLinesFadeOut ? 'separating-lines-fade-out-right' : 'separating-lines-fade-in-right'} ${isNumbersMoving ? 'prime-under-6-1' : ''} ${secondPrimesMoveUp ? 'second-primes-move-up-left' : ''}`} style={{ left: '71%', top: '-105%', transform: 'translateX(-50%)' }}></div>
													)}
												</div>
												
												{/* Right side of 6 breakdown */}
												<div className="sub-tree-right" style={{ position: 'absolute', right: '0', top: '80px', width: '50%', height: '100px' }}>
													{/* Factor 3 under 6 */}
													{showSecondPrimes && (
														<div className={`absolute text-2xl font-bold text-[#5750E3] ${isNumbersMoving ? 'prime-under-6-2' : ''} ${secondPrimesMoveUp ? 'second-primes-move-up-left' : ''} ${fadeOutPrimes ? 'prime-fade-out-left-3' : ''}`} style={{ left: '180%', top: '0', transform: 'translateX(-50%)' }}>3</div>
													)}
												</div>
											</div>
										</div>
										
										{/* 18 Factor Tree */}
										<div className="relative w-1/2 flex justify-center">
											{/* Main number 18 */}
											<div className={`text-4xl font-bold text-black number-text right-factor-tree-18 ${isNumbersMoving ? 'number-move-right' : ''} ${mainNumbersMoveDown ? 'main-numbers-move-down-right' : ''} ${isSmallScreen && (isNumbersMoving || mainNumbersMoveDown) ? 'small-screen-position' : ''} ${finalElementsJumpOut ? 'final-elements-jump-out-right' : ''}`}>18</div>
											
											{/* Red version of 18 */}
											{showRedElements && (
												<div
													className={`text-4xl font-bold text-red-500 number-text right-factor-tree-18 ${isNumbersMoving ? 'number-move-right' : ''} ${inputsJumpOut ? 'input-two-jump-out' : ''} ${mainNumbersMoveDown ? 'main-numbers-move-down-right' : ''} ${isSmallScreen && (isNumbersMoving || mainNumbersMoveDown) ? 'small-screen-position' : ''} ${redElementsJumpIn ? 'red-elements-jump-in-right' : ''}`}
													style={{ position: 'absolute', top: 0, left: '0rem', transform: 'translateX(-50%)', opacity: redElementsJumpIn ? 1 : 0 }}
												>
													<input
														type="number"
														value={inputValue2}
														onChange={e => {
															const value = e.target.value;
															if (value === '' || /^\d+$/.test(value)) {
																const numValue = parseInt(value) || 0;
																if (numValue > 25) {
																	setInputValue2('25');
																	setInputsModified(true);
																} else if (numValue === 0) {
																	setInputValue2('1');
																	setInputsModified(true);
																} else if (numValue >= 1 || value === '') {
																	setInputValue2(value);
																	if (value !== '18') {
																		setInputsModified(true);
																	}
																}
															}
														}}
														onKeyDown={e => {
															if (e.key === '-' || e.key === 'e' || e.key === 'E') {
																e.preventDefault();
															}
														}}
														max="25"
														className="w-full h-full text-center bg-transparent border-none outline-none text-4xl font-bold text-red-500"
														style={{
															width: '4.5rem',
															height: '100%',
															textAlign: 'center',
															background: 'transparent',
															border: '2px solid #9ca3af',
															borderRadius: '4px',
															outline: 'none',
															fontSize: '2.25rem',
															fontWeight: 'bold',
															color: '#000000',
															WebkitAppearance: 'none',
															MozAppearance: 'textfield',
															padding: '0.4rem'
														}}
													/>
												</div>
											)}
											
											{/* Purple text for second input */}
											{solveButtonClicked && showRedElements && purpleTextJumpIn && (
												<div
													style={{
														position: 'absolute',
														top: '-50px',
														left: '30%',
														fontSize: '2.25rem',
														fontWeight: 'bold',
														color: '#8b5cf6',
														zIndex: 100,
														pointerEvents: 'none',
														width: '4.5rem',
														height: '100%',
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center'
													}}
													className={`${purpleTextJumpIn ? 'purple-text-jump-in' : ''}`}
												>
													{inputValue2}
												</div>
											)}
											
											{/* Factor Tree Structure for 18 */}
											{/* Lines from main number */}
											{showLines && (
												<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] right-factor-tree-lines ${isNumbersMoving ? 'line-move-right' : 'line-appear'} ${firstLinesShrink ? (isNumbersMoving ? 'lines-shrink-move-right' : 'lines-shrink-appear') : ''} ${isSmallScreen ? 'small-screen-line-left' : ''}`} style={{ left: '16%', transform: 'translateX(-50%)' }}></div>
											)}
											{showLines && (
												<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] right-factor-tree-lines ${isNumbersMoving ? 'line-move-right-right' : 'line-appear'} ${firstLinesShrink ? (isNumbersMoving ? 'lines-shrink-move-right-right' : 'lines-shrink-appear') : ''} ${isSmallScreen ? 'small-screen-line-right' : ''}`} style={{ left: '16%', transform: 'translateX(-50%)' }}></div>
											)}
											
											{/* Left side container for 18 tree */}
											<div className="tree-left-side" style={{ position: 'absolute', left: '0', top: 'calc(100% + 50px)', width: '50%', height: '200px' }}>
												{/* Left factor (2) */}
												{showFirstPrimes && (
													<div className={`absolute text-2xl font-bold text-[#5750E3] prime-text right-factor-tree-2 ${isNumbersMoving ? 'prime-move-right-1' : ''} ${firstPrimesMoveDown ? 'first-primes-move-down-right' : ''} ${fadeOutPrimes ? 'prime-fade-out-right-1' : ''} ${isSmallScreen ? 'small-screen-prime' : ''}`} style={{ left: '0%', top: '0', transform: 'translateX(-50%)' }}>2</div>
												)}
												
												{/* Multiplication symbol */}
												{showFirstPrimes && showMultiplicationSymbols && (
													<div className={`absolute text-xl font-bold text-[#5750E3] right-factor-tree-multiplication ${multiplicationSymbolsFadeOut ? 'multiplication-symbols-fade-out' : 'multiplication-symbols-fade-in'} ${isSmallScreen ? 'small-screen-multiplication' : ''}`} style={{ left: '66%', top: '-47px', transform: 'translateX(-50%)' }}>×</div>
												)}
											</div>
											
											{/* Right side container for 18 tree */}
											<div className="tree-right-side" style={{ position: 'absolute', right: '0', top: 'calc(100% + 50px)', width: '50%', height: '200px' }}>
												{/* Right factor (9) */}
												{showFirstPrimes && (
													<div className={`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-9 ${isNumbersMoving ? 'prime-move-right-2-no-opacity' : ''} ${nonPrimesFadeOut ? 'non-primes-fade-out-right' : ''} ${isSmallScreen ? 'small-screen-prime' : ''}`} style={{ left: '-35%', top: '0', transform: 'translateX(-50%)', opacity: fadeNonPrimes ? 0.5 : 1 }}>9</div>
												)}
												
												{/* Lines under 9 */}
												{showSecondLines && (
													<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] right-factor-tree-lines ${isNumbersMoving ? 'line-under-9-left' : 'line-appear'} ${secondLinesShrink ? (isNumbersMoving ? 'lines-shrink-under-9-left' : 'lines-shrink-appear') : ''} ${isSmallScreen ? 'small-screen-line-left' : ''}`} style={{ left: '-35%', top: '15%', transform: 'translateX(-50%)' }}></div>
												)}
												{showSecondLines && (
													<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] right-factor-tree-lines ${isNumbersMoving ? 'line-under-9-right' : 'line-appear'} ${secondLinesShrink ? (isNumbersMoving ? 'lines-shrink-under-9-right' : 'lines-shrink-appear') : ''} ${isSmallScreen ? 'small-screen-line-right' : ''}`} style={{ left: '-35%', top: '15%', transform: 'translateX(-50%)' }}></div>
												)}
												
												{/* Left side of 9 breakdown */}
												<div className="sub-tree-left" style={{ position: 'absolute', left: '0', top: '80px', width: '50%', height: '100px' }}>
													{/* Factor 3 under 9 */}
													{showSecondPrimes && (
														<div className={`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-3-left ${isNumbersMoving ? 'prime-under-9-1' : ''} ${secondPrimesMoveUp ? 'second-primes-move-up-right' : ''} ${fadeOutPrimes ? 'prime-fade-out-right-2' : ''}`} style={{ left: '-140%', top: '0', transform: 'translateX(-50%)' }}>3</div>
													)}
													
													{/* Multiplication symbol under 9 */}
													{showSecondPrimes && showMultiplicationSymbols && (
														<div className={`absolute text-xl font-bold text-[#5750E3] right-factor-tree-multiplication ${multiplicationSymbolsFadeOut ? 'multiplication-symbols-fade-out' : 'multiplication-symbols-fade-in'}`} style={{ left: '65%', top: '-127%', transform: 'translateX(-50%)' }}>×</div>
													)}
													
													{/* Separating line under 9 */}
													{showSeparatingLinesRight && (
														<div className={`absolute w-0.5 bg-[#5750E3] right-factor-tree-lines ${separatingLinesFadeOut ? 'separating-lines-fade-out-right-side-left' : 'separating-lines-fade-in-right-side-left'} ${isNumbersMoving ? 'prime-under-9-1' : ''} ${secondPrimesMoveUp ? 'second-primes-move-up-right' : ''}`} style={{ left: '66%', top: '-105%', transform: 'translateX(-50%)' }}></div>
													)}
												</div>
												
												{/* Right side of 9 breakdown */}
												<div className="sub-tree-right" style={{ position: 'absolute', right: '0', top: '80px', width: '50%', height: '100px' }}>
													{/* Factor 3 under 9 */}
													{showSecondPrimes && (
														<div className={`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-3-right ${isNumbersMoving ? 'prime-under-9-2' : ''} ${secondPrimesMoveUp ? 'second-primes-move-up-right' : ''} ${fadeOutPrimes ? 'prime-fade-out-right-3' : ''}`} style={{ left: '-100%', top: '0', transform: 'translateX(-50%)' }}>3</div>
													)}
													
													{/* Separating line under 9 */}
													{showSeparatingLinesRight && (
														<div className={`absolute w-0.5 bg-[#5750E3] right-factor-tree-lines ${separatingLinesFadeOut ? 'separating-lines-fade-out-right-side-right' : 'separating-lines-fade-in-right-side-right'} ${isNumbersMoving ? 'prime-under-9-2' : ''} ${secondPrimesMoveUp ? 'second-primes-move-up-right' : ''}`} style={{ left: '-100%', top: '-105%', transform: 'translateX(-50%)' }}></div>
													)}
												</div>
												
												{/* Power expressions row */}
												<div className="power-expressions-row" style={{ position: 'absolute', left: '0', top: '130px', width: '100%', height: '50px' }}>
													{/* Factor 2 in power expression */}
													{showPowerExpressions && (
														<div className={`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-2 ${powerExpressionsFadeOut ? 'power-expressions-fade-out' : 'power-expressions-fade-in'} ${isNumbersMoving ? 'prime-under-9-2' : ''} ${secondPrimesMoveUp ? 'second-primes-move-up-right' : ''}`} style={{ left: '-45%', top: '-205%', transform: 'translateX(-50%)' }}>2</div>
													)}
													
													{/* Multiplication symbol in power expression */}
													{showPowerExpressions && (
														<div className={`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-multiplication ${powerExpressionsFadeOut ? 'power-expressions-fade-out' : 'power-expressions-fade-in'} ${isNumbersMoving ? 'prime-under-9-2' : ''} ${secondPrimesMoveUp ? 'second-primes-move-up-right' : ''}`} style={{ left: '-9%', top: '-205%', transform: 'translateX(-50%)' }}>×</div>
													)}
													
													{/* Factor 3² in power expression */}
													{showPowerExpressions && (
														<div className={`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-3-right ${exponentsMoveTogether ? 'exponent-move-up-left' : 'power-expressions-fade-in'} ${exponentsJumpOut ? 'exponents-jump-out-right' : ''} ${isNumbersMoving ? 'prime-under-9-2' : ''} ${secondPrimesMoveUp ? 'second-primes-move-up-right' : ''}`} style={{ left: '26%', top: '-205%', transform: 'translateX(-50%)' }}>3²</div>
													)}
													
													{/* Replacement number (9) */}
													{showReplacementNumbers && (
														<div className={`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-9 ${replacementNumbersJumpIn ? 'replacement-numbers-jump-in-right' : ''} ${replacementNumbersFadeOut ? 'replacement-numbers-fade-out-right' : ''}`} style={{ left: '5%', top: '-200%', transform: 'translate(-70px, -60px)', opacity: replacementNumbersJumpIn ? 1 : 0 }}>9</div>
													)}
												</div>
											</div>
											
											{/* Final multiplication and LCM section */}
											<div className="final-section" style={{ position: 'absolute', left: '0', top: 'calc(100% + 200px)', width: '100%', height: '100px' }}>
												{/* Final multiplication symbol */}
												{showFinalMultiplication && (
													<div className={`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-multiplication final-multiplication-fade-in ${multiplicationSymbolFadeOut ? 'final-multiplication-fade-out' : ''}`} style={{ left: '10%', top: '-120%', transform: 'translateX(-50%)' }}>×</div>
												)}
												
												{/* LCM text */}
												{showLCMText && (
													<div className={`absolute text-2xl font-bold text-gray-700 lcm-text-fade-in ${lcmTextMoveRight ? 'lcm-text-move-right' : ''}`} style={{ left: '15%', top: '-70%', transform: 'translateX(-50%)' }}>LCM&nbsp;=</div>
												)}
												
												{/* Red version of LCM = */}
												{showRedElements && (
													<div
														className={`absolute text-2xl font-bold text-gray-700 lcm-text-fade-in ${lcmTextMoveDown ? 'lcm-text-move-down' : ''} ${redElementsJumpIn ? 'red-elements-jump-in' : ''}`}
														style={{ left: '15%', top: '-70%', transform: 'translate(-88px, -110px)', opacity: 1 }}
													>
														LCM&nbsp;=
													</div>
												)}
												
												{/* LCM answer */}
												{showRedElements && (
													<div
														className={`absolute text-2xl font-bold text-[#5750E3] ${lcmAnswerMoveDown ? 'lcm-answer-move-down' : ''}`}
														style={{ left: '78%', top: '-120%', transform: 'translateX(-50%) translate(-7px, -60px)', opacity: 1 }}
													>
														{inputsModified ? (
															<span style={{ display: 'inline-flex', alignItems: 'center' }}>
																<div style={{ paddingRight: '17px' }}>
																	?
																</div>
																<div className={`glow-button ${isSolveButtonShrinking ? 'simple-glow stopped' : 'simple-glow'} ${isSolveButtonShrinking ? 'shrink-animation' : ''}`} style={{ position: 'absolute', left: '1.5rem', top: '-0.2rem', bottom: 'auto', right: 'auto' }}>
																	<button
																		className={`px-2 py-1 bg-[#008545] hover:bg-[#00783E] text-white text-xs rounded transition-colors duration-200 select-none ${isSolveButtonShrinking ? 'shrink-animation' : ''}`}
																		style={{ 
																			fontSize: '0.75rem', 
																			height: '1.75rem', 
																			lineHeight: 1, 
																			transformOrigin: 'center',
																			zIndex: 50,
																			borderRadius: '4px'
																		}}
																		onClick={solveSteps}
																	>
																		Solve
																	</button>
																</div>
															</span>
														) : '36' }
													</div>
												)}
												
												{/* Final result */}
												{showFinalResult && (
													<div className={`absolute text-2xl font-bold text-[#5750E3] ${finalResultJumpIn ? 'final-result-jump-in' : ''}`} style={{ left: '13%', top: '-120%', transform: 'translateX(-50%)', opacity: finalResultJumpIn ? 1 : 0 }}>
														{inputsModified ? '?' : '36'}
													</div>
												)}
											</div>
										</div>
									</div>
									{!showFinalResult && !showRedElements && (
										<div className={`text-2xl font-bold text-gray-700 ${isLCMFadingOut ? 'lcm-fade-out-down' : 'lcm-fade-in'}`} style={{ opacity: 0 }}>
											LCM = <span className="inline-block" style={{ opacity: 0, animation: 'growButton 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) 1s forwards' }}>?</span>
										</div>
									)}
								</div>
							)}
							{showContinue && (
								<div className={`glow-button ${isContinueShrinking ? 'simple-glow stopped' : 'simple-glow'}`} style={{ position: 'absolute', bottom: '0.5rem', right: '0.5rem', zIndex: 50 }}>
									<button
										className={`px-3 py-1.5 bg-[#008545] hover:bg-[#00783E] text-white text-sm rounded transition-colors duration-200 select-none
											${isContinueShrinking ? 'shrink-animation' : 'continue-animation'}`}
										onClick={handleContinue}
										style={{
											transformOrigin: 'center',
											zIndex: 50,
											borderRadius: '4px'
										}}
									>
										Continue
									</button>
								</div>
							)}
							{showSecondContinue && (
								<div className={`glow-button ${isSecondContinueShrinking ? 'simple-glow stopped' : 'simple-glow'}`} style={{ position: 'absolute', bottom: '0.5rem', right: '0.5rem', zIndex: 50 }}>
									<button
										className={`px-3 py-1.5 bg-[#008545] hover:bg-[#00783E] text-white text-sm rounded transition-colors duration-200 select-none
											${isSecondContinueShrinking ? 'shrink-animation' : 'continue-animation'}`}
										onClick={handleSecondContinue}
										style={{
											transformOrigin: 'center',
											zIndex: 50,
											borderRadius: '4px'
										}}
									>
										Continue
									</button>
								</div>
							)}
							{showThirdContinue && (
								<div className={`glow-button ${isThirdContinueShrinking ? 'simple-glow stopped' : 'simple-glow'}`} style={{ position: 'absolute', bottom: '0.5rem', right: '0.5rem', zIndex: 50 }}>
									<button
										className={`px-3 py-1.5 bg-[#008545] hover:bg-[#00783E] text-white text-sm rounded transition-colors duration-200 select-none
											${isThirdContinueShrinking ? 'shrink-animation' : 'continue-animation'}`}
										onClick={handleThirdContinue}
										style={{
											transformOrigin: 'center',
											zIndex: 50,
											borderRadius: '4px'
										}}
									>
										Continue
									</button>
								</div>
							)}
							{showFinalButton && (
								<div className={`glow-button ${isFinalButtonShrinking ? 'simple-glow stopped' : 'simple-glow'}`} style={{ position: 'absolute', bottom: '0.5rem', right: '0.5rem', zIndex: 50 }}>
									<button
										className={`px-3 py-1.5 bg-[#008545] hover:bg-[#00783E] text-white text-sm rounded transition-colors duration-200 select-none
											${isFinalButtonShrinking ? 'shrink-animation' : 'continue-animation'}`}
										onClick={handleFinalButton}
										style={{
											transformOrigin: 'center',
											zIndex: 50,
											borderRadius: '4px'
										}}
									>
										Continue
									</button>
								</div>
							)}

							{/* Flexi Speech Bubble Section - Now inside the container */}
							{(showWelcomeMessage || showNewText || showSecondStepText || showFinalText || showFinalMessage || showFinalFlexi) && (
								<div className="absolute left-0 bottom-0 w-full h-full flex items-end justify-start pointer-events-none px-2 sm:px-0">
									{showWelcomeMessage && (
										<div className={`flexi-wave-bubble-container ${isWelcomeFadingOut ? 'flexi-first-step-fade-out' : ''}`}>
											<img src={FlexiWave} alt="Flexi Wave" className="flexi-wave-bottom-left" />
											<div className={`speech-bubble ${isWelcomeFadingOut ? 'flexi-first-step-fade-out' : 'speech-bubble-fade-in'}`}>
												Welcome to the LCM Explorer! Click one of the buttons below to begin the lesson or try your own numbers.
											</div>
										</div>
									)}
									{showNewText && !showSecondStepText && !showFinalText && (
										<div className={`flexi-wave-bubble-container ${isContinueShrinking ? 'flexi-first-step-fade-out' : ''}`}>
											<img src={FlexiTeacher} alt="Flexi Teacher" className="flexi-wave-bottom-left flexi-telescope-fade-in" />
											<div className={`speech-bubble ${isContinueShrinking ? 'flexi-first-step-fade-out' : 'speech-bubble-fade-in'}`}>
												To find the <b>Least Common Multiple</b>, we use prime factorization.
											</div>
										</div>
									)}
									{showSecondStepText && !showFinalText && (
										<div className={`flexi-wave-bubble-container ${isSecondContinueShrinking ? 'flexi-first-step-fade-out' : ''}`}>
											<img src={FlexiTelescope} alt="Flexi Telescope" className="flexi-wave-bottom-left flexi-telescope-fade-in" />
											<div className={`speech-bubble ${isSecondContinueShrinking ? 'flexi-first-step-fade-out' : 'speech-bubble-fade-in'}`}>
												Break down each number into prime factors, then find the highest power of each.
											</div>
										</div>
									)}
									{showFinalText && (
										<div className={`flexi-wave-bubble-container ${isThirdContinueShrinking ? 'flexi-first-step-fade-out' : ''}`}>
											<img src={FlexiPoint} alt="Flexi Point" className="flexi-wave-bottom-left flexi-telescope-fade-in" />
											<div className={`speech-bubble ${isThirdContinueShrinking ? 'flexi-first-step-fade-out' : 'speech-bubble-fade-in'}`}>
												Multiply the highest powers together to find the LCM!
											</div>
										</div>
									)}
									{showFinalMessage && (
										<div className={`flexi-wave-bubble-container ${isFinalButtonShrinking ? 'flexi-first-step-fade-out' : ''}`}>
											<img src={FlexiThumbsUp} alt="Flexi Thumbs Up" className="flexi-wave-bottom-left flexi-telescope-fade-in" />
											<div className={`speech-bubble ${isFinalButtonShrinking ? 'flexi-first-step-fade-out' : 'speech-bubble-fade-in'}`}>
												Now you know how to find the LCM using prime factorization!
											</div>
										</div>
									)}
									{showFinalFlexi && (
										<div className={`flexi-wave-bubble-container ${isFlexiFadingOut ? 'flexi-first-step-fade-out' : ''}`}>
											<img src={FlexiWave} alt="Flexi Wave" className="flexi-wave-bottom-left flexi-telescope-fade-in" />
											<div className={`speech-bubble ${isFlexiFadingOut ? 'flexi-first-step-fade-out' : 'speech-bubble-fade-in'}`}>
												Enter your own numbers and find their <b>Least Common Multiple</b>!
											</div>
										</div>
									)}
								</div>
							)}
						</div>
						
						{/* Dynamic Factor Trees - Now inside the main container */}
						{(showDynamicTree1 || showDynamicTree2) && (
							<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10, pointerEvents: 'none' }}>
								{showDynamicTree1 && (
									<div className="factor-tree-container" style={{ position: 'absolute', left: '25%', top: '38%', transform: 'translate(-50%, -50%)', width: '200px', height: '200px' }}>
										{/* SVG for all lines */}
										<svg
											style={{
												position: 'absolute',
												top: 0,
												left: 0,
												width: '100%',
												height: '100%',
												pointerEvents: 'none',
												zIndex: 100
											}}
										>
											{factorTree1.map((node, index) => {
												const isVisible = index < treeAnimationStep1;
												
												// Only draw lines if this node has children (not prime)
												if (node.isPrime) return null;
												
												// Find child nodes
												const children = factorTree1.filter(n => n.parentId === node.id);
												
												return children.map(child => {
													// Calculate positions
													const parentX = 100 + (node.x * 30);
													const parentY = 30 + (node.y * 60);
													const childX = 100 + (child.x * 30);
													const childY = 30 + (child.y * 60);
													
													console.log(`Drawing line from parent ${node.value} (${parentX}, ${parentY + 20}) to child ${child.value} (${childX}, ${childY})`);
													
													return (
														<line
															key={`line-1-${node.id}-${child.id}`}
															x1={parentX + 20} // Center of parent node
															y1={parentY + 40} // Bottom of parent node (30 + 20 = 50)
															x2={childX + 20} // Center of child node
															y2={childY + 2} // Top of child node
															stroke="#5750E3"
															strokeWidth="2"
															opacity={isVisible ? 1 : 0}
															style={{
																transition: 'opacity 0.3s ease'
															}}
														/>
													);
												});
											})}
										</svg>
										
										{/* All nodes */}
										{factorTree1.map((node, index) => {
											const isVisible = index < treeAnimationStep1;
											
											// Hide the root node (first node)
											if (index === 0) return null;
											
											// Calculate position
											const xPos = 100 + (node.x * 30);
											const yPos = 30 + (node.y * 60);
											
											let nodeClass = 'tree-node';
											if (node.level === 0) {
												nodeClass += ' root';
											} else if (node.isPrime) {
												nodeClass += ' prime';
											} else {
												nodeClass += ' non-prime';
											}
											
											return (
												<div
													key={`node-1-${node.id}`}
													className={`${nodeClass} ${isVisible ? 'node-animate' : ''}`}
													style={{
														position: 'absolute',
														left: xPos,
														top: yPos,
														opacity: isVisible ? 1 : 0,
														transform: 'translateX(-50%)',
														width: '40px',
														height: '40px',
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center',
														fontSize: '1.2rem',
														fontWeight: 'bold',
														color: '#5750E3',
														transition: 'opacity 0.3s ease'
													}}
												>
													{node.value}
												</div>
											);
										})}
									</div>
								)}
								{showDynamicTree2 && (
									<div className="factor-tree-container" style={{ position: 'absolute', left: '68%', top: '38%', transform: 'translate(-50%, -50%)', width: '200px', height: '200px' }}>
										{/* SVG for all lines */}
										<svg
											style={{
												position: 'absolute',
												top: 0,
												left: 0,
												width: '100%',
												height: '100%',
												pointerEvents: 'none'
											}}
										>
											{factorTree2.map((node, index) => {
												const isVisible = index < treeAnimationStep2;
												
												// Only draw lines if this node has children (not prime)
												if (node.isPrime) return null;
												
												// Find child nodes
												const children = factorTree2.filter(n => n.parentId === node.id);
												
												return children.map(child => {
													// Calculate positions
													const parentX = 100 + (node.x * 30);
													const parentY = 30 + (node.y * 60);
													const childX = 100 + (child.x * 30);
													const childY = 30 + (child.y * 60);
													
													console.log(`Drawing line from parent ${node.value} (${parentX}, ${parentY + 20}) to child ${child.value} (${childX}, ${childY})`);
													
													return (
														<line
															key={`line-2-${node.id}-${child.id}`}
															x1={parentX + 20} // Center of parent node
															y1={parentY + 40} // Bottom of parent node (30 + 20 = 50)
															x2={childX + 20} // Center of child node
															y2={childY + 2}  // Top of child node
															stroke="#5750E3"
															strokeWidth="2"
															opacity={isVisible ? 1 : 0}
															style={{
																transition: 'opacity 0.3s ease'
															}}
														/>
													);
												});
											})}
										</svg>
										
										{/* All nodes */}
										{factorTree2.map((node, index) => {
											const isVisible = index < treeAnimationStep2;
											
											// Hide the root node (first node)
											if (index === 0) return null;
											
											// Calculate position
											const xPos = 100 + (node.x * 30);
											const yPos = 30 + (node.y * 60);
											
											let nodeClass = 'tree-node';
											if (node.level === 0) {
												nodeClass += ' root';
											} else if (node.isPrime) {
												nodeClass += ' prime';
											} else {
												nodeClass += ' non-prime';
											}
											
											return (
												<div
													key={`node-2-${node.id}`}
													className={`${nodeClass} ${isVisible ? 'node-animate' : ''}`}
													style={{
														position: 'absolute',
														left: xPos,
														top: yPos,
														opacity: isVisible ? 1 : 0,
														transform: 'translateX(-50%)',
														width: '40px',
														height: '40px',
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center',
														fontSize: '1.2rem',
														fontWeight: 'bold',
														color: '#5750E3',
														transition: 'opacity 0.3s ease'
													}}
												>
													{node.value}
												</div>
											);
										})}
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LCM;