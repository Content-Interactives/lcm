import React, { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { BookOpen, Calculator, Lightbulb, RefreshCw, Check, X, SkipForward } from 'lucide-react';

const LCM = () => {
  const [inputNum1, setInputNum1] = useState('');
  const [inputNum2, setInputNum2] = useState('');
  const [calculatedNum1, setCalculatedNum1] = useState('');
  const [calculatedNum2, setCalculatedNum2] = useState('');
  const [lcm, setLCM] = useState(null);
  const [multiples1, setMultiples1] = useState([]);
  const [multiples2, setMultiples2] = useState([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentStep1, setCurrentStep1] = useState(0);
  const [currentStep2, setCurrentStep2] = useState(0);
  const [userGuess1, setUserGuess1] = useState('');
  const [userGuess2, setUserGuess2] = useState('');
  const [guessStatus1, setGuessStatus1] = useState(null);
  const [guessStatus2, setGuessStatus2] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const MIN_VALUE = 1;
  const MAX_VALUE = 100;

  const clampValue = (value) => {
    const num = parseInt(value);
    if (isNaN(num)) return '';
    return Math.max(MIN_VALUE, Math.min(MAX_VALUE, num)).toString();
  };

  const handleInputChange = (setter) => (e) => {
    const rawValue = e.target.value;
    const clampedValue = clampValue(rawValue);
    setter(clampedValue);
  };

  const calculateLCM = () => {
    const a = parseInt(inputNum1);
    const b = parseInt(inputNum2);
    if (isNaN(a) || isNaN(b)) {
      alert('Please enter valid numbers.');
      return;
    }

    setIsCalculating(true);

    const gcd = (x, y) => {
      while(y) {
        let t = y;
        y = x % y;
        x = t;
      }
      return x;
    };

    const lcmValue = Math.abs(a * b) / gcd(a, b);

    let m1 = [];
    let m2 = [];
    for (let i = a; i <= lcmValue; i += a) {
      m1.push(i);
    }
    for (let i = b; i <= lcmValue; i += b) {
      m2.push(i);
    }

    setLCM(lcmValue);
    setMultiples1(m1);
    setMultiples2(m2);
    setCalculatedNum1(a.toString());
    setCalculatedNum2(b.toString());
    setCurrentStep1(0);
    setCurrentStep2(0);
    setUserGuess1('');
    setUserGuess2('');
    setGuessStatus1(null);
    setGuessStatus2(null);
    setShowResult(m1.length === 1 && m2.length === 1);
    setIsCalculating(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      calculateLCM();
    }
  };

  const generateRandomNumbers = () => {
    const randomNum1 = Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1)) + MIN_VALUE;
    const randomNum2 = Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1)) + MIN_VALUE;
    setInputNum1(randomNum1.toString());
    setInputNum2(randomNum2.toString());
  };

  const checkGuess = (guessValue, correctValue, currentStep, setCurrentStep, setGuessStatus, maxStep) => {
    const guess = parseInt(guessValue);
    if (guess === correctValue) {
      setGuessStatus('correct');
      if (currentStep < maxStep - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setCurrentStep(maxStep);
      }
      checkCompletion();
    } else {
      setGuessStatus('incorrect');
    }
  };

  const skipStep = (currentStep, setCurrentStep, setGuessStatus, maxStep) => {
    setGuessStatus(null);
    if (currentStep < maxStep - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(maxStep);
    }
    checkCompletion();
  };

  const skipAll = () => {
    setCurrentStep1(multiples1.length);
    setCurrentStep2(multiples2.length);
    setGuessStatus1(null);
    setGuessStatus2(null);
    setShowResult(true);
  };

  const checkCompletion = () => {
    if (currentStep1 >= multiples1.length - 1 && currentStep2 >= multiples2.length - 1) {
      setShowResult(true);
    }
  };

  const getInputClassName = (status) => {
    let baseClass = "w-20 text-sm px-1 text-left";
    switch (status) {
      case 'correct':
        return `${baseClass} border-green-500 focus:border-green-500`;
      case 'incorrect':
        return `${baseClass} border-red-500 focus:border-red-500`;
      default:
        return `${baseClass} border-gray-300 focus:border-blue-500`;
    }
  };

  const renderMultiplesSection = (multiples, currentStep, setCurrentStep, userGuess, setUserGuess, guessStatus, setGuessStatus, color) => (
    <div className={`bg-${color}-50 p-4 rounded`}>
      <p className={`font-semibold text-${color}-600 mb-2`}>Multiples of {color === 'purple' ? calculatedNum1 : calculatedNum2}:</p>
      <p className="break-words">
        {multiples.slice(0, currentStep + 1).map((m, index) => (
          <span key={index} className={m === lcm ? 'font-bold text-emerald-600' : ''}>{m}{index < currentStep ? ', ' : ''}</span>
        ))}
      </p>
      {currentStep < multiples.length - 1 && (
        <div className="flex items-center space-x-1 text-sm mt-2">
          <Input
            type="number"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Next multiple"
            className={getInputClassName(guessStatus)}
          />
          <Button onClick={() => checkGuess(userGuess, multiples[currentStep], currentStep, setCurrentStep, setGuessStatus, multiples.length)} className="bg-gray-400 hover:bg-gray-500 px-2 py-1 text-xs text-white">
            Check
          </Button>
          <Button onClick={() => skipStep(currentStep, setCurrentStep, setGuessStatus, multiples.length)} className="bg-gray-400 hover:bg-gray-500 px-2 py-1 text-xs text-white">
            Skip
          </Button>
          {guessStatus === 'correct' && <Check className="text-green-500 w-4 h-4" />}
          {guessStatus === 'incorrect' && <X className="text-red-500 w-4 h-4" />}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <Card className="w-full max-w-2xl mx-auto shadow-md bg-white">
        <CardHeader className="bg-sky-100 text-sky-800">
          <div className="flex items-center justify-between">
            <CardTitle className="text-3xl font-bold">LCM Explorer</CardTitle>
            <Calculator size={40} className="text-sky-600" />
          </div>
          <CardDescription className="text-sky-700 text-lg">Discover the Lowest Common Multiple!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <Alert className="bg-blue-50 border-blue-100">
            <Lightbulb className="h-4 w-4 text-blue-400" />
            <AlertTitle className="text-blue-700">What is the Lowest Common Multiple (LCM)?</AlertTitle>
            <AlertDescription className="text-blue-600">
              The LCM of two or more numbers is the smallest positive number that is divisible by all of them. It's like finding the smallest jump that lands on all the numbers at once!
            </AlertDescription>
          </Alert>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex-grow flex space-x-2">
                <Input
                  type="number"
                  value={inputNum1}
                  onChange={handleInputChange(setInputNum1)}
                  onKeyPress={handleKeyPress}
                  placeholder="First number"
                  className="w-1/2 text-lg border-sky-200 focus:border-sky-400"
                />
                <Input
                  type="number"
                  value={inputNum2}
                  onChange={handleInputChange(setInputNum2)}
                  onKeyPress={handleKeyPress}
                  placeholder="Second number"
                  className="w-1/2 text-lg border-sky-200 focus:border-sky-400"
                />
              </div>
              <Button
                onClick={generateRandomNumbers}
                className="bg-sky-400 hover:bg-sky-500 text-white h-10 whitespace-nowrap"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Random
              </Button>
            </div>
            <p className="text-sm text-gray-500 text-center">
              Enter numbers between 1 and 100
            </p>
            <Button 
              onClick={calculateLCM} 
              className="w-full bg-emerald-400 hover:bg-emerald-500 text-white text-xl py-6"
              disabled={isCalculating}
            >
              {isCalculating ? 'Calculating...' : 'Find LCM'}
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start bg-gray-50">
          {lcm !== null && (
            <>
              <div className="w-full space-y-4">
                {renderMultiplesSection(multiples1, currentStep1, setCurrentStep1, userGuess1, setUserGuess1, guessStatus1, setGuessStatus1, 'purple')}
                {renderMultiplesSection(multiples2, currentStep2, setCurrentStep2, userGuess2, setUserGuess2, guessStatus2, setGuessStatus2, 'pink')}
                {!showResult && (
                  <Button 
                    onClick={skipAll} 
                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white"
                  >
                    <SkipForward className="mr-2 h-4 w-4" />
                    Skip All
                  </Button>
                )}
              </div>
              {showResult && (
                <Alert className="mt-4 w-full bg-emerald-50 border-emerald-200">
                  <AlertTitle className="text-emerald-700 text-xl">Result</AlertTitle>
                  <AlertDescription className="text-emerald-600 text-lg">
                    The LCM of {calculatedNum1} and {calculatedNum2} is <span className="font-bold">{lcm}</span>.
                  </AlertDescription>
                </Alert>
              )}
            </>
          )}
        </CardFooter>
      </Card>
      <div className="mt-4 text-center text-gray-700">
        <p className="flex items-center justify-center">
          <BookOpen className="mr-2 text-gray-600" />
          LCM is used in real life for things like finding when two events will occur together again, or calculating the smallest box size that can fit different item quantities perfectly!
        </p>
      </div>
    </div>
  );
};

export default LCM;