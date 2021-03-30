import React from 'react';
import { StyledDisplay, InstructionsRow } from './styles';

import moveRight from '../../assets/moveRight.png';
import moveLeft from '../../assets/moveLeft.png';
import moveDown from '../../assets/moveDown.png';
import rotateAnti from '../../assets/rotateAnti.png';
import rotate from '../../assets/rotate.png';

const InstructionsDisplay = ({ gameOver }) => (
  <StyledDisplay gameOver={gameOver}>
    <InstructionsRow>
      <img src={moveRight} alt="move right"/>
      <p>→</p>
    </InstructionsRow>

    <InstructionsRow>
      <img src={moveLeft} alt="move left"/>
      <p>←</p>
    </InstructionsRow>

    <InstructionsRow isDown={true}>
      <img src={moveDown} alt="move down"/>
      <p>↓</p>
    </InstructionsRow>

    <InstructionsRow>
      <img src={rotateAnti} alt="rotate anticlockwise"/>
      <p>q</p>
    </InstructionsRow>

    <InstructionsRow>
      <img src={rotate} alt="rotate"/>
      <p>w</p>
    </InstructionsRow>
  </StyledDisplay>
);

export default InstructionsDisplay;
