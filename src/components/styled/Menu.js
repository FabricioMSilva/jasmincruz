import styled from 'styled-components';

export const MenuBar = styled.div`
.geral{
  background-color: transparent !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: default !important;
  color: white;
  width: 80vw;
  margin-top: 10vh;
  margin-bottom: 4vmin;
  margin-left: 10vw;
font-size: 1.2rem;

  @media (max-width: 400px){
    width: 100%;
    height: 50px;
   
    margin:0;
}}
.container{
  display: flex; 
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 5vh;
  width: 80vw; 
}
 nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;

}
header nav ul {
  display: flex;
  
  justify-content:space-around;

  width: 80vw;
}
header nav ul li {
  list-style: none;
}
header nav ul li a {
  text-decoration: none;
  color: white;
 
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif ;
  font-size: 1rem;
  padding: 0rem;

  transition: all 250ms linear 0s;

}
header nav ul li a:hover {
  font-size: 1.8rem;
  height: 30px;
 
}
header nav ul li a{
  position: relative;
  animation-name: menu;
  animation-duration: 1s;
  transition: 100ms;
}
header nav ul li a{
  position: relative;
  top: 2px;
  left: 2px;
}
@keyframes menu {
  0%   { left:0px; top: -100px;}
  100% { left: 0px; top:0px;}
  
}

@media (max-width: 630px){
  html{
    font-size: 70%;
  }
 .hero .container{
   flex-direction: column;
   text-align: center;
 }

 .form-group{
   display: block;
 }
}

@media (max-width: 1120px){
 
   .menu-section nav{
    display: none;
  }

  .one,
  .two,
  .three{
    background-color:white;
    height: 5px;
    width: 100%;
    margin: 6px auto;
    transition-duration: 0.3s;
  }
  .menu-toggle{
    width: 40px;
    height: 30px;
    margin-left: 30px;
  }

  /*Fullscreen*/
  .menu-section.on {
    position: absolute;
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background:white;

    z-index: 10; 
    /*camada acima, evitar o scrool dos itens a baixo*/
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-section.on nav{
    display: block;
    
  }

  
  .menu-section.on .menu-toggle{
    position: absolute;
  
    right: 25px;
    top: 25px;
  }

  
  .menu-section.on .menu-toggle .one{
    transform: rotate(45deg) translate(7px, 7px);
    background-color: black;
  }

  .menu-section.on .menu-toggle .two{
   opacity: 0;

  }

  .menu-section.on .menu-toggle .three{
    transform: rotate(-45deg) translate(8px, -9px);
    background-color: black;
  }

  .menu-section.on nav ul{
    text-align: center;
    display: block;
    
  }

  .menu-section.on nav ul a{ 
   transition-duration:  0.5s;
   font-size: 2.0rem;
    display: block;
    color:black;
    padding: 1.8rem;
    font-size:20px;
   
  }
  
  
header nav ul li a .FiLogOut{
width: 40px;
}
  .menu-section.on nav ul .hide{ 
     display: flex;
     align-items: center;
     justify-content: center;
     padding: 0rem;
     font-size: 1.6rem;
   }

}

@media (max-width: 400px){
  #form h3{
    font-size: 1rem;
  }

}
.DivLogo{
  margin-top: 50px;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-content: center;
position: absolute;
  margin-top: 1px;
}
.LogoTipo{
  display: flex;
  justify-content: center;
  align-items: center;
  width:15vh;
}



`;
