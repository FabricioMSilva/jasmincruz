import  {React, useState } from 'react';
import {MenuBar} from '../../styled/Menu';
import {Link} from 'react-router-dom';

const Headers =  () => {
    const [classOn, setClassOn] = useState(false);
    return (
        <MenuBar>
            <header className='geral'>
                <div className="container">
                    <div className={classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
                        <div className="menu-toggle">
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/Empresa">Empresa</Link></li>
                                <li><Link to="/Clientes">Clientes</Link></li>
                                <li><Link to="/Contato">Contatos</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </MenuBar>
    );

}

export default Headers;