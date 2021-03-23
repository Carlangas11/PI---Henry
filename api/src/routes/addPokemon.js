const { Pokemon, Tipos } = require("../db");

module.exports = async (req, res) => {
  
  const {
    id,
    name,
    weight,
    height,
    health,
    attack,
    defense,
    speed,
    tipo1,
    tipo2
  } = req.body;
  
  const pokeId = Number(id)+ 20000

  const poke = await Pokemon.create({
   pokeId,
    name,
   
    weight,
    height,
    health,
    attack,
    defense,
    speed,
  });
 
  
    let type1 = await Tipos.findOrCreate({
      where: { name: tipo1},
    });
   
    await type1[0].addPokemon(poke);
    let type2 = await Tipos.findOrCreate({
      where: { name: tipo2},
    });
   
    await type2[0].addPokemon(poke);
  
  res.send("PokeCreado!");
};
