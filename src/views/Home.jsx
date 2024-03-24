import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Home = () => {
  const { pokedata } = useContext(UserContext);
  console.log("Pokedatos:", pokedata);
  return (
    <>
      <div className="portada">
        <h1>Bienvenido Maestro Pokemon</h1>
        <img
          src="https://www.perusmart.com/wp-content/uploads/redpokemon-700x394.png"
          alt="maestro pokemon"
        />
      </div>
      ;
    </>
  );
};
export default Home;
