import { Avo, Cadastro, Nome, Telefone, Menssagem, BtnEnviar, Enderecos, Logotipo } from '../styled/Contato.js';
import React from 'react';
import logo from '../Imagens/LogoJasmin.png';


function Contato() {
    return (
        <Avo>
            <Enderecos>
                <Logotipo>
                    <img src={logo} alt="" />
                    <p className='titulo'>Jasmim Cruz Transportes </p>
                </Logotipo>
            </Enderecos>
            <Cadastro>
                <form >
                    <Nome>
                        <label class="inputbox">
                            <p>Entre em Contato</p>
                            <div >Nome:</div>
                            <input type='text'required="required"
                                placeholder='Nome Completo'>
                            </input>
                        </label>
                    </Nome>
                    <Telefone>
                        <label>
                            <div>Telefone:</div>
                            <input type='text'
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

