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

	// Step 2
	const [isStep2, setIsStep2] = useState(false);
	const [isStep3, setIsStep3] = useState(false);


	const handleExploreButton = () => {
		setShowIntroText(false);
		setShowExploreButton(false);

		setTimeout(() => {
			setIsStep1(true);
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
				<div>
					<FlexiText className={`${isStep1 ? 'fade-in-up-animation' : ''}`}>
						Step 1: Enter your numbers
					</FlexiText>
					<GlowButton
						onClick={handleStep1Button}
					>
						Continue
					</GlowButton>
				</div>
			)}
		</Container>
	);
};

export default LCM;