const { Pokemon, conn } = require('../../src/db.js');
const  expect  = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('Pokemon creation', () => {
      it('should throw error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done('should not have been created'))
          .catch(() => done());
      });
      it('should throw error if pokeId is null', (done) => {
        Pokemon.create({ name: 'Pikachu' })
        .then(()=> done('should not have been created'))
        .catch(()=>done());
      });
      it('should throw error if pokeId is String', (done) => {
        Pokemon.create({ name: 'Pikachu' ,pokeId: 'Trece' })
        .then(()=> done('should not have been created'))
        .catch(()=>done());
      });
      it('should throw error if name is a number', (done) => {
        Pokemon.create({ name: 18 ,pokeId: 'eleven' })
        .then(()=> done('should not have been created'))
        .catch(()=>done());
      });
      xit('should be created if name is a "String" and pokeId is a number', (done) => {
        Pokemon.create({ name: 'Pikachu',pokeId: 25 })
        .then(()=> done())
        .catch(()=>done('should not have been created'));
      });




    });
  });
});


// const {
//   id,
//   name,
//   weight,
//   height,
//   health,
//   attack,
//   defense,
//   speed,
//   tipo1,
//   tipo2
// }