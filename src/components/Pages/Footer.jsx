import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { Footer, DivEnd, DivIconLin, PaiIcon, DivIconIns } from '../styled/Footer';
const Footers = () => {
    return (
        <Footer>
            <PaiIcon>
                <DivIconIns >
                    <div>
                        <FaInstagram className="FaInstagram" size='40px' />
                        <p>Instagram</p></div>
                </DivIconIns>
                <DivIconLin className='icon iconLinked'>
                    <div><FaLinkedin className="FaLinkedin" size='40px' />
                        <p>Linkedin</p></div>
                </DivIconLin>
            </PaiIcon>
            <DivEnd>
                <item>
                    <p>Endereço: <br /> Rua Zico Horta, nº 218 Vila Nova,<br />Barra Mansa / RJ</p>
                </item>
                <div>
                    <span><PiWhatsappLogoDuotone size='40px' /></span>
                    <span><p>(24) 99925-7709 <br /> (41) 99112-0271</p></span>
                    <span><TfiEmail size='40px' right='10px' /></span>
                    <span><p>jasmimcruztransportes@gmail.com</p></span>
                </div>
            </DivEnd>

        </Footer>
    );
}

export default Footers;