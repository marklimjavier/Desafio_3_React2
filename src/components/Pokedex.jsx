import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Pokedex = () => {
  const { name } = useParams();
  const [pokeInfo, setPokeInfo] = useState();

  useEffect(() => {
    const SegundoPokeFetch = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setPokeInfo(response.data);
      } catch (error) {
        console.error("Error al mostrar detalles:", error);
      }
    };
    //no le voy a mentir, estoy algo perdido para usar el segundo context pero aproveche que ya tengo el uso de params para
    //que con el nombre pueda tener el pokemon que necesito

    SegundoPokeFetch();
  }, [name]);
  if (!pokeInfo) {
    return null;
  }

  return (
    <div className="pokeTarjeta">
      <h2>{pokeInfo.name}</h2>
      <img className="imagenPokemon" src={pokeInfo.sprites.front_default} alt={pokeInfo.name} />
      <h3>Stats:</h3>
      <div>
        {pokeInfo.stats.map((stat, index) => (
          <li key={index}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </div>
    </div>
  );
};
//no le voy a mentir profe, aproveche los parametros que mostro en la clase para poder tomar la info de la api
//con los parametros que mostro solo tuve que buscarlas en la pokeApi en un nombre de los pokemon y 
//mapearla como se ha hecho con casi todo, en parte agradezco a que se mucho de pokemon (infancia)

export default Pokedex;
