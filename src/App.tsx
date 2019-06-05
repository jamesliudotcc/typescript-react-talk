import React from 'react';
import './App.css';

type Digits = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;
type Operators = '+' | '-' | '×' | '÷' | '=';
type Button = Digits | Operators;

const App: React.FC = () => {
  //prettier-ignore
  const keyBoard: Button[] = [0, 1, 3, 4, 5, 6, 7, 8, 9, '+', '-', '×', '÷', '='];

  const handleClick = () => {
    console.log('hi');
  };

  const buttons = keyBoard.map((eachKey, i) => (
    <Button value={eachKey} key={`button-${eachKey}`} onClick={handleClick} />
  ));

  return <div className="App">{buttons}</div>;
};

const Button: React.FC<{ value: Button; onClick: any }> = props => {
  return (
    // @ts-ignore
    <button id="{props.value}" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default App;
