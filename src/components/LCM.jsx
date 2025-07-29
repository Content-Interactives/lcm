import React, { useState, useEffect } from 'react';

// Assets Imports
import FlexiTeacher from '../assets/All Flexi Poses/PNG/Flexi_Teacher.png';
import FlexiTelescope from '../assets/All Flexi Poses/PNG/Flexi_Telescope.png';
import FlexiPoint from '../assets/All Flexi Poses/PNG/Flexi_Point.png';
import FlexiThumbsUp from '../assets/All Flexi Poses/PNG/Flexi_ThumbsUp.png';
import FlexiStars from '../assets/All Flexi Poses/PNG/Flexi_Stars.png';

// UI Components Imports
import { Container } from './ui/reused-ui/Container.jsx'
import { FlexiText } from './ui/reused-ui/FlexiText.jsx'
import { GlowButton } from './ui/reused-ui/GlowButton.jsx'
import { MultiGlowButton } from './ui/reused-ui/MultiGlowButton.jsx'

// UI Animation Imports
import './ui/reused-animations/fade.css';
import './ui/reused-animations/scale.css';
import './ui/reused-animations/glow.css';

// CSS Imports
import './LCM.css';

// JSX Imports
import { DynamicFactorTree } from './DynamicFactorTrees.jsx';

