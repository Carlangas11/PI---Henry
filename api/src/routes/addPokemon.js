const { Pokemon, Tipos } = require("../db");

module.exports = async (req, res) => {
  const {
    name,
    id,
    weight,
    height,
    health,
    attack,
    defense,
    speed,
    tipos,
  } = req.body;
  const pokeId = id + 20000;
  const poke = await Pokemon.create({
    name,
    pokeId,
    weight,
    height,
    health,
    attack,
    defense,
    speed,
  });
 
  for (let i = 0; i < tipos.length; i++) {
    let type = await Tipos.findOrCreate({
      where: { name: tipos[i] },
    });
    console.log(type[0])
    await type[0].addPokemon(poke);
  }
  res.send("PokeCreado!");
};
