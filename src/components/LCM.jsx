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
	


	// Step Progression Animation Functions
	// Introduction -> Step 1
	const handleBeginLessonButtonClick = () => {
		setShowIntroduction(false);
		setTimeout(() => {
			setRemoveIntroduction(true);
			setShowInitial12And18(true);
		}, 800);
	}

	// Introduction -> Try Your Own
	const handleTryYourOwnButtonClick = () => {
		setShowIntroduction(false);
		setTimeout(() => {
			setRemoveIntroduction(true);
		}, 1000);
	}

	return (
		<Container text="LCM Explorer" showResetButton={true}>
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
			{showInitial12And18 &&
				<>
					<div>12</div>
					<div>18</div>
				</>
			}
			{showStep1Button &&
				<GlowButton
					text="Show Solution"
					onClick={() => {}}
				/>
			}
		</Container>
	);
};

export default LCM;