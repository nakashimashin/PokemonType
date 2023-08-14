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
        <div className="flex flex-row">
          <img src={pokemonImageUrl} className="w-[400px] h-[400px] mt-[30px]"/>
          <div className="mt-[170px] ml-[30px]">
            <p className="text-[50px]">{pokemonID} タイプ {pokemonName}</p>
            <p className="text-[50px]">効果抜群{pokemonType}</p>
          </div>
        </div>
        <button onClick={handleClick} className="bg-sky-500 hover:bg-sky-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">ランダム</button>
        <div className="flex flex-row space-x-[30px]">
          <button onClick={handleClick} className="bg-orange-500 hover:bg-orange-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">ほのお</button>
          <button onClick={handleClick} className="bg-blue-400 hover:bg-blue-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">みず</button>
          <button onClick={handleClick} className="bg-green-500 hover:bg-green-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">くさ</button>
          <button onClick={handleClick} className="bg-gray-400 hover:bg-gray-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">ノーマル</button>
          <button onClick={handleClick} className="bg-red-500 hover:bg-red-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">かくとう</button>
          <button onClick={handleClick} className="bg-sky-400 hover:bg-sky-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">ひこう</button>
          <button onClick={handleClick} className="bg-purple-500 hover:bg-purple-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">どく</button>
          <button onClick={handleClick} className="bg-yellow-600 hover:bg-yellow-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">じめん</button>
          <button onClick={handleClick} className="bg-yellow-500 hover:bg-yellow-200 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">いわ</button>
        </div>
        <div className="flex flex-row space-x-[30px]">
          <button onClick={handleClick} className="bg-lime-500 hover:bg-lime-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">むし</button>
          <button onClick={handleClick} className="bg-violet-800 hover:bg-violet-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">ゴースト</button>
          <button onClick={handleClick} className="bg-slate-400 hover:bg-slate-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">はがね</button>
          <button onClick={handleClick} className="bg-amber-400 hover:bg-amber-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">でんき</button>
          <button onClick={handleClick} className="bg-fuchsia-500 hover:bg-fuchsia-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">エスパー</button>
          <button onClick={handleClick} className="bg-cyan-500 hover:bg-cyan-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">こおり</button>
          <button onClick={handleClick} className="bg-blue-600 hover:bg-blue-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">ドラゴン</button>
          <button onClick={handleClick} className="bg-neutral-500 hover:bg-neutral-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">あく</button>
          <button onClick={handleClick} className="bg-pink-500 hover:bg-pink-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">フェアリー</button>
        </div>
      </div>
    </div>
  );
}

