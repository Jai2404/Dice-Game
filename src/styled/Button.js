import styled from "styled-components";

export const Button = styled.button`
color: white;
background-color:black;
padding : 10px 18px;
min-width: 220px;
border-radius: 5px;
border:none;
font-size: 16px;
border: 1px solid transparent;
transition : 0.3s background ease-in;
&:hover{
background-color: #ebebf2;
border: 1px solid black;
color:black;
transition : 0.3s background ease-in;
cursor: pointer;
}   
`;