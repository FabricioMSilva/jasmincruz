import { Avo, TextoEmpresa, TextoAnimado, Foto, Imagem } from '../styled/Empresa.js';
import Foto1 from '../Imagens/foto2.png';
import Foto2 from '../Imagens/6.jpg';
import Foto3 from '../Imagens/15.jpg';
import foto from '../Imagens/empresa.gif';
function Empresa() {
    return (

        <Avo>
            <TextoEmpresa>
                <TextoAnimado className='div2'>
                    <span >
                        A JasmimCruz é uma empresa que atua no segmento de transporte de passageiros, atendendo pessoas físicas e jurídicas,
                        Locação de veículos com motorista.
                        Foco constante na segurança e agilidade, oferecendo conforto e comodidade.
                    </span>
                </TextoAnimado>
                <Imagem className='div1' ><img alt='' src={Foto1} /></Imagem>

                <TextoAnimado className='div4'>
                    <span>Somos uma empresa especializada em logística é roteirização que faz toda a diferença na qualidade do serviço prestado ao cliente, impactando na sua experiência e também reduzindo os custos logísticos do seu negócio.
                    </span>
                </TextoAnimado>
                <Imagem className='div5' ><img alt='' src={Foto2} /></Imagem>

                <TextoAnimado className='div7'>
                    <span>
                        Qualidade e agilidade em locação de veículo com motorista para pessoas físicas e jurídicas.
                        A JasmimCruz disponibiliza veículos com a mais alta performance do mercado.
                    </span>
                </TextoAnimado>
                <Imagem className='div6'><img alt='' src={Foto3} /></Imagem>
            </TextoEmpresa>
            
        </Avo>
    )
}
export default Empresa;