import styled from 'styled-components';

export const Avo = styled.div`
  border-radius:6px 6px 6px 6px;
  box-shadow: 4px black; 
  width:80vw;
  display: flex;
  flex-direction:column;
  color: white;
  word-wrap: break-word;
  justify-content:center;
  align-items:center;
`;
export const Texto = styled.div`
display:flex;                         margin-top:10vw;   
font-size: 30pt;
color: white;
width:60vw;

@media(max-width:420px){
  font-size: 20pt;
  margin-top:0vw;   
  width:80vw;
}
`;                                                           
export const Texto2 = styled.div`


bottom: 0;
margin-top:10vw;   
font-family: Georgia, serif;
font-size:16pt;
letter-spacing: 2.8px;
word-spacing: 0.2px;
color: white !important;
font-weight: 700;
text-decoration: none;
font-style: normal;
font-variant: normal;

`;