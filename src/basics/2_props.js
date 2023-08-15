import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
const Neymar = {
    name: "Neymar",
    country: "Brazil",
    img: "https://m.media-amazon.com/images/I/619IAEVtDgL._AC_UL400_.jpg",
};

const Messi = {
    name: "Messi",
    country: "Argentina",
    img: "https://m.media-amazon.com/images/I/41HtwNZITIL._AC_UL400_.jpg"
};

const style = {
    Country: {/* Storing the styles in a variable and then using it*/
        backgroundColor: "blue",
    }
}
function PlayerList() {
    return (
        <>
            <Player
                name={Neymar.name}
                country={Neymar.country}
                img={Neymar.img}
            >
                <h1>Children Demo</h1>   {/*children is something that is inbetween the opening and closing tag of a component */}

            </Player>
            <Player name={Messi.name}
                country={Messi.country}
                img={Messi.img}
            ></Player>
            {/* 
      We are passing in the data from the const into these <Player> components, the data is printed below in <Player>
      To pass number we can use{} JS
       */}
        </>
    );
}

// function Player({ name, country, img }) {
//   //const { name, country, img } = props; propse destructing
//   return (
//     <div>

//       <h2 style={style.Country}>{country}</h2>
//       <h1 style={{ backgroundColor: "yellow", border: "5px", borderStyle: "solid", borderColor: "black" }}>{name}</h1>
//       <img src={img} alt="sorryyyy" className="image"></img>
//     </div>
//   )
// }

function Player(props) {
    //we dont have to use "props" to pass values but it is a convention
    // the data is passed using props and retrieved using props.name and so on
    console.log(props);
    return (
        <div>

            <h2 style={style.Country}>{props.country}</h2>
            {/* using .toLowerCase for a value */}
            <h1 style={{ backgroundColor: "yellow", border: "5px", borderStyle: "solid", borderColor: "black" }}>{props.name}</h1>
            {/* JSX Inline style note that yellow is in quotes 
  because this is a {{}}Java Scrip object,first curly brace to use JS,second is a JS object*/}
            <img src={props.img} alt="sorryyyy" className="image"></img>
            <h1>{props.children}</h1>
            {/* children is a special name. so better nit use it for anything else i guess */}
        </div>
    )
}

//ReactDOM.render(<PlayerList></PlayerList>, document.getElementById("root"));