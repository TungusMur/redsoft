import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Menu = () => (
  <div className="menu">
    <ul>
      <li>
        <NavLink to="/catalog">Каталог</NavLink>
      </li>
      <li>
        <NavLink to="/delivery">Доставка</NavLink>
      </li>
      <li>
        <NavLink to="/payment">Оплата</NavLink>
      </li>
      <li>
        <NavLink to="/сontacts">Контакты</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">О галерее</NavLink>
      </li>
    </ul>
  </div>
);

export default Menu;
