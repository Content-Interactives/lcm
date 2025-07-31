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

	const [showStep4Flexi, setShowStep4Flexi] = useState(false);
	const [showStep4Button, setShowStep4Button] = useState(false);

	// Step Progression Animation Functions
	// Introduction -> Try Your Own
	const handleTryYourOwnButtonClick = () => {
		setShowIntroduction(false);
		setTimeout(() => {
			setRemoveIntroduction(true);
		}, 1000);
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

								setShowFirstLayerStaticTreeLines(false);
								setShowFirstLayerStaticTreeNodes(false);
								setShowSecondLayerStaticTreeLines(false);
								setShowSecondLayerStaticTreeNodes(false);
								setShowConvergingLines(false);
							}, 500);
						}, 500);
					}, 500);
				}, 500);
			}, 500);
		}, 400);
	}
	return (
		<Container text="LCM Explorer" showResetButton={true}>
			{/* Elements on Left Container */}
			<div className="left-container">
				{!removeInitial12And18 &&
						<div className={`text-4xl font-bold text-black absolute top-[20%] left-[50%] translate-x-[-50%]
						${move12And18Up ? 'move-12-and-18-animation' : showInitial12And18 ? 'fade-in-up-tr-animation' : ''}
						`}
						>12</div>
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
						{showSecondLayerExpressionElements && (
							<div className={`absolute top-[40%] left-[33%] flex w-[70px] justify-between items-center ${movePowersExpression ? 'move-powers-expression' : ''}`}>
								<div className="text-2xl font-bold text-[#5750E3] static-tree-node">2²</div>
								<div className="text-2xl font-bold text-[#5750E3] static-tree-node">×</div>
								<div className="text-2xl font-bold text-[#5750E3] static-tree-node">3</div>
							</div>
						)}
					</div>
				}
			</div>

			{/* Elements on Right Container */}
			<div className="right-container">
				{!removeInitial12And18 &&
						<div className={`text-4xl font-bold text-black absolute top-[20%] left-[50%] translate-x-[-50%]
						${move12And18Up ? 'move-12-and-18-animation' : showInitial12And18 ? 'fade-in-up-tr-animation' : ''}
						`}
						>18</div>
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
					{showSecondLayerExpressionElements && (
							<div className={`absolute top-[40%] left-[33%] flex w-[70px] justify-between items-center ${movePowersExpression ? 'move-powers-expression' : ''}`}>
								<div className="text-2xl font-bold text-[#5750E3] static-tree-node">2</div>
								<div className="text-2xl font-bold text-[#5750E3] static-tree-node">×</div>
								<div className="text-2xl font-bold text-[#5750E3] static-tree-node">3²</div>
							</div>
						)}
					</div>
				}		
			</div>

			{/* Elements Positioned Absolutely */}
			{!removeInitialLCMText &&
				<div className={`text-3xl font-bold text-gray-600 absolute top-[40%] left-[50%] translate-x-[-50%]
				${showInitialLCMText ? 'fade-in-up-tr-animation' : 'fade-out-down-tr-animation'}
				`}
				>LCM = ?</div>
			}
			{!removeSolvingSteps && (
				<div className={`absolute top-[40%] left-[50%] translate-x-[-50%] w-[100%]`}>
					{showSolvingStep1 && (
						<div className={`text-3xl font-bold text-gray-600 absolute top-[40%] left-[50%] translate-x-[-50%]
						${showSolvingStep1 ? 'fade-in-up-tr-animation' : ''}
						`}>LCM = 2² × 3²</div>
					)}
					{showSolvingStep2 && (
						<div className={`text-3xl font-bold text-gray-600 absolute top-[50%] left-[50%] translate-x-[-50%]
						${showSolvingStep2 ? 'fade-in-up-tr-animation' : ''}
						`}>LCM = 4 × 9</div>
					)}
					{showSolvingStep3 && (
						<div className={`text-3xl font-bold text-gray-600 absolute top-[60%] left-[50%] translate-x-[-50%]
						${showSolvingStep3 ? 'fade-in-up-tr-animation' : ''}
						`}>LCM = 36</div>
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
		</Container>
	);
};

export default LCM;