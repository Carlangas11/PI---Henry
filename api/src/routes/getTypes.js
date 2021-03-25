const { Pokemon, Tipos } = require("../db");

const axios = require("axios");

module.exports = async (req, res) => {
  const type = await axios.get("https://pokeapi.co/api/v2/type").catch((e) => {
    return res.status(404).send("=(");
  });
  const names = type.data.results.map((n) => n.name);
 
  for (let i = 0; i < names.length; i++) {
    await Tipos.findOrCreate({
      where: { name: names[i] },
    });
  }
  const types = await Tipos.findAll();
  const enviar = types.slice(0,-2)
 console.log(enviar.map((t) => t.name))
  res.json(enviar.map((t) => t.name));
};
