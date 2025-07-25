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
	const [showAnswer, setShowAnswer] = useState(false);

	// Step 4

	
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
							}, 800);
						}, 300);
					}, 300);
				}, 300);
			}, 300);
		}, 800);
	}

	const handleStep2Button = () => {
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
							}, 500);
						}, 800);
					}, 300);
				}, 300);
			}, 300);
		}, 800);
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

			{/* Steps 1 - 3 */}
			<div className="flex flex-row relative w-[100%] h-[420px]">
				<div className="factor-tree-container" style={{ position: 'absolute', left: '0%', top: '0%', width: '50%', height: '100%' }}>
					<div className={`text-4xl font-bold text-black number-text absolute top-[25%] left-[50%] translate-x-[-50%]
						${showStep1Numbers ? 'grow-in-animation' : 'no-show-animation'}
						${moveStep1ElementsToPlace ? 'move-step1-numbers-up' : ''}
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
									<div className={`factor-tree-node prime static-prime-appear ${removeStep3FirstRow ? 'remove-step3-first-row-2' : moveFirstLayerTwos ? 'move-first-layer-twos' : ''}`} style={{ left: '38%', top: '29%' }}>2</div>
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
							<div className={`converging-line left ${removeConvergingLines ? 'converging-line-remove left' : showConvergingLines ? 'converging-line-appear left' : 'no-show-animation'}`} style={{ left: '0%', height: '40px' }}></div>
							<div className={`converging-line right ${removeConvergingLines ? 'converging-line-remove right' : showConvergingLines ? 'converging-line-appear right' : 'no-show-animation'}`} style={{ left: '18%', height: '40px' }}></div>
						</div>
					{/* Superscript Expressions for 12 */}
					{showSuperscriptExpressions && (
						<>
							<div className={`superscript-expression ${removePowers ? 'remove-power-2' : movePowersUp ? 'power-2-move-up' : showSuperscriptExpressions ? 'superscript-expression-appear' : ''}`} style={{ left: '39%', top: '41%' }}>2²</div>
							<div className={`between-multiplication-symbol ${removeBetweenMultiplicationSymbols ? 'shrink-out-animation' : showBetweenMultiplicationSymbols ? 'grow-in-animation' : 'no-show-animation'}`} style={{ left: '52%', top: '41%' }}>×</div>
							<div className={`superscript-expression ${removeStep3SecondRow ? 'shrink-out-animation' : showSuperscriptExpressions ? 'superscript-expression-appear' : ''}`} style={{ left: '67%', top: '41%' }}>3</div>
						</>
					)}
				</div>

				<div className="factor-tree-container" style={{ position: 'absolute', right: '0%', top: '0%', width: '50%', height: '100%' }}>
					<div className={`text-4xl font-bold text-black number-text absolute top-[25%] right-[50%] translate-x-[50%]
						${showStep1Numbers ? 'grow-in-animation' : 'no-show-animation'}
						${moveStep1ElementsToPlace ? 'move-step1-numbers-up' : ''}
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
									<div className={`factor-tree-node prime static-prime-appear ${removeStep3FirstRow ? 'remove-step3-first-row-2' : moveFirstLayerTwos ? 'move-first-layer-twos' : ''}`} style={{ left: '20%', top: '29%' }}>2</div>
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
							<div className={`converging-line left ${removeConvergingLines ? 'converging-line-remove left' : showConvergingLines ? 'converging-line-appear left' : 'no-show-animation'}`} style={{ left: '0%', height: '40px' }}></div>
							<div className={`converging-line right ${removeConvergingLines ? 'converging-line-remove right' : showConvergingLines ? 'converging-line-appear right' : 'no-show-animation'}`} style={{ left: '18%', height: '40px' }}></div>
						</div>
					{/* Superscript Expressions for 18 */}
					{showSuperscriptExpressions && (
						<>
							<div className={`superscript-expression ${removeStep3SecondRow ? 'shrink-out-animation' : showSuperscriptExpressions ? 'superscript-expression-appear' : ''}`} style={{ left: '18%', top: '41%' }}>2</div>
							<div className={`between-multiplication-symbol ${removeBetweenMultiplicationSymbols ? 'shrink-out-animation' : showBetweenMultiplicationSymbols ? 'grow-in-animation' : 'no-show-animation'}`} style={{ left: '31.5%', top: '41%' }}>×</div>
							<div className={`superscript-expression ${removePowers ? 'remove-power-3' : movePowersUp ? 'power-3-move-up' : showSuperscriptExpressions ? 'superscript-expression-appear' : ''}`} style={{ left: '47%', top: '41%' }}>3²</div>
						</>
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
			</div>
			
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

			{/* Step 3.5 - LCM Text */}
			<div className={`text-3xl font-bold text-gray-700 number-text absolute top-[40%] left-[40%] translate-x-[-50%] 
				${showLCMText ? 'fade-in-up-centered-animation' : 'no-show-animation'}
			`}>LCM = </div>
			<div className={`text-3xl font-bold text-[#5750E3] number-text absolute top-[40%] left-[61.5%] translate-x-[-50%] 
				${showPowersMultiplication ? 'fade-in-up-centered-animation' : 'no-show-animation'}
			`}>×</div>

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
		</Container>
	);
};

export default LCM;