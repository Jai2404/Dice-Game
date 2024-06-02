import styled from "styled-components";
import { Button } from "../styled/Button";


const Container= styled.div`

max-width: 1180px;
display: flex;
margin:0 auto;
height: 100vh;
align-items :center;

.content h1{
    font-size: 96px;
    white-space: nowrap;
}

    

`;

const StartGame = ({toggle}) => {
  return( 
  <Container><div>
<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Ddice&psig=AOvVaw3EywTk1zwYcgzOz8M9lYK2&ust=1717433124540000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCc26GvvYYDFQAAAAAdAAAAABAE" />
</div>
    <div className="content">
        <h1>Dice Game</h1>
        <Button
         onClick={toggle}>Play Now</Button>
         
    </div>
  </Container>
  );
}

export default StartGame