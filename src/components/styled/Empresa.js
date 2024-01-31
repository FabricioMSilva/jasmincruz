import styled from 'styled-components';

export const Avo = styled.div`
  
  border-radius:6px 6px 6px 6px;
  width:80vw;
  margin-left:10vw;
  margin-bottom:10vw;
  display: flex;
  flex-direction:column;
  font-size: calc(10px + 2vmin);
  color: white;
  height:min-content;
  justify-content:center;align-items:center;
  @media(max-width:1400px){
    width:80vw;
    margin-left:20vw;
    margin-top:20vh;
    margin-bottom:10vh;
  }
  @media(max-width:420px){
 
  display:flex;
  height:0vh;
  margin-top:65vh;
  flex-direction:column;
  justify-content:center;
  align-items:center;
   
  }
`;
export const Imagem = styled.div`
width:100%;
outline: 5px solid white;
outline-offset: -5px;
display:flex;
border-radius:12px 12px 12px 12px ;
img{
   
    border-radius:12px 12px 12px 12px ;
    width:100%;
}

@media(max-width:1400px){
    width:260px;
    height:160px;
    margin-left:1vh;
    margin-right:1vh;
    outline: 1px solid white;
outline-offset: 4px;

 filter:drop-shadow(0px -8px -8px   radial-gradient(circle, #1b1c23, #1d1f26, #202229, #22252d, #252830, #232630, #20252f, #1e232f, #171d2b, #111626, #0a0e22, #01031e)); 
}
@media(max-width:420px){
    margin:0;
    display:flex;
    justify-content:center;
    width:398px;
    border:none;
    outline: none;
outline-offset: 4px;
    img{
        border-radius:12px 12px 12px 12px ;
        width:380px;
        margin:0;
        border:none;
    }
}
 
  
`;
export const TextoEmpresa = styled.div`
display: grid;
font-size: calc(10px + 2vmin);
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 20px;
.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 4; }
.div3 { grid-area: 2 / 1 / 3 / 2; }
.div4 { grid-area: 2 / 1 / 3 / 3; }
.div5 { grid-area: 2 / 3 / 3 / 4; }
.div6 { grid-area: 3 / 1 / 4 / 2; }
.div7 { grid-area: 3 / 2 / 4 / 4; } 
@media(max-width:1400px){
    grid-row-gap: 5px;
    grid-column-gap: 1px;
    width: 100vw;
    .div2{
        text-align:left;
        width: 600px;
        font-size: calc(10px + 2vmin);
    }
    .div4{
        text-align:right;
        width:600px;
        font-size: calc(10px + 2vmin);
        margin-left:10vw;
    }
    .div7{
        text-align:left;
        width: 600px;
        font-size: calc(10px + 2vmin);
    }
    
}
@media(max-width:420px){
display: flex !important;
justify-content:center !important;
align-items:center !important;
margin:0;
flex-direction: column !important;
width: 380px;
.div2{
        text-align:center;
        width: 380px;
        margin:0;
    }
    .div4{
        text-align:center;
        width:380px;
        margin:0;
      
    }
    .div6{
        display: none;
    }
    .div7{
        text-align:center;
        width: 380px;
        margin:0;
    }
span{
    text-align: center;
}
  
}
`
export const TextoAnimado = styled.div`
    
    display:flex;
    align-items:center;
    text-decoration:none;
    color: white;
    
    font-size: 20pt;
    letter-spacing: 2.8px;
    word-spacing: 0.2px;
    color: white;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    padding: 12px;
    width: 97%;
    
    background: transparent;
    @media(max-width:1400px){
        font-size: 12pt;
        width: 600px;
  }
  @media(max-width:420px){
display: flex !important;
width: 80vw;
  span{
    display: flex !important;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
`;
export const Foto = styled.img`
width: 80vw;
margin-bottom:5%;
background-color: white;
position:relative;
margin-top:20vh;
border-radius:12px 12px 12px 12px ;
   
    @media(max-width:1400px){
        
        outline: 1px solid white;
        outline-offset: 4px;
        border-radius:0px 0px 0px 0px ;
        margin-top:10vh;
        margin-bottom:1%;
        width: 100vw;
    }
    @media(max-width:400px){
        margin-top:0vh;
        border: solid black 1px;
        width: 50vw;
    }
`;
