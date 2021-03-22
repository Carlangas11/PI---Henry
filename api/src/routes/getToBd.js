const { Pokemon, Tipos } = require("../db");

const axios = require("axios");


const getToBd = async (url) => {
  console.log(url)
  const request = await axios.get(url).catch((e) => {
    return res.status(404).send("Error de lectura D=!");
  });
  let promises = request.data.results.map((r) =>{
      if(r.name === 'charmeleon' || r.name === "murkrow"){
          return r.url.slice(0,-1)
      } else {
          return r.url
      }
  });
  for (let p of promises) {
      console.log(p)
    let poke = await axios.get(p).catch((e) => {
      return res.status(404).send("Error de lectura D=!");
    });
    console.log(poke.data.id)
    if(poke.data.id>50) {
      return "ok";
    }
    const pokeId = poke.data.id + 10000;
    const name = poke.data.name;
    console.log(name);
    const weight = poke.data.weight;
    const height = poke.data.height;
    const health = poke.data.stats.find((p) => p.stat.name === "hp");
    const attack = poke.data.stats.find((p) => p.stat.name === "attack");
    const defense = poke.data.stats.find((p) => p.stat.name === "defense");
    const speed = poke.data.stats.find((p) => p.stat.name === "speed");
    const sprite = poke.data.sprites.other["official-artwork"].front_default;
    const tipos = poke.data.types.map((t) => t.type.name);
    const pokemon = await Pokemon.findOrCreate({
      where: {
        name,
        pokeId: pokeId,
        weight,
        height,
        health: health.base_stat,
        attack: attack.base_stat,
        defense: defense.base_stat,
        speed: speed.base_stat,
        sprite,
      },
    });
    for (let i = 0; i < tipos.length; i++) {
      let type = await Tipos.findOrCreate({
        where: { name: tipos[i] },
      });
      await type[0].addPokemon(pokemon[0]);
    }
  }
  if (request.data.next) {
    return getToBd(request.data.next);
  } else {
    
    return "ok";
  }
};

module.exports = {
  getToBd,
};
