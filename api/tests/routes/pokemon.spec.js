/* eslint-disable import/no-extraneous-dependencies */
var supertest = require('supertest-as-promised')(require('../../src/app'));
const  expect  = require('chai').expect;
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, Tipos, conn } = require('../../src/db.js');

const agent = session(app);

const vileplume = {
  id: 45,
  name: 'vilePlume',
  weight: 186,
  height: 12,
  health: 75,
  attack: 80,
  defense: 85,
  speed: 50,
  tipo1: "grass",
  tipo2: "poison"
};


describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => 
  Pokemon.sync({ force: true }),
    );
  describe('add', function () {
    it('POST Set correctly data base vileplume', function () {
      return agent
      .post('/pokemons/add')
      .send(vileplume)
    .then(() => {
      return Pokemon.findOne({
        where: {
          name: 'vileplume'
        },
        include:{
          model: Tipos
        }
      });
    }).then(pokemon => {
      expect(pokemon.toJSON().name).to.equal('vileplume')
      expect(pokemon.toJSON().pokeId).to.equal(20045)
      expect(pokemon.toJSON().tipos.length).to.equal(2)
    })
    });
   
    
  });
});
