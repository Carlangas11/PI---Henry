const axios = require("axios");
const { Pokemon, Tipos } = require("../db");
const { getPokemonsAPI } = require("./getPokemonsAPI");
var index = 0;
let pokemon = [];
module.exports = async (req, res) => {
  const pokeName = req.query.name;

  if (!pokeName) {
    if (index < 40) {
      const resp = await getPokemonsAPI(
        index,
        [],
        "https://pokeapi.co/api/v2/pokemon"
      );
      index = index + 40;
      for (let i = 0; i < resp.length; i++) {
        let encontrado = pokemon.find((p) => p.pokeId === resp[i].pokeId);
        if (!encontrado) pokemon.push(resp[i]);
      }

      res.json(pokemon);
    } else {
      const resp = await getPokemonsAPI(index, pokemon);
      index = index + 40;
      for (let i = 0; i < resp.length; i++) {
        let encontrado = pokemon.find((p) => p.pokeId === resp[i].pokeId);
        
        if (!encontrado) pokemon.push(resp[i]);
      }
     
      pokemon.sort(function (a, b) {
        return a.pokeId - b.pokeId;
      });
    

      res.json(pokemon);
    }
  } else {
    const pokeCreado = await Pokemon.findOne({
      where: { name: pokeName.toLowerCase() },
      include: { model: Tipos },
      
    });

    
    if (!pokeCreado) {
      let poke = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`)
        .catch((e) => {
          return res.status(404).send("Pokemón no existe!");
        });
      const name = poke.data.name;
      const pokeId = poke.data.id + 10000;
      const sprite = poke.data.sprites.other["official-artwork"].front_default;
      const tipos = poke.data.types.map((t) => t.type.name);
      const pokemon = {
        name,
        pokeId,
        sprite,
        tipos,
      };
      res.json(pokemon);
    } else {
      const name = pokeCreado.dataValues.name;
      const pokeId = pokeCreado.dataValues.pokeId 
   
      const tipos = pokeCreado.dataValues.tipos.map((t) => t.name);
    
      const pokemon = {
        name,
        pokeId,
        tipos,
      };

      res.json(pokemon);
    }
  }
};
