import Logo from '../BotãoWhatsZap/whats.png';
import Jasmin from '../../Imagens/LogoJasmin.png';

import { KitZap,BtnZapZap, CaixaTexto, Cabecalho, InputTexto } from '../../styled/BtnwhatsZap';
import { AiOutlineSend } from "react-icons/ai";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from 'react';
function BtnZap()  {
    const [showElement, setShowElement] = useState(false)
    const Ativo = () => setShowElement(true)
    const Desativo =()=>setShowElement(false)

    const[Menssagem,setMenssagem] = useState("");
  
    const inputControlado = (event)=>{
          setMenssagem(event.target.value);
};

return( 
        <KitZap>
           {showElement? 
            <CaixaTexto >
                <Cabecalho>
                    <img src={Jasmin} alt="" />
                    <p>Jasmin Cruz Transportes</p>
                    <IoMdCloseCircleOutline size={25} onClick={Desativo} />
                </Cabecalho>
                <InputTexto >
                    <input type='text' onChange={inputControlado} placeholder='Digite sua mensagem'>
                    </input>
                    <a target="_blank"rel="noreferrer" href={(`https://wa.me/5524981112790/?text=Oi Jasmin ${Menssagem}`)} onClick={Desativo} > 
                    <AiOutlineSend size={25}   /></a>
                </InputTexto>
            </CaixaTexto>
            :null}
            <BtnZapZap>
                <img alt="" src={Logo} onClick={Ativo}></img>
                <div class="wrapper"></div>
            </BtnZapZap>
 
        </KitZap>
    )
}
export default BtnZap();