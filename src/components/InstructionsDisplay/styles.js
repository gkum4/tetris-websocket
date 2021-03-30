import styled, { css } from 'styled-components';

export const StyledDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${props => (props.gameOver ? 'red' : '#ededed')};
  background: #000;
  position: relative;
`;

export const InstructionsRow = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  img {
    height: 25px;
    object-fit: contain;

    ${({ isDown }) => !!isDown && css`
      margin-left: 15px;
      height: 45px;
    `}
  }
  
  p {
    font-family: 'Train One', cursive;
    font-size: 1rem;
  }
`;

export const ChangeButton = styled.button`
  display: flex;
  flex-direction: column;
  background: purple;
  color: #eaeaea;
  position: absolute;
  bottom: -15px;
  outline: none;
  border: none;
  padding: 7px;
  border-radius: 8px;

  ${({ hasController }) => hasController && css`
    background: green;
  `}
`;