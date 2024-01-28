import styled from 'styled-components';

export const Avo = styled.main`
height:100vh;
border-radius:6px 6px 6px 6px;
box-shadow: 4px black; 
width:80vw;
margin-left:10vw;
text-align:center;
display: flex;
flex-direction:column;
color: white;
justify-content:center;align-items:center;
@media(max-width:420px){
  height:100vh;
margin-top:80vh;
padding:0;
display: flex;
flex-direction:column;
position: relative;

}

`;

export const Logos = styled.div`
width:80vw;
margin:5vh;
justify-content:center;
display:flex;
justify-content:space-around;
background-color:white;
border-radius:12px 12px 12px 12px ;
    outline: 5px solid white;
    outline-offset: -5px;
    @media(max-width:420px){
   
      display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;justify-items:center;


.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 3 / 2 / 4; }
.div3 { grid-area: 3 / 1 / 4 / 2; }
.div4 { grid-area: 3 / 3 / 4 / 4; }
.div5 { grid-area: 2 / 2 / 3 / 3; } 

 }
`;

export const Logo = styled.div`
  width:150px;
  img{
    width:150px;
  }
  @media(max-width:1400px){
    width:70px;
  img{
    width:70px;
  }
  @media(max-width:400px){

    img{
    width:90px;
  }
  }
}
`;