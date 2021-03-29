import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {FcSearch} from "react-icons/fc"
import { GetName } from "../../actions/getName";
import style from "./SearchBar.module.css";
import "../../scss/components/_SearchBar.scss";

const SearchBar = (props) => {
  const [poke, setName] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setName({ name: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getName(poke.name);
    setName({ name: "" });
    props.history.push("/pokemons");
  };

  return (
    <nav className={style.Nav}>
      <ul className={style.ulnav}>
        <li className={style.linav}>
          <Link className={style.navlink} to="/pokemons">
            <img
              className={style.homeimg}
              src="https://fontmeme.com/permalink/210326/1ab04c648f623a5abf36ea88eb5c3cb5.png"
              alt="imagen obtenida en https://fontmeme.com/"
            />
          </Link>
        </li>
       
        <li className={style.linav}>
    
          <Link className={style.navlink} to="/pokemons/add"> <h3>Crea tu Pokemon!</h3></Link>
 
        </li>

        <li className={style.lastli}>
        <div className="search-box">
          <form  onSubmit={(e) => handleSubmit(e)}>
            <input
           
              type="search"
              value={poke.name}
              onChange={(e) => handleChange(e)}
              placeholder="Nombre..."
          
            />
            <span className="searchspan"></span>
            {/* <button className="searchbutton" type="submit"><FcSearch/></button> */}
         
        </form>
</div>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.pokemonDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getName: (name) => dispatch(GetName(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
