import React, { useState, useEffect } from 'react';
import './LCM.css';

// Utility function to get prime factors and their counts
const getPrimeFactors = (num) => {
	const factors = {};
	let divisor = 2;
	let tempNum = num;
	
	while (tempNum > 1) {
		while (tempNum % divisor === 0) {
			factors[divisor] = (factors[divisor] || 0) + 1;
			tempNum /= divisor;
		}
		divisor++;
	}
	return factors;
};

// Function to convert prime factors to individual primes array
const getIndividualPrimes = (primeFactors) => {
	const individualPrimes = [];
	
	// Handle empty prime factors (like when input is 1)
	if (Object.keys(primeFactors).length === 0) {
		return [1];
	}
	
	for (const [prime, count] of Object.entries(primeFactors)) {
		for (let i = 0; i < count; i++) {
			individualPrimes.push(parseInt(prime));
		}
	}
	return individualPrimes;
};

// Function to convert prime factors to powers expression
const getPowersExpression = (primeFactors) => {
	const powers = [];
	
	// Handle empty prime factors (like when input is 1)
	if (Object.keys(primeFactors).length === 0) {
		return [1];
	}
	
	for (const [prime, count] of Object.entries(primeFactors)) {
		if (count === 1) {
			powers.push(parseInt(prime));
		} else {
			// Convert count to superscript
			const superscript = count.toString().replace(/0/g, '⁰')
				.replace(/1/g, '¹')
				.replace(/2/g, '²')
				.replace(/3/g, '³')
				.replace(/4/g, '⁴')
				.replace(/5/g, '⁵')
				.replace(/6/g, '⁶')
				.replace(/7/g, '⁷')
				.replace(/8/g, '⁸')
				.replace(/9/g, '⁹');
			powers.push(`${prime}${superscript}`);
		}
	}
	return powers;
};

// Function to get highest power primes from two numbers
export const getHighestPowerPrimes = (num1, num2) => {
	// Get prime factors for both numbers
	const primeFactors1 = getPrimeFactors(num1);
	const primeFactors2 = getPrimeFactors(num2);
	
	// Combine all unique primes from both numbers
	const allPrimes = new Set([
		...Object.keys(primeFactors1).map(Number),
		...Object.keys(primeFactors2).map(Number)
	]);
	
	// Find the highest power for each prime
	const highestPowerPrimes = {};
	
	for (const prime of allPrimes) {
		const power1 = primeFactors1[prime] || 0;
		const power2 = primeFactors2[prime] || 0;
		const highestPower = Math.max(power1, power2);
		
		if (highestPower > 0) {
			highestPowerPrimes[prime] = highestPower;
		}
	}
	
	// Convert to powers expression format
	const powersExpression = getPowersExpression(highestPowerPrimes);
	
	// Calculate simplified expression and final LCM
	let simplifiedExpression = '';
	let lcmValue = 1;
	
	for (const [prime, power] of Object.entries(highestPowerPrimes)) {
		const primeNum = parseInt(prime);
		const calculatedValue = Math.pow(primeNum, power);
		lcmValue *= calculatedValue;
		
		if (simplifiedExpression) {
			simplifiedExpression += ' × ';
		}
		simplifiedExpression += calculatedValue;
	}
	
	return {
		powersExpression: powersExpression.join(' × '),
		simplifiedExpression: simplifiedExpression,
		lcmValue: lcmValue
	};
};

