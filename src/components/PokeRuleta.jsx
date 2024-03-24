import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const PokeRuleta = () => {
  const { pokedata, setPokedata } = useContext(UserContext);
  const pokeNavegador = useNavigate();
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState('');

  const pokeSelector = () => {
    pokeNavegador(`/Pokemones/${pokemonSeleccionado}`);
  };

  return (
    <div className='pokeRuleta'>
      <h1>Selecciona tu Pokemon</h1>
      <select value={pokemonSeleccionado} onChange={({target}) => setPokemonSeleccionado(target.value)}>
        <option value="text">Seleccione una opción</option>
        {pokedata.map((pokemon, index) => (
          <option key={index} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button onClick={pokeSelector}>Seleccionar</button>
    </div>
  );
};

//si, no hallo que inventar con los nombres, pero al menos se que es cada cosa.

export default PokeRuleta;