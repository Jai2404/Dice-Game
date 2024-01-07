import React from 'react'
import styled from "styled-components";

const RuleContainer = styled.div`
max-width: 800px;
margin:0 auto;
background-color:#fbf1f1;
padding: 20px;
margin-top:40px;
border-radius: 10px;

h2{
    font-size :24px

}

.text{
    margin-top:24px;
}


`;

const Rules = () => {
  return (
    <RuleContainer>
<h2>How to play</h2>
<div className="text">
    <p>Select any number</p>
    <p>Click on dice image</p>
    <p>
        if the selected number matches the dice u get point
    </p>
    <p>If not u get minus points</p>

</div>
    </RuleContainer>

  )
}

export default Rules