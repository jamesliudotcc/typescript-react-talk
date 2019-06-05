import React from 'react';

import { Command } from '../types/types';

const Button: React.FC<{ value: Command; onClick: () => void }> = props => (
  <button id="{props.value}" onClick={props.onClick}>
    {props.value}
  </button>
);
export default Button;