const LCM = () => {
	// State management
	const [isResetting, setIsResetting] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	
	// Introduction
	const [showIntroText, setShowIntroText] = useState(true);
	const [showExploreButton, setShowExploreButton] = useState(true);

	// Step 1
	const [showStep1Numbers, setShowStep1Numbers] = useState(false);
	const [showStep1LCMText, setShowStep1LCMText] = useState(false);
	const [showStep1Flexi, setShowStep1Flexi] = useState(false);

	// Step 2
	const [hideStep1Elements, setHideStep1Elements] = useState(false);
	const [moveStep1ElementsToPlace, setMoveStep1ElementsToPlace] = useState(false);
	const [showStep2Flexi, setShowStep2Flexi] = useState(false);
	const [showStaticFactorTrees, setShowStaticFactorTrees] = useState(false);
	const [hideStep2Elements, setHideStep2Elements] = useState(false);
	const [showStaticLines, setShowStaticLines] = useState(false);
	const [showStaticFirstPrimes, setShowStaticFirstPrimes] = useState(false);
	const [showStaticSecondLines, setShowStaticSecondLines] = useState(false);
	const [showStaticSecondPrimes, setShowStaticSecondPrimes] = useState(false);
	const [removeStaticSecondLines, setRemoveStaticSecondLines] = useState(false);
	const [removeStaticNonPrimeNodes, setRemoveStaticNonPrimeNodes] = useState(false);
	const [removeStaticFirstLines, setRemoveStaticFirstLines] = useState(false);
	const [moveFirstLayerTwos, setMoveFirstLayerTwos] = useState(false);
	const [moveSecondLayerPrimesUp, setMoveSecondLayerPrimesUp] = useState(false);
	const [showMultiplicationSymbols, setShowMultiplicationSymbols] = useState(false);
	const [showConvergingLines, setShowConvergingLines] = useState(false);
	const [showSuperscriptExpressions, setShowSuperscriptExpressions] = useState(false);
	const [showBetweenMultiplicationSymbols, setShowBetweenMultiplicationSymbols] = useState(false);
	const [remove6and9, setRemove6and9] = useState(false);
	

	// Step 3
	const [removeMultiplicationSymbols, setRemoveMultiplicationSymbols] = useState(false);
	const [removeBetweenMultiplicationSymbols, setRemoveBetweenMultiplicationSymbols] = useState(false);
	const [removeConvergingLines, setRemoveConvergingLines] = useState(false);
	const [showStep3Flexi, setShowStep3Flexi] = useState(false);
	const [hideStep3Elements, setHideStep3Elements] = useState(false);
	const [removeStep3FirstRow, setRemoveStep3FirstRow] = useState(false);
	const [removeStep3SecondRow, setRemoveStep3SecondRow] = useState(false);
	const [movePowersUp, setMovePowersUp] = useState(false);
	const [showLCMText, setShowLCMText] = useState(false);
	const [showPowersMultiplication, setShowPowersMultiplication] = useState(false);
	const [removePowers, setRemovePowers] = useState(false);
	const [showSimplifiedPowers, setShowSimplifiedPowers] = useState(false);
	const [removeSimplifiedPowers, setRemoveSimplifiedPowers] = useState(false);
	const [showAnswer, setShowAnswer] = useState(false);
	const [moveLcmTextRight, setMoveLcmTextRight] = useState(false);

	// Step 4
	const [showStep4Flexi, setShowStep4Flexi] = useState(false);
	const [hideStep4Elements, setHideStep4Elements] = useState(false);
	const [moveStep4LCMTextDown, setMoveStep4LCMTextDown] = useState(false);
	const [remove12And18, setRemove12And18] = useState(false);
	const [showInputs, setShowInputs] = useState(false);
	const [showInputFlexi, setShowInputFlexi] = useState(false);

	// Solving Step States
	const [showDynamicPowers, setShowDynamicPowers] = useState(false);

	// Input states
	const [inputValue1, setInputValue1] = useState('12');
	const [inputValue2, setInputValue2] = useState('18');
	const [inputsModified, setInputsModified] = useState(false);
	const [showSolveButton, setShowSolveButton] = useState(false);
	
	// Solve Step States
	const [hideReusableInputs, setHideReusableInputs] = useState(false);
	const [returnReusableInputs, setReturnReusableInputs] = useState(false);
	const [hideSolveButton, setHideSolveButton] = useState(false);
	const [returnSolveButton, setReturnSolveButton] = useState(false);
	const [currentAnswer, setCurrentAnswer] = useState(36);
	const [showDynamicFactorTrees, setShowDynamicFactorTrees] = useState(false);
	const [hideDynamicExpression, setHideDynamicExpression] = useState(false);
	const [showExpressionAnswer, setShowExpressionAnswer] = useState(false);
	const [hideExpressionAnswer, setHideExpressionAnswer] = useState(false);

	// Tree animation tracking states
	const [tree1Complete, setTree1Complete] = useState(false);
	const [tree2Complete, setTree2Complete] = useState(false);
	
	// Functions
	// Function to handle the explore button
	// Input handler function
	const handleInputChange = (value, setValue, defaultValue) => {
		setShowSolveButton(true);
		if (value === '' || /^\d+$/.test(value)) {
			const numValue = parseInt(value) || 0;
			if (numValue > 25) {
				setValue('25');
				setInputsModified(true);
			} else if (numValue >= 1 || value === '') {
				setValue(value);
				if (value !== defaultValue && value !== '') {
					setInputsModified(true);
				}
			}
		}
	};

	// Blur handler to auto-fill empty inputs with 1
	const handleInputBlur = (setValue, defaultValue) => {
		setValue(prevValue => {
			if (prevValue === '' || prevValue === '0') {
				return '1';
			}
			return prevValue;
		});
	};

	// Key down handler to prevent invalid characters
	const handleKeyDown = (e) => {
		if (e.key === '-' || e.key === 'e' || e.key === 'E' || e.key === '.') {
			e.preventDefault();
		}
	};

	// Enhanced tree animation callback handler
	const handleTreeAnimationComplete = (treeId, animationType) => {
		if (treeId === 'input1-tree') {
			setTree1Complete(true);
			setTimeout(() => {
				// Small delay after tree completes
			}, 300);
		} else if (treeId === 'input2-tree') {
			setTree2Complete(true);
			setTimeout(() => {
				// Small delay after tree completes
			}, 300);
		}
	};

	const getHighestPower = (input) => {
		const num = parseInt(input);
		if (num <= 1) return '1';
		
		// Find prime factors and their powers
		const factors = {};
		let n = num;
		
		// Check for 2 first (even numbers)
		while (n % 2 === 0) {
			factors[2] = (factors[2] || 0) + 1;
			n = n / 2;
		}
		
		// Check for odd prime factors
		for (let i = 3; i <= Math.sqrt(n); i += 2) {
			while (n % i === 0) {
				factors[i] = (factors[i] || 0) + 1;
				n = n / i;
			}
		}
		
		// If n is greater than 2, it's a prime factor
		if (n > 2) {
			factors[n] = (factors[n] || 0) + 1;
		}
		
		// Find the factor with the highest power
		let highestFactor = 0;
		let highestPower = 0;
		
		for (const [factor, power] of Object.entries(factors)) {
			if (power > highestPower) {
				highestPower = power;
				highestFactor = parseInt(factor);
			}
		}
		
		// Return JSX with superscript
		if (highestPower === 1) {
			return <span>{highestFactor}</span>;
		} else {
			return <span>{highestFactor}<sup>{highestPower}</sup></span>;
		}
	}

	// New function to get numeric value of highest power for calculation
	const getHighestPowerValue = (input) => {
		const num = parseInt(input);
		if (num <= 1) return 1;
		
		// Find prime factors and their powers
		const factors = {};
		let n = num;
		
		// Check for 2 first (even numbers)
		while (n % 2 === 0) {
			factors[2] = (factors[2] || 0) + 1;
			n = n / 2;
		}
		
		// Check for odd prime factors
		for (let i = 3; i <= Math.sqrt(n); i += 2) {
			while (n % i === 0) {
				factors[i] = (factors[i] || 0) + 1;
				n = n / i;
			}
		}
		
		// If n is greater than 2, it's a prime factor
		if (n > 2) {
			factors[n] = (factors[n] || 0) + 1;
		}
		
		// Find the factor with the highest power
		let highestFactor = 0;
		let highestPower = 0;
		
		for (const [factor, power] of Object.entries(factors)) {
			if (power > highestPower) {
				highestPower = power;
				highestFactor = parseInt(factor);
			}
		}
		
		// Return numeric value (factor raised to power)
		return Math.pow(highestFactor, highestPower);
	}

	// Effect to trigger next step when both trees have shrunk
	useEffect(() => {		
		if (tree1Complete && tree2Complete && showDynamicFactorTrees) {
			setTimeout(() => {
				setShowDynamicPowers(true);
				setTimeout(() => {
					setHideDynamicExpression(true);
					setTimeout(() => {
						setShowExpressionAnswer(true);
						setTimeout(() => {
							setHideExpressionAnswer(true);
							setCurrentAnswer(getHighestPowerValue(inputValue1) * getHighestPowerValue(inputValue2));
							setTimeout(() => {
								setInputsModified(false);
								setTimeout(() => {
									// Reset all dynamic states for next solve
									setShowDynamicFactorTrees(false);
									setShowDynamicPowers(false);
									setHideDynamicExpression(false);
									setShowExpressionAnswer(false);
									setHideExpressionAnswer(false);
									setTree1Complete(false);
									setTree2Complete(false);
									
									// Reset solve button states
									setHideSolveButton(false);
									setReturnSolveButton(false);
									setShowSolveButton(true);
									
									// Reset input states
									setHideReusableInputs(false);
									setReturnReusableInputs(false);
									
									// Reset inputs to default values
									setInputsModified(false);
									
									// End animation state
									setIsAnimating(false);
								}, 1000); // Wait 1 second after showing final answer
							}, 800);
						}, 800);
					}, 800);
				}, 1000); 
			}, 500);
		}
	}, [tree1Complete, tree2Complete, showDynamicFactorTrees]);

	const handleResetButton = () => {
		setIsResetting(true);
		
		// Reset all states to initial values
		setShowIntroText(false);
		setShowExploreButton(false);
		setShowStep1Numbers(false);
		setShowStep1LCMText(false);
		setShowStep1Flexi(false);
		setHideStep1Elements(false);
		setMoveStep1ElementsToPlace(false);
		setShowStep2Flexi(false);
		setShowStaticFactorTrees(false);
		setHideStep2Elements(false);
		setShowStaticLines(false);
		setShowStaticFirstPrimes(false);
		setShowStaticSecondLines(false);
		setShowStaticSecondPrimes(false);
		setRemoveStaticSecondLines(false);
		setRemoveStaticNonPrimeNodes(false);
		setRemoveStaticFirstLines(false);
		setMoveFirstLayerTwos(false);
		setMoveSecondLayerPrimesUp(false);
		setShowMultiplicationSymbols(false);
		setShowConvergingLines(false);
		setShowSuperscriptExpressions(false);
		setShowBetweenMultiplicationSymbols(false);
		setRemove6and9(false);
		setRemoveMultiplicationSymbols(false);
		setRemoveBetweenMultiplicationSymbols(false);
		setRemoveConvergingLines(false);
		setShowStep3Flexi(false);
		setHideStep3Elements(false);
		setRemoveStep3FirstRow(false);
		setRemoveStep3SecondRow(false);
		setMovePowersUp(false);
		setShowLCMText(false);
		setShowPowersMultiplication(false);
		setRemovePowers(false);
		setShowSimplifiedPowers(false);
		setRemoveSimplifiedPowers(false);
		setShowAnswer(false);
		setMoveLcmTextRight(false);
		setShowStep4Flexi(false);
		setHideStep4Elements(false);
		setMoveStep4LCMTextDown(false);
		setRemove12And18(false);
		setShowInputs(false);
		setShowInputFlexi(false);
		setShowDynamicPowers(false);
		setInputValue1('12');
		setInputValue2('18');
		setInputsModified(false);
		setShowSolveButton(false);
		setHideReusableInputs(false);
		setReturnReusableInputs(false);
		setHideSolveButton(false);
		setReturnSolveButton(false);
		setCurrentAnswer(36);
		setShowDynamicFactorTrees(false);
		setHideDynamicExpression(false);
		setShowExpressionAnswer(false);
		setHideExpressionAnswer(false);
		setTree1Complete(false);
		setTree2Complete(false);
		
		setTimeout(() => {
			setIsResetting(false);
			setShowIntroText(true);
			setShowExploreButton(true);
		}, 1);
	}

	const handleExploreButton = () => {
		setIsAnimating(true);
		setShowIntroText(false);
		setShowExploreButton(false);
		setTimeout(() => {
			setShowStep1Numbers(true);
			// Then show LCM text after numbers grow in
			setTimeout(() => {
				setShowStep1LCMText(true);
				// Then show Flexi text after LCM text fades in
				setTimeout(() => {
					setShowStep1Flexi(true);
					setIsAnimating(false);
				}, 800); // Wait for LCM text to fade in
			}, 800); // Wait for numbers to grow in
		}, 500); // Small delay after Step 1 appears
	}

	const handleTryYourOwnButton = () => {
		setIsAnimating(true);
		setShowIntroText(false);
		setShowExploreButton(false);
		setTimeout(() => {
			setShowInputs(true);
			setTimeout(() => {
				setMoveStep4LCMTextDown(true);
				setTimeout(() => {
					setShowInputFlexi(true);
					setIsAnimating(false);
				}, 1000);
			}, 500);
		}, 500);
	}

	const handleStep1Button = () => {
		setIsAnimating(true);
		setHideStep1Elements(true);
		setMoveStep1ElementsToPlace(true);
		setTimeout(() => {
			setShowStaticFactorTrees(true);
			setTimeout(() => {
				setShowStaticLines(true);
				setTimeout(() => {
					setShowStaticFirstPrimes(true);
					setTimeout(() => {
						setShowStaticSecondLines(true);
						setTimeout(() => {
							setShowStaticSecondPrimes(true);
							setTimeout(() => {
								setShowStep2Flexi(true);
								setIsAnimating(false);
							}, 800);
						}, 300);
					}, 300);
				}, 300);
			}, 300);
		}, 800);
	}

	const handleStep2Button = () => {
		setIsAnimating(true);
		setHideStep2Elements(true);
		// Start removal animations in cascading order
		setTimeout(() => {
			setTimeout(() => {
				setRemoveStaticSecondLines(true);
				setTimeout(() => {
					setRemoveStaticNonPrimeNodes(true);
					setRemove6and9(true);
					setRemoveStaticFirstLines(true);						
					setTimeout(() => {
						setMoveFirstLayerTwos(true);
						setMoveSecondLayerPrimesUp(true);
						setTimeout(() => {
							setShowMultiplicationSymbols(true);
							setTimeout(() => {
								setShowConvergingLines(true);
								setTimeout(() => {
									setShowSuperscriptExpressions(true);
									setShowBetweenMultiplicationSymbols(true);
									setTimeout(() => {
										setShowStep3Flexi(true);
										setIsAnimating(false);
									}, 1000);
								}, 500);
							}, 600);
						}, 500);
					}, 800);
				}, 500);
			}, 300);
		}, 300);
	}

	const handleStep3Button = () => {
		setIsAnimating(true);
		setHideStep3Elements(true);
		setTimeout(() => {
			setRemoveStep3FirstRow(true);
			setRemoveMultiplicationSymbols(true);
			setTimeout(() => {
				setRemoveConvergingLines(true);
				setTimeout(() => {
					setRemoveBetweenMultiplicationSymbols(true);
					setRemoveStep3SecondRow(true);
					setTimeout(() => {
						setMovePowersUp(true);
						setTimeout(() => {
							setShowLCMText(true);
							setShowPowersMultiplication(true);
							setTimeout(() => {
								setRemovePowers(true);
								setTimeout(() => {
									setShowSimplifiedPowers(true);
									setTimeout(() => {
										setRemoveSimplifiedPowers(true);
										setTimeout(() => {
											setShowAnswer(true);
											setMoveLcmTextRight(true);
											setTimeout(() => {
												setShowStep4Flexi(true);
												setIsAnimating(false);
											}, 1200);
										}, 500);
									}, 500);
								}, 500);
							}, 500);
						}, 800);
					}, 300);
				}, 300);
			}, 300);
		}, 800);
	}

	const handleStep4Button = () => {
		setIsAnimating(true);
		setHideStep4Elements(true);
		setTimeout(() => {
			setMoveStep4LCMTextDown(true);
			setTimeout(() => {
				setRemove12And18(true);
				setTimeout(() => {
					setShowInputs(true);
					setTimeout(() => {
						setShowInputFlexi(true);
						setIsAnimating(false);
					}, 800);
				}, 500);
			}, 500);
		}, 500);
	}

	const handleSolveButton = () => {
		setIsAnimating(true);
		setHideSolveButton(true);
		
		// Reset tree states for new solve
		setTree1Complete(false);
		setTree2Complete(false);
		setShowDynamicPowers(false);
		setHideDynamicExpression(false);
		
		setTimeout(() => {
			setHideReusableInputs(true);
			setTimeout(() => {
				setShowDynamicFactorTrees(true);
				// The rest of the animation is handled in the useEffect hook on line 261
				// Note: setIsAnimating(false) will be called in the useEffect when animation completes
			}, 200);
		}, 500);
	}

	return (
		<Container text="LCM Explorer" showResetButton={true} disableResetButton={isAnimating} onReset={handleResetButton}>
				<style>
					{`
					.no-spinner::-webkit-outer-spin-button,
					.no-spinner::-webkit-inner-spin-button {
						-webkit-appearance: none;
						margin: 0;
					}
					
					.no-spinner {
						-moz-appearance: textfield;
					}
				`}
			</style>
			{!isResetting && (
				<>
					{/* Introduction */}
					<FlexiText 
						className={`${showIntroText ? '' : 'fade-out-up-animation'}`}
				>Welcome to the LCM Explorer! Click one of the buttons below to begin the lesson or try solving your own numbers.
				</FlexiText>
				<MultiGlowButton
					buttons={[
						{ text: 'Explore Lesson!', onClick: handleExploreButton, className: `${showExploreButton ? '' : 'fade-out-up-animation'}`},
						{ text: 'Try Your Own!', onClick: handleTryYourOwnButton, className: `${showExploreButton ? '' : 'fade-out-up-animation'}`}
					]}
				/>

				{/* Steps 1 - 3 */}
				<div className="flex flex-row relative w-[100%] h-[420px]">
					{/* Left Side Container */}
					<div className="factor-tree-container" style={{ position: 'absolute', left: '0%', top: '0%', width: '50%', height: '100%' }}>
						<div className={`text-4xl font-bold text-black number-text absolute top-[25%] left-[50%] translate-x-[-50%]
							${remove12And18 ? 'shrink-out-12-and-18' : moveStep1ElementsToPlace ? 'move-step1-numbers-up' : showStep1Numbers ? 'grow-in-animation' : 'no-show-animation'}
						`}>12</div>
						{/* Static Factor Tree for 12 */}
						{showStaticFactorTrees && (
							<>
								{/* Lines from 12 to 2 and 6 */}
								{showStaticLines && (
									<div style={{ position: 'absolute', top: '22%', left: '60%', width: '100%' }}>
										<div className={`factor-tree-line left ${removeStaticFirstLines ? 'static-line-remove left' : 'static-line-appear left'}`} style={{ height: '40px' }}></div>
										<div className={`factor-tree-line right ${removeStaticFirstLines ? 'static-line-remove right' : 'static-line-appear right'}`} style={{ height: '40px' }}></div>
									</div>
								)}
								{/* Lines from 6 to 2 and 3 */}
								{showStaticSecondLines && (
									<div style={{ position: 'absolute', top: '39%', left: '74%', width: '100%' }}>
										<div className={`factor-tree-line left ${removeStaticSecondLines ? 'static-line-remove left' : 'static-line-appear left'}`} style={{ height: '40px' }}></div>
										<div className={`factor-tree-line right ${removeStaticSecondLines ? 'static-line-remove right' : 'static-line-appear right'}`} style={{ height: '40px' }}></div>
									</div>
								)}
								{/* Nodes */}
								{showStaticFirstPrimes && (
									<>
										<div className={`factor-tree-node prime static-prime-appear ${removeStep3FirstRow ? 'remove-step3-first-row-2' : moveFirstLayerTwos ? 'move-first-layer-twos-left' : ''}`} style={{ left: '38%', top: '29%' }}>2</div>
										{!removeStaticNonPrimeNodes && (
											<div className={`factor-tree-node non-prime static-prime-appear ${remove6and9 ? 'remove-6-and-9' : showStaticSecondLines ? 'opacity-50' : ''}`} style={{ left: '65%', top: '29%' }}>6</div>
										)}
									</>
								)}
									<>
										<div className={`factor-tree-node prime ${removeStep3FirstRow ? 'remove-step3-first-row' : showStaticSecondPrimes ? moveSecondLayerPrimesUp ? 'move-second-layer-primes-up' : 'static-prime-appear' : 'no-show-animation'}`} style={{ left: '52%', top: '46%' }}>2</div>
										<div className={`factor-tree-node prime ${removeStep3FirstRow ? 'remove-step3-first-row' : showStaticSecondPrimes ? moveSecondLayerPrimesUp ? 'move-second-layer-primes-up' : 'static-prime-appear' : 'no-show-animation'}`} style={{ left: '79%', top: '46%' }}>3</div>
									</>
							</>
						)}
						{/* Multiplication Symbols for 12 */}
							<>
								<div className={`multiplication-symbol ${removeMultiplicationSymbols ? 'shrink-out-animation' : showMultiplicationSymbols ? 'grow-in-animation' : 'no-show-animation'}`} style={{ left: '37.5%', top: '24%' }}>×</div>
								<div className={`multiplication-symbol ${removeMultiplicationSymbols ? 'shrink-out-animation' : showMultiplicationSymbols ? 'grow-in-animation' : 'no-show-animation'}`} style={{ left: '64.5%', top: '24%' }}>×</div>
							</>
						{/* Converging Lines for 12 */}
							<div style={{ position: 'absolute', top: '33%', left: '37%', width: '100%' }}>
								<div className={`converging-line left ${removeConvergingLines ? 'converging-line-remove left' : showConvergingLines ? 'converging-line-appear left' : 'no-show-animation'}`} style={{ left: '0px', height: '40px' }}></div>
								<div className={`converging-line right ${removeConvergingLines ? 'converging-line-remove right' : showConvergingLines ? 'converging-line-appear right' : 'no-show-animation'}`} style={{ left: '40px', height: '40px' }}></div>
							</div>
						{/* Superscript Expressions for 12 */}
						{showSuperscriptExpressions && (
							<>
								<div className={`superscript-expression ${removePowers ? 'remove-power-2' : movePowersUp ? 'power-2-move-up' : showSuperscriptExpressions ? 'superscript-expression-appear' : ''}`} style={{ left: '39%', top: '41%' }}>2²</div>
								<div className={`between-multiplication-symbol ${removeBetweenMultiplicationSymbols ? 'shrink-out-animation' : showBetweenMultiplicationSymbols ? 'grow-in-animation' : 'no-show-animation'}`} style={{ left: '52%', top: '41%' }}>×</div>
								<div className={`superscript-expression ${removeStep3SecondRow ? 'shrink-out-animation' : showSuperscriptExpressions ? 'superscript-expression-appear' : ''}`} style={{ left: '67%', top: '41%' }}>3</div>
							</>
						)}
						{/* Step 4 - Input Section */}
						<input
							type="number"
							value={inputValue1}
							onChange={e => handleInputChange(e.target.value, setInputValue1, '12')}
							onBlur={() => handleInputBlur(setInputValue1, '12')}
							onKeyDown={handleKeyDown}
							max="25"
							className={`absolute ${returnReusableInputs ? 'grow-in-animation' : hideReusableInputs ? 'shrink-out-animation' : showInputs ? 'grow-in-animation' : 'no-show-animation'} input-section text-center bg-transparent border-none outline-none text-4xl font-bold text-black no-spinner`}
							style={{
								WebkitAppearance: 'none',
								MozAppearance: 'textfield',
								width: '65px',
								height: '65px',
								top: '33px',
								left: '45%',
								transform: 'translateX(-50%)',
								textAlign: 'center',
								lineHeight: '65px'
							}}
						/>
						{showDynamicFactorTrees && (
							<DynamicFactorTree 
								number={inputValue1} 
								show={showDynamicFactorTrees}
								position={{ left: '50%', top: '50%' }}
								treeId="input1-tree"
								onAnimationComplete={handleTreeAnimationComplete}
							/>
						)}
					</div>

					{/* Right Side Container */}
					<div className="factor-tree-container" style={{ position: 'absolute', right: '0%', top: '0%', width: '50%', height: '100%' }}>
						<div className={`text-4xl font-bold text-black number-text absolute top-[25%] right-[50%] translate-x-[50%]
							${remove12And18 ? 'shrink-out-12-and-18' : moveStep1ElementsToPlace ? 'move-step1-numbers-up' : showStep1Numbers ? 'grow-in-animation' : 'no-show-animation'}
						`}>18</div>
						{/* Static Factor Tree for 18 */}
						{showStaticFactorTrees && (
							<>
								{/* Lines from 18 to 2 and 9 */}
								{showStaticLines && (
									<div style={{ position: 'absolute', left: '41%', top: '22%', width: '100%' }}>
										<div className={`factor-tree-line left ${removeStaticFirstLines ? 'static-line-remove left' : 'static-line-appear left'}`} style={{ height: '40px' }}></div>
										<div className={`factor-tree-line right ${removeStaticFirstLines ? 'static-line-remove right' : 'static-line-appear right'}`} style={{ height: '40px' }}></div>
									</div>
								)}
								
								{/* Lines from 9 to 3 and 3 */}
								{showStaticSecondLines && (
									<div style={{ position: 'absolute', left: '54%', top: '39%', width: '100%' }}>
										<div className={`factor-tree-line left ${removeStaticSecondLines ? 'static-line-remove left' : 'static-line-appear left'}`} style={{ height: '40px' }}></div>
										<div className={`factor-tree-line right ${removeStaticSecondLines ? 'static-line-remove right' : 'static-line-appear right'}`} style={{ height: '40px' }}></div>
									</div>
								)}
								
								{/* Nodes */}
								{showStaticFirstPrimes && (
									<>
										<div className={`factor-tree-node prime static-prime-appear ${removeStep3FirstRow ? 'remove-step3-first-row-2' : moveFirstLayerTwos ? 'move-first-layer-twos-right' : ''}`} style={{ left: '20%', top: '29%' }}>2</div>
										{!removeStaticNonPrimeNodes && (
											<div className={`factor-tree-node non-prime static-prime-appear ${showStaticSecondLines ? 'opacity-50' : ''}`} style={{ left: '45%', top: '29%' }}>9</div>
										)}
									</>
								)}
									<>
										<div className={`factor-tree-node prime ${removeStep3FirstRow ? 'remove-step3-first-row' : showStaticSecondPrimes ? moveSecondLayerPrimesUp ? 'move-second-layer-primes-up' : 'static-prime-appear' : 'no-show-animation'}`} style={{ left: '32%', top: '46%' }}>3</div>
										<div className={`factor-tree-node prime ${removeStep3FirstRow ? 'remove-step3-first-row' : showStaticSecondPrimes ? moveSecondLayerPrimesUp ? 'move-second-layer-primes-up' : 'static-prime-appear' : 'no-show-animation'}`} style={{ left: '59%', top: '46%' }}>3</div>
									</>
							</>
						)}
						{/* Multiplication Symbols for 18 */}
							<>
								<div className={`multiplication-symbol ${removeMultiplicationSymbols ? 'shrink-out-animation' : showMultiplicationSymbols ? 'grow-in-animation' : 'no-show-animation'}`} style={{ left: '19%', top: '24%' }}>×</div>
								<div className={`multiplication-symbol ${removeMultiplicationSymbols ? 'shrink-out-animation' : showMultiplicationSymbols ? 'grow-in-animation' : 'no-show-animation'}`} style={{ left: '45%', top: '24%' }}>×</div>
							</>
						{/* Converging Lines for 18 */}
							<div style={{ position: 'absolute', top: '33%', left: '44%', width: '100%' }}>
								<div className={`converging-line left ${removeConvergingLines ? 'converging-line-remove left' : showConvergingLines ? 'converging-line-appear left' : 'no-show-animation'}`} style={{ left: '0px', height: '40px' }}></div>
								<div className={`converging-line right ${removeConvergingLines ? 'converging-line-remove right' : showConvergingLines ? 'converging-line-appear right' : 'no-show-animation'}`} style={{ left: '40px', height: '40px' }}></div>
							</div>
						{/* Superscript Expressions for 18 */}
						{showSuperscriptExpressions && (
							<>
								<div className={`superscript-expression ${removeStep3SecondRow ? 'shrink-out-animation' : showSuperscriptExpressions ? 'superscript-expression-appear' : ''}`} style={{ left: '18%', top: '41%' }}>2</div>
								<div className={`between-multiplication-symbol ${removeBetweenMultiplicationSymbols ? 'shrink-out-animation' : showBetweenMultiplicationSymbols ? 'grow-in-animation' : 'no-show-animation'}`} style={{ left: '31.5%', top: '41%' }}>×</div>
								<div className={`superscript-expression ${removePowers ? 'remove-power-3' : movePowersUp ? 'power-3-move-up' : showSuperscriptExpressions ? 'superscript-expression-appear' : ''}`} style={{ left: '47%', top: '41%' }}>3²</div>
							</>
						)}
						{/* Step 4 - Input Section */}
						<input
							type="number"
							value={inputValue2}
							onChange={e => handleInputChange(e.target.value, setInputValue2, '18')}
							onBlur={() => handleInputBlur(setInputValue2, '18')}
							onKeyDown={handleKeyDown}
							max="25"
							className={`absolute ${returnReusableInputs ? 'grow-in-animation' : hideReusableInputs ? 'shrink-out-animation' : showInputs ? 'grow-in-animation' : 'no-show-animation'} input-section text-center bg-transparent border-none outline-none text-4xl font-bold text-black no-spinner`}
							style={{
								WebkitAppearance: 'none',
								MozAppearance: 'textfield',
								width: '65px',
								height: '65px',
								top: '33px',
								left: '26%',
								transform: 'translateX(-50%)',
								textAlign: 'center',
								lineHeight: '65px'
							}}
						/>
						{showDynamicFactorTrees && (
							<DynamicFactorTree 
								number={inputValue2} 
								show={showDynamicFactorTrees}
								position={{ left: '50%', top: '50%' }}
								treeId="input2-tree"
								onAnimationComplete={handleTreeAnimationComplete}
							/>
						)}
					</div>
					<div className={`text-3xl font-bold text-gray-700 number-text absolute top-[35%] left-[50%] translate-x-[-50%] 
						${showStep1LCMText ? 'fade-in-up-centered-animation' : 'no-show-animation'}
						${moveStep1ElementsToPlace ? 'fade-out-down-centered-animation' : ''}
					`}>LCM = ?</div>
					<FlexiText 
						className={`${hideStep1Elements ? 'fade-out-up-animation' : showStep1Flexi ? 'fade-in-up-animation' : 'no-show-animation'}`}						
						flexiImage={FlexiPoint}
						>To find the Least Common Multiple of two numbers, we can use prime factorization.
					</FlexiText>
					<GlowButton
						onClick={handleStep1Button}
						className={`${showStep1Flexi ? 'grow-in-animation' : 'no-show-animation'}`}
					>Continue
					</GlowButton>

					<FlexiText
						className={`${hideStep2Elements ? 'fade-out-up-animation' : showStep2Flexi ? 'fade-in-up-animation' : 'no-show-animation'}`}
						flexiImage={FlexiTelescope}
					>Break down each number into its prime factors, then find the highest power of each.
					</FlexiText>
					<GlowButton
						onClick={handleStep2Button}
						className={`${showStep2Flexi ? 'grow-in-animation' : 'no-show-animation'}`}
					>Continue
					</GlowButton>
					
					<FlexiText
						className={`${hideStep3Elements ? 'fade-out-up-animation' : showStep3Flexi ? 'fade-in-up-animation' : 'no-show-animation'}`}
						flexiImage={FlexiTeacher}
					>After we find the highest power of each prime factor, we can multiply them together to get the LCM.
					</FlexiText>
					<GlowButton
						onClick={handleStep3Button}
						className={`${showStep3Flexi ? 'grow-in-animation' : 'no-show-animation'}`}
					>Continue
					</GlowButton>

					{/* Step 3.5 - LCM Text */}
					<div className={`text-3xl font-bold text-gray-700 number-text absolute top-[40%] left-[30%]
						${moveStep4LCMTextDown ? 'move-lcm-text-down' : moveLcmTextRight ? 'move-lcm-text-right' : showLCMText ? 'fade-in-in-place-animation' : 'no-show-animation'}
					`}>LCM = </div>
					<div className={`text-3xl font-bold text-[#5750E3] absolute top-[40%] left-[53%] ${removeSimplifiedPowers ? 'shrink-out-animation' : showSimplifiedPowers ? 'grow-in-animation' : 'no-show-animation'}
					`}>4</div>
					<div className={`text-3xl font-bold text-[#5750E3] number-text absolute top-[40%] left-[59.5%]
						${removeSimplifiedPowers ? 'shrink-out-animation' : showPowersMultiplication ? 'fade-in-in-place-animation' : 'no-show-animation'}
					`}>×</div>
					<div className={`text-3xl font-bold text-[#5750E3] absolute top-[40%] left-[66.5%] ${removeSimplifiedPowers ? 'shrink-out-animation' : showSimplifiedPowers ? 'grow-in-animation' : 'no-show-animation'}
					`}>9</div>
					<div className={`text-3xl font-bold text-[#5750E3] absolute top-[40%] left-[58%] ${moveStep4LCMTextDown ? 'move-36-text-down' : showAnswer ? 'grow-in-animation' : 'no-show-animation'}
					`}>{inputsModified ? '?' : currentAnswer}</div>
					<FlexiText
						className={`${hideStep4Elements ? 'fade-out-up-animation' : showStep4Flexi ? 'fade-in-up-animation' : 'no-show-animation'}`}
						flexiImage={FlexiStars}
					>Now you know how to find the LCM of two numbers!
					</FlexiText>
					<GlowButton
						onClick={handleStep4Button}
						className={`${showStep4Flexi ? 'grow-in-animation' : 'no-show-animation'}`}
					>Try Your Own Numbers!
					</GlowButton>

					{/* Input Step */}
					<GlowButton
						onClick={handleSolveButton}
						autoShrinkOnClick={false}
						className={`absolute ${returnSolveButton ? 'grow-in-animation' : hideSolveButton ? 'shrink-out-animation' : showSolveButton ? 'grow-in-animation' : 'no-show-animation'}`}
						style={{ zIndex: 20 }}
					>Solve
					</GlowButton>
					<FlexiText
						className={`${showInputFlexi ? 'fade-in-up-animation' : 'no-show-animation'}`}
						flexiImage={FlexiThumbsUp}
					>Enter your own numbers to find their LCM!
					</FlexiText>

					{/* Dynamic Solving After Dynamic Factor Trees Step */}
					<div className={`text-3xl font-bold text-[#5750E3] number-text absolute top-[35%] left-[38%] ${hideDynamicExpression ? 'shrink-out-animation' : showDynamicPowers ? 'grow-in-animation' : 'no-show-animation'}`}
					>{getHighestPower(inputValue1)}
					</div>
					<div className={`text-3xl font-bold text-[#5750E3] number-text absolute top-[35%] left-[47%] ${hideDynamicExpression ? 'shrink-out-animation' : showDynamicPowers ? 'grow-in-animation' : 'no-show-animation'}`}
					>×
					</div>
					<div className={`text-3xl font-bold text-[#5750E3] number-text absolute top-[35%] left-[55%] ${hideDynamicExpression ? 'shrink-out-animation' : showDynamicPowers ? 'grow-in-animation' : 'no-show-animation'}`}
					>{getHighestPower(inputValue2)}
					</div>

					<div className={`text-3xl font-bold text-[#5750E3] number-text absolute top-[35%] left-[50%] ${hideExpressionAnswer ? 'move-dynamic-answer-down' : showExpressionAnswer ? 'grow-in-animation' : 'no-show-animation'}`}
					>{`${getHighestPowerValue(inputValue1) * getHighestPowerValue(inputValue2)}`}					
					</div>
				</div>
			</>)}
		</Container>
	);
};

export default LCM;