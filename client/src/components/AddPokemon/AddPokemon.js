import React, { useState } from "react";
import { connect } from 'react-redux'
import { addPokemons } from "../../actions/addPokemons";

const AddPokemon = (props) => {
const [pokemon, setPokemon] = useState({
  id:'', 
  name:'', 
  health:'', 
  attack:'', 
  defense:'', 
  speed:'', 
  height:'', 
  weight:'', 
 
  tipo1:'',
  tipo2:''
})

const handleChange = (e) => {
  
    setPokemon({
    ...pokemon,
      [e.target.name]:e.target.value
  })
  

}
const handlesubmit = (e) => {
  e.preventDefault();
props.addPokemon(pokemon)
}
console.log(props.state)
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div>
          <label>ID Pokemon:</label>
          <input name="id" onChange={handleChange}></input>
        </div>
        <div>
          <label>PokeName:</label>
          <input name="name" onChange={handleChange}/>
        </div>
        <div>
        <label>HP:</label>
          <input name="health" onChange={handleChange}/>
        </div>
        <div>
        <label>Attack:</label>
          <input name="attack" onChange={handleChange}/>
        </div>
        <div>
        <label>Defense:</label>
          <input name="defense" onChange={handleChange}/>
        </div>
        <div>
        <label>Speed:</label>
          <input name="speed" onChange={handleChange}/>
        </div>
        <div>
        <label>Height:</label>
          <input name="height" onChange={handleChange}/>
        </div>
        <div>
        <label>Weight:</label>
          <input name="weight" onChange={handleChange}/>
        </div>

        {
          
          props.state? 
         
            <div >
            <label>Tipo 1:</label>
            <select name="tipo1"value={pokemon.tipo1.value} onChange={handleChange}>
            <option value={props.state[0]}>{props.state[0]}</option>
            <option value={props.state[1]}>{props.state[1]}</option>
            <option value={props.state[2]}>{props.state[2]}</option>
            <option value={props.state[3]}>{props.state[3]}</option>
            <option value={props.state[4]}>{props.state[4]}</option>
            <option value={props.state[5]}>{props.state[5]}</option>
            <option value={props.state[6]}>{props.state[6]}</option>
            <option value={props.state[7]}>{props.state[7]}</option>
            <option value={props.state[8]}>{props.state[8]}</option>
            <option value={props.state[9]}>{props.state[9]}</option>
            <option value={props.state[10]}>{props.state[10]}</option>
            <option value={props.state[11]}>{props.state[11]}</option>
            <option value={props.state[12]}>{props.state[12]}</option>
            <option value={props.state[13]}>{props.state[13]}</option>
            <option value={props.state[14]}>{props.state[14]}</option>
            <option value={props.state[15]}>{props.state[15]}</option>
            <option value={props.state[16]}>{props.state[16]}</option>
            <option value={props.state[17]}>{props.state[17]}</option>
            
          </select>
        
            <label>Tipo 2:</label>
            <select name="tipo2" value={pokemon.tipo2.value} onChange={handleChange}>
            <option value=""></option>
            <option value={props.state[0]}>{props.state[0]}</option>
            <option value={props.state[1]}>{props.state[1]}</option>
            <option value={props.state[2]}>{props.state[2]}</option>
            <option value={props.state[3]}>{props.state[3]}</option>
            <option value={props.state[4]}>{props.state[4]}</option>
            <option value={props.state[5]}>{props.state[5]}</option>
            <option value={props.state[6]}>{props.state[6]}</option>
            <option value={props.state[7]}>{props.state[7]}</option>
            <option value={props.state[8]}>{props.state[8]}</option>
            <option value={props.state[9]}>{props.state[9]}</option>
            <option value={props.state[10]}>{props.state[10]}</option>
            <option value={props.state[11]}>{props.state[11]}</option>
            <option value={props.state[12]}>{props.state[12]}</option>
            <option value={props.state[13]}>{props.state[13]}</option>
            <option value={props.state[14]}>{props.state[14]}</option>
            <option value={props.state[15]}>{props.state[15]}</option>
            <option value={props.state[16]}>{props.state[16]}</option>
            <option value={props.state[17]}>{props.state[17]}</option>
            
          </select>
            
            </div>
            
          
        :
        ""}
        <button type="submit">enviar</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.types
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPokemon: poke => dispatch(addPokemons(poke))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPokemon);


