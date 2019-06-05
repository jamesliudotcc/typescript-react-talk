import React from 'react';

import { Command } from '../types/types';

type Props = { value: Command; onClick: () => void };

const Button: React.FC<Props> = props => (
  <button id="{props.value}" onClick={props.onClick}>
    {props.value}
  </button>
);
export default Button;
