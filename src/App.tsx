import React, { useState } from 'react';
import './App.css';

import {
  Command,
  Digit,
  Operator,
  NumberHook,
  OperatorHook,
} from './types/types';
import { digits, operators, keyBoard } from './constants';

import Button from './components/Button';
import Display from './components/Display';

const App: React.FC = () => {
  const [afterOperator, setAfterOperator]: NumberHook = useState('');
  const [beforeOperator, setBeforeOperator]: NumberHook = useState('');
  const [operator, setOperator]: OperatorHook = useState('' as Operator);

  function calculate(fromDisplay: {
    operator: Operator;
    beforeOperator: string;
    afterOperator: string;
  }) {
    const { operator, beforeOperator, afterOperator } = fromDisplay;
    switch (operator) {
      case '+':
        return (Number(beforeOperator) + Number(afterOperator)).toString();
      case '-':
        return (Number(beforeOperator) - Number(afterOperator)).toString();
      case '×':
        return (Number(beforeOperator) * Number(afterOperator)).toString();
      case '÷':
        return (Number(beforeOperator) / Number(afterOperator)).toString();
      case '^':
        return (Number(beforeOperator) ** Number(afterOperator)).toString();
    }
    return '';
  }

  function handleClick(keyClicked: Command) {
    console.log(keyClicked);
    if (digits.includes(keyClicked as Digit)) {
      if (operator && beforeOperator) {
        return setAfterOperator(() => afterOperator + keyClicked);
      } else {
        return setBeforeOperator(() => beforeOperator + keyClicked);
      }
    }
    if (keyClicked === '=') {
      if (!beforeOperator || !afterOperator) return;

      setBeforeOperator(() => '');
      setOperator(() => '');
      setAfterOperator(() =>
        calculate({ operator, beforeOperator, afterOperator }),
      );
      return;
    }
    if (operators.includes(keyClicked as Operator)) {
      // TODO if (afterOperator), calculate and set beforeOperator to result
      // TODO only change operator state if (beforeOperator)
      return setOperator(() => keyClicked as Operator);
    }
  }

  const buttons = keyBoard.map(eachKey => (
    <Button
      value={eachKey}
      key={`button-${eachKey}`}
      onClick={() => handleClick(eachKey)}
    />
  ));

  return (
    <div className="App">
      <Display display={`${beforeOperator} ${operator} ${afterOperator}`} />
      <hr />
      {buttons}
    </div>
  );
};

export default App;
