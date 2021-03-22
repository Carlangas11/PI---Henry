
const { Pokemon, Tipos } = require("../db");
let pokecreado = [];

module.exports = async (req, res) => {

      const pokeCreados = await Pokemon.findAll({include: Tipos});
     console.log(pokeCreados[0].dataValues.name)
      const este = pokeCreados.map(r => {
        let tipos = r.dataValues.tipos.map((t) => t.name);
        let name ={
        name: r.dataValues.name,
        pokeId:r.dataValues.pokeId,
        sprite: r.dataValues.sprite,
        tipos
        }
        return name
      })
      este.sort(function (a, b) {
        return a.pokeId - b.pokeId;
      })
      este
      res.json(este)
};