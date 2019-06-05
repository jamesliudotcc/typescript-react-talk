import React, { useCallback } from 'react';
import './App.css';

type Digits = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;
type Operators = '+' | '-' | '×' | '÷' | '=';
type Button = Digits | Operators;

const App: React.FC = () => {
  //prettier-ignore
  const keyBoard: Button[] = [0, 1, 3, 4, 5, 6, 7, 8, 9, '+', '-', '×', '÷', '='];

  const handleClick: any = () => {
    console.log('hi');
  };

  const buttons = keyBoard.map((eachKey, i) => (
    <Button value={eachKey} key={`button-${eachKey}`} />
  ));

  return <div className="App">{buttons}</div>;
};

const Button: React.FC<{ value: Button }> = props => {
  return <button id="{props.value}">{props.value}</button>;
};

export default App;
