import React, { useState } from 'react';
import './App.css';

type Digits = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0';
type Operators = '+' | '-' | '×' | '÷' | '=';
type Button = Digits | Operators;

type State = {
  afterOperator: string;
  beforeOperator: string;
  operator: string;
};

const App: React.FC = () => {
  //prettier-ignore
  const keyBoard: Button[] = ['0', '1', '3', '4', '5', '6', '7', '8', '9', '+', '-', '×', '÷', '='];

  const [afterOperator, setAfterOperator] = useState('');
  const [beforeOperator, setBeforeOperator] = useState('');
  const [operator, setOperator] = useState('');

  function handleClick(keyClicked: string) {
    console.log(keyClicked);
  }

  const buttons = keyBoard.map((eachKey, i) => (
    <Button
      value={eachKey}
      key={`button-${eachKey}`}
      onClick={() => handleClick(eachKey)}
    />
  ));

  return <div className="App">{buttons}</div>;
};

const Button: React.FC<{ value: Button; onClick: any }> = props => {
  const handleClick = (something: Button) => {
    console.log(something);
  };
  return (
    <button id="{props.value}" onClick={() => handleClick(props.value)}>
      {props.value}
    </button>
  );
};

export default App;
