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
	for (const [prime, count] of Object.entries(primeFactors)) {
		if (count === 1) {
			powers.push(parseInt(prime));
		} else {
			powers.push(`${prime}²`);
		}
	}
	return powers;
};

// Single container powers expression component
const SinglePowersExpression = ({ 
	number, 
	show = false, 
	position = { left: '50%', top: '50%' },
	containerId = 'powers-expression',
	isLeftContainer = true
}) => {
	const [showFirstRow, setShowFirstRow] = useState(false);
	const [showSecondRow, setShowSecondRow] = useState(false);
	const [showMultiplicationSymbols, setShowMultiplicationSymbols] = useState(false);

	// Get prime factors for the number
	const primeFactors = getPrimeFactors(number);

	// Get individual primes and powers for the number
	const individualPrimes = getIndividualPrimes(primeFactors);
	const powers = getPowersExpression(primeFactors);

	// Animation sequence
	useEffect(() => {
		if (show) {
			// Start with first row
			setTimeout(() => {
				setShowFirstRow(true);
			}, 500);

			// Show multiplication symbols
			setTimeout(() => {
				setShowMultiplicationSymbols(true);
			}, 800);

			// Show second row
			setTimeout(() => {
				setShowSecondRow(true);
			}, 1100);
		} else {
			// Reset all states when hiding
			setShowFirstRow(false);
			setShowSecondRow(false);
			setShowMultiplicationSymbols(false);
		}
	}, [show]);

	// Calculate spacing for elements
	const getElementSpacing = (elementsCount) => {
		const baseSpacing = 60; // Base spacing between elements
		const totalWidth = (elementsCount - 1) * baseSpacing;
		return { baseSpacing, totalWidth };
	};

	// Render individual primes row
	const renderIndividualPrimesRow = () => {
		const { baseSpacing, totalWidth } = getElementSpacing(individualPrimes.length);
		const startX = -totalWidth / 2;

		return (
			<div className="absolute top-[28%] left-[50%] translate-x-[-50%] w-[200px] h-[100px]">
				{individualPrimes.map((prime, index) => (
					<div
						key={`prime-${index}`}
						className={`absolute text-2xl font-bold text-[#5750E3] static-tree-node
							${showFirstRow ? 'fade-in-up-animation' : 'no-show-animation'}`}
						style={{
							left: `${startX + index * baseSpacing}px`,
							top: '0px'
						}}
					>
						{prime}
					</div>
				))}
				{/* Multiplication symbols */}
				{individualPrimes.length > 1 && showMultiplicationSymbols && (
					<>
						{individualPrimes.slice(0, -1).map((_, index) => (
							<div
								key={`mult-${index}`}
								className={`absolute text-2xl font-bold text-[#5750E3] fade-in-up-animation`}
								style={{
									left: `${startX + index * baseSpacing + baseSpacing / 2}px`,
									top: '0px'
								}}
							>
								×
							</div>
						))}
					</>
				)}
			</div>
		);
	};

	// Render powers expression row
	const renderPowersRow = () => {
		const { baseSpacing, totalWidth } = getElementSpacing(powers.length);
		const startX = -totalWidth / 2;

		return (
			<div className={`absolute top-[40%] left-[50%] translate-x-[-50%] w-[200px] h-[100px] 
				${showSecondRow ? 'fade-in-up-animation' : 'no-show-animation'}`}>
				{powers.map((power, index) => (
					<div
						key={`power-${index}`}
						className="absolute text-2xl font-bold text-[#5750E3] static-tree-node"
						style={{
							left: `${startX + index * baseSpacing}px`,
							top: '0px'
						}}
					>
						{power}
					</div>
				))}
				{/* Multiplication symbols for powers */}
				{powers.length > 1 && showSecondRow && (
					<>
						{powers.slice(0, -1).map((_, index) => (
							<div
								key={`power-mult-${index}`}
								className="absolute text-2xl font-bold text-[#5750E3]"
								style={{
									left: `${startX + index * baseSpacing + baseSpacing / 2}px`,
									top: '0px'
								}}
							>
								×
							</div>
						))}
					</>
				)}
			</div>
		);
	};

	if (!show) return null;

	return (
		<div 
			id={containerId}
			className="absolute h-[100%] w-[200px]"
			style={{
				left: position.left,
				top: position.top,
				transform: 'translateX(-50%)'
			}}
		>
			{renderIndividualPrimesRow()}
			{renderPowersRow()}
		</div>
	);
};

// Main wrapper component that handles both numbers
const DynamicPowersExpression = ({ 
	number1, 
	number2, 
	show = false, 
	position = { left: '50%', top: '50%' },
	containerId = 'powers-expression'
}) => {
	if (!show) return null;

	return (
		<>
			{/* Left container powers expression */}
			<SinglePowersExpression
				number={number1}
				show={show}
				position={{ left: '50%', top: '0%' }}
				containerId={`${containerId}-left`}
				isLeftContainer={true}
			/>
			
			{/* Right container powers expression */}
			<SinglePowersExpression
				number={number2}
				show={show}
				position={{ left: '50%', top: '0%' }}
				containerId={`${containerId}-right`}
				isLeftContainer={false}
			/>
		</>
	);
};

export default DynamicPowersExpression;
