import styled from "styled-components" //npm install --save styled-components

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;


export const Circle = styled.button `
height: 25px;
width: 25px;
background-color: ${props => props.inputColor || "palevioletred"}
border-radius: 50%;
display: inline-block`;