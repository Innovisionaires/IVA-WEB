import '../styles/footer.css';
import Logo from '../assets/logo.png';
import ig from '../assets/ig.svg';
import X from '../assets/x.svg';
import Linkedin from '../assets/linkedin.svg';

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="" />
            <ul>
                <li><a href="">Join our waitlist</a></li>
                <li><a href="">Be an ambassador</a></li>
            </ul>
            <div className="socials">
                <p>Follow us</p>
                <div className="social-icons">
                    <img src={ig} alt="" />
                    <img src={X} alt="" />
                    <img src={Linkedin} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;