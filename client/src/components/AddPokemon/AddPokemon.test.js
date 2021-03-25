import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ADDPOKEMON, addPokemons } from '../../actions/addPokemons';
import configureStore from "redux-mock-store";
import AddPokemonDefault, { AddPokemon } from './AddPokemon';

configure({adapter: new Adapter()});

describe('<AddPokemon />', () => {

    describe('Estructura', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<AddPokemon />);
        })
        it('Renderiza un <form>', () => {
            expect(wrapper.find('form')).toHaveLength(1)
        })
        it('Renderiza un label con el texto igual a "ID Pokemon:"', () => {
            expect(wrapper.find('label').at(0).text()).toEqual('ID Pokemon:');
        })
        it('Renderiza un input con la propiedad "name" igual a "id"', () => {
            expect(wrapper.find('input[name="id"]')).toHaveLength(1);
        })
        it('Renderiza un label con el texto igual a "PokeName"', () => {
            expect(wrapper.find('label').at(1).text()).toEqual('PokeName:');
        })
        it('Renderiza un input con la propiedad "name" igual a "name"', () => {
            expect(wrapper.find('input[name="name"]')).toHaveLength(1);
        })
        it('Renderiza un label con el texto igual a "HP:', () => {
            expect(wrapper.find('label').at(2).text()).toEqual('HP:');
        })
        it('Renderiza un input con la propiedad "name" igual a "health"', () => {
            expect(wrapper.find('input[name="health"]')).toHaveLength(1);
        })
        it('Renderiza un label con el texto igual a "Attack:', () => {
            expect(wrapper.find('label').at(3).text()).toEqual('Attack:');
        })
        it('Renderiza un input con la propiedad "name" igual a "attack"', () => {
            expect(wrapper.find('input[name="attack"]')).toHaveLength(1);
        })
        it('Renderiza un label con el texto igual a "Defense:', () => {
            expect(wrapper.find('label').at(4).text()).toEqual('Defense:');
        })
        it('Renderiza un input con la propiedad "name" igual a "defense"', () => {
            expect(wrapper.find('input[name="defense"]')).toHaveLength(1);
        })
        it('Renderiza un label con el texto igual a "Speed:', () => {
            expect(wrapper.find('label').at(5).text()).toEqual('Speed:');
        })
        it('Renderiza un input con la propiedad "name" igual a "speed"', () => {
            expect(wrapper.find('input[name="speed"]')).toHaveLength(1);
        })
        it('Renderiza un label con el texto igual a "Height:', () => {
            expect(wrapper.find('label').at(6).text()).toEqual('Height:');
        })
        it('Renderiza un input con la propiedad "name" igual a "height"', () => {
            expect(wrapper.find('input[name="height"]')).toHaveLength(1);
        })
        it('Renderiza un label con el texto igual a "Weight:', () => {
            expect(wrapper.find('label').at(7).text()).toEqual('Weight:');
        })
        it('Renderiza un input con la propiedad "name" igual a "weight"', () => {
            expect(wrapper.find('input[name="weight"]')).toHaveLength(1);
        })
    })
    describe('Manejo de inputs con estado', () => {
        let wrapper, useState, useStateSpy;
        beforeEach(() => {
            useState = jest.fn();
            useStateSpy = jest.spyOn(React,'useState')
            useStateSpy.mockImplementation((init) => [init, useState]);
            wrapper = shallow(<AddPokemon />)
        });
        describe("id input", () => {
            it('El form deberia cambiar de estado cuando escriban en el input de id', () => {
              wrapper.find('input[name="id"]').simulate('change', {target: {name: 'id', value: 33}});
              expect(useState).toHaveBeenCalledWith({ "id":33, "name":'', "health":'', "attack":'', "defense":'', "speed":'', "height":'', "weight":'',"tipo1":'',
              "tipo2":''});
            });
          });
          describe("name input" , () => {
            it('El form deberia cambiar de estado cuando escriban en el input de name', () => {
              wrapper.find('input[name="name"]').simulate('change', {target: {name: 'name', value: "Pikachu"}});
              expect(useState).toHaveBeenCalledWith({ "id":"", "name":'Pikachu', "health":'', "attack":'', "defense":'', "speed":'', "height":'', "weight":'',"tipo1":'',
              "tipo2":''});
            });
          });
          describe("health input", () => {
            it('El form deberia cambiar de estado cuando escriban en el input de name', () => {
              wrapper.find('input[name="health"]').simulate('change', {target: {name: 'health', value: 33}});
              expect(useState).toHaveBeenCalledWith({ "id":"", "name":'', "health":33, "attack":'', "defense":'', "speed":'', "height":'', "weight":'',"tipo1":'',
              "tipo2":''});
            });
          });
          describe("attack input", () => {
            it('El form deberia cambiar de estado cuando escriban en el input de name', () => {
              wrapper.find('input[name="attack"]').simulate('change', {target: {name: 'attack', value: 33}});
              expect(useState).toHaveBeenCalledWith({ "id":"", "name":'', "health":'', "attack":33, "defense":'', "speed":'', "height":'', "weight":'',"tipo1":'',
              "tipo2":''});
            });
          });
          describe("defense input", () => {
            it('El form deberia cambiar de estado cuando escriban en el input de name', () => {
              wrapper.find('input[name="defense"]').simulate('change', {target: {name: 'defense', value: 33}});
              expect(useState).toHaveBeenCalledWith({ "id":"", "name":'', "health":'', "attack":'', "defense":33, "speed":'', "height":'', "weight":'',"tipo1":'',
              "tipo2":''});
            });
          });
          describe("Speed input", () => {
            it('El form deberia cambiar de estado cuando escriban en el input de Speed', () => {
              wrapper.find('input[name="speed"]').simulate('change', {target: {name: 'speed', value: 33}});
              expect(useState).toHaveBeenCalledWith({ "id":"", "name":'', "health":'', "attack":'', "defense":'', "speed":33, "height":'', "weight":'',"tipo1":'',
              "tipo2":''});
            });
          });
          describe("Height input", () => {
            it('El form deberia cambiar de estado cuando escriban en el input de Height', () => {
              wrapper.find('input[name="height"]').simulate('change', {target: {name: 'height', value: 33}});
              expect(useState).toHaveBeenCalledWith({ "id":"", "name":'', "health":'', "attack":'', "defense":'', "speed":'', "height":33, "weight":'',"tipo1":'',
              "tipo2":''});
            });
          });
          describe("Weight input", () => {
            it('El form deberia cambiar de estado cuando escriban en el input de Weight', () => {
              wrapper.find('input[name="weight"]').simulate('change', {target: {name: 'weight', value: 33}});
              expect(useState).toHaveBeenCalledWith({ "id":"", "name":'', "health":'', "attack":'', "defense":'', "speed":'', "height":'', "weight":33,"tipo1":'',
              "tipo2":''});
            });
          });
    });
    describe('Dispatch to store', () => {
        var wrapper;
        var store;
        beforeEach(() => {
          const mockStore = configureStore();
          store = mockStore([], addPokemons);
          store.clearActions();
          wrapper = mount(<AddPokemonDefault store={store} />);
        })
        it('deberia hacer un dispatch al store de la action "AddPokemon" con los datos del state cuando se hace un Submit', () => {
            wrapper = mount(<AddPokemonDefault store={store} />);
            wrapper.find('[type="submit"]').simulate('submit',{ preventDefault () {} });
            const expectedAction = [{
              payload: { 
                "id":'', 
                "name":'', 
                "health":'', 
                "attack":'', 
                "defense":'', 
                "speed":'', 
                "height":'', 
                "weight":'',
                "tipo1":'',
                "tipo2":''},
              type: ADDPOKEMON
            }]
            expect(store.getActions()).toEqual(expectedAction);
      
          });

    })

})
