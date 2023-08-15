/*
another way to export, if we use this method then we have to use the same name(Player) in 
index.js import Player from "./player"*/
export function Player(props) {

    console.log(props);
    const { name, country, img, } = props.person;//we use .person the fetch the values from person object.
    // const clicked = (e) => {
    //     /* note that this alerts based on click on different names */
    //     //alert(name + " clicked");
    //     console.log(e);
    //     console.log(e.target);
    // }
    const complexDemo = (country) => {
        console.log(country);
        // notice that this prints the moment the website is rendered
        //to avoid this we will use arrow function inline to invoke data only when the button is clicked
    }
    return (
        <div>
            <h2>{country}</h2>
            <h1 >{name}</h1>
            <img src={img} alt="sorryyyy" className="image"></img>
            <button type="button" onClick={() => complexDemo(country)}>button</button>
            {/* now the button tag only prints the value of the specific players data */}
            {/* <h1>{props.children}</h1> */}
        </div>
    )
}


