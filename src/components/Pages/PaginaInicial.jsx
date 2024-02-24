import { Avo } from '../styled/PaginaInicial.js';
import fotoLogo1 from '../Imagens/LogoJasmin2.png';
import Empresa from './Empresa.jsx';
import Clientes from './Clientes.jsx';
import Contato from './Contato.jsx';

function home() {
  return (
    <>
      <Avo>
        <div>
          <img alt="" src={fotoLogo1}></img>
        </div>
      </Avo>
      <Empresa />
      <Clientes />
      <Contato />
    </>
  )
}

export default home;