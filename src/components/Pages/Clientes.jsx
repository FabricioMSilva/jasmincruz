import { Avo, Logos, Logo} from '../styled/Clientes.js';
import Michelin from '../Imagens/empresas/michelin.png';
import Bradesco from '../Imagens/empresas/bradesco.png';
import Huyndai from '../Imagens/empresas/huyndai.png';
import Nissan from '../Imagens/empresas/nissan.png';
import Tokio from '../Imagens/empresas/tokimarine.png';
import Texto01 from '../Pages/Texto1.jsx';


function Clientes() {
    return (
        <Avo>
<Texto01/>
            <Logos>
                <Logo className='div1' ><img src={Bradesco}></img></Logo>
                <Logo className='div2'  ><img src={Michelin}></img></Logo>
                <Logo className='div3'  ><img src={Huyndai}></img></Logo>
                <Logo className='div4' ><img src={Nissan}></img></Logo>
                <Logo className='div5' ><img src={Tokio}></img></Logo>
            </Logos>
        </Avo>
    )
}
export default Clientes;