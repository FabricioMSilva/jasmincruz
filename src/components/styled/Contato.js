
import styled from 'styled-components';

export const Avo = styled.div`
  display:flex;
  background-color:transparent;
  width:80vw;
  height:120vh;
  margin:3vw 10vw -5vh;
  justify-content:center;
  align-items:flex-start;
  font-size: 130%;
  font-weight: 300;
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
  font-size: 28px;
 }
 p{
  text-align:center;
  font-size: 1000px;
  width:100%;
  height:50px;
 }
 input{
  width:80%;
  height:40px;
  border-radius: 4% 4% 4% 4%;
  text-align:center;
  font-size: 28px;
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
  font-size: 60px;
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
    font-size:20pt;
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
      font-size: 40px;
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
      font-size: 20pt;
      
      color:white;
      text-align:center;
      height:4vh;
    }
    div{
    display:flex;
    text-align:left;
    width:80vw;
    font-size:16pt;
    text-shadow:0 1px 1px;
   }
  input{
    width:80vw;
    height:40px;
    border-radius: 4% 4% 4% 4%;
    text-align:left;
    font-size: 18px;
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
      font-size: 40px;
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
      font-size: 20px;
     
      color:white;
      text-align:center;
      height:4vh;
    }
    div{
    display:flex;
    text-align:left;
    width:80vw;
    font-size:16pt;
    text-shadow:0 1px 1px;
   }
  input{
    width:80vw;
    height:40px;
    border-radius: 4% 4% 4% 4%;
    text-align:center;
    font-size: 18px;
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
  label{
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:25vh;
    p{
      font-family: 'Literata';
      font-size: 40px;
      color:white;
      text-align:center;
    }
    div{
      text-align:left;

      width:57vh;
      text-shadow:0 1px 1px;
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
    font-size:16pt;
    text-shadow:0 1px 1px;

}
input{
  width:80vw;
  height:40px;
  border-radius: 4% 4% 4% 4%;
  text-align:center;
  font-size: 18px;
  border:1px white solid;
  
}

}}
  
`;
export const BtnEnviar = styled.div`


background: transparent;
width:100px;
height:100px;
display: flex;
justify-content: center;
margin-top:50px;
h1 {

  text-align: center;
  color: blue;
  font-size: 1px;
  font-family: "Cormorant Garamond", serif;
}

p {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  text-align: center;
  font-size: 18px;
  color: #676767;
}
.frame {
  width: 90%;
  margin: 40px auto;
  text-align: center;
}

button {
  margin: 20px;

}
.custom-btn {
  width: 130px;
  height: 40px;
  color: white;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 50;
  background: black;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
}
.btn-5 {
  font-size: 25px;
  width: 130px;
  height: 40px;

  box-shadow:none;
  border: none;
  color:WHITE;
  background-color:transparent;
}
.btn-5:hover {
  color: white;
  background: transparent;
   box-shadow:none;
}
.btn-5:before,
.btn-5:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: white;
  box-shadow:
   -1px -1px 5px 0px #fff,
   7px 7px 20px 0px #0003,
   4px 4px 5px 0px #0002;
  transition:400ms ease all;
}
.btn-5:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
.btn-5:hover:before,
.btn-5:hover:after{
  width:100%;
  transition:800ms ease all;
}

`;