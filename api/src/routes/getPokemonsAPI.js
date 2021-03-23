const axios = require("axios");

let nextUrl = "";
let backUrl = ""

const getPokemonsAPI = async (index = 0,pokemons = [], url = nextUrl ) => {
  console.log(url);
 
  
  const request = await axios.get(url).catch((e) => {

    nextUrl = "https://pokeapi.co/api/v2/pokemon"
    return pokemons;
  });
  



  let promises = request.data.results.map((r) => {
    if (
      r.name === "charmeleon" ||
      r.name === "murkrow" ||
      r.name === "phanpy" ||
      r.name === "sliggoo" ||
      r.name === "aipom"
    ) {
      return r.url.slice(0, -1);
    } else {
      return r.url;
    }
  });
  for (let p of promises) {
    let poke = await axios.get(p).catch((e) => {
      return res.status(404).send("Error de lectura D=!");
    });
   
    console.log(poke.data.id+10000)
    if(poke.data.id>898) return pokemons
  
   if(pokemons.length>0){
   
    pokemons.sort(function(a, b){
      return a.pokeId - b.pokeId
    })
      if(poke.data.id+10000 - pokemons[pokemons.length-1].pokeId > 1){
      return getPokemonsAPI(index, request.data.previous, pokemons);
    }};

    if (poke.data.id > index) {
      const pokeId = poke.data.id + 10000;
      const name = poke.data.name;
      console.log(name);
      const attack = poke.data.stats.find((p) => p.stat.name === "attack");
      const sprite = poke.data.sprites.other["official-artwork"].front_default;
      const tipos = poke.data.types.map((t) => t.type.name);
      const pokemon = {
        name,
        pokeId: pokeId,
        attack: attack.base_stat,
        sprite,
        tipos,
      };
      let encontrado = pokemons.find((r) => r.pokeId === pokemon.pokeId);
      if (!encontrado) pokemons.push(pokemon)
     
      
    }
    
    if (poke.data.id > 39 + index) {
      
      backUrl = request.data.previous
      nextUrl = request.data.next
      return pokemons};
  }
  if (request.data.next) {
   
 
    return getPokemonsAPI(index, pokemons, request.data.next);
  } else {
    return pokemons;
  }
};

module.exports = {
  getPokemonsAPI,
};
