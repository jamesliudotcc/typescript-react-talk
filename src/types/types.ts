export type Digit = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0';
export type Operator = '+' | '-' | '×' | '÷' | '^' | '=';
export type Command = Digit | Operator;

export type State = {
  afterOperator: string;
  beforeOperator: string;
  operator: Operator;
};
