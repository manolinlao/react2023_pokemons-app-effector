import { NavLink, useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { resetPokemons } from '../store/pokemonStore';
import { resetCounter } from '../store/counterStore';

export const NavBar = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: 'counter',
      icon: 'pi pi-plus-circle',
      disabled: false,
      visible: true,
      command: () => {
        navigate('/counter');
      }
    },
    {
      label: 'pokemons',
      icon: 'pi pi-prime',
      command: () => {
        navigate('/pokemon');
      }
    },
    {
      label: 'Quit',
      icon: 'pi pi-fw pi-power-off',
      command: () => {
        resetPokemons();
        resetCounter();
        navigate('/');
      }
    }
  ];

  return (
    <div>
      <h4>Pruebas de Effector - PrimeReact</h4>
      {/*
      <NavLink to='/counter' className={({ isActive }) => (isActive ? 'active' : '')}>
        Counter
      </NavLink>
      <NavLink to='/pokemon' className={({ isActive }) => (isActive ? 'active' : '')} style={{ marginLeft: 10 }}>
        Pokemons
      </NavLink>
      <hr />
  */}
      <div>
        <Menubar model={items} />
      </div>
    </div>
  );
};
