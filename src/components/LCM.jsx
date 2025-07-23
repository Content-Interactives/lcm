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
	const [isIntroduction, setIsIntroduction] = useState(true);
	const [showIntroText, setShowIntroText] = useState(true);
	const [showExploreButton, setShowExploreButton] = useState(true);

	// Step 1
	const [isStep1, setIsStep1] = useState(false);
	const [showStep1Numbers, setShowStep1Numbers] = useState(false);
	const [showStep1LCMText, setShowStep1LCMText] = useState(false);
	const [showStep1Flexi, setShowStep1Flexi] = useState(false);

	// Step 2
	const [isStep2, setIsStep2] = useState(false);

	// Step 3
	const [isStep3, setIsStep3] = useState(false);

	// Functions
	// Function to handle the explore button
	const handleExploreButton = () => {
		setShowIntroText(false);
		setShowExploreButton(false);

		setTimeout(() => {
			setIsStep1(true);
			
			// Show numbers first after Step 1 appears
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
		}, 1000);
	}

	const handleStep1Button = () => {
		setIsStep1(false);
		setIsStep2(true);
	}

	return (
		<Container text="LCM Explorer" showResetButton={true}>
			{isIntroduction && (
				<>
					<FlexiText 
						className={`${showIntroText ? '' : 'fade-out-up-animation'}`}
					>Welcome to the LCM Explorer! Click one of the buttons below to begin the lesson or try your own numbers.
					</FlexiText>
					<GlowButton
						onClick={handleExploreButton}
					>Click to Explore!</GlowButton>
				</>
			)}

			{isStep1 && (
				<div className="flex flex-row">
					<div className={`text-4xl font-bold text-black number-text absolute top-[25%] left-[25%] ${showStep1Numbers ? 'grow-in-animation' : 'no-show-animation'}`}>12</div>
					<div className={`text-4xl font-bold text-black number-text absolute top-[25%] right-[25%] ${showStep1Numbers ? 'grow-in-animation' : 'no-show-animation'}`}>18</div>
					<div className={`text-3xl font-bold text-gray-700 number-text absolute top-[40%] left-[50%] translate-x-[-50%] ${showStep1LCMText ? 'fade-in-up-centered-animation' : 'no-show-animation'}`}>LCM = ?</div>
					<FlexiText 
						className={`${showStep1Flexi ? 'fade-in-up-animation' : 'no-show-animation'}`}
						flexiImage={FlexiPoint}
					>
						To find the Least Common Multiple of two numbers, we can use prime factorization.
					</FlexiText>
					<GlowButton
						onClick={handleStep1Button}
						className={`${showStep1Flexi ? 'grow-in-animation' : 'no-show-animation'}`}
					>
						Continue
					</GlowButton>
				</div>
			)}
		</Container>
	);
};

export default LCM;