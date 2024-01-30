import Logo from '../BotãoWhatsZap/whats.png';
import Jasmin from '../../Imagens/LogoJasmin.png';

import { KitZap,BtnZapZap, CaixaTexto, Cabecalho, InputTexto } from '../../styled/BtnwhatsZap';
import { AiOutlineSend } from "react-icons/ai";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from 'react';
export default BtnZap => {
    const [showElement, setShowElement] = useState(false)
    const Ativo = () => setShowElement(true)
    const Desativo =()=>setShowElement(false)
    const [menssagem, setmensagem] = useState("");
   
    return (
        <KitZap>
           {showElement? 
            <CaixaTexto >
                <Cabecalho>
                    <img src={Jasmin} alt="" />
                    <p>Jasmin Cruz Transportes</p>
                    <IoMdCloseCircleOutline size={25} onClick={Desativo} />
                </Cabecalho>
                <InputTexto >
                    <input type='text'
                    onChange={(e)=> setmensagem(e.target.value)} 
                    placeholder='Digite sua mensagem'
                    ></input>
                    <a href={`https://wa.me//5524993081222?text=Ola JasminCruz, ${menssagem}`}target="_blank" >
                    <AiOutlineSend size={25} onClick={Desativo}  /></a>
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