import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [pokedata, setPokedata] = useState([]);
  const [error, setError] = useState();
  

  useEffect(() => {
    const pokeFetch = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150"
        );
        setPokedata(response.data.results);
      } catch (error) {
        setError(error);
      }
    };

    pokeFetch();
  }, []);

  return (
    <UserContext.Provider value={{ pokedata }}>
      {children}
    </UserContext.Provider>
  );
};
//intente hacerlo por mi cuenta sin siquiera ver su uso de axios, me fije es como se hacia por internet e intente
//aplicarlo por mi cuenta (con mucho ensayo y error) para aprender a hacer todo el codigo sin ayuda
//le confieso que hasta hace poco tenia dificultades con javascript pero un punto me aclaro todos los demas

export default UserProvider;