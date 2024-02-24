import { Avo, Cadastro, Nome, Telefone, Menssagem, BtnEnviar, Enderecos, Logotipo } from '../styled/Contato.js';
import { React, useState } from 'react';
import logo from '../Imagens/LogoJasmin.png';


function Contato() {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Descricao, setDescricao] = useState('');
    function EnviarEmail(e) {
        e.preventDefault();
        if (Name === "" || Email === "" || Descricao === "") {
            alert('Preencha todos os campos');
            return;
        }
        alert("Mensagem enviada com sucesso!");
        setName('');
        setEmail('');
        setDescricao('');
    }

    return (
        <Avo>
            <Enderecos>
                <Logotipo>
                    <img src={logo} alt="" />
                    <p className='titulo'>Jasmim Cruz Transportes </p>
                </Logotipo>
            </Enderecos>
            <Cadastro>
                <form className="form" onSubmit={EnviarEmail} >
                    <Nome>
                        <label class="inputbox">
                            <p>Entre em Contato</p>
                            <div >Nome:</div>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                type='text'
                                placeholder='Nome Completo'
                                value={Name}>
                            </input>
                        </label>
                    </Nome>
                    <Telefone>
                        <label>
                            <div>Email:</div>
                            <input type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='example@example.com'

                                value={Email}>
                            </input>
                        </label>
                    </Telefone>
                    <Menssagem>
                        <label>
                            <div>O que deseja?</div>
                            <input
                                cols="30" rows="5"
                                contenteditable="true"
                                className='descricao'
                                onChange={(e) => setDescricao(e.target.value)}
                                value={Descricao}
                                placeholder='Digite sua necessidade'
                            ></input>
                        </label>

                        
                    </Menssagem>
                    <BtnEnviar>
                            <input
                                className="button"
                                type="submit"
                                value="Enviar" 
                                onClick={''}/>
                                 
                    </BtnEnviar>
                </form>
            </Cadastro>
        </Avo>
    );
}
export default Contato;

