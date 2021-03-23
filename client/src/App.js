import "./App.css";
import React from "react";

import { Route, Switch } from "react-router";
import LandingPage from "./components/LandingPage.js/LandingPage";
import Home from "./components/Home/Home";
import PokeDetails from "./components/PokeDetails.js/PokeDetails";
import SearchBar from "./components/SearchBar/SearchBar";
import NavBar from "./components/Nav/NavBar";
import addPokemon from "./components/AddPokemon/AddPokemon";


function App() {
  return (
    <div className="App">
    
        <div>
  
          <Route exact path="/" component={LandingPage} />
          <Route path="/pokemons" render={()=><NavBar/>} />
          <Route path="/pokemons" component={SearchBar} />
          <Switch>
            <Route exact path="/pokemons" component={Home} />
            <Route
              exact
              path="/pokemons/id/:pokeId"
              component={PokeDetails}
            />
            <Route exact path="/pokemons/add" component={addPokemon}/>
         
          </Switch>
        </div>
      
    </div>
  );
}

export default App;
