import React, { useState } from 'react';
import './App.css';

type Digit = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0';
type Operator = '+' | '-' | '×' | '÷' | '^' | '=';
type Button = Digit | Operator;

type State = {
  afterOperator: string;
  beforeOperator: string;
  operator: Operator;
};

const App: React.FC = () => {
  //prettier-ignore
  const digits: Digit[] = ['0', '1', '3', '4', '5', '6', '7', '8', '9',]
  const operators: Operator[] = ['+', '-', '×', '÷', '^', '='];
  const keyBoard: Button[] = [...digits, ...operators];

  const [afterOperator, setAfterOperator] = useState('');
  const [beforeOperator, setBeforeOperator] = useState('');
  const [operator, setOperator] = useState('');

  function handleClick(keyClicked: Button) {
    console.log(keyClicked);
    if (digits.includes(keyClicked as Digit)) {
      if (operator && beforeOperator) {
        // Move before operator to
      }
    }
    if (operators.includes(keyClicked as Operator)) {
      console.log('hi');
      // TODO if afterOperator, calculate and set beforeOperator to result
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

const Button: React.FC<{ value: Button; onClick: () => void }> = props => {
  // const handleClick = (something: Button) => {
  //   console.log(something);
  // };
  return (
    <button id="{props.value}" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default App;
