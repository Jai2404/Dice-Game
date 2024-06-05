import React from 'react';
import styled from 'styled-components';

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;

const RoleDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className='dice' onClick={roleDice}>
        <img src={`./dice_${currentDice}.png`} alt="Dice" />
      </div>
      <p>Click on the dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;
