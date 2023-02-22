import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div>
      <h4>Pruebas de Effector - PrimeReact</h4>
      <NavLink to='/counter' className={({ isActive }) => (isActive ? 'active' : '')}>
        Counter
      </NavLink>
      <NavLink to='/pokemon' className={({ isActive }) => (isActive ? 'active' : '')} style={{ marginLeft: 10 }}>
        Pokemons
      </NavLink>
      <hr />
    </div>
  );
};
