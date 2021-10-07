import { NavLink } from 'react-router-dom';
import Menu from '../Menu';
import Adress from '../Adress/Address';
import Phone from '../Phone';

const Footer = () => (
  <div className="footer">
    <div className="footer-front">
      <NavLink to="/">
        <img alt="logo" src="./img/logoFooter.svg" />
      </NavLink>
      <Menu />
      <Adress />
      <Phone />
    </div>
  </div>
);

export default Footer;
