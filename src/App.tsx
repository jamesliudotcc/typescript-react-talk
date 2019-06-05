import React from 'react';
import './App.css';
import { any } from 'prop-types';

type Digits = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;
type Operators = '+' | '-' | '×' | '÷' | '=';
type Button = Digits | Operators;

const App: React.FC = () => {
  //prettier-ignore
  const keyBoard: Button[] = [0, 1, 3, 4, 5, 6, 7, 8, 9, '+', '-', '×', '÷', '='];

  const buttons = keyBoard.map((eachKey, i) => (
    <Button value={eachKey} key={`button-${eachKey}`} />
  ));

  return <div className="App">{buttons}</div>;
};

const Button: React.FC<{ value: Button }> = props => {
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

// TODO: Get this working in React without Typescript
