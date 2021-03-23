const { Pokemon, Tipos } = require("../db");

const axios = require("axios");

module.exports = async (req, res) => {
  const idPokemon = req.params.idPokemon;
  console.log(idPokemon);
  if (idPokemon < 20000) {
    const poke = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}/`)
      .catch((e) => {
        return res.status(404).send("=(");
      });
    const name = poke.data.name;
    const weight = poke.data.weight;
    const height = poke.data.height;
    const health = poke.data.stats.find((p) => p.stat.name === "hp");
    const attack = poke.data.stats.find((p) => p.stat.name === "attack");
    const defense = poke.data.stats.find((p) => p.stat.name === "defense");
    const speed = poke.data.stats.find((p) => p.stat.name === "speed");
    const pokeId = poke.data.id + 10000;
    const sprite = poke.data.sprites.other["official-artwork"].front_default;
    const tipos = poke.data.types.map((t) => t.type.name);
    const pokemon = {
      name,
      pokeId,
      weight,
      height,
      health: health.base_stat,
      attack: attack.base_stat,
      defense: defense.base_stat,
      speed: speed.base_stat,
      sprite,
      tipos,
    };

    return res.json(pokemon);
  }else {
    const poke = await Pokemon.findOne({where:{pokeId:idPokemon}, include: {model: Tipos}})
    console.log(poke)
    const name = poke.dataValues.name;
    const weight = poke.dataValues.weight;
    const height = poke.dataValues.height;
    // const health = poke.dataValues.stats.find((p) => p.stat.name === "health");
    const health = poke.dataValues.health
    // const attack = poke.dataValues.stats.find((p) => p.stat.name === "attack");
    const attack = poke.dataValues.attack
    // const defense = poke.dataValues.stats.find((p) => p.stat.name === "defense");
    const defense = poke.dataValues.defense
   
    const speed = poke.dataValues.speed
    const pokeId = poke.dataValues.pokeId
    const tipos = poke.dataValues.tipos.map((t) => t.name);
    const pokemon = {
      name,
      pokeId,
      weight,
      height,
      health,
      attack,
      defense,
      speed,
      tipos,
    };
    res.json(pokemon)
  }
};
