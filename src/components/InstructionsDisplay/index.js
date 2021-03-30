import React, { useState } from 'react';
import { StyledDisplay, InstructionsRow, ChangeButton } from './styles';

import moveRight from '../../assets/moveRight.png';
import moveLeft from '../../assets/moveLeft.png';
import moveDown from '../../assets/moveDown.png';
import rotateAnti from '../../assets/rotateAnti.png';
import rotate from '../../assets/rotate.png';

const InstructionsDisplay = ({ gameOver }) => {
  const [hasController, setHasController] = useState(false);

  return (
    <StyledDisplay gameOver={gameOver}>
      <InstructionsRow>
        <img src={moveRight} alt="move right"/>
        <p>{hasController ? 'X' : '→'}</p>
      </InstructionsRow>

      <InstructionsRow>
        <img src={moveLeft} alt="move left"/>
        <p>{hasController ? 'Z' : '←'}</p>
      </InstructionsRow>

      <InstructionsRow isDown={true}>
        <img src={moveDown} alt="move down"/>
        <p>{hasController ? 'Y' : '↓'}</p>
      </InstructionsRow>

      <InstructionsRow>
        <img src={rotate} alt="rotate"/>
        <p>{hasController ? '⟳' : 'w'}</p>
      </InstructionsRow>

      <InstructionsRow>
        <img src={rotateAnti} alt="rotate anticlockwise"/>
        <p>{hasController ? '⟲' : 'q'}</p>
      </InstructionsRow>

      <ChangeButton hasController={hasController} onClick={() => setHasController(!hasController)}>
        {hasController ? 'Controle' : 'Teclado'}
      </ChangeButton>
    </StyledDisplay>
  );
}

export default InstructionsDisplay;
