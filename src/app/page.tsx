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

    const typeLength = pokemon['pokemon'].length;
    
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

//ほおおタイプ
  const fetchPokemonFire = async () =>{
    const resFire = await fetch("https://pokeapi.co/api/v2/type/10");
    const resultFire = await resFire.json();
    return resultFire;
  };
  
  const handleClickFire = async () => {
    const pokemon = await fetchPokemonFire(); 
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['names'][0]['name']);

    const pokemonDamageFire = pokemon['damage_relations']['double_damage_to']
    let strongType = ":"

    for (const key in pokemonDamageFire){
      const pokemonFire = pokemonDamageFire[key]['url'];

      const fetchTypeFire = async () => {
        const res = await fetch(pokemonFire);
        const result = await res.json();
        return result;
      }

      const typenames = await fetchTypeFire();
      const typename = typenames['names'][0]['name'];
      strongType += typename + " ";
    }

    setpokemonType(strongType);

    const typeLength = pokemon['pokemon'].length;
    
    const fetchPokemonImage = async () =>{
      const index = Math.floor(Math.random() * typeLength + 1);
      const pokemonUrl = pokemon['pokemon'][index]['pokemon']['url']
      const res = await fetch(pokemonUrl);
      const result = await res.json();
      return result;
    };
    const image = await fetchPokemonImage();
    setPokemonImageUrl(image['sprites']['front_default'])
  };

  //みずタイプ
  const fetchPokemonWater = async () =>{
    const res = await fetch("https://pokeapi.co/api/v2/type/11");
    const result = await res.json();
    return result;
  };
  
  const handleClickWater = async () => {
    const pokemon = await fetchPokemonWater(); 
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['names'][0]['name']);

    const pokemonDamageWater = pokemon['damage_relations']['double_damage_to']
    let strongType = ":"

    for (const key in pokemonDamageWater){
      const pokemonWater = pokemonDamageWater[key]['url'];

      const fetchTypeWater = async () => {
        const res = await fetch(pokemonWater);
        const result = await res.json();
        return result;
      }

      const typenamesWater = await fetchTypeWater();
      const typenameWater = typenamesWater['names'][0]['name'];
      strongType += typenameWater + " ";
    }

    setpokemonType(strongType);

    const typeLength = pokemon['pokemon'].length;
    
    const fetchPokemonImage = async () =>{
      const index = Math.floor(Math.random() * typeLength + 1);
      const pokemonUrl = pokemon['pokemon'][index]['pokemon']['url']
      const res = await fetch(pokemonUrl);
      const result = await res.json();
      return result;
    };
    const image = await fetchPokemonImage();
    setPokemonImageUrl(image['sprites']['front_default'])
  };

  //くさタイプ
  const fetchPokemonGrass = async () =>{
    const res = await fetch("https://pokeapi.co/api/v2/type/12");
    const result = await res.json();
    return result;
  };
  
  const handleClickGrass = async () => {
    const pokemon = await fetchPokemonGrass(); 
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['names'][0]['name']);

    const pokemonDamageGrass = pokemon['damage_relations']['double_damage_to']
    let strongType = ":"

    for (const key in pokemonDamageGrass){
      const pokemonGrass = pokemonDamageGrass[key]['url'];

      const fetchTypeWater = async () => {
        const res = await fetch(pokemonGrass);
        const result = await res.json();
        return result;
      }

      const typenamesGrass = await fetchTypeWater();
      const typenameGrass = typenamesGrass['names'][0]['name'];
      strongType += typenameGrass + " ";
    }

    setpokemonType(strongType);

    const typeLength = pokemon['pokemon'].length;
    
    const fetchPokemonImage = async () =>{
      const index = Math.floor(Math.random() * typeLength + 1);
      const pokemonUrl = pokemon['pokemon'][index]['pokemon']['url']
      const res = await fetch(pokemonUrl);
      const result = await res.json();
      return result;
    };
    const image = await fetchPokemonImage();
    setPokemonImageUrl(image['sprites']['front_default'])
  };

  //ノーマルタイプ
  const fetchPokemonNomal = async () =>{
    const res = await fetch("https://pokeapi.co/api/v2/type/1");
    const result = await res.json();
    return result;
  };
  
  const handleClickNomal = async () => {
    const pokemon = await fetchPokemonNomal(); 
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['names'][0]['name']);

    const pokemonDamageNomal = pokemon['damage_relations']['double_damage_to']
    let strongType = ":"

    for (const key in pokemonDamageNomal){
      const pokemonNomal = pokemonDamageNomal[key]['url'];

      const fetchTypeWater = async () => {
        const res = await fetch(pokemonNomal);
        const result = await res.json();
        return result;
      }

      const typenamesNomal = await fetchTypeWater();
      const typenameNomal = typenamesNomal['names'][0]['name'];
      strongType += typenameNomal + " ";
    }

    setpokemonType(strongType);

    const typeLength = pokemon['pokemon'].length;
    
    const fetchPokemonImage = async () =>{
      const index = Math.floor(Math.random() * typeLength + 1);
      const pokemonUrl = pokemon['pokemon'][index]['pokemon']['url']
      const res = await fetch(pokemonUrl);
      const result = await res.json();
      return result;
    };
    const image = await fetchPokemonImage();
    setPokemonImageUrl(image['sprites']['front_default'])
  };

  //かくとうタイプ
  const fetchPokemonFighting = async () =>{
    const res = await fetch("https://pokeapi.co/api/v2/type/2");
    const result = await res.json();
    return result;
  };
  
  const handleClickFighting = async () => {
    const pokemon = await fetchPokemonFighting(); 
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['names'][0]['name']);

    const pokemonDamageFighting = pokemon['damage_relations']['double_damage_to']
    let strongType = ":"

    for (const key in pokemonDamageFighting){
      const pokemonFigthing = pokemonDamageFighting[key]['url'];

      const fetchTypeFighting = async () => {
        const res = await fetch(pokemonFigthing);
        const result = await res.json();
        return result;
      }

      const typenamesFighting = await fetchTypeFighting();
      const typenameFighting = typenamesFighting['names'][0]['name'];
      strongType += typenameFighting + " ";
    }

    setpokemonType(strongType);

    const typeLength = pokemon['pokemon'].length;
    
    const fetchPokemonImage = async () =>{
      const index = Math.floor(Math.random() * typeLength + 1);
      const pokemonUrl = pokemon['pokemon'][index]['pokemon']['url']
      const res = await fetch(pokemonUrl);
      const result = await res.json();
      return result;
    };
    const image = await fetchPokemonImage();
    setPokemonImageUrl(image['sprites']['front_default'])
  };

  //ひこうタイプ
  const fetchPokemonFlying = async () =>{
    const res = await fetch("https://pokeapi.co/api/v2/type/3");
    const result = await res.json();
    return result;
  };
  
  const handleClickFlying = async () => {
    const pokemon = await fetchPokemonFlying(); 
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['names'][0]['name']);

    const pokemonDamageFlying = pokemon['damage_relations']['double_damage_to']
    let strongType = ":"

    for (const key in pokemonDamageFlying){
      const pokemonFlying = pokemonDamageFlying[key]['url'];

      const fetchTypeFlying = async () => {
        const res = await fetch(pokemonFlying);
        const result = await res.json();
        return result;
      }

      const typenamesFlying = await fetchTypeFlying();
      const typenameFlying = typenamesFlying['names'][0]['name'];
      strongType += typenameFlying + " ";
    }

    setpokemonType(strongType);

    const typeLength = pokemon['pokemon'].length;
    
    const fetchPokemonImage = async () =>{
      const index = Math.floor(Math.random() * typeLength + 1);
      const pokemonUrl = pokemon['pokemon'][index]['pokemon']['url']
      const res = await fetch(pokemonUrl);
      const result = await res.json();
      return result;
    };
    const image = await fetchPokemonImage();
    setPokemonImageUrl(image['sprites']['front_default'])
  };

  //どくタイプ
  const fetchPokemonPoison = async () =>{
    const res = await fetch("https://pokeapi.co/api/v2/type/4");
    const result = await res.json();
    return result;
  };
  
  const handleClickPoison = async () => {
    const pokemon = await fetchPokemonPoison(); 
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['names'][0]['name']);

    const pokemonDamagePoison = pokemon['damage_relations']['double_damage_to']
    let strongType = ":"

    for (const key in pokemonDamagePoison){
      const pokemonPoison = pokemonDamagePoison[key]['url'];

      const fetchTypePoison = async () => {
        const res = await fetch(pokemonPoison);
        const result = await res.json();
        return result;
      }

      const typenamesPoison = await fetchTypePoison();
      const typenamePoison = typenamesPoison['names'][0]['name'];
      strongType += typenamePoison + " ";
    }

    setpokemonType(strongType);

    const typeLength = pokemon['pokemon'].length;
    
    const fetchPokemonImage = async () =>{
      const index = Math.floor(Math.random() * typeLength + 1);
      const pokemonUrl = pokemon['pokemon'][index]['pokemon']['url']
      const res = await fetch(pokemonUrl);
      const result = await res.json();
      return result;
    };
    const image = await fetchPokemonImage();
    setPokemonImageUrl(image['sprites']['front_default'])
  };

  //じめんタイプ
  const fetchPokemonGround = async () =>{
    const res = await fetch("https://pokeapi.co/api/v2/type/5");
    const result = await res.json();
    return result;
  };
  
  const handleClickGround = async () => {
    const pokemon = await fetchPokemonGround(); 
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['names'][0]['name']);

    const pokemonDamageGround = pokemon['damage_relations']['double_damage_to']
    let strongType = ":"

    for (const key in pokemonDamageGround){
      const pokemonGround = pokemonDamageGround[key]['url'];

      const fetchTypeGround = async () => {
        const res = await fetch(pokemonGround);
        const result = await res.json();
        return result;
      }

      const typenamesGround = await fetchTypeGround();
      const typenameGround = typenamesGround['names'][0]['name'];
      strongType += typenameGround + " ";
    }

    setpokemonType(strongType);

    const typeLength = pokemon['pokemon'].length;
    
    const fetchPokemonImage = async () =>{
      const index = Math.floor(Math.random() * typeLength + 1);
      const pokemonUrl = pokemon['pokemon'][index]['pokemon']['url']
      const res = await fetch(pokemonUrl);
      const result = await res.json();
      return result;
    };
    const image = await fetchPokemonImage();
    setPokemonImageUrl(image['sprites']['front_default'])
  };

  //いわタイプ
  const fetchPokemonRock = async () =>{
    const res = await fetch("https://pokeapi.co/api/v2/type/6");
    const result = await res.json();
    return result;
  };
  
  const handleClickRock = async () => {
    const pokemon = await fetchPokemonRock(); 
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['names'][0]['name']);

    const pokemonDamageRock = pokemon['damage_relations']['double_damage_to']
    let strongType = ":"

    for (const key in pokemonDamageRock){
      const pokemonRock = pokemonDamageRock[key]['url'];

      const fetchTypeRock = async () => {
        const res = await fetch(pokemonRock);
        const result = await res.json();
        return result;
      }

      const typenamesRock = await fetchTypeRock();
      const typenameRock = typenamesRock['names'][0]['name'];
      strongType += typenameRock + " ";
    }

    setpokemonType(strongType);

    const typeLength = pokemon['pokemon'].length;
    
    const fetchPokemonImage = async () =>{
      const index = Math.floor(Math.random() * typeLength + 1);
      const pokemonUrl = pokemon['pokemon'][index]['pokemon']['url']
      const res = await fetch(pokemonUrl);
      const result = await res.json();
      return result;
    };
    const image = await fetchPokemonImage();
    setPokemonImageUrl(image['sprites']['front_default'])
  };

  //むしタイプ
  const fetchPokemonBug = async () =>{
    const res = await fetch("https://pokeapi.co/api/v2/type/7");
    const result = await res.json();
    return result;
  };
  
  const handleClickBug = async () => {
    const pokemon = await fetchPokemonBug(); 
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['names'][0]['name']);

    const pokemonDamageBug = pokemon['damage_relations']['double_damage_to']
    let strongType = ":"

    for (const key in pokemonDamageBug){
      const pokemonBug = pokemonDamageBug[key]['url'];

      const fetchTypeBug = async () => {
        const res = await fetch(pokemonBug);
        const result = await res.json();
        return result;
      }

      const typenamesBug = await fetchTypeBug();
      const typenameBug = typenamesBug['names'][0]['name'];
      strongType += typenameBug + " ";
    }

    setpokemonType(strongType);

    const typeLength = pokemon['pokemon'].length;
    
    const fetchPokemonImage = async () =>{
      const index = Math.floor(Math.random() * typeLength + 1);
      const pokemonUrl = pokemon['pokemon'][index]['pokemon']['url']
      const res = await fetch(pokemonUrl);
      const result = await res.json();
      return result;
    };
    const image = await fetchPokemonImage();
    setPokemonImageUrl(image['sprites']['front_default'])
  };

  //ゴーストタイプ
  const fetchPokemonGhost = async () =>{
    const res = await fetch("https://pokeapi.co/api/v2/type/8");
    const result = await res.json();
    return result;
  };
  
  const handleClickGhost = async () => {
    const pokemon = await fetchPokemonGhost(); 
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['names'][0]['name']);

    const pokemonDamageGhost = pokemon['damage_relations']['double_damage_to']
    let strongType = ":"

    for (const key in pokemonDamageGhost){
      const pokemonGhost = pokemonDamageGhost[key]['url'];

      const fetchTypeGhost = async () => {
        const res = await fetch(pokemonGhost);
        const result = await res.json();
        return result;
      }

      const typenamesGhost = await fetchTypeGhost();
      const typenameGhost = typenamesGhost['names'][0]['name'];
      strongType += typenameGhost + " ";
    }

    setpokemonType(strongType);

    const typeLength = pokemon['pokemon'].length;
    
    const fetchPokemonImage = async () =>{
      const index = Math.floor(Math.random() * typeLength + 1);
      const pokemonUrl = pokemon['pokemon'][index]['pokemon']['url']
      const res = await fetch(pokemonUrl);
      const result = await res.json();
      return result;
    };
    const image = await fetchPokemonImage();
    setPokemonImageUrl(image['sprites']['front_default'])
  };

  //はがねタイプ
  const fetchPokemonSteel = async () =>{
    const res = await fetch("https://pokeapi.co/api/v2/type/9");
    const result = await res.json();
    return result;
  };
  
  const handleClickSteel = async () => {
    const pokemon = await fetchPokemonSteel(); 
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['names'][0]['name']);

    const pokemonDamageSteel = pokemon['damage_relations']['double_damage_to']
    let strongType = ":"

    for (const key in pokemonDamageSteel){
      const pokemonSteel = pokemonDamageSteel[key]['url'];

      const fetchTypeSteel = async () => {
        const res = await fetch(pokemonSteel);
        const result = await res.json();
        return result;
      }

      const typenamesSteel = await fetchTypeSteel();
      const typenameSteel = typenamesSteel['names'][0]['name'];
      strongType += typenameSteel + " ";
    }

    setpokemonType(strongType);

    const typeLength = pokemon['pokemon'].length;
    
    const fetchPokemonImage = async () =>{
      const index = Math.floor(Math.random() * typeLength + 1);
      const pokemonUrl = pokemon['pokemon'][index]['pokemon']['url']
      const res = await fetch(pokemonUrl);
      const result = await res.json();
      return result;
    };
    const image = await fetchPokemonImage();
    setPokemonImageUrl(image['sprites']['front_default'])
  };

  //でんきタイプ
  const fetchPokemonElectric = async () =>{
    const res = await fetch("https://pokeapi.co/api/v2/type/13");
    const result = await res.json();
    return result;
  };
  
  const handleClickElectric = async () => {
    const pokemon = await fetchPokemonElectric(); 
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['names'][0]['name']);

    const pokemonDamageElectric = pokemon['damage_relations']['double_damage_to']
    let strongType = ":"

    for (const key in pokemonDamageElectric){
      const pokemonElectric = pokemonDamageElectric[key]['url'];

      const fetchTypeElectric = async () => {
        const res = await fetch(pokemonElectric);
        const result = await res.json();
        return result;
      }

      const typenamesElectric = await fetchTypeElectric();
      const typenameElectric = typenamesElectric['names'][0]['name'];
      strongType += typenameElectric + " ";
    }

    setpokemonType(strongType);

    const typeLength = pokemon['pokemon'].length;
    
    const fetchPokemonImage = async () =>{
      const index = Math.floor(Math.random() * typeLength + 1);
      const pokemonUrl = pokemon['pokemon'][index]['pokemon']['url']
      const res = await fetch(pokemonUrl);
      const result = await res.json();
      return result;
    };
    const image = await fetchPokemonImage();
    setPokemonImageUrl(image['sprites']['front_default'])
  };

  //エスパータイプ
  const fetchPokemonPsychic = async () =>{
    const res = await fetch("https://pokeapi.co/api/v2/type/14");
    const result = await res.json();
    return result;
  };
  
  const handleClickPsychic = async () => {
    const pokemon = await fetchPokemonPsychic(); 
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['names'][0]['name']);

    const pokemonDamagePsychic = pokemon['damage_relations']['double_damage_to']
    let strongType = ":"

    for (const key in pokemonDamagePsychic){
      const pokemonPsychic = pokemonDamagePsychic[key]['url'];

      const fetchTypePsychic = async () => {
        const res = await fetch(pokemonPsychic);
        const result = await res.json();
        return result;
      }

      const typenamesPsychic = await fetchTypePsychic();
      const typenamePsychic = typenamesPsychic['names'][0]['name'];
      strongType += typenamePsychic + " ";
    }

    setpokemonType(strongType);

    const typeLength = pokemon['pokemon'].length;
    
    const fetchPokemonImage = async () =>{
      const index = Math.floor(Math.random() * typeLength + 1);
      const pokemonUrl = pokemon['pokemon'][index]['pokemon']['url']
      const res = await fetch(pokemonUrl);
      const result = await res.json();
      return result;
    };
    const image = await fetchPokemonImage();
    setPokemonImageUrl(image['sprites']['front_default'])
  };

  //こおりタイプ
  const fetchPokemonIce = async () =>{
    const res = await fetch("https://pokeapi.co/api/v2/type/15");
    const result = await res.json();
    return result;
  };
  
  const handleClickIce = async () => {
    const pokemon = await fetchPokemonIce(); 
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['names'][0]['name']);

    const pokemonDamageIce = pokemon['damage_relations']['double_damage_to']
    let strongType = ":"

    for (const key in pokemonDamageIce){
      const pokemonIce = pokemonDamageIce[key]['url'];

      const fetchTypeIce = async () => {
        const res = await fetch(pokemonIce);
        const result = await res.json();
        return result;
      }

      const typenamesIce = await fetchTypeIce();
      const typenameIce = typenamesIce['names'][0]['name'];
      strongType += typenameIce + " ";
    }

    setpokemonType(strongType);

    const typeLength = pokemon['pokemon'].length;
    
    const fetchPokemonImage = async () =>{
      const index = Math.floor(Math.random() * typeLength + 1);
      const pokemonUrl = pokemon['pokemon'][index]['pokemon']['url']
      const res = await fetch(pokemonUrl);
      const result = await res.json();
      return result;
    };
    const image = await fetchPokemonImage();
    setPokemonImageUrl(image['sprites']['front_default'])
  };

  //ドラゴンタイプ
  const fetchPokemonDragon = async () =>{
    const res = await fetch("https://pokeapi.co/api/v2/type/16");
    const result = await res.json();
    return result;
  };
  
  const handleClickDragon = async () => {
    const pokemon = await fetchPokemonDragon(); 
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['names'][0]['name']);

    const pokemonDamageDragon = pokemon['damage_relations']['double_damage_to']
    let strongType = ":"

    for (const key in pokemonDamageDragon){
      const pokemonDragon = pokemonDamageDragon[key]['url'];

      const fetchTypeDragon = async () => {
        const res = await fetch(pokemonDragon);
        const result = await res.json();
        return result;
      }

      const typenamesDragon = await fetchTypeDragon();
      const typenameDragon = typenamesDragon['names'][0]['name'];
      strongType += typenameDragon + " ";
    }

    setpokemonType(strongType);

    const typeLength = pokemon['pokemon'].length;
    
    const fetchPokemonImage = async () =>{
      const index = Math.floor(Math.random() * typeLength + 1);
      const pokemonUrl = pokemon['pokemon'][index]['pokemon']['url']
      const res = await fetch(pokemonUrl);
      const result = await res.json();
      return result;
    };
    const image = await fetchPokemonImage();
    setPokemonImageUrl(image['sprites']['front_default'])
  };

  //あくタイプ
  const fetchPokemonDark = async () =>{
    const res = await fetch("https://pokeapi.co/api/v2/type/17");
    const result = await res.json();
    return result;
  };
  
  const handleClickDark = async () => {
    const pokemon = await fetchPokemonDark(); 
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['names'][0]['name']);

    const pokemonDamageDark = pokemon['damage_relations']['double_damage_to']
    let strongType = ":"

    for (const key in pokemonDamageDark){
      const pokemonDark = pokemonDamageDark[key]['url'];

      const fetchTypeDark = async () => {
        const res = await fetch(pokemonDark);
        const result = await res.json();
        return result;
      }

      const typenamesDark = await fetchTypeDark();
      const typenameDark = typenamesDark['names'][0]['name'];
      strongType += typenameDark + " ";
    }

    setpokemonType(strongType);

    const typeLength = pokemon['pokemon'].length;
    
    const fetchPokemonImage = async () =>{
      const index = Math.floor(Math.random() * typeLength + 1);
      const pokemonUrl = pokemon['pokemon'][index]['pokemon']['url']
      const res = await fetch(pokemonUrl);
      const result = await res.json();
      return result;
    };
    const image = await fetchPokemonImage();
    setPokemonImageUrl(image['sprites']['front_default'])
  };

  //みずタイプ
  const fetchPokemonFairy = async () =>{
    const res = await fetch("https://pokeapi.co/api/v2/type/18");
    const result = await res.json();
    return result;
  };
  
  const handleClickFairy = async () => {
    const pokemon = await fetchPokemonFairy(); 
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['names'][0]['name']);

    const pokemonDamageFairy = pokemon['damage_relations']['double_damage_to']
    let strongType = ":"

    for (const key in pokemonDamageFairy){
      const pokemonFairy = pokemonDamageFairy[key]['url'];

      const fetchTypeFairy = async () => {
        const res = await fetch(pokemonFairy);
        const result = await res.json();
        return result;
      }

      const typenamesFairy = await fetchTypeFairy();
      const typenameFairy = typenamesFairy['names'][0]['name'];
      strongType += typenameFairy + " ";
    }

    setpokemonType(strongType);

    const typeLength = pokemon['pokemon'].length;
    
    const fetchPokemonImage = async () =>{
      const index = Math.floor(Math.random() * typeLength + 1);
      const pokemonUrl = pokemon['pokemon'][index]['pokemon']['url']
      const res = await fetch(pokemonUrl);
      const result = await res.json();
      return result;
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
          <button onClick={handleClickFire} className="bg-orange-500 hover:bg-orange-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">ほのお</button>
          <button onClick={handleClickWater} className="bg-blue-400 hover:bg-blue-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">みず</button>
          <button onClick={handleClickGrass} className="bg-green-500 hover:bg-green-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">くさ</button>
          <button onClick={handleClickNomal} className="bg-gray-400 hover:bg-gray-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">ノーマル</button>
          <button onClick={handleClickFighting} className="bg-red-500 hover:bg-red-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">かくとう</button>
          <button onClick={handleClickFlying} className="bg-sky-400 hover:bg-sky-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">ひこう</button>
          <button onClick={handleClickPoison} className="bg-purple-500 hover:bg-purple-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">どく</button>
          <button onClick={handleClickGround} className="bg-yellow-600 hover:bg-yellow-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">じめん</button>
          <button onClick={handleClickRock} className="bg-yellow-500 hover:bg-yellow-200 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">いわ</button>
        </div>
        <div className="flex flex-row space-x-[30px]">
          <button onClick={handleClickBug} className="bg-lime-500 hover:bg-lime-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">むし</button>
          <button onClick={handleClickGhost} className="bg-violet-800 hover:bg-violet-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">ゴースト</button>
          <button onClick={handleClickSteel} className="bg-slate-400 hover:bg-slate-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">はがね</button>
          <button onClick={handleClickElectric} className="bg-amber-400 hover:bg-amber-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">でんき</button>
          <button onClick={handleClickPsychic} className="bg-fuchsia-500 hover:bg-fuchsia-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">エスパー</button>
          <button onClick={handleClickIce} className="bg-cyan-500 hover:bg-cyan-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">こおり</button>
          <button onClick={handleClickDragon} className="bg-blue-600 hover:bg-blue-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">ドラゴン</button>
          <button onClick={handleClickDark} className="bg-neutral-500 hover:bg-neutral-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">あく</button>
          <button onClick={handleClickFairy} className="bg-pink-500 hover:bg-pink-300 rounded w-[100px] h-[50px] mt-[30px] font-bold text-white">フェアリー</button>
        </div>
      </div>
    </div>
  );
}

