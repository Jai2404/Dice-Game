import styled from "styled-components"

const ScoreContainer = styled.div`
max-width: 200px;
line-height: 60px;
text-align: center;

h1{
    font-size: 100px;
    line-height: 5px;

}

p{
    font-size: 24px;
    font-weight: 500px;
    
}
    


`

  const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
    <div>
        <h1>{score}</h1>
        <p>Total Score</p>
    </div>
</ScoreContainer>  )
}

export default TotalScore
