import { Digit, Operator, Command } from './types/types';

//prettier-ignore
export const digits: Digit[] = ['0', '1', '3', '4', '5', '6', '7', '8', '9',]
export const operators: Operator[] = ['+', '-', '×', '÷', '^', '='];
export const keyBoard: Command[] = [...digits, ...operators];
