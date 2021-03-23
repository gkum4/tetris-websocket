import React from 'react';
import { StyledStartButton } from './styles';

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>INICIAR</StyledStartButton>
);

export default StartButton;
