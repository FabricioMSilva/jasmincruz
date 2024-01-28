import { Avo, Cadastro, Nome, Telefone, Menssagem, BtnEnviar, Enderecos, Logotipo } from '../styled/Contato.js';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import logo from '../Imagens/LogoJasmin.png';

function Contato() {
    const { register, handleSubmit } = useForm();
    const [value, setValue] = useState()
    const onSubmit = (e) => {
        console.log(e);
    };

    return (
        <Avo>
            <Enderecos>
                <Logotipo>
                    <img src={logo} alt="" />
                    <p className='titulo'>Jasmim Cruz Transportes </p>
                </Logotipo>
            </Enderecos>
            <Cadastro>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Nome>
                        <label class="inputbox">
                            <p>Entre em Contato</p>
                            <div >Nome:</div>
                            <input type='text'required="required"
                                placeholder='Nome Completo'{...register("Nome")}>
                            </input>

                        </label>
                    </Nome>
                    <Telefone>
                        <label>
                            <div>Telefone:</div>
                            <input type='text'{...register("Telefone")}
                                placeholder='( xx ) xxxx - xxxx'></input>
                        </label>
                    </Telefone>
                    <Menssagem>
                        <label>
                            <div>O que deseja?</div>
                            <input className='descricao'></input>
                        </label> <BtnEnviar><button class="custom-btn btn-5"><span>ENVIAR</span></button></BtnEnviar>
                    </Menssagem>
                   
                </form>
            </Cadastro>
        </Avo>
    )
}

export default Contato;