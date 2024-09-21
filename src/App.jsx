import React, { useState } from 'react';


const Calculator = () => {
  // State for input fields and result
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  // Function to validate inputs
  const validateInputs = () => {
    if (!input1 || !input2) {
      return 'Both fields are required.'; // Check for empty fields
    }
    if (isNaN(input1) || isNaN(input2)) {
      return 'Inputs must be numbers.'; // Ensure inputs are numbers
    }
    return ''; // No error
  };

  // Function to perform calculations based on selected operation
  const calculate = (operation) => {
    const validationError = validateInputs(); // Validate inputs
    if (validationError) {
      setError(validationError);
      setResult(null);
      return; // Exit if validation fails
    }

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let calcResult;

    // Perform the selected arithmetic operation
    switch (operation) {
      case 'add':
        calcResult = num1 + num2;
        break;
      case 'subtract':
        calcResult = num1 - num2;
        break;
      case 'multiply':
        calcResult = num1 * num2;
        break;
      case 'divide':
        calcResult = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero.'; // Handle division by zero
        break;
      default:
        return; // Exit if no valid operation
    }

    setResult(calcResult); // Update result state
    setError(''); // Clear any existing error messages
  };

  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>
      <input
        className="input-box"
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)} // Manage first input
        placeholder="Num 1"
      />
      <input
        className="input-box"
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)} // Manage second input
        placeholder="Num 2"
      />
      <br />
      <div className="button-container">
        <button onClick={() => calculate('add')}>+</button>
        <button onClick={() => calculate('subtract')}>-</button>
        <button onClick={() => calculate('multiply')}>*</button>
        <button onClick={() => calculate('divide')}>/</button>
      </div>
      <br />
      {error && (
        <div className="error-message">
          <div className="error-title">Error!</div>
          <br />
          <div>{error}</div> {/* Display validation error */}
        </div>
      )}
      {result !== null && (
        <div>
          <div className="success-message">Success!</div>
          <div className="result-message">Result - {result}</div> {/* Display result */}
        </div>
      )}
    </div>
  );
};

export default Calculator;
