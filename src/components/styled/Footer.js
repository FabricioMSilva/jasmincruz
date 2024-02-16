import styled from 'styled-components';

export const Footer = styled.div`
border: 1px solid white;
  display: flex;
width:80vw;
margin-left:10vw;
margin-bottom:10vw;
height:45vh;
justify-content: center;
align-items:center;
border-radius: 50px;
color:white !important;
@media(max-width:420px){
  display:flex;
  flex-direction:column;
  width:80vw;
  height:80vh;
}
`;
export const PaiIcon = styled.div`

  display: flex;
  width: 40%;
  height: 40%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media(max-width:420px){
  display:flex;
  flex-direction:column;
  width:80vw;
  height:20vh;
}

`;
export const DivIconIns = styled.div`
  font-size:1rem;
 display: inline-flex;
 justify-content:center;
 align-items:center;
 width:300px;
 height: 80px;
 margin-left:12px;
 background-color:transparent !important;
 div{
   display: flex;
   align-items: center;
   justify-content: center;
   width: 150px;
   height: 50px;
   font-size:1rem;
   color: white;
   background-color:transparent!important;
 }
 :hover{
border-radius:10px 10px 10px 10px;
background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  background: -webkit-radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);}

 .FaInstagram{

width:35px;
height: 35px;

 }
 
 .FaLinkedin{
   color: white;
   background-color:white;
 }
 @media(max-width:420px){
  display:flex;
  flex-direction:column;
  width:80vw;
  height:20vh;
}
 
`;
export const DivIconLin = styled.div`
    font-size:1rem;
  display: inline-flex;
 justify-content:center;
 align-items:center;

 div{
  display: flex;
   align-items: center;
   justify-content: center;
   width: 150px;
   height: 50px;
   font-size:1rem;
   color: white;
  
 }
 div:hover{
  border-radius:10px 10px 10px 10px;
background-color: #1e90ff;
 }
`;


export const DivEnd = styled.div`
  
  width: 80vw;
  height: 40%;
  display: flex;
align-items: center;
justify-content: space-around;
font-size:1rem;
p{
   margin-top:-5px;
}
div{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 44%;}
    font-size:1rem;
span{
    
    width:100%;
    text-align:center;
}

@media(max-width:420px){
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:80vw;
  height:60vh;
 p{
text-align:center;
font-size:15pt;
  }
  span{
   
    width:80vw;
  }
}
`;