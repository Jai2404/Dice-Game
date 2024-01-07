import { useState } from "react";
import styled from 'styled-components';
import NumberSelector from './NumberSelector';
import TotalScore from './TotalScore';
import RoleDice from './RoleDice';
import { Button } from "../styled/Button";
import Rules from "./Rules";

const MainContainer = styled.main`
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btn{

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

export const GamePlay = () => {

  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1); // Initialize with a default value
  const[error, setError]= useState();
  const[showRules,setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const roleDice = () => {



    if (!selectedNumber)
    {
      setError("Numvber is not selected")
      return
    } 
    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice(randomNumber);
  
  (selectedNumber== randomNumber);

  if(selectedNumber== randomNumber){
    setScore((prev)=>prev + randomNumber);
  }else{
    setScore((prev)=>prev - 2);
  }
  setSelectedNumber(undefined)
};
const resetScore =() =>{

  setScore(0);
};

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score = {score}/>
        <NumberSelector 
        setError={setError}
        error={error}
          selectNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber} />
      </div>
      <RoleDice
        currentDice={currentDice}
        roleDice={roleDice} />
        <div className ="btn">
          <Button onClick={resetScore}>Reset</Button>

          <Button onClick={()=>setShowRules((prev)=>!prev)}>{
            showRules ? "Hide":"Show"}
            
            Rules</Button>
        </div>
      {showRules && <Rules />}
    </MainContainer>
  );
  
};

export default GamePlay;
