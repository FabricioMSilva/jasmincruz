import Logo from '../BotãoWhatsZap/whats.png';
import Jasmin from '../../Imagens/LogoJasmin.png';
import { useForm } from 'react-hook-form';
import { KitZap,BtnZapZap, CaixaTexto, Cabecalho, InputTexto } from '../../styled/BtnwhatsZap';
import { AiOutlineSend } from "react-icons/ai";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from 'react';
export default BtnZap => {
    const [showElement, setShowElement] = useState(false)
    const Ativo = () => setShowElement(true)
    const Desativo =()=>setShowElement(false)
    const { register, handleSubmit } = useForm();
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
                    <input type='text'{...register("Telefone")}
                    
                    placeholder='Digite sua mensagem'
                    ></input>
                    <div >
                    <AiOutlineSend size={25}  /></div>
                </InputTexto>
            </CaixaTexto>
            :null}

            <BtnZapZap>
                <img alt="" src={Logo}onClick={Ativo}></img>
                <div class="wrapper"></div>
            </BtnZapZap>
 
        </KitZap>
    )
}