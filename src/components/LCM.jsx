import React, { useState, useEffect } from 'react';

// Assets Imports
import FlexiTeacher from '../assets/All Flexi Poses/PNG/Flexi_Teacher.png';
import FlexiTelescope from '../assets/All Flexi Poses/PNG/Flexi_Telescope.png';
import FlexiPoint from '../assets/All Flexi Poses/PNG/Flexi_Point.png';
import FlexiThumbsUp from '../assets/All Flexi Poses/PNG/Flexi_ThumbsUp.png';
import FlexiStars from '../assets/All Flexi Poses/PNG/Flexi_Stars.png';
import FlexiExcited from '../assets/All Flexi Poses/PNG/Flexi_Excited.png';

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

// Function Imports
import { DynamicFactorTree } from './DynamicFactorTrees.jsx'

const LCM = () => {
	// State Management	
	const [isAnimating, setIsAnimating] = useState(false);

	// Introduction
	const [showIntroduction, setShowIntroduction] = useState(true);
	const [removeIntroduction, setRemoveIntroduction] = useState(false);

	// Step 1
	const [showInitial12And18, setShowInitial12And18] = useState(false);
	const [showInitialLCMText, setShowInitialLCMText] = useState(false);
	const [showStep1Flexi, setShowStep1Flexi] = useState(false);
	const [showStep1Button, setShowStep1Button] = useState(false);
	
	// Step 1 -> Step 2
	const [removeInitial12And18, setRemoveInitial12And18] = useState(true);
	const [removeInitialLCMText, setRemoveInitialLCMText] = useState(true);
	
	const [removeStep1, setRemoveStep1] = useState(true);
	const [move12And18Up, setMove12And18Up] = useState(false);
	const [showFirstLayerStaticTreeLines, setShowFirstLayerStaticTreeLines] = useState(false);
	const [showFirstLayerStaticTreeNodes, setShowFirstLayerStaticTreeNodes] = useState(false);
	const [hideStaticTreeNonPrimes, setHideStaticTreeNonPrimes] = useState(false);
	const [showSecondLayerStaticTreeLines, setShowSecondLayerStaticTreeLines] = useState(false);
	const [showSecondLayerStaticTreeNodes, setShowSecondLayerStaticTreeNodes] = useState(false);
	const [showStep2Flexi, setShowStep2Flexi] = useState(false);
	const [showStep2Button, setShowStep2Button] = useState(false);
	
	// Step 2 -> Step 3
	const [removeStep2, setRemoveStep2] = useState(true);
	const [hideFirstLayerStaticTreeLines, setHideFirstLayerStaticTreeLines] = useState(false);
	const [hideFirstLayerStaticTreeNodes, setHideFirstLayerStaticTreeNodes] = useState(false);
	const [hideSecondLayerStaticTreeLines, setHideSecondLayerStaticTreeLines] = useState(false);
	const [moveStaticPrimes, setMoveStaticPrimes] = useState(false);
	const [removeStaticTrees, setRemoveStaticTrees] = useState(false);
	const [showFirstLayerExpressionElements, setShowFirstLayerExpressionElements] = useState(false);
	const [showConvergingLines, setShowConvergingLines] = useState(false);
	const [showSecondLayerExpressionElements, setShowSecondLayerExpressionElements] = useState(false);
	const [showStep3Flexi, setShowStep3Flexi] = useState(false);
	const [showStep3Button, setShowStep3Button] = useState(false);

	// Step 3 -> Step 4
	const [removeStep3, setRemoveStep3] = useState(true);
	const [hideFirstLayerExpressionElements, setHideFirstLayerExpressionElements] = useState(false);
	const [hideConvergingLines, setHideConvergingLines] = useState(false);
	const [movePowersExpression, setMovePowersExpression] = useState(false);
	const [showSolvingStep1, setShowSolvingStep1] = useState(false);
	const [showSolvingStep2, setShowSolvingStep2] = useState(false);
	const [showSolvingStep3, setShowSolvingStep3] = useState(false);
	const [removeSolvingSteps, setRemoveSolvingSteps] = useState(true);
	const [highlightAnswer, setHighlightAnswer] = useState(false);
	const [showStep4Flexi, setShowStep4Flexi] = useState(false);
	const [showStep4Button, setShowStep4Button] = useState(false);

	// Step 4 -> Solve Your Own
	const [removeStep4, setRemoveStep4] = useState(true);
	const [showSolveFlexi, setShowSolveFlexi] = useState(false);
	const [removeSolvingStep1, setRemoveSolvingStep1] = useState(false);
	const [removeSolvingStep2, setRemoveSolvingStep2] = useState(false);
	const [removeSecondLayerExpressionElements, setRemoveSecondLayerExpressionElements] = useState(true);
	const [showInputs, setShowInputs] = useState(false);
	const [removeInputs, setRemoveInputs] = useState(true);
	const [showSkipFlexi, setShowSkipFlexi] = useState(false);
	const [removeSkipFlexi, setRemoveSkipFlexi] = useState(true);

	// Input value related states
	const [inputValue1, setInputValue1] = useState('12');
	const [inputValue2, setInputValue2] = useState('18');
	const [inputsModified, setInputsModified] = useState(false);
	const [hideSolveButton, setHideSolveButton] = useState(false);
	const [hideInitial12And18, setHideInitial12And18] = useState(false);
	
	const [removeSolveStep, setRemoveSolveStep] = useState(true);

	// Dynamic Tree States
	const [showDynamicFactorTrees, setShowDynamicFactorTrees] = useState(false);
	const [showDynamicFactorTreeHeads, setShowDynamicFactorTreeHeads] = useState(false);
	const [tree1Complete, setTree1Complete] = useState(false);
	const [tree2Complete, setTree2Complete] = useState(false);
	const [showTree1Result, setShowTree1Result] = useState(false);
	const [showTree2Result, setShowTree2Result] = useState(false);

	// Tree animation callback handler
	const handleTreeAnimationComplete = (treeId, animationType) => {
		if (treeId === 'input1-tree') {
			setTree1Complete(true);
			setTimeout(() => {
				setShowTree1Result(true);
			}, 300); // Small delay after tree completes
		} else if (treeId === 'input2-tree') {
			setTree2Complete(true);
			setTimeout(() => {
				setShowTree2Result(true);
			}, 300); // Small delay after tree completes
		}
	};

	// Step Progression Animation Functions
	// Introduction -> Try Your Own
	const handleTryYourOwnButtonClick = () => {
		setShowIntroduction(false);
		setTimeout(() => {
			setRemoveIntroduction(true);
			setTimeout(() => {
				setRemoveInputs(false);
				setShowInputs(true);
				setTimeout(() => {
					setRemoveSkipFlexi(false);
					setShowSkipFlexi(true);
				}, 500);
			}, 500);
		}, 500);
	}

	// Introduction -> Step 1
	const handleBeginLessonButtonClick = () => {
		setShowIntroduction(false);
		setTimeout(() => {
			setRemoveIntroduction(true);
			setRemoveInitial12And18(false);
			setShowInitial12And18(true);
			setTimeout(() => {
				setRemoveInitialLCMText(false);
				setShowInitialLCMText(true);
				setTimeout(() => {
					setRemoveStep1(false);
					setShowStep1Flexi(true);
					setTimeout(() => {
						setShowStep1Button(true);
					}, 600);
				}, 800);
			}, 400);
		}, 800);
	}

	// Step 1 -> Step 2
	const handleContinueButton1Click = () => {
		setShowStep1Flexi(false);
		setShowStep1Button(false);
		setTimeout(() => {
			setRemoveStep1(true);
			setShowInitialLCMText(false);
			setTimeout(() => {
				setRemoveInitialLCMText(true);
				setMove12And18Up(true);
				setTimeout(() => {
					setShowFirstLayerStaticTreeLines(true);
					setTimeout(() => {
						setShowFirstLayerStaticTreeNodes(true);
						setTimeout(() => {
							setHideStaticTreeNonPrimes(true);
								setTimeout(() => {
								setShowSecondLayerStaticTreeLines(true);
								setTimeout(() => {
									setShowSecondLayerStaticTreeNodes(true);
									setTimeout(() => {
										setRemoveStep2(false);
										setShowStep2Flexi(true);
										setTimeout(() => {
											setShowStep2Button(true);
										}, 600);
									}, 800);
								}, 300);
							}, 300);
						}, 300);
					}, 300);
				}, 500);
			}, 800);
		}, 800);
	}

	// Step 2 -> Step 3
	const handleContinueButton2Click = () => {
		setShowStep2Flexi(false);
		setShowStep2Button(false);
		setTimeout(() => {
			setHideFirstLayerStaticTreeLines(true);
			setTimeout(() => {
				setHideFirstLayerStaticTreeNodes(true);
				setTimeout(() => {
					setHideSecondLayerStaticTreeLines(true);
					setTimeout(() => {
						setMoveStaticPrimes(true);
						setTimeout(() => {
							setShowFirstLayerExpressionElements(true);
							setTimeout(() => {
								setShowConvergingLines(true);
								setTimeout(() => {
									setRemoveSecondLayerExpressionElements(false);
									setShowSecondLayerExpressionElements(true);
									setTimeout(() => {
										setRemoveStep3(false);
										setShowStep3Flexi(true);
										setTimeout(() => {
											setShowStep3Button(true);
										}, 600);
									}, 600);
								}, 500);
							}, 500);
						}, 500);
					}, 500);
				}, 400);
			}, 400);
		}, 400);
	}

	// Step 3 -> Step 4
	const handleContinueButton3Click = () => {
		setShowStep3Flexi(false);
		setShowStep3Button(false);
		setTimeout(() => {
			setRemoveStep3(true);
			setHideFirstLayerExpressionElements(true);
			setTimeout(() => {
				setHideConvergingLines(true);
				setTimeout(() => {
					setMovePowersExpression(true);
					setTimeout(() => {
						setRemoveSolvingSteps(false);
						setShowSolvingStep1(true);
						setTimeout(() => {
							setShowSolvingStep2(true);
							setTimeout(() => {
								setShowSolvingStep3(true);
								setTimeout(() => {
									setHighlightAnswer(true);
									setTimeout(() => {
										setRemoveStep4(false);
										setShowStep4Flexi(true);
										setTimeout(() => {
											setShowStep4Button(true);
											setShowFirstLayerStaticTreeLines(false);
											setShowFirstLayerStaticTreeNodes(false);
											setShowSecondLayerStaticTreeLines(false);
											setShowSecondLayerStaticTreeNodes(false);
											setShowConvergingLines(false);
										}, 600);
									}, 500);
								}, 500);
							}, 500);
						}, 500);
					}, 500);
				}, 500);
			}, 500);
		}, 400);
	}

	// Step 4 -> Solve Your Own
	const handleContinueButton4Click = () => {
		setShowStep4Flexi(false);
		setShowStep4Button(false);
		setTimeout(() => {
			setRemoveStep4(true);
			setTimeout(() => {
				setShowSecondLayerExpressionElements(false);
				setTimeout(() => {
					setRemoveSecondLayerExpressionElements(true);
					setRemoveSolvingStep1(true);
					setTimeout(() => {
						setShowSolvingStep1(false);
						setRemoveSolvingStep2(true);
						setTimeout(() => {
							setShowSolvingStep2(false);
							setTimeout(() => {
								setHideInitial12And18(true);
								setTimeout(() => {
									setRemoveInitial12And18(true);
									setRemoveInputs(false);
									setShowInputs(true);
									setTimeout(() => {
										setRemoveStaticTrees(true);
										setRemoveSolveStep(false)
										setShowSolveFlexi(true);
									}, 400);
								}, 400);
							}, 100);
						}, 400);
					}, 400);
				}, 400);
			}, 400);
		}, 400);
	}

	// Solve Button Click
	const handleSolveButtonClick = () => {
		// Reset tree states for new solve
		setTree1Complete(false);
		setTree2Complete(false);
		setShowTree1Result(false);
		setShowTree2Result(false);

		setHideSolveButton(true);
		setTimeout(() => {
			setShowInputs(false);
			setTimeout(() => {
				setShowDynamicFactorTreeHeads(true);
				setTimeout(() => {
					setShowDynamicFactorTrees(true);
				}, 800);
			}, 500);
		}, 500);
	}

	return (
		<Container text="LCM Explorer" showResetButton={true}>
			{/* Elements on Left Container */}
			<div className="left-container">
				{!removeInitial12And18 &&
						<div className={`text-4xl font-bold text-black absolute top-[20%] left-[50%] translate-x-[-50%]
						${hideInitial12And18 ? 'shrink-out-initial-12-and-18' : move12And18Up ? 'move-12-and-18-animation' : showInitial12And18 ? 'fade-in-up-tr-animation' : ''}
						`}
						>{inputValue1}</div>
				}
				{/* Static Factor Tree for 12 */}
				{!removeStaticTrees &&
					<div className={`absolute top-[0%] left-[50%] translate-x-[-50%] h-[100%] w-[200px]`}>
						{/* Lines from main number 12 */}
						{showFirstLayerStaticTreeLines && (
							<div className="absolute top-[20%] left-[50%] translate-x-[-50%]">
								<div id={`${hideFirstLayerStaticTreeLines ? 'remove-left-line' : ''}`} className={`factor-tree-line static-tree-line left-line`}></div>
								<div id={`${hideFirstLayerStaticTreeLines ? 'remove-right-line' : ''}`} className={`factor-tree-line static-tree-line right-line`}></div>
							</div>
						)}
						{/* First layer nodes (2 and 6) */}
						{showFirstLayerStaticTreeNodes && (
							<div className="absolute top-[28%] left-[50%] translate-x-[-50%] w-[150px] h-[100px]">
								<div id={`${hideFirstLayerExpressionElements ? 'fade-out-expression-first-layer-2s' : ''}`} className={`absolute left-[26%] text-2xl font-bold text-[#5750E3] static-tree-node ${moveStaticPrimes ? 'move-static-first-layer-2s' : ''}`}>2</div>
								<div id={`${hideFirstLayerStaticTreeNodes ? 'non-prime-remove-animation' : hideStaticTreeNonPrimes ? 'non-prime-fade' : ''}`} className={`absolute left-[61%] text-2xl font-bold text-[#5750E3] static-tree-node`}>6</div>
							</div>
						)}
						{/* Lines under 6 */}
						{showSecondLayerStaticTreeLines && (
							<div className="absolute top-[36%] left-[62%] translate-x-[-50%]">
								<div id={`${hideSecondLayerStaticTreeLines ? 'remove-left-line' : ''}`} className={`factor-tree-line static-tree-line left-line`}></div>
								<div id={`${hideSecondLayerStaticTreeLines ? 'remove-right-line' : ''}`} className={`factor-tree-line static-tree-line right-line`}></div>
							</div>
						)}
						{/* Second layer nodes under 6 (2 and 3) */}
						{showSecondLayerStaticTreeNodes && (
							<div className="absolute top-[44%] left-[63%] translate-x-[-50%] w-[150px] h-[100px]">
								<div className={`absolute top-[-84%] left-[13%] text-2xl font-bold text-[#5750E3] ${hideFirstLayerExpressionElements ? 'shrink-out-animation' : showFirstLayerExpressionElements ? 'fade-in-up-animation' : 'no-show-animation'}`}>×</div>
								<div className={`absolute left-[26%] text-2xl font-bold text-[#5750E3] static-tree-node ${hideFirstLayerExpressionElements ? 'fade-out-expression-second-layer-2s' : moveStaticPrimes ? 'move-static-second-layer-2s' : ''}`}>2</div>
								<div className={`absolute top-[-84%] left-[41%] text-2xl font-bold text-[#5750E3] ${hideFirstLayerExpressionElements ? 'shrink-out-animation' : showFirstLayerExpressionElements ? 'fade-in-up-animation' : 'no-show-animation'}`}>×</div>
								<div className={`absolute left-[61%] text-2xl font-bold text-[#5750E3] static-tree-node ${hideFirstLayerExpressionElements ? 'fade-out-expression-second-layer-3s' : moveStaticPrimes ? 'move-static-second-layer-3s' : ''}`}>3</div>
							</div>
						)}
						{/* Converging lines */}
						{showConvergingLines && (
							<div className={`absolute top-[32%] left-[48.5%] ${hideConvergingLines ? 'fade-out-in-place-animation' : showConvergingLines ? 'fade-in-up-animation' : 'no-show-animation'}`}>
							<div className="factor-tree-line converging-line left-converging-line"></div>
							<div className="factor-tree-line converging-line right-converging-line"></div>
						</div>	
						)}
						{/* Second layer Expression Elements */}
						{!removeSecondLayerExpressionElements && (
							<div className={`absolute top-[40%] left-[33%] flex w-[70px] justify-between items-center ${!showSecondLayerExpressionElements ? 'fade-out-power-expression-elements' : movePowersExpression ? 'move-powers-expression' : ''}`}>
								<div className="text-2xl font-bold text-[#5750E3] static-tree-node">2²</div>
								<div className="text-2xl font-bold text-[#5750E3] static-tree-node">×</div>
								<div className="text-2xl font-bold text-[#5750E3] static-tree-node">3</div>
							</div>
						)}
					</div>
				}

				{/* Input */}
				{!removeInputs && (
					<input 
						type="number" 
						className={`inputs absolute top-[8.5%] left-[35.5%] text-2xl font-bold text-[#5750E3] text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none z-50
							${showInputs ? "grow-in-animation" : "shrink-out-animation"}`}
						value={inputValue1}
						onChange={(e) => {
							const value = e.target.value;
							if (value === '' || /^\d+$/.test(value)) {
								const numValue = parseInt(value) || 0;
								if (numValue > 25) {
									setInputValue1('25');
									if (value !== '12') setInputsModified(true);
								} else if (numValue >= 0 || value === '') {
									setInputValue1(value);
									if (value !== '12') setInputsModified(true);
								}
							}
						}}
						onBlur={(e) => {
							if (e.target.value === '') {
								setInputValue1('1');
								setInputsModified(true);
							}
						}}
						onKeyDown={(e) => {
							if (e.key === '-' || e.key === 'e' || e.key === 'E' || e.key === '.') {
								e.preventDefault();
							}
						}}
						max="25"
						min="1"
					/>
				)}

				{/* Head of Dynamic Factor Tree for Left Container */}
				{showDynamicFactorTreeHeads && (
					<div className="absolute top-[11%] left-[50%] translate-x-[-50%]">
						<div className="text-4xl font-bold static-tree-node">{inputValue1}</div>
					</div>
				)}
				{/* Dynamic Factor Tree for Left Container */}
				{showDynamicFactorTrees && (
					<DynamicFactorTree 
						number={inputValue1} 
						show={showDynamicFactorTrees}
						position={{ left: '50%', top: '52%' }}
						treeId="input1-tree"
						onAnimationComplete={handleTreeAnimationComplete}
					/>
				)}
			</div>

			{/* Elements on Right Container */}
			<div className="right-container">
				{!removeInitial12And18 &&
						<div className={`text-4xl font-bold text-black absolute top-[20%] left-[50%] translate-x-[-50%]
						${hideInitial12And18 ? 'shrink-out-initial-12-and-18' : move12And18Up ? 'move-12-and-18-animation' : showInitial12And18 ? 'fade-in-up-tr-animation' : ''}
						`}
						>{inputValue2}</div>
				}
				{/* Static Factor Tree for 18 */}
				{!removeStaticTrees &&
					<div className={`absolute top-[0%] left-[50%] translate-x-[-50%] h-[100%] w-[200px]`}>
					{/* Lines from main number 18 */}
					{showFirstLayerStaticTreeLines && (
						<div className="absolute top-[20%] left-[50%] translate-x-[-50%]">
							<div id={`${hideFirstLayerStaticTreeLines ? 'remove-left-line' : ''}`} className={`factor-tree-line static-tree-line left-line`}></div>
							<div id={`${hideFirstLayerStaticTreeLines ? 'remove-right-line' : ''}`} className={`factor-tree-line static-tree-line right-line`}></div>
						</div>
					)}
					{/* First layer nodes (2 and 9) */}
					{showFirstLayerStaticTreeNodes && (
						<div className="absolute top-[28%] left-[50%] translate-x-[-50%] w-[150px] h-[100px]">
							<div id={`${hideFirstLayerExpressionElements ? 'fade-out-expression-first-layer-2s' : ''}`} className={`absolute left-[26%] text-2xl font-bold text-[#5750E3] static-tree-node ${moveStaticPrimes ? 'move-static-first-layer-2s' : ''}`}>2</div>
							<div id={`${hideFirstLayerStaticTreeNodes ? 'non-prime-remove-animation' : hideStaticTreeNonPrimes ? 'non-prime-fade' : ''}`} className={`absolute left-[62%] text-2xl font-bold text-[#5750E3] static-tree-node`}>9</div>
						</div>
					)}
					{/* Lines under 9 */}
					{showSecondLayerStaticTreeLines && (
						<div className="absolute top-[36%] left-[62%] translate-x-[-50%]">
							<div id={`${hideSecondLayerStaticTreeLines ? 'remove-left-line' : ''}`} className={`factor-tree-line static-tree-line left-line`}></div>
							<div id={`${hideSecondLayerStaticTreeLines ? 'remove-right-line' : ''}`} className={`factor-tree-line static-tree-line right-line`}></div>
						</div>
					)}
					{/* Second layer nodes under 9 (3 and 3) */}
					{showSecondLayerStaticTreeNodes && (
						<div className="absolute top-[44%] left-[63%] translate-x-[-50%] w-[150px] h-[100px]">
							<div className={`absolute top-[-84%] left-[13%] text-2xl font-bold text-[#5750E3] ${hideFirstLayerExpressionElements ? 'shrink-out-animation' : showFirstLayerExpressionElements ? 'fade-in-up-animation' : 'no-show-animation'}`}>×</div>
							<div className={`absolute left-[26%] text-2xl font-bold text-[#5750E3] static-tree-node ${hideFirstLayerExpressionElements ? 'fade-out-expression-second-layer-2s' : moveStaticPrimes ? 'move-static-second-layer-2s' : ''}`}>3</div>
							<div className={`absolute top-[-84%] left-[41%] text-2xl font-bold text-[#5750E3] ${hideFirstLayerExpressionElements ? 'shrink-out-animation' : showFirstLayerExpressionElements ? 'fade-in-up-animation' : 'no-show-animation'}`}>×</div>
							<div className={`absolute left-[61%] text-2xl font-bold text-[#5750E3] static-tree-node ${hideFirstLayerExpressionElements ? 'fade-out-expression-second-layer-3s' : moveStaticPrimes ? 'move-static-second-layer-3s' : ''}`}>3</div>
						</div>
					)}
					{/* Converging Lines */}
					{showConvergingLines && (
						<div className={`absolute top-[32%] left-[69.5%] ${hideConvergingLines ? 'fade-out-in-place-animation' : showConvergingLines ? 'fade-in-up-animation' : 'no-show-animation'}`}>
							<div className="factor-tree-line converging-line left-converging-line"></div>
							<div className="factor-tree-line converging-line right-converging-line"></div>
						</div>
					)}
					{/* Second layer Expression Elements */}
					{!removeSecondLayerExpressionElements && (
							<div className={`absolute top-[40%] left-[33%] flex w-[70px] justify-between items-center ${!showSecondLayerExpressionElements ? 'fade-out-power-expression-elements' : movePowersExpression ? 'move-powers-expression' : ''}`}>
								<div className="text-2xl font-bold text-[#5750E3] static-tree-node">2</div>
								<div className="text-2xl font-bold text-[#5750E3] static-tree-node">×</div>
								<div className="text-2xl font-bold text-[#5750E3] static-tree-node">3²</div>
							</div>
						)}
					</div>
				}		
				{/* Input */}
				{!removeInputs && (
					<input 
						type="number" 
						className={`inputs absolute top-[8.5%] right-[35%] text-2xl font-bold text-[#5750E3] text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none z-50
							${showInputs ? 'grow-in-animation' : 'shrink-out-animation'}`}
						value={inputValue2}
						onChange={(e) => {
							const value = e.target.value;
							if (value === '' || /^\d+$/.test(value)) {
								const numValue = parseInt(value) || 0;
								if (numValue > 25) {
									setInputValue2('25');
									if (value !== '18') setInputsModified(true);
								} else if (numValue >= 0 || value === '') {
									setInputValue2(value);
									if (value !== '18') setInputsModified(true);
								}
							}
						}}
						onBlur={(e) => {
							if (e.target.value === '') {
								setInputValue2('1');
								setInputsModified(true);
							}
						}}
						onKeyDown={(e) => {
							if (e.key === '-' || e.key === 'e' || e.key === 'E' || e.key === '.') {
								e.preventDefault();
							}
						}}
						max="25"
						min="1"
					/>
				)}

				{/* Head of Dynamic Factor Tree for Right Container */}
				{showDynamicFactorTreeHeads && (
					<div className="absolute top-[11%] left-[50%] translate-x-[-50%]">
						<div className="text-4xl font-bold static-tree-node">{inputValue2}</div>
					</div>
				)}
				{/* Dynamic Factor Tree for Right Container */}
				{showDynamicFactorTrees && (
					<DynamicFactorTree 
						number={inputValue2} 
						show={showDynamicFactorTrees}
						position={{ left: '50%', top: '52%' }}
						treeId="input2-tree"
						onAnimationComplete={handleTreeAnimationComplete}
					/>
				)}
			</div>

			{/* Elements Positioned Absolutely */}
			{!removeInitialLCMText &&
				<div className={`text-3xl font-bold text-gray-600 absolute top-[40%] left-[50%] translate-x-[-50%]
				${showInitialLCMText ? 'fade-in-up-tr-animation' : 'fade-out-down-tr-animation'}
				`}
				>LCM = ?</div>
			}
			{!removeSolvingSteps && (
				<div className={`absolute top-[0%] left-[50%] translate-x-[-50%] w-[100%] h-[100%]`}>
					{showSolvingStep1 && (
						<div className={`powers-expression-font-size text-2xl font-bold text-gray-600 absolute top-[32%] left-[50%] translate-x-[-50%]
							${removeSolvingStep1 ? 'fade-out-down-tr-animation' : 'fade-in-up-tr-animation'}
							`}>LCM = 2² × 3²</div>
					)}
					{showSolvingStep2 && (
						<div className={`powers-expression-font-size text-2xl font-bold text-gray-600 absolute top-[42%] left-[50%] translate-x-[-50%]
							${removeSolvingStep2 ? 'fade-out-down-tr-animation' : 'fade-in-up-tr-animation'}
							`}>LCM = 4 × 9</div>
					)}
					{showSolvingStep3 && (
						<div className={`powers-expression-font-size text-2xl font-bold text-gray-600 absolute top-[52%] left-[50%] translate-x-[-50%]
							${showSolvingStep3 ? 'fade-in-up-tr-animation' : 'fade-out-down-tr-animation'}
							`}>LCM = 
							<span className={`${highlightAnswer ? 'text-[#008545]' : 'text-gray-600'}`}> 36</span>
						</div>
					)}
				</div>
			)}

			{/* Introduction Step */}
			{!removeIntroduction &&
				<>
					<FlexiText 
						className={`${showIntroduction ? '' : 'fade-out-up-animation'}`}
					>Welcome to the LCM Explorer! Click one of the buttons below to begin the lesson or try solving you own numbers.</FlexiText>
					<MultiGlowButton
						buttons={[
							{ text: 'Begin Lesson', onClick: () => {handleBeginLessonButtonClick()} },
							{ text: 'Try Your Own', onClick: () => {handleTryYourOwnButtonClick()} },
						]}
					/>
				</>
			}
			{/* Step 1 */}
			{!removeStep1 &&
				<>
					<FlexiText
						className={`${showStep1Flexi ? 'fade-in-up-animation' : 'fade-out-up-animation'}`}
						flexiImage={FlexiPoint}
					>To find the Least Common Multiple of two numbers, we first need to use prime factorization.
					</FlexiText>
					<GlowButton
						className={`${showStep1Button ? 'grow-in-animation' : 'no-show-animation'}`}
						onClick={() => {handleContinueButton1Click()}}
					>Continue
					</GlowButton>
				</>
			}

			{/* Step 2 */}
			{!removeStep2 &&
				<>
					<FlexiText
						className={`${showStep2Flexi ? 'fade-in-up-animation' : 'fade-out-up-animation'}`}
						flexiImage={FlexiTelescope}
					>
						Once we break down the numbers into their prime factors, we can find the LCM by taking the highest power of each prime factor.
					</FlexiText>
					<GlowButton
						className={`${showStep2Button ? 'grow-in-animation' : 'no-show-animation'}`}
						onClick={() => {handleContinueButton2Click()}}
					>Continue
					</GlowButton>
				</>
			}

			{/* Step 3 */}
			{!removeStep3 &&
				<>
					<FlexiText
						className={`${showStep3Flexi ? 'fade-in-up-animation' : 'fade-out-up-animation'}`}
						flexiImage={FlexiExcited}
					>
						The prime factors we have here are 2 and 3. After simplifying, we see that the highest power primes of each would be 2² and 3².
					</FlexiText>
					<GlowButton
						className={`${showStep3Button ? 'grow-in-animation' : 'no-show-animation'}`}
						onClick={() => {handleContinueButton3Click()}}
					>Continue
					</GlowButton>
				</>
			}

			{/* Step 4 */}
			{!removeStep4 &&
				<>
					<FlexiText
						className={`${showStep4Flexi ? 'fade-in-up-animation' : 'fade-out-up-animation'}`}
						flexiImage={FlexiStars}
					>
						Now we can take those highest powers and multiply them together to get the LCM!
					</FlexiText>
					<GlowButton
						className={`${showStep4Button ? 'grow-in-animation' : 'no-show-animation'}`}
						onClick={() => {handleContinueButton4Click()}}
					>Continue
					</GlowButton>
				</>
			}

			{/* Step 5 */}
			{!removeSolveStep &&
				<>
					<FlexiText
						className={`${showSolveFlexi ? 'fade-in-up-animation' : 'fade-out-up-animation'}`}
						flexiImage={FlexiThumbsUp}
					>
						Now that you know how to find the LCM of two numbers, try solving your own!
					</FlexiText>
				</>
			}

			{/* Solve Your Own Text */}
			{!removeSkipFlexi &&
				<>
					<FlexiText
						className={`${showSkipFlexi ? 'fade-in-up-animation' : 'fade-out-up-animation'}`}
						flexiImage={FlexiThumbsUp}
					>
						Enter your own numbers to find their LCM!
					</FlexiText>
				</>
			}
			
			{/* Solve Button Button */}
			{inputsModified && (
				<GlowButton
					className={`${hideSolveButton ? 'shrink-out-animation' : inputsModified ? 'grow-in-animation' : 'no-show-animation'}`}
					onClick={() => {
						handleSolveButtonClick();
					}}
					autoShrinkOnClick={false}
				>
					Solve
				</GlowButton>
			)}
		</Container>
	);
};

export default LCM;