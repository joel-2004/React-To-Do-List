import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import { Player } from "./3_player"//no extension(.js) for JS file
import players from "./4_playersData"


function PlayerList() {
  return (
    <div>
      {
        /* const { name, country, img } = person;
             <Player name={name} country={country} img={img}></Player> one method
               sending person as a prop 
                  It is not necessary to access value of a key
                  can also use {...person} alone it is a spread operator, if we do this
                  then in funtion Player() we dont need to use .person in the const*/
        players.map(person => {
          return <Player person={person} key={person.id}></Player>
        })
      }
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<PlayerList></PlayerList>)