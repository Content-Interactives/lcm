import React, { useState } from 'react';

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
		// Add more state resets here as we add them
	};

	const handleContinue = () => {
		setCurrentStep('continue1');
		setShowNewText(false);
		setIsContinueShrinking(true);
		setTimeout(() => {
			setShowContinue(false);
			setShowNewText(false);
			setIsContinueShrinking(false);
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
		}, 500);
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
						}, 300);
					}, 300);
				}, 300);
			}, 300);
		}, 500);
	};

	const handleExploreClick = () => {
		setCurrentStep('explore');
		setIsAnimating(true);
		setIsExploreShrinking(true);
		setIsTextShrinking(true);
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
		}, 500);
	};

	return (
		<div className="w-[464px] mx-auto mt-5 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)] bg-white rounded-lg select-none">
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
						animation: linesShrinkAnimation 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.lines-shrink-appear {
						animation: linesShrinkAppear 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.lines-shrink-move-left {
						animation: linesShrinkMoveLeft 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.lines-shrink-move-left-right {
						animation: linesShrinkMoveLeftRight 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.lines-shrink-move-right {
						animation: linesShrinkMoveRight 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.lines-shrink-move-right-right {
						animation: linesShrinkMoveRightRight 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.lines-shrink-under-6-left {
						animation: linesShrinkUnder6Left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.lines-shrink-under-6-right {
						animation: linesShrinkUnder6Right 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.lines-shrink-under-9-left {
						animation: linesShrinkUnder9Left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.lines-shrink-under-9-right {
						animation: linesShrinkUnder9Right 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.non-primes-fade-out {
						animation: nonPrimesFadeOut 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.non-primes-fade-out-left {
						animation: nonPrimesFadeOutLeft 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.non-primes-fade-out-right {
						animation: nonPrimesFadeOutRight 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.first-primes-move-down {
						animation: firstPrimesMoveDown 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.first-primes-move-down-left {
						animation: firstPrimesMoveDownLeft 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.first-primes-move-down-right {
						animation: firstPrimesMoveDownRight 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes firstPrimesMoveDownLeft {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(-90px, 20px) translateX(-150%);
						}
					}

					@keyframes firstPrimesMoveDownRight {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(50px, 20px) translateX(-150%);
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
				`}
			</style>
			<div className="p-4">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-[#5750E3] text-sm font-medium select-none">LCM Explorer</h2>
					<button 
						className={`text-sm px-3 py-1 rounded border transition-colors ${
							(isAnimating || isContinueShrinking || isExploreShrinking || isTextShrinking || isLCMFadingOut || isNumbersMoving) && !showContinue && !showSecondContinue
								? 'text-gray-400 border-gray-200 cursor-not-allowed'
								: 'text-gray-500 hover:text-gray-700 border-gray-300 hover:border-gray-400'
						}`}
						onClick={handleReset}
						title="Reset interactive"
						disabled={(isAnimating || isContinueShrinking || isExploreShrinking || isTextShrinking || isLCMFadingOut || isNumbersMoving) && !showContinue && !showSecondContinue}
					>
						Reset
					</button>
				</div>

				<div className="space-y-4">
					{/* Visual Section */}
					<div className="w-[400px] mx-auto bg-white border border-[#5750E3]/30 rounded-md relative min-h-[260px] flex items-center justify-center visual-clip">
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
							<div className="flex flex-col items-center gap-4" style={{ transform: 'translateY(-17px)' }}>
								<div className="flex items-center gap-8 text-animation" style={{ opacity: 0, animation: 'fadeIn 0.5s ease-out forwards' }}>
									<div className="relative">
										<div className={`text-4xl font-bold text-black ${isNumbersMoving ? 'number-move-left' : ''}`}>12</div>
										{showLines && (
											<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] ${isNumbersMoving ? 'line-move-left' : 'line-appear'} ${firstLinesShrink ? (isNumbersMoving ? 'lines-shrink-move-left' : 'lines-shrink-appear') : ''}`} style={{ left: '50%' }}></div>
										)}
										{showLines && (
											<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] ${isNumbersMoving ? 'line-move-left-right' : 'line-appear'} ${firstLinesShrink ? (isNumbersMoving ? 'lines-shrink-move-left-right' : 'lines-shrink-appear') : ''}`} style={{ left: '50%' }}></div>
										)}
										{showFirstPrimes && (
											<div className={`absolute text-2xl font-bold text-[#5750E3] ${isNumbersMoving ? 'prime-move-left-1' : ''} ${firstPrimesMoveDown ? 'first-primes-move-down-left' : ''}`} style={{ left: 'calc(50% - 35px)', top: 'calc(100% + 50px)', transform: 'translateX(-50%)' }}>2</div>
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
											<div className={`absolute text-2xl font-bold text-[#5750E3] ${isNumbersMoving ? 'prime-under-6-1' : ''}`} style={{ left: 'calc(50% + 0px)', top: 'calc(100% + 130px)', transform: 'translateX(-50%)' }}>2</div>
										)}
										{showSecondPrimes && (
											<div className={`absolute text-2xl font-bold text-[#5750E3] ${isNumbersMoving ? 'prime-under-6-2' : ''}`} style={{ left: 'calc(50% + 70px)', top: 'calc(100% + 130px)', transform: 'translateX(-50%)' }}>3</div>
										)}
									</div>
									<div className="relative">
										<div className={`text-4xl font-bold text-black ${isNumbersMoving ? 'number-move-right' : ''}`}>18</div>
										{showLines && (
											<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] ${isNumbersMoving ? 'line-move-right' : 'line-appear'} ${firstLinesShrink ? (isNumbersMoving ? 'lines-shrink-move-right' : 'lines-shrink-appear') : ''}`} style={{ left: '50%' }}></div>
										)}
										{showLines && (
											<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] ${isNumbersMoving ? 'line-move-right-right' : 'line-appear'} ${firstLinesShrink ? (isNumbersMoving ? 'lines-shrink-move-right-right' : 'lines-shrink-appear') : ''}`} style={{ left: '50%' }}></div>
										)}
										{showFirstPrimes && (
											<div className={`absolute text-2xl font-bold text-[#5750E3] ${isNumbersMoving ? 'prime-move-right-1' : ''} ${firstPrimesMoveDown ? 'first-primes-move-down-right' : ''}`} style={{ left: 'calc(50% - 35px)', top: 'calc(100% + 50px)', transform: 'translateX(-50%)' }}>2</div>
										)}
										{showFirstPrimes && (
											<div className={`absolute text-2xl font-bold text-[#5750E3] ${isNumbersMoving ? 'prime-move-right-2-no-opacity' : ''} ${nonPrimesFadeOut ? 'non-primes-fade-out-right' : ''}`} style={{ left: 'calc(50% + 35px)', top: 'calc(100% + 50px)', transform: 'translateX(-50%)', opacity: fadeNonPrimes ? 0.5 : 1 }}>9</div>
										)}
										{showSecondLines && (
											<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] ${isNumbersMoving ? 'line-under-9-left' : 'line-appear'} ${secondLinesShrink ? (isNumbersMoving ? 'lines-shrink-under-9-left' : 'lines-shrink-appear') : ''}`} style={{ left: 'calc(50% + 35px)', top: 'calc(100% + 80px)' }}></div>
										)}
										{showSecondLines && (
											<div className={`absolute top-full mt-2 w-0.5 bg-[#5750E3] ${isNumbersMoving ? 'line-under-9-right' : 'line-appear'} ${secondLinesShrink ? (isNumbersMoving ? 'lines-shrink-under-9-right' : 'lines-shrink-appear') : ''}`} style={{ left: 'calc(50% + 35px)', top: 'calc(100% + 80px)' }}></div>
										)}
										{showSecondPrimes && (
											<div className={`absolute text-2xl font-bold text-[#5750E3] ${isNumbersMoving ? 'prime-under-9-1' : ''}`} style={{ left: 'calc(50% + 0px)', top: 'calc(100% + 130px)', transform: 'translateX(-50%)' }}>3</div>
										)}
										{showSecondPrimes && (
											<div className={`absolute text-2xl font-bold text-[#5750E3] ${isNumbersMoving ? 'prime-under-9-2' : ''}`} style={{ left: 'calc(50% + 70px)', top: 'calc(100% + 130px)', transform: 'translateX(-50%)' }}>3</div>
										)}
									</div>
								</div>
								<div className={`text-2xl font-bold text-gray-700 ${isLCMFadingOut ? 'lcm-fade-out-down' : 'lcm-fade-in'}`} style={{ opacity: 0 }}>
									LCM = <span className="inline-block" style={{ opacity: 0, animation: 'growButton 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) 1s forwards' }}>?</span>
								</div>
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
					</div>

					{/* Text Section */}
					<div className="w-[400px] mx-auto bg-white border border-[#5750E3]/30 rounded-md p-4 min-h-[80px] relative flex items-center justify-center">
						{!showNewText && (
							<div className={`text-sm text-gray-600 text-center ${isTextShrinking ? 'shrink-animation' : ''}`}>
								Welcome to the LCM Explorer! Click the button above to begin.
							</div>
						)}
						{showNewText && !showSecondStepText && (
							<div className={`text-sm text-gray-700 text-center ${isContinueShrinking ? 'shrink-animation' : 'text-grow-animation'}`} style={{ opacity: 0 }}>
								To find the <b>Least Common Multiple</b> of any two positive numbers, we can use the prime factorization method.
							</div>
						)}
						{showSecondStepText && (
							<div className={`absolute inset-0 flex items-center justify-center text-sm text-gray-700 text-center ${isSecondContinueShrinking ? 'shrink-animation' : 'text-grow-animation'}`} style={{ opacity: 0 }}>
								First break down each number into their prime factors, then we can find the highest power of each prime factor.
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LCM;