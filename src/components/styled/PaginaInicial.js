import styled from 'styled-components';

export const Avo = styled.div`
div{
    display: flex;
    justify-content: center;
    align-items: center;
    width:80vw;
    margin-top:2vw;
    margin-left:10vw;
    margin-bottom:10vh;
}
img{
    width:80vw;
    border-radius:12px 12px 12px 12px ;
}
@media(max-width:1400px){
    div{
    display: flex;
    justify-content: center;
    align-items: center;
    width:80vw;
    margin-top:2vw;
    margin-left:10vw;
    margin-bottom:10vh;    
}
img{
    width:100%;
   
   
    
    margin-left:3vh;
    margin-right:3vh;
    margin-bottom:1%;
}
}
@media(max-width:400px){
    div{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width:100vw;
    height:100vh;
    margin-top:30px;
    border:0px solid black;  
}
img{
    width:100%;
    border:0px solid black;  
}
}

`;