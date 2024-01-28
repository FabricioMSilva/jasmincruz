import styled from 'styled-components';

export const KitZap = styled.div`
display:flex;
justify-content:center;
align-items:center;
 flex-direction:column;
 position:fixed;
width:450px;
height:300px;
pointer-events:0;
bottom:0;
right:0;
`;

export const BtnZapZap = styled.div`
 width:60px;
 height:60px;
 
 background-color:transparent;
 position:fixed;
 border-radius:10px 10px 0px 0px;
 bottom:25px;
 right:25px;
 display:flex;
 flex-direction:column;
 justify-content:center ;
 align-items: center;
 text-align:center;
 
img{
width:100%;
}
img:hover{
    width:105%;
}


`;
export const CaixaTexto = styled.div`

flex-direction:column;
justify-content:center;
align-items:center;
width:350px;
height:min-content;
background-color:white;

border-radius:10px 10px 10px 10px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
img{
width:10%;
}

transition:all 2s ease;

`;
export const Cabecalho = styled.div`
display:flex;
justify-content:space-evenly;
margin:2px;
align-items:center;
width:346px;
color:white;
height:50px;
background-color:green;
border-radius:10px 10px 0px 0px;
text-align:center;
img{
    margin: 0px 5px 0px 5px;
}
`;
export const InputTexto = styled.div`
display:flex;
width:350px;
bottom: 1;
justify-content:center;
align-items:center;
input{
    background-color:white;
    margin:6px;
    width:100%;
   
    height:30px;
    border-radius:10px 10px 10px 10px;
}
`;