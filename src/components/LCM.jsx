import React, { useState } from 'react';
import FlexiWave from '../assets/All Flexi Poses/PNG/Flexi_Wave.png';
import FlexiTeacher from '../assets/All Flexi Poses/PNG/Flexi_Teacher.png';
import FlexiTelescope from '../assets/All Flexi Poses/PNG/Flexi_Telescope.png';
import FlexiPoint from '../assets/All Flexi Poses/PNG/Flexi_Point.png';
import FlexiThumbsUp from '../assets/All Flexi Poses/PNG/Flexi_ThumbsUp.png';

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
		// Add more state resets here as we add them
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
		
		// Step 2: Trigger input jump-out animation
		setInputsJumpOut(true);
		setTimeout(() => {
			setPurpleTextJumpIn(true);
		}, 800);
		// Step 3: Calculate LCM using prime factorization
		const calculateLCM = (a, b) => {
			// Get prime factors of both numbers
			const getPrimeFactors = (num) => {
				const factors = {};
				let divisor = 2;
				
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
		
		// Step 4: Calculate the result
		const num1 = parseInt(inputValue1);
		const num2 = parseInt(inputValue2);
		const result = calculateLCM(num1, num2);
		
		// Step 5: Update the result display (you can add more steps here)
		
		// TODO: Add more steps for animations, UI updates, etc.
		// Step 6: Show result animation
		// Step 7: Update UI elements
		// Step 8: Trigger any additional animations
	};

	return (
		<div className="w-full max-w-[464px] mx-auto mt-5 px-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)] bg-white rounded-lg select-none">
			<style>
				{`
					@property --r {
						syntax: '<angle>';
						inherits: false;
						initial-value: 0deg;
					}

					@keyframes fadeIn {
						from {
							opacity: 0;
							transform: translateY(10px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					@keyframes fadeOut {
						from {
							opacity: 1;
						}
						to {
							opacity: 0;
						}
					}
					.text-animation {
						animation: fadeIn 0.5s ease-out forwards;
					}
					.text-fade-out {
						animation: fadeIn 0.5s ease-out reverse forwards;
					}
					.shrink-animation {
						animation: shrinkButton 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}
					@keyframes shrinkButton {
						from {
							transform: scale(1);
							opacity: 1;
						}
						to {
							transform: scale(0);
							opacity: 0;
						}
					}
					@keyframes growButton {
						from {
							transform: scale(0);
							opacity: 0;
						}
						to {
							transform: scale(1);
							opacity: 1;
						}
					}
					.continue-animation {
						animation: growButton 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}
					.text-grow-animation {
						animation: growButton 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}
					.fade-in {
						opacity: 1;
						transition: opacity 0.5s;
					}
					.fade-out {
						opacity: 0;
						transition: opacity 0.5s;
					}
					.zoom-in {
						transform: scale(1.25);
						transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
						z-index: 10;
					}
					.zoom-in-visual {
						transform: scale(2) translate(-10px, 30px);
						transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
						z-index: 1;
					}
					.zoom-out-visual {
						transform: scale(1) translate(0, -110px);
						transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
						z-index: 1;
					}
					.visual-clip {
						overflow: hidden;
						position: relative;
					}
					.equation-faded {
						opacity: 0.25 !important;
						transition: opacity 0.4s !important;
					}
					.equation-opaque {
						opacity: 1 !important;
						transition: opacity 0.4s !important;
					}
					.slide-right {
						transform: translateX(100%);
						transition: transform 0.5s ease-out;
					}
					@keyframes fadeIn {
						from {
							opacity: 0;
							transform: translateX(-10px);
						}
						to {
							opacity: 1;
							transform: translateX(0);
						}
					}
					.shift-right {
						transform: translateX(-63px);
						transition: transform 0.5s ease-out;
					}
					@keyframes slideEqualSign {
						from {
							transform: translateX(0);
						}
						to {
							transform: translateX(25px);
						}
					}
					@keyframes fadeInDown {
						from {
							opacity: 0;
							transform: translateY(-10px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					.fade-in-down {
						animation: fadeInDown 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
					}
					.lcm-fade-out-down {
						animation: lcmFadeOutDown 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}
					.lcm-fade-in {
						animation: fadeIn 0.5s ease-out 0.4s forwards;
					}
					@keyframes lcmFadeOutDown {
						from {
							opacity: 1;
							transform: translateY(0);
						}
						to {
							opacity: 0;
							transform: translateY(20px);
						}
					}
					.number-move-left {
						animation: moveLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}
					.number-move-right {
						animation: moveRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}
					@keyframes moveLeft {
						from {
							transform: translate(0, 0);
						}
						to {
							transform: translate(-70px, -60px);
						}
					}
					@keyframes moveRight {
						from {
							transform: translate(0, 0);
						}
						to {
							transform: translate(70px, -60px);
						}
					}

					.line-appear {
						animation: lineAppear 0.4s ease-out forwards;
					}

					.line-move-left {
						animation: lineMoveLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-move-right {
						animation: lineMoveRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-move-left-right {
						animation: lineMoveLeftRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-move-right-right {
						animation: lineMoveRightRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					@keyframes lineMoveLeft {
						0% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineMoveRight {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineMoveLeftRight {
						0% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineMoveRightRight {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineAppear {
						from {
							height: 0;
							opacity: 0;
						}
						to {
							height: 38px;
							opacity: 1;
						}
					}

					/* Glow Effect Styles */
					.glow-button { 
						position: absolute;
						bottom: 1rem;
						right: 1rem;
						border-radius: 8px;
						cursor: pointer;
						display: flex;
						align-items: center;
						justify-content: center;
						z-index: 3;
						transition: all .3s ease;
						padding: 7px;
					}

					.glow-button::before {
						content: "";
						display: block;
						position: absolute;
						background: #fff;
						inset: 2px;
						border-radius: 4px;
						z-index: -2;
					}

					.simple-glow { 
						background: conic-gradient(
							from var(--r),
							transparent 0%,
							rgb(0, 255, 132) 2%,
							rgb(0, 214, 111) 8%,
							rgb(0, 174, 90) 12%,
							rgb(0, 133, 69) 14%,
							transparent 15%
						);
						animation: rotating 3s linear infinite;
						transition: animation 0.3s ease;
					}

					.simple-glow.stopped {
						animation: none;
						background: none;
					}

					@keyframes rotating {
						0% {
							--r: 0deg;
						}
						100% {
							--r: 360deg;
						}
					}

					.explore-button {
						background-color: #008545;
						color: white;
						border: none;
						border-radius: 4px;
						padding: 0.375rem 0.75rem;
						font-size: 0.875rem;
						font-weight: 600;
						cursor: pointer;
						transition: background-color 0.2s;
					}

					.explore-button:hover {
						background-color: #00783E;
					}

					.prime-move-left-1 {
						animation: primeMoveLeft1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-left-2 {
						animation: primeMoveLeft2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-right-1 {
						animation: primeMoveRight1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-right-2 {
						animation: primeMoveRight2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-6-1 {
						animation: primeUnder6_1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-6-2 {
						animation: primeUnder6_2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-9-1 {
						animation: primeUnder9_1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-9-2 {
						animation: primeUnder9_2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes primeMoveLeft1 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeMoveLeft2 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeMoveRight1 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeMoveRight2 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder6_1 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder6_2 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder9_1 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder9_2 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					.line-under-6-left {
						animation: lineUnder6Left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-6-right {
						animation: lineUnder6Right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-8-left {
						animation: lineUnder8Left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-8-right {
						animation: lineUnder8Right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					@keyframes lineUnder6Left {
						0% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder6Right {
						0% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder8Left {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder8Right {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					.line-under-9-left {
						animation: lineUnder9Left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-9-right {
						animation: lineUnder9Right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					@keyframes lineUnder9Left {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder9Right {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					.fade-non-primes {
						animation: fadeNonPrimes 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes fadeNonPrimes {
						0% {
							opacity: 1;
						}
						100% {
							opacity: 0.5;
						}
					}

					.prime-move-left-2-no-opacity {
						animation: primeMoveLeft2NoOpacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-right-2-no-opacity {
						animation: primeMoveRight2NoOpacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes primeMoveLeft2NoOpacity {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						99% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0.5;
						}
					}

					@keyframes primeMoveRight2NoOpacity {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						99% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0.5;
						}
					}

					.lines-shrink {
						animation: linesShrinkAnimation 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-appear {
						animation: linesShrinkAppear 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-left {
						animation: linesShrinkMoveLeft 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-left-right {
						animation: linesShrinkMoveLeftRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-right {
						animation: linesShrinkMoveRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-right-right {
						animation: linesShrinkMoveRightRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-under-6-left {
						animation: linesShrinkUnder6Left 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-under-9-right {
						animation: linesShrinkUnder9Right 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.non-primes-fade-out {
						animation: nonPrimesFadeOut 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.non-primes-fade-out-left {
						animation: nonPrimesFadeOutLeft 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.non-primes-fade-out-right {
						animation: nonPrimesFadeOutRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.first-primes-move-down {
						animation: firstPrimesMoveDown 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.first-primes-move-down-left {
						animation: firstPrimesMoveDownLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.first-primes-move-down-right {
						animation: firstPrimesMoveDownRight 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.second-primes-move-up-left {
						animation: secondPrimesMoveUpLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.second-primes-move-up-right {
						animation: secondPrimesMoveUpRight 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.primes-group-left {
						animation: primesGroupLeft 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.primes-group-right {
						animation: primesGroupRight 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes firstPrimesMoveDownLeft {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(-90px, -48px) translateX(-150%);
						}
					}

					@keyframes firstPrimesMoveDownRight {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(50px, -48px) translateX(-150%);
						}
					}

					@keyframes secondPrimesMoveUpLeft {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(-520%, -400%);
						}
					}

					@keyframes secondPrimesMoveUpRight {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(400%, -400%);
						}
					}

					@keyframes nonPrimesFadeOut {
						0% {
							opacity: 0.5;
						}
						100% {
							opacity: 0;
						}
					}

					@keyframes nonPrimesFadeOutLeft {
						0% {
							opacity: 0.5;
							transform: translate(-70px, -60px) translateX(-50%);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%);
						}
					}

					@keyframes nonPrimesFadeOutRight {
						0% {
							opacity: 0.5;
							transform: translate(70px, -60px) translateX(-50%);
						}
						100% {
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%);
						}
					}

					@keyframes linesShrinkAnimation {
						0% {
							height: 38px;
							opacity: 1;
						}
						100% {
							height: 0;
							opacity: 0;
						}
					}

					@keyframes linesShrinkAppear {
						0% {
							height: 38px;
							opacity: 1;
						}
						100% {
							height: 0;
							opacity: 0;
						}
					}

					@keyframes linesShrinkMoveLeft {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkMoveLeftRight {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					@keyframes linesShrinkMoveRight {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkMoveRightRight {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					@keyframes linesShrinkUnder6Left {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkUnder6Right {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					@keyframes linesShrinkUnder9Left {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkUnder9Right {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					.main-numbers-move-down {
						animation: mainNumbersMoveDown 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.main-numbers-move-down-left {
						animation: mainNumbersMoveDownLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.main-numbers-move-down-right {
						animation: mainNumbersMoveDownRight 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					@keyframes mainNumbersMoveDown {
						from {
							transform: translate(0, 0);
						}
						to {
							transform: translate(0, 20px);
						}
					}

					@keyframes mainNumbersMoveDownLeft {
						from {
							transform: translate(-70px, -60px);
						}
						to {
							transform: translate(-70px, -30px);
						}
					}

					@keyframes mainNumbersMoveDownRight {
						from {
							transform: translate(70px, -60px);
						}
						to {
							transform: translate(70px, -30px);
						}
					}

					.multiplication-symbols-fade-in {
						animation: multiplicationSymbolsFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.multiplication-symbols-fade-out {
						animation: multiplicationSymbolsFadeOut 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes multiplicationSymbolsFadeIn {
						from {
							opacity: 0;
						}
						to {
							opacity: 1;
						}
					}

					@keyframes multiplicationSymbolsFadeOut {
						from {
							opacity: 1;
						}
						to {
							opacity: 0;
						}
					}

					.separating-lines-fade-in {
						animation: separatingLinesFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out {
						animation: separatingLinesFadeOut 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-in-left {
						animation: separatingLinesFadeInLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out-left {
						animation: separatingLinesFadeOutLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-in-right {
						animation: separatingLinesFadeInRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out-right {
						animation: separatingLinesFadeOutRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-in-right-side-left {
						animation: separatingLinesFadeInRightSideLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out-right-side-left {
						animation: separatingLinesFadeOutRightSideLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-in-right-side-right {
						animation: separatingLinesFadeInRightSideRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out-right-side-right {
						animation: separatingLinesFadeOutRightSideRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.power-expressions-fade-in {
						animation: powerExpressionsFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.power-expressions-fade-out {
						animation: powerExpressionsFadeOut 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes separatingLinesFadeIn {
						from {
							height: 0;
							opacity: 0;
						}
						to {
							height: 20px;
							opacity: 1;
						}
					}

					@keyframes separatingLinesFadeInLeft {
						from {
							height: 0;
							opacity: 0;
							transform: translateX(-25px) skewX(30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(-11px, 10px) skewX(30deg);
						}
					}

					@keyframes separatingLinesFadeInRight {
						from {
							height: 0;
							opacity: 0;
							transform: translateX(-45px) skewX(-30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(-58px, 10px) skewX(-30deg);
						}
					}

					@keyframes separatingLinesFadeInRightSideLeft {
						from {
							height: 0;
							opacity: 0;
							transform: translate(-11px, 10px) skewX(30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(-11px, 10px) skewX(30deg);
						}
					}

					@keyframes separatingLinesFadeInRightSideRight {
						from {
							height: 0;
							opacity: 0;
							transform: translate(44px, 10px) skewX(-30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(44px, 10px) skewX(-30deg);
						}
					}

					@keyframes powerExpressionsFadeIn {
						from {
							opacity: 0;
							transform: translateY(10px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}

					@keyframes powerExpressionsFadeOut {
						from {
							opacity: 1;
							transform: translateY(0);
						}
						to {
							opacity: 0;
							transform: translateY(-10px);
						}
					}

					/* Prime factor fade out animations */
					.prime-fade-out-left-1 {
						animation: primeFadeOutLeft1 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-left-2 {
						animation: primeFadeOutLeft2 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-left-3 {
						animation: primeFadeOutLeft3 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-right-1 {
						animation: primeFadeOutRight1 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-right-2 {
						animation: primeFadeOutRight2 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-right-3 {
						animation: primeFadeOutRight3 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes primeFadeOutLeft1 {
						0% {
							opacity: 1;
							transform: translate(-90px, -48px) translateX(-150%);
						}
						100% {
							opacity: 0;
							transform: translate(-90px, -48px) translateX(-150%);
						}
					}

					@keyframes primeFadeOutLeft2 {
						0% {
							opacity: 1;
							transform: translate(-520%, -400%);
						}
						100% {
							opacity: 0;
							transform: translate(-520%, -400%);
						}
					}

					@keyframes primeFadeOutLeft3 {
						0% {
							opacity: 1;
							transform: translate(-520%, -400%);
						}
						100% {
							opacity: 0;
							transform: translate(-520%, -400%);
						}
					}

					@keyframes primeFadeOutRight1 {
						0% {
							opacity: 1;
							transform: translate(50px, -48px) translateX(-150%);
						}
						100% {
							opacity: 0;
							transform: translate(50px, -48px) translateX(-150%);
						}
					}

					@keyframes primeFadeOutRight2 {
						0% {
							opacity: 1;
							transform: translate(400%, -400%);
						}
						100% {
							opacity: 0;
							transform: translate(400%, -400%);
						}
					}

					@keyframes primeFadeOutRight3 {
						0% {
							opacity: 1;
							transform: translate(400%, -400%);
						}
						100% {
							opacity: 0;
							transform: translate(400%, -400%);
						}
					}

					@keyframes separatingLinesFadeOut {
						from {
							height: 20px;
							opacity: 1;
						}
						to {
							height: 0;
							opacity: 0;
						}
					}

					@keyframes separatingLinesFadeOutLeft {
						from {
							height: 38px;
							opacity: 1;
							transform: translate(-11px, 10px) skewX(30deg);
						}
						to {
							height: 0;
							opacity: 0;
							transform: translate(-11px, 10px) skewX(30deg);
						}
					}

					@keyframes separatingLinesFadeOutRight {
						from {
							height: 38px;
							opacity: 1;
							transform: translate(-58px, 10px) skewX(-30deg);
						}
						to {
							height: 0;
							opacity: 0;
							transform: translate(-58px, 10px) skewX(-30deg);
						}
					}

					@keyframes separatingLinesFadeOutRightSideLeft {
						from {
							height: 38px;
							opacity: 1;
							transform: translate(-11px, 10px) skewX(30deg);
						}
						to {
							height: 0;
							opacity: 0;
							transform: translate(-11px, 10px) skewX(30deg);
						}
					}

					@keyframes separatingLinesFadeOutRightSideRight {
						from {
							height: 38px;
							opacity: 1;
							transform: translate(44px, 10px) skewX(-30deg);
						}
						to {
							height: 0;
							opacity: 0;
							transform: translate(44px, 10px) skewX(-30deg);
						}
					}

					.exponent-move-up-right {
						animation: exponentMoveUpRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.exponent-move-up-left {
						animation: exponentMoveUpLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.final-multiplication-fade-in {
						animation: finalMultiplicationFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.lcm-text-fade-in {
						animation: lcmTextFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes powerExpressionsFadeOut {
						from {
							opacity: 1;
							transform: translateY(0);
						}
						to {
							opacity: 0;
							transform: translateY(-10px);
						}
					}

					@keyframes exponentMoveUpRight {
						from {
							transform: translate(0px, 0px);
						}
						to {
							transform: translate(140px, -60px);
						}
					}

					@keyframes exponentMoveUpLeft {
						from {
							transform: translate(0px, 0px);
						}
						to {
							transform: translate(-70px, -60px);
						}
					}

					@keyframes finalMultiplicationFadeIn {
						from {
							opacity: 0;
							transform: translate(-7px,-60px);
						}
						to {
							opacity: 1;
							transform: translate(-7px, -60px);
						}
					}

					@keyframes lcmTextFadeIn {
						from {
							opacity: 0;
							transform: translate(-123px, -110px);
						}
						to {
							opacity: 1;
							transform: translate(-123px, -110px);
						}
					}

					.exponents-jump-out-left {
						animation: exponentsJumpOutLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.exponents-jump-out-right {
						animation: exponentsJumpOutRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					@keyframes exponentsJumpOutLeft {
						0% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(140px, -60px) scale(0);
						}
					}

					@keyframes exponentsJumpOutRight {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
					}

					@keyframes exponentsJumpOutRight {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
					}

					.replacement-numbers-jump-in-left {
						animation: replacementNumbersJumpInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.replacement-numbers-jump-in-right {
						animation: replacementNumbersJumpInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					@keyframes replacementNumbersJumpInLeft {
						0% {
							opacity: 0;
							transform: translate(140px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1);
						}
					}

					@keyframes replacementNumbersJumpInRight {
						0% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
					}

					@keyframes replacementNumbersJumpInRight {
						0% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
					}

					.replacement-numbers-fade-out-left {
						animation: replacementNumbersFadeOutLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.replacement-numbers-fade-out-right {
						animation: replacementNumbersFadeOutRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes replacementNumbersFadeOutLeft {
						0% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1);
						}
						100% {
							opacity: 0;
							transform: translate(165px, -60px) scale(1);
						}
					}

					@keyframes replacementNumbersFadeOutRight {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						100% {
							opacity: 0;
							transform: translate(-95px, -60px) scale(1);
						}
					}

					.final-multiplication-fade-out {
						animation: finalMultiplicationFadeOut 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes finalMultiplicationFadeOut {
						0% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1);
						}
						100% {
							opacity: 0;
							transform: translate(-7px, -60px) scale(0);
						}
					}

					.final-result-jump-in {
						animation: finalResultJumpIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.lcm-text-move-right {
						animation: lcmTextMoveRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes finalResultJumpIn {
						0% {
							opacity: 0;
							transform: translate(-7px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1);
						}
					}

					@keyframes lcmTextMoveRight {
						0% {
							transform: translate(-123px, -110px);
						}
						100% {
							transform: translate(-88px, -110px);
						}
					}

					/* Final elements jump out animations */
					.final-elements-jump-out {
						animation: finalElementsJumpOut 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.final-elements-jump-out-left {
						animation: finalElementsJumpOutLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.final-elements-jump-out-right {
						animation: finalElementsJumpOutRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.final-elements-jump-out-center {
						animation: finalElementsJumpOutCenter 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					@keyframes finalElementsJumpOut {
						0% {
							opacity: 1;
							transform: scale(1);
						}
						50% {
							opacity: 1;
							transform: scale(1.3);
						}
						100% {
							opacity: 0;
							transform: scale(0);
						}
					}

					@keyframes finalElementsJumpOutCenter {
						0% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(-7px, -60px) scale(0);
						}
					}

					@keyframes finalElementsJumpOutLeft {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
					}

					@keyframes finalElementsJumpOutRight {
						0% {
							opacity: 1;
							transform: translate(70px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(70px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(70px, -60px) scale(0);
						}
					}

					/* Red elements jump in animations */
					.red-elements-jump-in {
						animation: redElementsJumpIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.red-elements-jump-in-left {
						animation: redElementsJumpInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.red-elements-jump-in-right {
						animation: redElementsJumpInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					@keyframes redElementsJumpIn {
						0% {
							opacity: 0;
							transform: scale(0);
						}
						50% {
							opacity: 1;
							transform: scale(1.3);
						}
						100% {
							opacity: 1;
							transform: scale(1);
						}
					}

					@keyframes redElementsJumpInLeft {
						0% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
					}

					@keyframes redElementsJumpInRight {
						0% {
							opacity: 0;
							transform: translate(70px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(70px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(70px, -60px) scale(1);
						}
					}

					/* Speech Bubble Styles */
					.flexi-wave-bottom-left {
						position: absolute;
						left: 0.4rem;
						bottom: 18px;
						width: 70px;
						max-width: 70px;
						min-width: 40px;
						width: 5rem;
						height: auto;
						z-index: 2;
						pointer-events: none;
					}
					
					.flexi-wave-bubble-container {
						position: absolute;
						left: 0;
						bottom: 0;
						display: flex;
						align-items: flex-end;
						z-index: 3;
					}
					
					.speech-bubble {
						position: relative;
						margin-left: 5rem;
						margin-right: 1rem;
						margin-bottom: 70px;
						background: #fff;
						border-radius: 18px;
						padding: 7px 13px;
						font-size: 0.95rem;
						color: #222;
						box-shadow: 0 2px 8px rgba(0,0,0,0.08);
						min-width: 160px;
						max-width: 90vw;
						word-break: break-word;
					}
					
					.speech-bubble:after {
						content: '';
						position: absolute;
						left: -18px;
						bottom: 16px;
						width: 0;
						height: 0;
						border-top: 12px solid transparent;
						border-bottom: 12px solid transparent;
						border-right: 18px solid #fff;
						filter: drop-shadow(-2px 2px 2px rgba(0,0,0,0.08));
					}
					
					.flexi-telescope-fade-in {
						animation: flexiFadeIn 0.6s ease-in-out;
					}
					
					.speech-bubble-fade-in {
						animation: speechBubbleFadeIn 0.5s ease-in-out 0.2s both;
					}
					
					@keyframes flexiFadeIn {
						from {
							opacity: 0;
							transform: translateY(10px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					
					@keyframes speechBubbleFadeIn {
						from {
							opacity: 0;
							transform: translateX(-10px);
						}
						to {
							opacity: 1;
							transform: translateX(0);
						}
					}
					
					.flexi-first-step-fade-out {
						animation: flexiFirstStepFadeOut 0.2s cubic-bezier(0.4, 0.2, 0.2, 1) forwards;
					}
					
					@keyframes flexiFirstStepFadeOut {
						from {
							opacity: 1;
							transform: translateY(0);
						}
						to {
							opacity: 0;
							transform: translateY(-10px);
						}
					}

					.glow-button::before {
						content: "";
						display: block;
						position: absolute;
						background: #fff;
						inset: 2px;
						border-radius: 4px;
						z-index: -2;
					}

					.simple-glow { 
						background: conic-gradient(
							from var(--r),
							transparent 0%,
							rgb(0, 255, 132) 2%,
							rgb(0, 214, 111) 8%,
							rgb(0, 174, 90) 12%,
							rgb(0, 133, 69) 14%,
							transparent 15%
						);
						animation: rotating 3s linear infinite;
						transition: animation 0.3s ease;
					}

					.simple-glow.stopped {
						animation: none;
						background: none;
					}

					@keyframes rotating {
						0% {
							--r: 0deg;
						}
						100% {
							--r: 360deg;
						}
					}

					.explore-button {
						background-color: #008545;
						color: white;
						border: none;
						border-radius: 4px;
						padding: 0.375rem 0.75rem;
						font-size: 0.875rem;
						font-weight: 600;
						cursor: pointer;
						transition: background-color 0.2s;
					}

					.explore-button:hover {
						background-color: #00783E;
					}

					.prime-move-left-1 {
						animation: primeMoveLeft1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-left-2 {
						animation: primeMoveLeft2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-right-1 {
						animation: primeMoveRight1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-right-2 {
						animation: primeMoveRight2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-6-1 {
						animation: primeUnder6_1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-6-2 {
						animation: primeUnder6_2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-9-1 {
						animation: primeUnder9_1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-9-2 {
						animation: primeUnder9_2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes primeMoveLeft1 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeMoveLeft2 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeMoveRight1 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeMoveRight2 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder6_1 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder6_2 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder9_1 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder9_2 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					.line-under-6-left {
						animation: lineUnder6Left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-6-right {
						animation: lineUnder6Right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-8-left {
						animation: lineUnder8Left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-8-right {
						animation: lineUnder8Right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					@keyframes lineUnder6Left {
						0% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder6Right {
						0% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder8Left {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder8Right {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					.line-under-9-left {
						animation: lineUnder9Left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-9-right {
						animation: lineUnder9Right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					@keyframes lineUnder9Left {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder9Right {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					.fade-non-primes {
						animation: fadeNonPrimes 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes fadeNonPrimes {
						0% {
							opacity: 1;
						}
						100% {
							opacity: 0.5;
						}
					}

					.prime-move-left-2-no-opacity {
						animation: primeMoveLeft2NoOpacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-right-2-no-opacity {
						animation: primeMoveRight2NoOpacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes primeMoveLeft2NoOpacity {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						99% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0.5;
						}
					}

					@keyframes primeMoveRight2NoOpacity {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						99% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0.5;
						}
					}

					.lines-shrink {
						animation: linesShrinkAnimation 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-appear {
						animation: linesShrinkAppear 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-left {
						animation: linesShrinkMoveLeft 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-left-right {
						animation: linesShrinkMoveLeftRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-right {
						animation: linesShrinkMoveRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-right-right {
						animation: linesShrinkMoveRightRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-under-6-left {
						animation: linesShrinkUnder6Left 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-under-9-left {
						animation: linesShrinkUnder9Left 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-under-9-right {
						animation: linesShrinkUnder9Right 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.non-primes-fade-out {
						animation: nonPrimesFadeOut 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.non-primes-fade-out-left {
						animation: nonPrimesFadeOutLeft 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.non-primes-fade-out-right {
						animation: nonPrimesFadeOutRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.first-primes-move-down {
						animation: firstPrimesMoveDown 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.first-primes-move-down-left {
						animation: firstPrimesMoveDownLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.first-primes-move-down-right {
						animation: firstPrimesMoveDownRight 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.second-primes-move-up-left {
						animation: secondPrimesMoveUpLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.second-primes-move-up-right {
						animation: secondPrimesMoveUpRight 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.primes-group-left {
						animation: primesGroupLeft 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.primes-group-right {
						animation: primesGroupRight 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes firstPrimesMoveDownLeft {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(-90px, -48px) translateX(-150%);
						}
					}

					@keyframes firstPrimesMoveDownRight {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(50px, -48px) translateX(-150%);
						}
					}

					@keyframes secondPrimesMoveUpLeft {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(-520%, -400%);
						}
					}

					@keyframes secondPrimesMoveUpRight {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(400%, -400%);
						}
					}

					@keyframes nonPrimesFadeOut {
						0% {
							opacity: 0.5;
						}
						100% {
							opacity: 0;
						}
					}

					@keyframes nonPrimesFadeOutLeft {
						0% {
							opacity: 0.5;
							transform: translate(-70px, -60px) translateX(-50%);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%);
						}
					}

					@keyframes nonPrimesFadeOutRight {
						0% {
							opacity: 0.5;
							transform: translate(70px, -60px) translateX(-50%);
						}
						100% {
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%);
						}
					}

					@keyframes linesShrinkAnimation {
						0% {
							height: 38px;
							opacity: 1;
						}
						100% {
							height: 0;
							opacity: 0;
						}
					}

					@keyframes linesShrinkAppear {
						0% {
							height: 38px;
							opacity: 1;
						}
						100% {
							height: 0;
							opacity: 0;
						}
					}

					@keyframes linesShrinkMoveLeft {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkMoveLeftRight {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					@keyframes linesShrinkMoveRight {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkMoveRightRight {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					@keyframes linesShrinkUnder6Left {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkUnder6Right {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					@keyframes linesShrinkUnder9Left {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkUnder9Right {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					.main-numbers-move-down {
						animation: mainNumbersMoveDown 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.main-numbers-move-down-left {
						animation: mainNumbersMoveDownLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.main-numbers-move-down-right {
						animation: mainNumbersMoveDownRight 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					@keyframes mainNumbersMoveDown {
						from {
							transform: translate(0, 0);
						}
						to {
							transform: translate(0, 20px);
						}
					}

					@keyframes mainNumbersMoveDownLeft {
						from {
							transform: translate(-70px, -60px);
						}
						to {
							transform: translate(-70px, -30px);
						}
					}

					@keyframes mainNumbersMoveDownRight {
						from {
							transform: translate(70px, -60px);
						}
						to {
							transform: translate(70px, -30px);
						}
					}

					.multiplication-symbols-fade-in {
						animation: multiplicationSymbolsFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.multiplication-symbols-fade-out {
						animation: multiplicationSymbolsFadeOut 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes multiplicationSymbolsFadeIn {
						from {
							opacity: 0;
						}
						to {
							opacity: 1;
						}
					}

					@keyframes multiplicationSymbolsFadeOut {
						from {
							opacity: 1;
						}
						to {
							opacity: 0;
						}
					}

					.separating-lines-fade-in {
						animation: separatingLinesFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out {
						animation: separatingLinesFadeOut 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-in-left {
						animation: separatingLinesFadeInLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out-left {
						animation: separatingLinesFadeOutLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-in-right {
						animation: separatingLinesFadeInRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out-right {
						animation: separatingLinesFadeOutRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-in-right-side-left {
						animation: separatingLinesFadeInRightSideLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out-right-side-left {
						animation: separatingLinesFadeOutRightSideLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-in-right-side-right {
						animation: separatingLinesFadeInRightSideRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out-right-side-right {
						animation: separatingLinesFadeOutRightSideRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.power-expressions-fade-in {
						animation: powerExpressionsFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.power-expressions-fade-out {
						animation: powerExpressionsFadeOut 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes separatingLinesFadeIn {
						from {
							height: 0;
							opacity: 0;
						}
						to {
							height: 20px;
							opacity: 1;
						}
					}

					@keyframes separatingLinesFadeInLeft {
						from {
							height: 0;
							opacity: 0;
							transform: translateX(-25px) skewX(30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(-11px, 10px) skewX(30deg);
						}
					}

					@keyframes separatingLinesFadeInRight {
						from {
							height: 0;
							opacity: 0;
							transform: translateX(-45px) skewX(-30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(-58px, 10px) skewX(-30deg);
						}
					}

					@keyframes separatingLinesFadeInRightSideLeft {
						from {
							height: 0;
							opacity: 0;
							transform: translate(-11px, 10px) skewX(30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(-11px, 10px) skewX(30deg);
						}
					}

					@keyframes separatingLinesFadeInRightSideRight {
						from {
							height: 0;
							opacity: 0;
							transform: translate(44px, 10px) skewX(-30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(44px, 10px) skewX(-30deg);
						}
					}

					@keyframes powerExpressionsFadeIn {
						from {
							opacity: 0;
							transform: translateY(10px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}

					@keyframes powerExpressionsFadeOut {
						from {
							opacity: 1;
							transform: translateY(0);
						}
						to {
							opacity: 0;
							transform: translateY(-10px);
						}
					}

					/* Prime factor fade out animations */
					.prime-fade-out-left-1 {
						animation: primeFadeOutLeft1 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-left-2 {
						animation: primeFadeOutLeft2 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-left-3 {
						animation: primeFadeOutLeft3 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-right-1 {
						animation: primeFadeOutRight1 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-right-2 {
						animation: primeFadeOutRight2 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-right-3 {
						animation: primeFadeOutRight3 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes primeFadeOutLeft1 {
						0% {
							opacity: 1;
							transform: translate(-90px, -48px) translateX(-150%);
						}
						100% {
							opacity: 0;
							transform: translate(-90px, -48px) translateX(-150%);
						}
					}

					@keyframes primeFadeOutLeft2 {
						0% {
							opacity: 1;
							transform: translate(-520%, -400%);
						}
						100% {
							opacity: 0;
							transform: translate(-520%, -400%);
						}
					}

					@keyframes primeFadeOutLeft3 {
						0% {
							opacity: 1;
							transform: translate(-520%, -400%);
						}
						100% {
							opacity: 0;
							transform: translate(-520%, -400%);
						}
					}

					@keyframes primeFadeOutRight1 {
						0% {
							opacity: 1;
							transform: translate(50px, -48px) translateX(-150%);
						}
						100% {
							opacity: 0;
							transform: translate(50px, -48px) translateX(-150%);
						}
					}

					@keyframes primeFadeOutRight2 {
						0% {
							opacity: 1;
							transform: translate(400%, -400%);
						}
						100% {
							opacity: 0;
							transform: translate(400%, -400%);
						}
					}

					@keyframes primeFadeOutRight3 {
						0% {
							opacity: 1;
							transform: translate(400%, -400%);
						}
						100% {
							opacity: 0;
							transform: translate(400%, -400%);
						}
					}

					@keyframes separatingLinesFadeOut {
						from {
							height: 20px;
							opacity: 1;
						}
						to {
							height: 0;
							opacity: 0;
						}
					}

					@keyframes separatingLinesFadeOutLeft {
						from {
							height: 38px;
							opacity: 1;
							transform: translate(-11px, 10px) skewX(30deg);
						}
						to {
							height: 0;
							opacity: 0;
							transform: translate(-11px, 10px) skewX(30deg);
						}
					}

					@keyframes separatingLinesFadeOutRight {
						from {
							height: 38px;
							opacity: 1;
							transform: translate(-58px, 10px) skewX(-30deg);
						}
						to {
							height: 0;
							opacity: 0;
							transform: translate(-58px, 10px) skewX(-30deg);
						}
					}

					@keyframes separatingLinesFadeOutRightSideLeft {
						from {
							height: 38px;
							opacity: 1;
							transform: translate(-11px, 10px) skewX(30deg);
						}
						to {
							height: 0;
							opacity: 0;
							transform: translate(-11px, 10px) skewX(30deg);
						}
					}

					@keyframes separatingLinesFadeOutRightSideRight {
						from {
							height: 38px;
							opacity: 1;
							transform: translate(44px, 10px) skewX(-30deg);
						}
						to {
							height: 0;
							opacity: 0;
							transform: translate(44px, 10px) skewX(-30deg);
						}
					}

					.exponent-move-up-right {
						animation: exponentMoveUpRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.exponent-move-up-left {
						animation: exponentMoveUpLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.final-multiplication-fade-in {
						animation: finalMultiplicationFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.lcm-text-fade-in {
						animation: lcmTextFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes powerExpressionsFadeOut {
						from {
							opacity: 1;
							transform: translateY(0);
						}
						to {
							opacity: 0;
							transform: translateY(-10px);
						}
					}

					@keyframes exponentMoveUpRight {
						from {
							transform: translate(0px, 0px);
						}
						to {
							transform: translate(140px, -60px);
						}
					}

					@keyframes exponentMoveUpLeft {
						from {
							transform: translate(0px, 0px);
						}
						to {
							transform: translate(-70px, -60px);
						}
					}

					@keyframes finalMultiplicationFadeIn {
						from {
							opacity: 0;
							transform: translate(-7px,-60px);
						}
						to {
							opacity: 1;
							transform: translate(-7px, -60px);
						}
					}

					@keyframes lcmTextFadeIn {
						from {
							opacity: 0;
							transform: translate(-123px, -110px);
						}
						to {
							opacity: 1;
							transform: translate(-123px, -110px);
						}
					}

					.exponents-jump-out-left {
						animation: exponentsJumpOutLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.exponents-jump-out-right {
						animation: exponentsJumpOutRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					@keyframes exponentsJumpOutLeft {
						0% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(140px, -60px) scale(0);
						}
					}

					@keyframes exponentsJumpOutRight {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
					}

					@keyframes exponentsJumpOutRight {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
					}

					.replacement-numbers-jump-in-left {
						animation: replacementNumbersJumpInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.replacement-numbers-jump-in-right {
						animation: replacementNumbersJumpInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					@keyframes replacementNumbersJumpInLeft {
						0% {
							opacity: 0;
							transform: translate(140px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1);
						}
					}

					@keyframes replacementNumbersJumpInRight {
						0% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
					}

					@keyframes replacementNumbersJumpInRight {
						0% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
					}

					.replacement-numbers-fade-out-left {
						animation: replacementNumbersFadeOutLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.replacement-numbers-fade-out-right {
						animation: replacementNumbersFadeOutRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes replacementNumbersFadeOutLeft {
						0% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1);
						}
						100% {
							opacity: 0;
							transform: translate(165px, -60px) scale(1);
						}
					}

					@keyframes replacementNumbersFadeOutRight {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						100% {
							opacity: 0;
							transform: translate(-95px, -60px) scale(1);
						}
					}

					.final-multiplication-fade-out {
						animation: finalMultiplicationFadeOut 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes finalMultiplicationFadeOut {
						0% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1);
						}
						100% {
							opacity: 0;
							transform: translate(-7px, -60px) scale(0);
						}
					}

					.final-result-jump-in {
						animation: finalResultJumpIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.lcm-text-move-right {
						animation: lcmTextMoveRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes finalResultJumpIn {
						0% {
							opacity: 0;
							transform: translate(-7px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1);
						}
					}

					@keyframes lcmTextMoveRight {
						0% {
							transform: translate(-123px, -110px);
						}
						100% {
							transform: translate(-88px, -110px);
						}
					}

					/* Final elements jump out animations */
					.final-elements-jump-out {
						animation: finalElementsJumpOut 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.final-elements-jump-out-left {
						animation: finalElementsJumpOutLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.final-elements-jump-out-right {
						animation: finalElementsJumpOutRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.final-elements-jump-out-center {
						animation: finalElementsJumpOutCenter 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					@keyframes finalElementsJumpOut {
						0% {
							opacity: 1;
							transform: scale(1);
						}
						50% {
							opacity: 1;
							transform: scale(1.3);
						}
						100% {
							opacity: 0;
							transform: scale(0);
						}
					}

					@keyframes finalElementsJumpOutCenter {
						0% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(-7px, -60px) scale(0);
						}
					}

					@keyframes finalElementsJumpOutLeft {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
					}

					@keyframes finalElementsJumpOutRight {
						0% {
							opacity: 1;
							transform: translate(70px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(70px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(70px, -60px) scale(0);
						}
					}

					/* Red elements jump in animations */
					.red-elements-jump-in {
						animation: redElementsJumpIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.red-elements-jump-in-left {
						animation: redElementsJumpInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.red-elements-jump-in-right {
						animation: redElementsJumpInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					@keyframes redElementsJumpIn {
						0% {
							opacity: 0;
							transform: scale(0);
						}
						50% {
							opacity: 1;
							transform: scale(1.3);
						}
						100% {
							opacity: 1;
							transform: scale(1);
						}
					}

					@keyframes redElementsJumpInLeft {
						0% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
					}

					@keyframes redElementsJumpInRight {
						0% {
							opacity: 0;
							transform: translate(70px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(70px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(70px, -60px) scale(1);
						}
					}

					/* Speech Bubble Styles */
					.flexi-wave-bottom-left {
						position: absolute;
						left: 0.4rem;
						bottom: 18px;
						width: 70px;
						max-width: 70px;
						min-width: 40px;
						width: 5rem;
						height: auto;
						z-index: 2;
						pointer-events: none;
					}
					
					.flexi-wave-bubble-container {
						position: absolute;
						left: 0;
						bottom: 0;
						display: flex;
						align-items: flex-end;
						z-index: 3;
					}
					
					.speech-bubble {
						position: relative;
						margin-left: 5rem;
						margin-right: 1rem;
						margin-bottom: 70px;
						background: #fff;
						border-radius: 18px;
						padding: 7px 13px;
						font-size: 0.95rem;
						color: #222;
						box-shadow: 0 2px 8px rgba(0,0,0,0.08);
						min-width: 160px;
						max-width: 90vw;
						word-break: break-word;
					}
					
					.speech-bubble:after {
						content: '';
						position: absolute;
						left: -18px;
						bottom: 16px;
						width: 0;
						height: 0;
						border-top: 12px solid transparent;
						border-bottom: 12px solid transparent;
						border-right: 18px solid #fff;
						filter: drop-shadow(-2px 2px 2px rgba(0,0,0,0.08));
					}
					
					.flexi-telescope-fade-in {
						animation: flexiFadeIn 0.6s ease-in-out;
					}
					
					.speech-bubble-fade-in {
						animation: speechBubbleFadeIn 0.5s ease-in-out 0.2s both;
					}
					
					@keyframes flexiFadeIn {
						from {
							opacity: 0;
							transform: translateY(10px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					
					@keyframes speechBubbleFadeIn {
						from {
							opacity: 0;
							transform: translateX(-10px);
						}
						to {
							opacity: 1;
							transform: translateX(0);
						}
					}
					
					.flexi-first-step-fade-out {
						animation: flexiFirstStepFadeOut 0.2s cubic-bezier(0.4, 0.2, 0.2, 1) forwards;
					}
					
					@keyframes flexiFirstStepFadeOut {
						from {
							opacity: 1;
							transform: translateY(0);
						}
						to {
							opacity: 0;
							transform: translateY(-10px);
						}
					}

					.glow-button::before {
						content: "";
						display: block;
						position: absolute;
						background: #fff;
						inset: 2px;
						border-radius: 4px;
						z-index: -2;
					}

					.simple-glow { 
						background: conic-gradient(
							from var(--r),
							transparent 0%,
							rgb(0, 255, 132) 2%,
							rgb(0, 214, 111) 8%,
							rgb(0, 174, 90) 12%,
							rgb(0, 133, 69) 14%,
							transparent 15%
						);
						animation: rotating 3s linear infinite;
						transition: animation 0.3s ease;
					}

					.simple-glow.stopped {
						animation: none;
						background: none;
					}

					@keyframes rotating {
						0% {
							--r: 0deg;
						}
						100% {
							--r: 360deg;
						}
					}

					.explore-button {
						background-color: #008545;
						color: white;
						border: none;
						border-radius: 4px;
						padding: 0.375rem 0.75rem;
						font-size: 0.875rem;
						font-weight: 600;
						cursor: pointer;
						transition: background-color 0.2s;
					}

					.explore-button:hover {
						background-color: #00783E;
					}

					.prime-move-left-1 {
						animation: primeMoveLeft1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-left-2 {
						animation: primeMoveLeft2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-right-1 {
						animation: primeMoveRight1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-right-2 {
						animation: primeMoveRight2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-6-1 {
						animation: primeUnder6_1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-6-2 {
						animation: primeUnder6_2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-9-1 {
						animation: primeUnder9_1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-9-2 {
						animation: primeUnder9_2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes primeMoveLeft1 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeMoveLeft2 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeMoveRight1 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeMoveRight2 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder6_1 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder6_2 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder9_1 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder9_2 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					.line-under-6-left {
						animation: lineUnder6Left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-6-right {
						animation: lineUnder6Right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-8-left {
						animation: lineUnder8Left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-8-right {
						animation: lineUnder8Right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					@keyframes lineUnder6Left {
						0% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder6Right {
						0% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder8Left {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder8Right {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					.line-under-9-left {
						animation: lineUnder9Left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-9-right {
						animation: lineUnder9Right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					@keyframes lineUnder9Left {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder9Right {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					.fade-non-primes {
						animation: fadeNonPrimes 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes fadeNonPrimes {
						0% {
							opacity: 1;
						}
						100% {
							opacity: 0.5;
						}
					}

					.prime-move-left-2-no-opacity {
						animation: primeMoveLeft2NoOpacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-right-2-no-opacity {
						animation: primeMoveRight2NoOpacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes primeMoveLeft2NoOpacity {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						99% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0.5;
						}
					}

					@keyframes primeMoveRight2NoOpacity {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						99% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0.5;
						}
					}

					.lines-shrink {
						animation: linesShrinkAnimation 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-appear {
						animation: linesShrinkAppear 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-left {
						animation: linesShrinkMoveLeft 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-left-right {
						animation: linesShrinkMoveLeftRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-right {
						animation: linesShrinkMoveRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-right-right {
						animation: linesShrinkMoveRightRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-under-6-left {
						animation: linesShrinkUnder6Left 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-under-9-left {
						animation: linesShrinkUnder9Left 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-under-9-right {
						animation: linesShrinkUnder9Right 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.non-primes-fade-out {
						animation: nonPrimesFadeOut 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.non-primes-fade-out-left {
						animation: nonPrimesFadeOutLeft 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.non-primes-fade-out-right {
						animation: nonPrimesFadeOutRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.first-primes-move-down {
						animation: firstPrimesMoveDown 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.first-primes-move-down-left {
						animation: firstPrimesMoveDownLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.first-primes-move-down-right {
						animation: firstPrimesMoveDownRight 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.second-primes-move-up-left {
						animation: secondPrimesMoveUpLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.second-primes-move-up-right {
						animation: secondPrimesMoveUpRight 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.primes-group-left {
						animation: primesGroupLeft 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.primes-group-right {
						animation: primesGroupRight 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes firstPrimesMoveDownLeft {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(-90px, -48px) translateX(-150%);
						}
					}

					@keyframes firstPrimesMoveDownRight {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(50px, -48px) translateX(-150%);
						}
					}

					@keyframes secondPrimesMoveUpLeft {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(-520%, -400%);
						}
					}

					@keyframes secondPrimesMoveUpRight {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(400%, -400%);
						}
					}

					@keyframes nonPrimesFadeOut {
						0% {
							opacity: 0.5;
						}
						100% {
							opacity: 0;
						}
					}

					@keyframes nonPrimesFadeOutLeft {
						0% {
							opacity: 0.5;
							transform: translate(-70px, -60px) translateX(-50%);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%);
						}
					}

					@keyframes nonPrimesFadeOutRight {
						0% {
							opacity: 0.5;
							transform: translate(70px, -60px) translateX(-50%);
						}
						100% {
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%);
						}
					}

					@keyframes linesShrinkAnimation {
						0% {
							height: 38px;
							opacity: 1;
						}
						100% {
							height: 0;
							opacity: 0;
						}
					}

					@keyframes linesShrinkAppear {
						0% {
							height: 38px;
							opacity: 1;
						}
						100% {
							height: 0;
							opacity: 0;
						}
					}

					@keyframes linesShrinkMoveLeft {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkMoveLeftRight {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					@keyframes linesShrinkMoveRight {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkMoveRightRight {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					@keyframes linesShrinkUnder6Left {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkUnder6Right {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					@keyframes linesShrinkUnder9Left {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkUnder9Right {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					.fade-non-primes {
						animation: fadeNonPrimes 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes fadeNonPrimes {
						0% {
							opacity: 1;
						}
						100% {
							opacity: 0.5;
						}
					}

					.prime-move-left-2-no-opacity {
						animation: primeMoveLeft2NoOpacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-right-2-no-opacity {
						animation: primeMoveRight2NoOpacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes primeMoveLeft2NoOpacity {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						99% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0.5;
						}
					}

					@keyframes primeMoveRight2NoOpacity {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						99% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0.5;
						}
					}

					.lines-shrink {
						animation: linesShrinkAnimation 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-appear {
						animation: linesShrinkAppear 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-left {
						animation: linesShrinkMoveLeft 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-left-right {
						animation: linesShrinkMoveLeftRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-right {
						animation: linesShrinkMoveRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-right-right {
							opacity: 0;
							transform: translate(140px, -60px) scale(0);
						}
					}

					@keyframes exponentsJumpOutRight {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
					}

					@keyframes exponentsJumpOutRight {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
					}

					.replacement-numbers-jump-in-left {
						animation: replacementNumbersJumpInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.replacement-numbers-jump-in-right {
						animation: replacementNumbersJumpInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					@keyframes replacementNumbersJumpInLeft {
						0% {
							opacity: 0;
							transform: translate(140px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1);
						}
					}

					@keyframes replacementNumbersJumpInRight {
						0% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
					}

					@keyframes replacementNumbersJumpInRight {
						0% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
					}

					.replacement-numbers-fade-out-left {
						animation: replacementNumbersFadeOutLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.replacement-numbers-fade-out-right {
						animation: replacementNumbersFadeOutRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes replacementNumbersFadeOutLeft {
						0% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1);
						}
						100% {
							opacity: 0;
							transform: translate(165px, -60px) scale(1);
						}
					}

					@keyframes replacementNumbersFadeOutRight {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						100% {
							opacity: 0;
							transform: translate(-95px, -60px) scale(1);
						}
					}

					.final-multiplication-fade-out {
						animation: finalMultiplicationFadeOut 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes finalMultiplicationFadeOut {
						0% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1);
						}
						100% {
							opacity: 0;
							transform: translate(-7px, -60px) scale(0);
						}
					}

					.final-result-jump-in {
						animation: finalResultJumpIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.lcm-text-move-right {
						animation: lcmTextMoveRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes finalResultJumpIn {
						0% {
							opacity: 0;
							transform: translate(-7px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1);
						}
					}

					@keyframes lcmTextMoveRight {
						0% {
							transform: translate(-123px, -110px);
						}
						100% {
							transform: translate(-88px, -110px);
						}
					}

					/* Final elements jump out animations */
					.final-elements-jump-out {
						animation: finalElementsJumpOut 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.final-elements-jump-out-left {
						animation: finalElementsJumpOutLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.final-elements-jump-out-right {
						animation: finalElementsJumpOutRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					.final-elements-jump-out-center {
						animation: finalElementsJumpOutCenter 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					@keyframes finalElementsJumpOut {
						0% {
							opacity: 1;
							transform: scale(1);
						}
						50% {
							opacity: 1;
							transform: scale(1.3);
						}
						100% {
							opacity: 0;
							transform: scale(0);
						}
					}

					@keyframes finalElementsJumpOutCenter {
						0% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(-7px, -60px) scale(0);
						}
					}

					@keyframes finalElementsJumpOutLeft {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
					}

					@keyframes finalElementsJumpOutRight {
						0% {
							opacity: 1;
							transform: translate(70px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(70px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(70px, -60px) scale(0);
						}
					}

					/* Small screen positioning classes */
					.small-screen-position {
						transform: translate(35px, -60px) translateX(-100%) !important;
					}

					.small-screen-position.number-move-right,
					.small-screen-position.main-numbers-move-down-right {
						transform: translate(35px, -60px) translateX(-100%) !important;
					}

					.small-screen-prime {
						transform: translate(40px, -60px) translateX(-100%) !important;
					}

					.small-screen-multiplication {
						transform: translate(35px, -60px) translateX(-100%) !important;
					}

					.small-screen-line-left {
						transform: translate(35px, -60px) translateX(-100%) skewX(-30deg) !important;
					}

					.small-screen-line-right {
						transform: translate(35px, -60px) translateX(-100%) skewX(30deg) !important;
					}

					/* Remove scroll bars from number inputs */
					input[type="number"]::-webkit-outer-spin-button,
					input[type="number"]::-webkit-inner-spin-button {
						-webkit-appearance: none;
						margin: 0;
					}

					input[type="number"] {
						-moz-appearance: textfield;
					}

					.lcm-text-move-down {
						animation: lcmTextMoveDown 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes lcmTextMoveDown {
						0% {
							transform: translateX(-50%) translate(-88px, -110px);
						}
						100% {
							transform: translateX(-50%) translate(-88px, 5px);
						}
					}

					.lcm-answer-move-down {
						animation: lcmAnswerMoveDown 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes lcmAnswerMoveDown {
						0% {
							transform: translate(-23px, -60px);
						}
						100% {
							transform: translate(-23px, 55px);
						}
					}

					.input-one-jump-out {
						animation: inputOneJumpOut 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes inputOneJumpOut {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
					}

					.input-two-jump-out {
						animation: inputTwoJumpOut 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes inputTwoJumpOut {
						0% {
							opacity: 1;
							transform: translate(70px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(70px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(70px, -60px) scale(0);
						}
					}

					.purple-text-jump-in {
						animation: purpleTextJumpIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes purpleTextJumpIn {
						0% {
							opacity: 0;
							transform: scale(0);
						}
						50% {
							opacity: 1;
							transform: scale(1.3);
						}
						100% {
							opacity: 1;
							transform: scale(1);
						}
					}
						
				`}
			</style>
			<div className="p-4">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-[#5750E3] text-sm font-medium select-none">LCM Explorer</h2>
					<div className="flex gap-2">
						{/* TEMPORARY: Skip to final button */}
						<button 
							className="text-sm px-3 py-1 rounded border transition-colors bg-orange-500 hover:bg-orange-600 text-white border-orange-600 hover:border-orange-700"
							onClick={handleSkipToFinal}
							title="TEMPORARY: Skip to final step"
						>
							Skip to Final
						</button>
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
										onClick={handleExploreClick}
										disabled={isAnimating}
										style={{ transformOrigin: 'center' }}
									>
										Click to Explore!
									</button>
								</div>
							)}
							{showNumbers && (
								<div className="flex flex-col items-center gap-4 absolute top-20 left-1/2 transform -translate-x-1/2">
									<div className="flex items-center gap-8 text-animation numbers-container" style={{ opacity: 0, animation: 'fadeIn 0.5s ease-out forwards' }}>
										<div className="relative">
											<div className={`text-4xl font-bold text-black number-text ${isNumbersMoving ? 'number-move-left' : ''} ${mainNumbersMoveDown ? 'main-numbers-move-down-left' : ''} ${finalElementsJumpOut ? 'final-elements-jump-out-left' : ''}`}>12</div>
											{/* Red version of 12 */}
											{showRedElements && (
												<div
													className={`text-4xl font-bold text-red-500 number-text ${isNumbersMoving ? 'number-move-left' : ''} ${inputsJumpOut ? 'input-one-jump-out' : ''} ${mainNumbersMoveDown ? 'main-numbers-move-down-left' : ''} ${redElementsJumpIn ? 'red-elements-jump-in-left' : ''}`}
													style={{ position: 'absolute', top: 0, left: '-1rem', opacity: redElementsJumpIn ? 1 : 0 }}
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
											{/* Purple text for first input - moved outside input container */}
											{solveButtonClicked && showRedElements && purpleTextJumpIn && (
												<div
													style={{
														position: 'absolute',
														top: '-50px',
														left: '-80px',
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
											{showLines && (
												<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] ${isNumbersMoving ? 'line-move-left' : 'line-appear'} ${firstLinesShrink ? (isNumbersMoving ? 'lines-shrink-move-left' : 'lines-shrink-appear') : ''}`} style={{ left: '50%' }}></div>
											)}
											{showLines && (
												<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] ${isNumbersMoving ? 'line-move-left-right' : 'line-appear'} ${firstLinesShrink ? (isNumbersMoving ? 'lines-shrink-move-left-right' : 'lines-shrink-appear') : ''}`} style={{ left: '50%' }}></div>
											)}
											{showFirstPrimes && (
												<div className={`absolute text-2xl font-bold text-[#5750E3] prime-text ${isNumbersMoving ? 'prime-move-left-1' : ''} ${firstPrimesMoveDown ? 'first-primes-move-down-left' : ''} ${fadeOutPrimes ? 'prime-fade-out-left-1' : ''}`} style={{ left: 'calc(50% - 35px)', top: 'calc(100% + 50px)', transform: 'translateX(-50%)' }}>2</div>
											)}
											{showFirstPrimes && showMultiplicationSymbols && (
												<div className={`absolute text-xl font-bold text-[#5750E3] ${multiplicationSymbolsFadeOut ? 'multiplication-symbols-fade-out' : 'multiplication-symbols-fade-in'}`} style={{ left: 'calc(50% - 105px)', top: 'calc(100% + 3px)', transform: 'translateX(-50%)' }}>×</div>
											)}
											{showSeparatingLines && (
												<div className={`absolute w-0.5 bg-[#5750E3] ${separatingLinesFadeOut ? 'separating-lines-fade-out-left' : 'separating-lines-fade-in-left'} ${isNumbersMoving ? 'prime-move-left-1' : ''} ${firstPrimesMoveDown ? 'first-primes-move-down-left' : ''}`} style={{ left: 'calc(50% - 105px)', top: 'calc(100% + 25px)', transform: 'translateX(-50%)' }}></div>
											)}
											{showPowerExpressions && (
												<div className={`absolute text-2xl font-bold text-[#5750E3] ${exponentsMoveTogether ? 'exponent-move-up-right' : 'power-expressions-fade-in'} ${exponentsJumpOut ? 'exponents-jump-out-left' : ''} ${isNumbersMoving ? 'prime-move-left-1' : ''} ${firstPrimesMoveDown ? 'first-primes-move-down-left' : ''}`} style={{ left: 'calc(50% - 112px)', top: 'calc(100% + 75px)', transform: 'translateX(-50%)' }}>2²</div>
											)}
											{showReplacementNumbers && (
												<div className={`absolute text-2xl font-bold text-[#5750E3] ${replacementNumbersJumpIn ? 'replacement-numbers-jump-in-left' : ''} ${replacementNumbersFadeOut ? 'replacement-numbers-fade-out-left' : ''}`} style={{ left: 'calc(50% - 112px)', top: 'calc(100% + 75px)', transform: 'translate(140px, -60px)', opacity: replacementNumbersJumpIn ? 1 : 0 }}>4</div>
											)}
											{showPowerExpressions && (
												<div className={`absolute text-2xl font-bold text-[#5750E3] ${powerExpressionsFadeOut ? 'power-expressions-fade-out' : 'power-expressions-fade-in'} ${isNumbersMoving ? 'prime-move-left-1' : ''} ${firstPrimesMoveDown ? 'first-primes-move-down-left' : ''}`} style={{ left: 'calc(50% - 77px)', top: 'calc(100% + 75px)', transform: 'translateX(-50%)' }}>×</div>
											)}
											{showPowerExpressions && (
												<div className={`absolute text-2xl font-bold text-[#5750E3] ${powerExpressionsFadeOut ? 'power-expressions-fade-out' : 'power-expressions-fade-in'} ${isNumbersMoving ? 'prime-move-left-1' : ''} ${firstPrimesMoveDown ? 'first-primes-move-down-left' : ''}`} style={{ left: 'calc(50% - 43px)', top: 'calc(100% + 75px)', transform: 'translateX(-50%)' }}>3</div>
											)}
											{showFirstPrimes && (
												<div className={`absolute text-2xl font-bold text-[#5750E3] ${isNumbersMoving ? 'prime-move-left-2-no-opacity' : ''} ${nonPrimesFadeOut ? 'non-primes-fade-out-left' : ''}`} style={{ left: 'calc(50% + 35px)', top: 'calc(100% + 50px)', transform: 'translateX(-50%)', opacity: fadeNonPrimes ? 0.5 : 1 }}>6</div>
											)}
											{showSecondLines && (
												<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] ${isNumbersMoving ? 'line-under-6-left' : 'line-appear'} ${secondLinesShrink ? (isNumbersMoving ? 'lines-shrink-under-6-left' : 'lines-shrink-appear') : ''}`} style={{ left: 'calc(50% + 35px)', top: 'calc(100% + 80px)' }}></div>
											)}
											{showSecondLines && (
												<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] ${isNumbersMoving ? 'line-under-6-right' : 'line-appear'} ${secondLinesShrink ? (isNumbersMoving ? 'lines-shrink-under-6-right' : 'lines-shrink-appear') : ''}`} style={{ left: 'calc(50% + 35px)', top: 'calc(100% + 80px)' }}></div>
											)}
											{showSecondPrimes && (
												<div className={`absolute text-2xl font-bold text-[#5750E3] ${isNumbersMoving ? 'prime-under-6-1' : ''} ${secondPrimesMoveUp ? 'second-primes-move-up-left' : ''} ${fadeOutPrimes ? 'prime-fade-out-left-2' : ''}`} style={{ left: 'calc(50% + 0px)', top: 'calc(100% + 130px)', transform: 'translateX(-50%)' }}>2</div>
											)}
											{showSecondPrimes && showMultiplicationSymbols && (
												<div className={`absolute text-xl font-bold text-[#5750E3] ${multiplicationSymbolsFadeOut ? 'multiplication-symbols-fade-out' : 'multiplication-symbols-fade-in'}`} style={{ left: 'calc(50% - 36px)', top: 'calc(100% + 3px)', transform: 'translateX(-50%)' }}>×</div>
											)}
											{showSeparatingLines && (
												<div className={`absolute w-0.5 bg-[#5750E3] ${separatingLinesFadeOut ? 'separating-lines-fade-out-right' : 'separating-lines-fade-in-right'} ${isNumbersMoving ? 'prime-under-6-1' : ''} ${secondPrimesMoveUp ? 'second-primes-move-up-left' : ''}`} style={{ left: 'calc(50% - 36px)', top: 'calc(100% + 25px)', transform: 'translateX(-50%)' }}></div>
											)}
											{showSecondPrimes && (
												<div className={`absolute text-2xl font-bold text-[#5750E3] ${isNumbersMoving ? 'prime-under-6-2' : ''} ${secondPrimesMoveUp ? 'second-primes-move-up-left' : ''} ${fadeOutPrimes ? 'prime-fade-out-left-3' : ''}`} style={{ left: 'calc(50% + 70px)', top: 'calc(100% + 130px)', transform: 'translateX(-50%)' }}>3</div>
											)}
										</div>
										<div className="relative">
											<div className={`text-4xl font-bold text-black number-text right-factor-tree-18 ${isNumbersMoving ? 'number-move-right' : ''} ${mainNumbersMoveDown ? 'main-numbers-move-down-right' : ''} ${isSmallScreen && (isNumbersMoving || mainNumbersMoveDown) ? 'small-screen-position' : ''} ${finalElementsJumpOut ? 'final-elements-jump-out-right' : ''}`}>18</div>
											{/* Red version of 18 */}
											{showRedElements && (
												<div
													className={`text-4xl font-bold text-red-500 number-text right-factor-tree-18 ${isNumbersMoving ? 'number-move-right' : ''} ${inputsJumpOut ? 'input-two-jump-out' : ''} ${mainNumbersMoveDown ? 'main-numbers-move-down-right' : ''} ${isSmallScreen && (isNumbersMoving || mainNumbersMoveDown) ? 'small-screen-position' : ''} ${redElementsJumpIn ? 'red-elements-jump-in-right' : ''}`}
													style={{ position: 'absolute', top: 0, left: '-1rem', opacity: redElementsJumpIn ? 1 : 0 }}
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
											{/* Purple text for second input - moved outside input container */}
											{solveButtonClicked && showRedElements && purpleTextJumpIn && (
												<div
													style={{
														position: 'absolute',
														top: '-50px',
														left: '55px',
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
											{showLines && (
												<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] right-factor-tree-lines ${isNumbersMoving ? 'line-move-right' : 'line-appear'} ${firstLinesShrink ? (isNumbersMoving ? 'lines-shrink-move-right' : 'lines-shrink-appear') : ''} ${isSmallScreen ? 'small-screen-line-left' : ''}`} style={{ left: '50%' }}></div>
											)}
											{showLines && (
												<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] right-factor-tree-lines ${isNumbersMoving ? 'line-move-right-right' : 'line-appear'} ${firstLinesShrink ? (isNumbersMoving ? 'lines-shrink-move-right-right' : 'lines-shrink-appear') : ''} ${isSmallScreen ? 'small-screen-line-right' : ''}`} style={{ left: '50%' }}></div>
											)}
											{showFirstPrimes && (
												<div className={`absolute text-2xl font-bold text-[#5750E3] prime-text right-factor-tree-2 ${isNumbersMoving ? 'prime-move-right-1' : ''} ${firstPrimesMoveDown ? 'first-primes-move-down-right' : ''} ${fadeOutPrimes ? 'prime-fade-out-right-1' : ''} ${isSmallScreen ? 'small-screen-prime' : ''}`} style={{ left: 'calc(50% - 35px)', top: 'calc(100% + 50px)', transform: 'translateX(-50%)' }}>2</div>
											)}
											{showFirstPrimes && showMultiplicationSymbols && (
												<div className={`absolute text-xl font-bold text-[#5750E3] right-factor-tree-multiplication ${multiplicationSymbolsFadeOut ? 'multiplication-symbols-fade-out' : 'multiplication-symbols-fade-in'} ${isSmallScreen ? 'small-screen-multiplication' : ''}`} style={{ left: 'calc(50% + 35px)', top: 'calc(100% + 3px)', transform: 'translateX(-50%)' }}>×</div>
											)}
											{showFirstPrimes && (
												<div className={`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-9 ${isNumbersMoving ? 'prime-move-right-2-no-opacity' : ''} ${nonPrimesFadeOut ? 'non-primes-fade-out-right' : ''} ${isSmallScreen ? 'small-screen-prime' : ''}`} style={{ left: 'calc(50% + 35px)', top: 'calc(100% + 50px)', transform: 'translateX(-50%)', opacity: fadeNonPrimes ? 0.5 : 1 }}>9</div>
											)}
											{showSecondLines && (
												<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] right-factor-tree-lines ${isNumbersMoving ? 'line-under-9-left' : 'line-appear'} ${secondLinesShrink ? (isNumbersMoving ? 'lines-shrink-under-9-left' : 'lines-shrink-appear') : ''} ${isSmallScreen ? 'small-screen-line-left' : ''}`} style={{ left: 'calc(50% + 35px)', top: 'calc(100% + 80px)' }}></div>
											)}
											{showSecondLines && (
												<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] right-factor-tree-lines ${isNumbersMoving ? 'line-under-9-right' : 'line-appear'} ${secondLinesShrink ? (isNumbersMoving ? 'lines-shrink-under-9-right' : 'lines-shrink-appear') : ''} ${isSmallScreen ? 'small-screen-line-right' : ''}`} style={{ left: 'calc(50% + 35px)', top: 'calc(100% + 80px)' }}></div>
											)}
											{showSecondPrimes && (
												<div className={`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-3-left ${isNumbersMoving ? 'prime-under-9-1' : ''} ${secondPrimesMoveUp ? 'second-primes-move-up-right' : ''} ${fadeOutPrimes ? 'prime-fade-out-right-2' : ''}`} style={{ left: 'calc(50% + 0px)', top: 'calc(100% + 130px)', transform: 'translateX(-50%)' }}>3</div>
											)}
											{showSecondPrimes && showMultiplicationSymbols && (
												<div className={`absolute text-xl font-bold text-[#5750E3] right-factor-tree-multiplication ${multiplicationSymbolsFadeOut ? 'multiplication-symbols-fade-out' : 'multiplication-symbols-fade-in'}`} style={{ left: 'calc(50% + 103px)', top: 'calc(100% + 3px)', transform: 'translateX(-50%)' }}>×</div>
											)}
											{showSeparatingLinesRight && (
												<div className={`absolute w-0.5 bg-[#5750E3] right-factor-tree-lines ${separatingLinesFadeOut ? 'separating-lines-fade-out-right-side-left' : 'separating-lines-fade-in-right-side-left'} ${isNumbersMoving ? 'prime-under-9-1' : ''} ${secondPrimesMoveUp ? 'second-primes-move-up-right' : ''}`} style={{ left: 'calc(50% + 103px)', top: 'calc(100% + 25px)', transform: 'translateX(-50%)' }}></div>
											)}
											{showSecondPrimes && (
												<div className={`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-3-right ${isNumbersMoving ? 'prime-under-9-2' : ''} ${secondPrimesMoveUp ? 'second-primes-move-up-right' : ''} ${fadeOutPrimes ? 'prime-fade-out-right-3' : ''}`} style={{ left: 'calc(50% + 70px)', top: 'calc(100% + 130px)', transform: 'translateX(-50%)' }}>3</div>
											)}
											{showSeparatingLinesRight && (
												<div className={`absolute w-0.5 bg-[#5750E3] right-factor-tree-lines ${separatingLinesFadeOut ? 'separating-lines-fade-out-right-side-right' : 'separating-lines-fade-in-right-side-right'} ${isNumbersMoving ? 'prime-under-9-2' : ''} ${secondPrimesMoveUp ? 'second-primes-move-up-right' : ''}`} style={{ left: 'calc(50% + 70px)', top: 'calc(100% + 25px)', transform: 'translateX(-50%)' }}></div>
											)}
											{showPowerExpressions && (
												<div className={`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-2 ${powerExpressionsFadeOut ? 'power-expressions-fade-out' : 'power-expressions-fade-in'} ${isNumbersMoving ? 'prime-under-9-2' : ''} ${secondPrimesMoveUp ? 'second-primes-move-up-right' : ''}`} style={{ left: 'calc(50% + 28px)', top: 'calc(100% + 75px)', transform: 'translateX(-50%)' }}>2</div>
											)}
											{showPowerExpressions && (
												<div className={`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-multiplication ${powerExpressionsFadeOut ? 'power-expressions-fade-out' : 'power-expressions-fade-in'} ${isNumbersMoving ? 'prime-under-9-2' : ''} ${secondPrimesMoveUp ? 'second-primes-move-up-right' : ''}`} style={{ left: 'calc(50% + 62px)', top: 'calc(100% + 75px)', transform: 'translateX(-50%)' }}>×</div>
											)}
											{showPowerExpressions && (
												<div className={`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-3-right ${exponentsMoveTogether ? 'exponent-move-up-left' : 'power-expressions-fade-in'} ${exponentsJumpOut ? 'exponents-jump-out-right' : ''} ${isNumbersMoving ? 'prime-under-9-2' : ''} ${secondPrimesMoveUp ? 'second-primes-move-up-right' : ''}`} style={{ left: 'calc(50% + 97px)', top: 'calc(100% + 75px)', transform: 'translateX(-50%)' }}>3²</div>
											)}
											{showReplacementNumbers && (
												<div className={`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-9 ${replacementNumbersJumpIn ? 'replacement-numbers-jump-in-right' : ''} ${replacementNumbersFadeOut ? 'replacement-numbers-fade-out-right' : ''}`} style={{ left: 'calc(50% + 97px)', top: 'calc(100% + 75px)', transform: 'translate(-70px, -60px)', opacity: replacementNumbersJumpIn ? 1 : 0 }}>9</div>
											)}
											{showFinalMultiplication && (
												<div className={`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-multiplication final-multiplication-fade-in ${multiplicationSymbolFadeOut ? ' final-multiplication-fade-out' : ''}`} style={{ left: '50%', top: 'calc(100% + 75px)', transform: 'translateX(-50%)' }}>×</div>
											)}
											{showLCMText && (
												<div className={`absolute text-2xl font-bold text-gray-700 lcm-text-fade-in ${lcmTextMoveRight ? 'lcm-text-move-right' : ''}`} style={{ left: '50%', top: 'calc(100% + 125px)', transform: 'translateX(-50%)' }}>LCM&nbsp;=</div>
											)}
											{/* Red version of LCM = */}
											{showRedElements && (
												<div
													className={`absolute text-2xl font-bold text-gray-700 lcm-text-fade-in ${lcmTextMoveDown ? 'lcm-text-move-down' : ''} ${redElementsJumpIn ? 'red-elements-jump-in' : ''}`}
													style={{ left: '135%', top: 'calc(100% + 125px)', transform: 'translateX(-50%) translate(-88px, -110px)', opacity: 1 }}
												>
													LCM&nbsp;=
												</div>
											)}
											{showRedElements && (
												<div
													className={`absolute text-2xl font-bold text-[#5750E3] ${lcmAnswerMoveDown ? 'lcm-answer-move-down' : ''}`}
													style={{ left: '78%', top: 'calc(100% + 75px)', transform: 'translateX(-50%) translate(-7px, -60px)', opacity: 1 }}
												>
													{inputsModified ? (
														<span style={{ display: 'inline-flex', alignItems: 'center', position: 'relative' }}>
															?
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
											{showFinalResult && (
												<div className={`absolute text-2xl font-bold text-[#5750E3] ${finalResultJumpIn ? 'final-result-jump-in' : ''}`} style={{ left: '40%', top: 'calc(100% + 75px)', transform: 'translateX(-50%)', opacity: finalResultJumpIn ? 1 : 0 }}>{inputsModified ? '?' : '36'}</div>
											)}
											{/* Red version of 36 */}
											{showRedElements && (
												<div
													className={`absolute text-2xl font-bold text-[#5750E3] ${lcmAnswerMoveDown ? 'lcm-answer-move-down' : ''}`}
													style={{ left: '78%', top: 'calc(100% + 75px)', transform: 'translateX(-50%) translate(-7px, -60px)', opacity: redElementsJumpIn ? 1 : 0 }}
												>
													{inputsModified ? '?' : '36'}
												</div>
											)}
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
												Welcome to the LCM Explorer! Click the button below to begin.
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
										<div className="flexi-wave-bubble-container">
											<img src={FlexiWave} alt="Flexi Wave" className="flexi-wave-bottom-left flexi-telescope-fade-in" />
											<div className="speech-bubble speech-bubble-fade-in">
												Enter your own numbers and find their <b>Least Common Multiple</b>!
											</div>
										</div>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LCM;