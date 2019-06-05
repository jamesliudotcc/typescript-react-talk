import React, { useState } from 'react';
import './App.css';

import { Digit, Operator, Command } from './types/types';

import Button from './components/Button';

const App: React.FC = () => {
  //prettier-ignore
  const digits: Digit[] = ['0', '1', '3', '4', '5', '6', '7', '8', '9',]
  const operators: Operator[] = ['+', '-', '×', '÷', '^', '='];
  const keyBoard: Command[] = [...digits, ...operators];

  const [afterOperator, setAfterOperator] = useState('');
  const [beforeOperator, setBeforeOperator] = useState('');
  const [operator, setOperator] = useState('');

  function handleClick(keyClicked: Command) {
    console.log(keyClicked);
    if (digits.includes(keyClicked as Digit)) {
      if (operator && beforeOperator) {
        // Move before operator to
      }
    }
    if (operators.includes(keyClicked as Operator)) {
      console.log('hi');
      // TODO if (afterOperator), calculate and set beforeOperator to result
      // TODO only change operator state if (beforeOperator)
      setOperator(() => keyClicked);
    }
  }

  const buttons = keyBoard.map(eachKey => (
    <Button
      value={eachKey}
      key={`button-${eachKey}`}
      onClick={() => handleClick(eachKey)}
    />
  ));

  return <div className="App">{buttons}</div>;
};
export default App;
