const { Router } = require("express");

const getPokemons = require("./getPokemons");
const getTypes = require("./getTypes");
const addPokemon = require("./addPokemon");
const getPokemonById = require("./getPokemonById");
const getAll = require("./getPokemonsByAPI");
const getPokemonsC = require("./getPokemonsC");

const router = Router();

router.get("/", getAll) // busca desde la API y envia.
// router.get("/", getPokemons); //busca desde la API, llena la BD y devuelve desde la BD.
router.get("/types", getTypes);
router.post("/add", addPokemon);
router.get("/create", getPokemonsC);
router.get("/id/:idPokemon", getPokemonById);

module.exports = router;
