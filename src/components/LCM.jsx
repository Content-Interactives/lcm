import React, { useState } from 'react';

// Assets Imports
import FlexiWave from '../assets/All Flexi Poses/PNG/Flexi_Wave.png';
import FlexiTeacher from '../assets/All Flexi Poses/PNG/Flexi_Teacher.png';
import FlexiTelescope from '../assets/All Flexi Poses/PNG/Flexi_Telescope.png';
import FlexiPoint from '../assets/All Flexi Poses/PNG/Flexi_Point.png';
import FlexiThumbsUp from '../assets/All Flexi Poses/PNG/Flexi_ThumbsUp.png';

// UI Components Imports
import { Container } from './ui/reused-ui/Container.jsx'
import { FlexiText } from './ui/reused-ui/FlexiText.jsx'
import { GlowButton } from './ui/reused-ui/GlowButton.jsx'

// UI Animation Imports
import './ui/reused-animations/fade.css';
import './ui/reused-animations/scale.css';
import './ui/reused-animations/glow.css';

// CSS Imports
import './LCM.css';

const LCM = () => {
	// State management
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
	const [showFactorTreeStaticLines, setShowFactorTreeStaticLines] = useState(false);
	const [showFactorTreeStaticNode, setShowFactorTreeStaticNode] = useState(false);

	// Step 3

	// Functions
	// Function to handle the explore button
	const handleExploreButton = () => {
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
				}, 800); // Wait for LCM text to fade in
			}, 800); // Wait for numbers to grow in
		}, 500); // Small delay after Step 1 appears
	}

	const handleStep1Button = () => {
		setHideStep1Elements(true);
		setMoveStep1ElementsToPlace(true);
		setTimeout(() => {
			setShowFactorTreeStaticLines(true);
			setShowFactorTreeStaticNode(true);
			setTimeout(() => {
				setShowStep2Flexi(true);
			}, 1200);
		}, 1200);
	}

	return (
		<Container text="LCM Explorer" showResetButton={true}>
			{/* Introduction */}
			<FlexiText 
				className={`${showIntroText ? '' : 'fade-out-up-animation'}`}
			>Welcome to the LCM Explorer! Click one of the buttons below to begin the lesson or try your own numbers.
			</FlexiText>
			<GlowButton
				onClick={handleExploreButton}
				className={`${showExploreButton ? '' : 'fade-out-up-animation'}`}
			>Click to Explore!</GlowButton>

			{/* Step 1 */}
			<div className="flex flex-row">
				<div>
					<div className={`text-4xl font-bold text-black number-text absolute top-[25%] left-[25%] 
						${showStep1Numbers ? 'grow-in-animation' : 'no-show-animation'}
						${moveStep1ElementsToPlace ? 'move-step1-numbers-up' : ''}
					`}>12</div>
				</div>
				<div>
					<div className={`text-4xl font-bold text-black number-text absolute top-[25%] right-[25%] 
						${showStep1Numbers ? 'grow-in-animation' : 'no-show-animation'}
						${moveStep1ElementsToPlace ? 'move-step1-numbers-up' : ''}
					`}>18</div>
				</div>
				<div className={`text-3xl font-bold text-gray-700 number-text absolute top-[40%] left-[50%] translate-x-[-50%] 
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
			</div>

			{/* Static Factor Trees */}
			{showFactorTreeStaticLines && (
				<>
					{/* Static Factor Tree for 12 */}
					<div className="factor-tree-container" style={{ position: 'absolute', left: '0%', top: '50%', width: '200px', height: '200px' }}>
						{/* Lines from 12 to 2 and 6 */}
						<div style={{ position: 'absolute', top: '60px', width: '100%' }}>
							<div className="factor-tree-line left" style={{ height: '40px' }}></div>
							<div className="factor-tree-line right" style={{ height: '40px' }}></div>
						</div>

						{/* Lines from 6 to 2 and 3 */}
						<div style={{ position: 'absolute', left: '50%', top: '120px', width: '100%' }}>
							<div className="factor-tree-line left" style={{ height: '40px' }}></div>
							<div className="factor-tree-line right" style={{ height: '40px' }}></div>
						</div>
						
						{/* Nodes */}
						<div className="factor-tree-node prime" style={{ left: '25%', top: '80px' }}>2</div>
						<div className="factor-tree-node non-prime" style={{ left: '75%', top: '80px' }}>6</div>
						<div className="factor-tree-node prime" style={{ left: '60%', top: '140px' }}>2</div>
						<div className="factor-tree-node prime" style={{ left: '90%', top: '140px' }}>3</div>
					</div>
					
					{/* Static Factor Tree for 18 */}
					<div className="factor-tree-container" style={{ position: 'absolute', right: '25%', top: '50%', transform: 'translate(50%, -50%)', width: '200px', height: '200px' }}>
						{/* Lines from 18 to 2 and 9 */}
						<div style={{ position: 'absolute', top: '60px', width: '100%' }}>
							<div className="factor-tree-line left" style={{ height: '40px' }}></div>
							<div className="factor-tree-line right" style={{ height: '40px' }}></div>
						</div>
						
						{/* Lines from 9 to 3 and 3 */}
						<div style={{ position: 'absolute', left: '50%', top: '120px', width: '100%' }}>
							<div className="factor-tree-line left" style={{ height: '40px' }}></div>
							<div className="factor-tree-line right" style={{ height: '40px' }}></div>
						</div>
						
						{/* Nodes */}
						<div className="factor-tree-node prime" style={{ left: '25%', top: '80px' }}>2</div>
						<div className="factor-tree-node non-prime" style={{ left: '75%', top: '80px' }}>9</div>
						<div className="factor-tree-node prime" style={{ left: '60%', top: '140px' }}>3</div>
						<div className="factor-tree-node prime" style={{ left: '90%', top: '140px' }}>3</div>
					</div>
				</>
			)}
			
			<FlexiText
				className={`${showStep2Flexi ? 'fade-in-up-animation' : 'no-show-animation'}`}
				flexiImage={FlexiTelescope}
			>Break down each number into its prime factors, then find the highest power of each.
			</FlexiText>
			<GlowButton
				className={`${showStep2Flexi ? 'grow-in-animation' : 'no-show-animation'}`}
			>Continue
			</GlowButton>
		</Container>
	);
};

export default LCM;