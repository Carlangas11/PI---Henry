const { Pokemon, Tipos } = require("../db");
const axios = require("axios");
const { getToBd } = require("./getToBd");

let index = 0;

module.exports = async (req, res) => {
  const pokeName = req.query.name;
  let pokeIndex;

  req.body.id ? (pokeIndex = req.body.id) : (pokeIndex = index);
  console.log(pokeIndex);
  if (!pokeName) {
    await getToBd("https://pokeapi.co/api/v2/pokemon");
    const find = await Pokemon.findAll({include: {model: Tipos}});
    res.json(find)
  } else {
    let poke = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`)
      .catch((e) => {
        return res.status(404).send("Pokemón no existe!");
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
    const pokemon = await Pokemon.findOrCreate({
      where: {
        name,
        pokeId,
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

    const pokemonSend = await Pokemon.findByPk(pokemon[0].id, {
      include: Tipos,
    });

    res.json(pokemonSend);
  }
};
