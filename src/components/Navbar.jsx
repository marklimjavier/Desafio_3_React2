import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
  return (
    <div>
      <nav>
        <section>
          <img
            className="imgPokemon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3EtOshUw__bHfgeFeeIkIWyw591-kqGZzuZb-DAwdSatIwgWyfYtJL2PnnHBqLZYCn0&usqp=CAU"
            alt="Pokelogo"
          />
        </section>
        <section className="navLinkers">
        <NavLink className={setActiveClass} to="/">
          {" "}
          Home{" "}
        </NavLink>

        <NavLink className={setActiveClass} to="/BuscaPokemon">
          {" "}
          Pokemones{" "}
        </NavLink>
        </section>
       
      </nav>
    </div>
  );
};
export default Navbar;
