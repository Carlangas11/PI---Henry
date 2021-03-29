
import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import style from "./PokeSearched.module.css";


const PokeSearched = (props) => {


    return(
        <div className={style.containerPokemon}>
        {props.loading ? (
          <Link className={style.link}  to={props.pokeDetails.pokeId < 20000?`/pokemons/id/${props.pokeDetails.pokeId - 10000}`:`/pokemons/id/${props.pokeDetails.pokeId}`}>

          <div className={style.pokecard}>
              {props.loading?
                props.pokeDetails.pokeId < 20000 ? (
                <div className={style.title}>
                <h4>#{props.pokeDetails.pokeId - 10000}  {props.pokeDetails.name}</h4>
              
                <img 
                    className={style.pokeimg}
                src={props.pokeDetails.sprite} alt="Esperando!" />
                </div>
              ) : (
                <div>
                <h4>Creado #{props.pokeDetails.pokeId - 20000}  {props.pokeDetails.name}</h4>

                <img
                 className={style.pokeimg}
                src="https://i.pinimg.com/564x/35/77/7a/35777a82ba036602cc75f281bf1fb20d.jpg"
                alt="Esperando!"
              />
                </div>
              )
              :""
              }
           
            
            <div  className={style.containerType}>
              {props.pokeDetails.tipos?props.pokeDetails.tipos.map((t) => (
                <div  key={props.pokeDetails.tipos.indexOf(t)}> <img   src={`/images/Tipo_Pokemons/${t}.gif`} alt="no encontrada" /> </div>
              )):""}
            </div>
          </div>
</Link>

        ) : (
          ""
        )}
      </div>

    )

}
const mapStateToProps = (state) => {
    return {
      pokeDetails: state.pokemonDetails,
      loading: state.loading,
     
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {

    };
  };

export default connect(mapStateToProps, mapDispatchToProps) (PokeSearched);