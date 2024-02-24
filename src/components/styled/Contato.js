
import styled from 'styled-components';

export const Avo = styled.div`
  display:flex;
  background-color:transparent;
  width:80vw;
  height:120vh;
  margin:3vw 10vw -5vh;
  justify-content:center;
  align-items:flex-start;
  font-size: 1rem;

  color: white;
  @media(max-width:420px){
    width:100vw;
    margin:0;
    display:flex;
    flex-direction:column;
    align-items:center;
  }

`;
export const Cadastro = styled.div`
 
 background-color:transparent ;
  width:40vw;
  height:80vh;
  display:flex;
  justify-items:center;
  align-content:center;
  flex-direction:column;
  
 form{
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  
 }
 label{
  width:80%;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:left;
 }
 div{
  text-align:left;
  font-size: 1rem;
 }
 p{
  text-align:center;
  font-size: 1.2rem;
  width:100%;
  height:50px;
 }
 input{
  width:80%;
  height:40px;
  border-radius: 4% 4% 4% 4%;
  text-align:center;
  font-size: 1.2rem;
 }
 .descricao{
  height:80px;
 }

 @media(max-width:420px){
    width:80vw;
    height:80vh;
    display:grid;
   margin:0;
 
        form{
          
          width:80vw;
          display:grid;
         justify-content:center;
         align-items:flex-start;
        }

  }
 
`;
export const Enderecos = styled.div`
background-color:transparent;
width:40vw;
height:100vh;
display:flex;
flex-direction:column;
justify-content:left;
@media(max-width:420px){
  width:80vw;
height:152px;
  display:flex;
  border:solid green 1px;
flex-direction:column;
}
`;
export const Logotipo = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  img{
    width:400px;
  }
p{
  font-family: 'Literata';
  font-size: 2.2rem;
 margin-top:-70px;
  bottom:0;
  
}  
@media(max-width:420px){
  display:flex;
  flex-direction:column;
   align-items:center;
  justify-items:first baseline;
  
  height:150px;
  margin:0;
  img{
    width:100px;
    height:100px;
  }
  p{
    display:flex;
    justify-content:center;
    text-align:center;
    margin-top:0.1vh;
    width:80vw;
    font-size: 1.2rem;
    text-shadow:0 1px 1px;
   
  }
}

`;
export const Nome = styled.div`
  width:40vw;
  height:25vh;
  display:flex;
  justify-content:center;
  align-items:center;
  label{
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:25vh;}
    p{
      font-family: 'Literata';
      font-size: 1.2rem;
      color:white;
      text-align:center;
    }
    div{
      text-align:left;
      width:57vh;
      text-shadow:0 1px 1px;
    }
    input{
      text-align:center;
     
    } ::placeholder{
        font-size: 1rem;
      }
    @media(max-width:420px){
    
    margin:0;
    display:flex;
    flex-direction:column;
    align-items:center;
   margin-bottom:-10vh;
    label{
    display:flex;
    flex-direction:column;
    align-content:center;
    width:80vw;
    height:18vh;
    p{
      font-family: 'Literata';
      font-size: 1.2rem;
      
      color:white;
      text-align:center;
      height:4vh;
    }
    div{
    display:flex;
    text-align:left;
    width:80vw;
    font-size: 1.2rem;
    text-shadow:0 1px 1px;
   }
  input{
    width:80vw;
    height:40px;
    border-radius: 4% 4% 4% 4%;
    text-align:left;
    font-size: 1.2rem;
    text-align:center;
    
  }

  }}

 `;
export const Telefone = styled.div`
    width:40vw;
  height:25vh;
  
  display:flex;
  justify-content:center;
  align-items:center;
  label{
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:25vh;}
    p{
      font-family: 'Literata';
      font-size: 1.2rem;
      color:white;
      text-align:center;
    }
    div{
      text-align:left;
      width:57vh;
      text-shadow:0 1px 1px;
    }
    input{
      text-align:center;
      font-size: 1.2rem;
    }
    ::placeholder{
        font-size: 1rem;
      }
    @media(max-width:420px){
    
      label{
    display:flex;
    flex-direction:column;
    align-content:center;
    width:80vw;
    
    height:15vh;
    p{
      font-family: 'Literata';
      font-size: 1.2rem;
      color:white;
      text-align:center;
      height:4vh;
    }
    div{
    display:flex;
    text-align:left;
    width:80vw;
    font-size: 1.2rem;
    text-shadow:0 1px 1px;
   }
  input{
    width:80vw;
    height:40px;
    border-radius: 4% 4% 4% 4%;
    text-align:center;
    font-size: 1.2rem;
  }

  }}
  

`;
export const Menssagem = styled.div`
 width:40vw;
  height:25vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:20px;
  label{
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:25vh;
    p{
      font-family: 'Literata';
      font-size: 1.2rem;
      color:white;
      text-align:center;
    }
    div{
      text-align:left;
      font-size: 1rem;
      width:57vh;
      text-shadow:0 1px 1px;
    }
    ::placeholder{
        font-size: 1rem;
      }
    @media(max-width:420px){
    
    label{
  display:flex;
  flex-direction:column;
  align-content:center;
  width:80vw;

  height:15vh;}
  
  div{
    display:flex;
    text-align:left;
    width:80vw;
    font-size: 1.2rem;
    text-shadow:0 1px 1px;

}
input{
  width:80vw;
  height:40px;
  border-radius: 4% 4% 4% 4%;
  text-align:center;
  font-size: 1rem;
  border:1px white solid;
  
}

}}
  
`;
export const BtnEnviar = styled.div`
display:flex;
justify-content:center;
align-items:center;

font-size:1rem;
width:25vw;
height:100px;

input{
width:40%;
border:1px white solid;
background-color:transparent;
color:white;
font-size:1rem;
}

`;