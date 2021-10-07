import { NavLink } from 'react-router-dom';
import Menu from '../Menu';
import Search from '../Search';
import './Header.scss';

const Header = () => (
  <div className="header">
    <div className="header-front">
      <NavLink to="/">
        <img alt="logo" src="./img/logoHeader.svg" />
      </NavLink>
      <Menu />
      <Search></Search>
    </div>
  </div>
);

export default Header;
