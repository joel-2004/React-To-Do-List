const players = [{
    id: 1,
    name: "Neymar",
    country: "Brazil",
    img: "https://m.media-amazon.com/images/I/619IAEVtDgL._AC_UL400_.jpg",

    /*using key to keep a unique value for every object (it takes care of a each child unique key warning )
    the purpose is that react keeps track of the objects that are added,deleted 
    */
},
{
    id: 2,
    name: "Messi",
    country: "Argentina",
    img: "https://m.media-amazon.com/images/I/41HtwNZITIL._AC_UL400_.jpg",

},
{
    id: 3,
    name: "Ronaldo",
    country: "Portugal",
    img: "https://m.media-amazon.com/images/I/41CxMMu9vQL._AC_UL400_.jpg",

}
];
// const style = {
//   Country: {
//     backgroundColor: "blue",
//   }
// }
// const names = ["joel", "poopshu", "neymar"];
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>//map is used to iterate over the lists
// })
// const player = players.map(person => {
//   return (
//     <>
//       <h1>{person.name}</h1>
//       <h2>{person.country}</h2>
//       <img src={person.img} alt="sry" />
//     </>
//   );
// })
export default players;/*one way to export, when exporting it as default we are allowed to change the name in index.js
it can be for example import hahaha from "./players"*/