const DynamicPowersExpression = ({ 
	number, 
	show = false, 
	position = { left: '50%', top: '50%' },
	containerId = 'powers-expression',
	isLeftContainer = true,
	onAnimationComplete = null
}) => {
	const [showFirstRow, setShowFirstRow] = useState(false);
	const [showMultiplicationSymbols, setShowMultiplicationSymbols] = useState(false);
	const [showArrow, setShowArrow] = useState(false);
	const [showSecondRow, setShowSecondRow] = useState(false);
	const [fadeOutFirstRow, setFadeOutFirstRow] = useState(false);
	const [fadeOutArrow, setFadeOutArrow] = useState(false);
	const [moveSecondRowUp, setMoveSecondRowUp] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	// Get prime factors for the number
	const primeFactors = getPrimeFactors(number);

	// Get individual primes and powers for the number
	const individualPrimes = getIndividualPrimes(primeFactors);
	const powers = getPowersExpression(primeFactors);

	// Handle responsive screen size
	useEffect(() => {
		const checkScreenSize = () => {
			setIsSmallScreen(window.innerWidth < 365);
		};

		// Check initial screen size
		checkScreenSize();

		// Add event listener for window resize
		window.addEventListener('resize', checkScreenSize);

		// Cleanup event listener
		return () => window.removeEventListener('resize', checkScreenSize);
	}, []);

	// Animation sequence
	useEffect(() => {
		if (show) {
			// Start with first row
			setTimeout(() => {
				setShowFirstRow(true);
				setShowMultiplicationSymbols(true);
                setTimeout(() => {
                    setShowArrow(true);
                    setTimeout(() => {
                        setShowSecondRow(true);
                        setTimeout(() => {
                            // Start fade out sequence after 1 second delay
                            setFadeOutFirstRow(true);
                            setFadeOutArrow(true);
                            setTimeout(() => {
                                setMoveSecondRowUp(true);
                                // Call completion callback when animation is done
                                setTimeout(() => {
                                    if (onAnimationComplete) {
                                        onAnimationComplete(containerId, 'powers-complete');
                                    }
                                }, 500); // Wait for the move up animation to complete
                            }, 500);
                        }, 1000);
                    }, 500);
                }, 500);
			}, 500);
		} else {
			// Reset all states when hiding
			setShowFirstRow(false);
			setShowMultiplicationSymbols(false);
			setShowArrow(false);
			setShowSecondRow(false);
			setFadeOutFirstRow(false);
			setFadeOutArrow(false);
			setMoveSecondRowUp(false);
		}
	}, [show, onAnimationComplete, containerId]);

	// Render individual primes row
	const renderIndividualPrimesRow = () => {
		return (
			<div className={`absolute top-[28%] w-full h-[100px] flex justify-center items-start
				${fadeOutFirstRow ? 'fade-out-in-place-animation' : ''}`}>
				<div className="relative flex items-center">
					{individualPrimes.map((prime, index) => (
						<React.Fragment key={`prime-${index}`}>
							<div
								className={`font-bold text-[#5750E3] static-tree-node
									${showFirstRow ? 'fade-in-up-animation' : 'no-show-animation'}
									text-2xl max-[400px]:text-lg mx-1 max-[400px]:mx-0.5`}
							>
								{prime}
							</div>
							{index < individualPrimes.length - 1 && showMultiplicationSymbols && (
								<div
									className={`font-bold text-[#5750E3] fade-in-up-animation
										text-2xl max-[400px]:text-lg mx-1 max-[400px]:mx-0.5`}
								>
									×
								</div>
							)}
						</React.Fragment>
					))}
				</div>
			</div>
		);
	};

	// Render powers expression row
	const renderPowersRow = () => {
		return (
			<div className={`absolute w-full h-[100px] flex justify-center items-start transition-all duration-500 ease-in-out
				${moveSecondRowUp ? 'top-[21%]' : 'top-[40%]'} max-[400px]:${moveSecondRowUp ? 'top-[28%]' : 'top-[38%]'}`}>
				<div className="relative flex items-center">
					{powers.map((power, index) => (
						<React.Fragment key={`power-${index}`}>
							<div
								className={`font-bold text-[#5750E3] static-tree-node
									${showSecondRow ? 'fade-in-up-animation' : 'no-show-animation'}
									text-2xl max-[400px]:text-lg mx-1 max-[400px]:mx-0.5`}
							>
								{power}
							</div>
							{index < powers.length - 1 && showSecondRow && (
								<div
									className={`font-bold text-[#5750E3]
										text-2xl max-[400px]:text-lg mx-1 max-[400px]:mx-0.5`}
								>
									×
								</div>
							)}
						</React.Fragment>
					))}
				</div>
			</div>
		);
	};

	if (!show) return null;

	return (
		<div 
			id={containerId}
			className="absolute h-[100%] w-[100%]"
			style={{
				left: position.left,
				top: position.top,
				transform: 'translateX(-50%)'
			}}
		>
			{renderIndividualPrimesRow()}
			
			{/* Downwards Arrow */}
			{showArrow && (
				<div className={`absolute text-2xl text-[#5750E3] fade-in-up-animation
					top-[34%] max-[400px]:top-[32%] w-full flex justify-center
					${fadeOutArrow ? 'fade-out-in-place-animation' : ''}`}>
					↓
				</div>
			)}
			
			{renderPowersRow()}
		</div>
	);
};

export default DynamicPowersExpression;
