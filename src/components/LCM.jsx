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

const LCM = () => {
	// State Management	
	// Introduction -> Step 1
	const [showIntroduction, setShowIntroduction] = useState(true);
	const [removeIntroduction, setRemoveIntroduction] = useState(false);
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
	const [showStep2LCMText, setShowStep2LCMText] = useState(false);
	const [hideStaticTrees, setHideStaticTrees] = useState(false);
	const [removeStaticTrees, setRemoveStaticTrees] = useState(false);



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
				setMove12And18Up(true);
				setTimeout(() => {
					setShowFirstLayerStaticTreeLines(true);
					setTimeout(() => {
						setShowFirstLayerStaticTreeNodes(true);
						setTimeout(() => {
							setHideStaticTreeNonPrimes(true);
							setShowSecondLayerStaticTreeLines(true);
							setTimeout(() => {
								setShowSecondLayerStaticTreeNodes(true);
								setTimeout(() => {
									setRemoveStep2(false);
									setShowStep2Flexi(true);
									setShowStep2Button(true);
								}, 300);
							}, 300);
						}, 300);
					}, 300);
				}, 500);
			}, 500);
		}, 800);
	}

	// Step 2 -> Step 3
	const handleContinueButton2Click = () => {
		setShowStep2Flexi(false);
		setShowStep2Button(false);
		setTimeout(() => {
			setHideStaticTrees(true);
			setTimeout(() => {
				setRemoveStaticTrees(true);
			}, 1000);
		}, 800);
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
				<div className={`absolute top-[0%] left-[50%] translate-x-[-50%] h-[100%] w-[200px] 
					${hideStaticTrees ? 'shrink-out-tr-animation' : ''}`}>
					{/* Lines from main number 12 */}
					{showFirstLayerStaticTreeLines && (
						<div className="absolute top-[20%] left-[50%] translate-x-[-50%]">
							<div className={`factor-tree-line static-tree-line left-line`}></div>
							<div className={`factor-tree-line static-tree-line right-line`}></div>
						</div>
					)}
					{/* First layer nodes (2 and 6) */}
					{showFirstLayerStaticTreeNodes && (
						<div className="absolute top-[28%] left-[50%] translate-x-[-50%] w-[150px] h-[100px]">
							<div className={`absolute left-[26%] text-2xl font-bold text-[#5750E3] static-tree-node`}>2</div>
							<div className={`absolute left-[61%] text-2xl font-bold text-[#5750E3] static-tree-node ${hideStaticTreeNonPrimes ? 'non-prime-fade' : ''}`}>6</div>
						</div>
					)}
					{/* Lines under 6 */}
					{showSecondLayerStaticTreeLines && (
						<div className="absolute top-[36%] left-[62%] translate-x-[-50%]">
							<div className={`factor-tree-line static-tree-line left-line`}></div>
							<div className={`factor-tree-line static-tree-line right-line`}></div>
						</div>
					)}
					{/* Second layer nodes under 6 (2 and 3) */}
					{showSecondLayerStaticTreeNodes && (
						<div className="absolute top-[44%] left-[63%] translate-x-[-50%] w-[150px] h-[100px]">
							<div className={`absolute left-[26%] text-2xl font-bold text-[#5750E3] static-tree-node`}>2</div>
							<div className={`absolute left-[61%] text-2xl font-bold text-[#5750E3] static-tree-node`}>3</div>
						</div>
					)}
				</div>
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
				<div className={`absolute top-[0%] left-[50%] translate-x-[-50%] h-[100%] w-[200px] 
					${hideStaticTrees ? 'shrink-out-tr-animation' : ''}`}>
					{/* Lines from main number 18 */}
				{showFirstLayerStaticTreeLines && (
					<div className="absolute top-[20%] left-[50%] translate-x-[-50%]">
						<div className={`factor-tree-line static-tree-line left-line`}></div>
						<div className={`factor-tree-line static-tree-line right-line`}></div>
					</div>
				)}
				
				{/* First layer nodes (2 and 9) */}
				{showFirstLayerStaticTreeNodes && (
					<div className="absolute top-[28%] left-[50%] translate-x-[-50%] w-[150px] h-[100px]">
						<div className={`absolute left-[26%] text-2xl font-bold text-[#5750E3] static-tree-node`}>2</div>
						<div className={`absolute left-[61%] text-2xl font-bold text-[#5750E3] static-tree-node ${hideStaticTreeNonPrimes ? 'non-prime-fade' : ''}`}>9</div>
					</div>
				)}
				
				{/* Lines under 9 */}
				{showSecondLayerStaticTreeLines && (
					<div className="absolute top-[36%] left-[63%] translate-x-[-50%]">
						<div className={`factor-tree-line static-tree-line left-line`}></div>
						<div className={`factor-tree-line static-tree-line right-line`}></div>
					</div>
				)}
				
				{/* Second layer nodes under 9 (3 and 3) */}
				{showSecondLayerStaticTreeNodes && (
					<div className="absolute top-[44%] left-[63%] translate-x-[-50%] w-[150px] h-[100px]">
						<div className={`absolute left-[26%] text-2xl font-bold text-[#5750E3] static-tree-node`}>3</div>
						<div className={`absolute left-[61%] text-2xl font-bold text-[#5750E3] static-tree-node`}>3</div>
					</div>
					)}
				</div>
			</div>

			{/* Elements Positioned Absolutely */}
			{!removeInitialLCMText &&
				<div className={`text-3xl font-bold text-gray-600 absolute top-[40%] left-[50%] translate-x-[-50%]
				${showInitialLCMText ? 'fade-in-up-tr-animation' : 'fade-out-down-tr-animation'}
				`}
				>LCM = ?</div>
			}


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
		</Container>
	);
};

export default LCM;