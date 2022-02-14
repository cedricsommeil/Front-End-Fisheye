//Mettre le code JavaScript lié à la page photographer.html
// console.log(window.location.search)
import json from "../../data/photographers.json";
console.log(json)
/*recuper chaque id*/
let params = (new URL(document.location)).searchParams;
let id = params.get('id')
const photographers = fetch("../../data/photographers.json")
  .then(response => response.json())
  .then(data => {
        console.log(data)
  })
  .catch(console.error)

// const photographerInfo = photographers.filter((photograph)=>{

//     return photograph.id === Number(id);

// });
// console.log(photographerInfo)
