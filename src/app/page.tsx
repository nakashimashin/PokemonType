'use client';
import { useState } from "react";

const fetchPokemon = async () =>{
  const index = Math.floor(Math.random() * 18 + 1);
  const res = await fetch("https://pokeapi.co/api/v2/type/" + index);
  const result = await res.json();
  return result;
};


export default function Home(){
  const [pokemonID, setPokemonID] = useState(
    0
  );

  const [pokemonName, setPokemonName] = useState(
    "なし"
  );

  const [pokemonImageUrl, setPokemonImageUrl] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  );

  const [pokemonType, setpokemonType] = useState(
    "なし"
  );
  
  const handleClick = async () => {
    const pokemon = await fetchPokemon();

    
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['names'][0]['name']);
    
    const pokemonDamage = pokemon['damage_relations']['double_damage_to']

    let strongType = ":"

    for (const key in pokemonDamage){
      const pokemon3 = pokemonDamage[key]['url'];

      const fetchType = async () => {
        const res3 = await fetch(pokemon3);
        const result3 = await res3.json();
        return result3;
      }

      const typenames = await fetchType();
      const typename = typenames['names'][0]['name'];
      strongType += typename + " ";
    }

    setpokemonType(strongType);

    console.log(pokemon['pokemon']);
    const typeLength = pokemon['pokemon'].length;
    console.log(pokemon['pokemon'][0]['pokemon']['url']);
    
    const fetchPokemonImage = async () =>{
      const index4 = Math.floor(Math.random() * typeLength + 1);
      const pokemonUrl = pokemon['pokemon'][index4]['pokemon']['url']
      const res4 = await fetch(pokemonUrl);
      const result4 = await res4.json();
      return result4;
    };
    const image = await fetchPokemonImage();
    setPokemonImageUrl(image['sprites']['front_default'])
  };

  return(
    <div>
      <div className="flex flex-col justify-center items-center">
        <img src={pokemonImageUrl} className="w-[500px] h-[500px] mt-[30px]"/>
        <p className="w-[500px] text-center text-[50px] mt-[-10px]">{pokemonID} タイプ {pokemonName}</p>
        <p className="w-[800px] text-center text-[50px] mt-[30px]">効果抜群{pokemonType}</p>
        <div>
          <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-300 rounded w-[100px] h-[50px] mt-[30px]">Change</button>
        </div>
      </div>
    </div>
  );
}

