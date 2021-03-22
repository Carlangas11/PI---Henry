const axios = require("axios");

let nextUrl = "";

const getPokemonsAPI = async (index = 0,pokemons = [], url = nextUrl, ) => {
  console.log(url);
  const request = await axios.get(url).catch((e) => {
    return "Error de lectura D=!";
  });
  
nextUrl = request.data.next

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
    console.log(request.data.previous)
    console.log(poke.data.id+10000)
    if(poke.data.id>898) return pokemons
  
   if(pokemons.length>0){
    console.log(pokemons[pokemons.length-1].pokeId)
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
      const sprite = poke.data.sprites.other["official-artwork"].front_default;
      const tipos = poke.data.types.map((t) => t.type.name);
      const pokemon = {
        name,
        pokeId: pokeId,
        sprite,
        tipos,
      };
      let encontrado = pokemons.find((r) => r.pokeId === pokemon.pokeId);
      if (!encontrado) pokemons.push(pokemon);
    }
    
    if (poke.data.id > 19 + index) return pokemons;
  }
  if (request.data.next) {
    return getPokemonsAPI(index, request.data.next, pokemons);
  } else {
    return pokemons;
  }
};

module.exports = {
  getPokemonsAPI,
};
