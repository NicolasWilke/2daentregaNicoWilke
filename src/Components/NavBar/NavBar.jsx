import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col text-center">
          <Link to={"/"}>
            <img src="https://vigilwineclub.com/images/logo_image?dpr=1&h=100&q=80&version=d5ded" alt="Universo Vigil" width={100} />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavLink className="nav-link text-secondary" to={"/category/tinto"}>TINTO</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-secondary" to={"/category/blanco"}>BLANCO</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-secondary" to={"/category/rosado"}>ROSADO</NavLink>
            </li>
          </ul>
        </div>
        <div className="col text-end">
          <CartWidget/>
        </div>
      </div>
    </div>
  );
}

export default NavBar;