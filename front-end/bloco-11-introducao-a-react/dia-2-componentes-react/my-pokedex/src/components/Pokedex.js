import React from "react";
import PokemonsInfo from "./PokemonsInfo";

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        {pokemons.map(pokemon => <PokemonsInfo key={pokemon.id} pokemon={pokemon} />)}
      </div>
    )
  }
}

export default Pokedex;