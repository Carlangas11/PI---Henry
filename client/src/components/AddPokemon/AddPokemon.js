import React from 'react'


const addPokemon = () => {


    return (
        <div >
      <form  > 
        <div>
          <label >Title</label>
          <input name='title'   ></input>        
        </div>
        <div>
          <label>Description</label>
          <textarea name='description'  ></textarea>
        </div>
        <div>
          <label>Place</label> 
          <input name='place'  ></input>     
        </div>
        <div>
          <label>Date</label>
          <input name='date'   ></input>
        </div>
        <br/>
        <button type='submit' >enviar</button>
      </form>
    </div>
    )
}


export default addPokemon;