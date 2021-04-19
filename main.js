
//aqui todas las variantes a modificar con su id creado en el html

let pname = document.querySelector("#pname")
let pokemonId =document.querySelector("#hp")
let attack = document.querySelector("#attack")
let defense =document.querySelector("#defense")
let specialAttack =document.querySelector("#sattack")
let specialSDefense =document.querySelector("#sdefense")
let speed = document.querySelector("#speed")
let description = document.querySelector("#description")
let image = document.querySelector("#pokemonimage")
image.src= "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12ecb7ae-7059-48df-a4f8-2e3fb7858606/d47rmjf-de88a574-49c8-4dcf-9df4-7e11722e8bec.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8xMmVjYjdhZS03MDU5LTQ4ZGYtYTRmOC0yZTNmYjc4NTg2MDYvZDQ3cm1qZi1kZTg4YTU3NC00OWM4LTRkY2YtOWRmNC03ZTExNzIyZThiZWMucG5nIn1dXX0.qQtrPbihCWTTF7bQl9cQzUVnPw_yhtVNHAWcDgQV8k4"
let id = pokemonId.innerText
let image2 =""

//evento del boton, para que busque el pokemon

let submitButton1 = document.getElementById('sbutton')

submitButton1.addEventListener('click', event => {
  event.preventDefault()
  let search = document.getElementById("search")
  let sabueso = {
    pokemonName:search.value
  }
  AtrapalosTodosName(sabueso.pokemonName)
  // AtrapalosTodosPhoto(sabueso.pokemonName)
})
 
//funciones:


//Funcion AtrapalosTodosName() esta funcion si le asignas el nombre del pokemo, te devuelve el nombre del pokemon 
//insertado en la pagina web, tb encuentra la ID del Pokemon

 
function AtrapalosTodosName(PMonsterName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${PMonsterName}`)
  .then(function(response) {
    response.json()
    .then(function (pokemon) {
     pname.innerText = pokemon.name
     hp.innerText = pokemon.id
     image.src=pokemon.sprites.front_default
     image2=pokemon.sprites.back_default
    })
    .then(AtrapalosTodosDescription(id))
  })
}


function AtrapalosTodosDescription(id) {
  fetch("https://pokeapi.co/api/v2/characteristic/"+id)
  .then(function(response) {
   response.json()
    .then(function (pokemon) {
      // description.innerText = pokemon.descriptions[1].description
      console.log(pokemon.descriptions[1].description)
    })
  })

}


// function AtrapalosTodosPhoto(PMonsterName) {
//  fetch(`https://pokeapi.co/api/v2/pokemon-form/${PMonsterName}`)
//  .then(function(response) {
//    response.json()
//    .then(function (sprites) {
//       // console.log(pokemon.name)
//       image.src = sprites.sprites.front_default
//       //pendiente agregar loop intercalar entre la foto delantera y trasera en loop infinito
//     })
//   })

// }





      // let attack =""
      // let defense = ""
      // let specialAttack =""
      // let specialSDefense =""
      // let speed = ""
      // let description =""
     
       
    


let index = 0
function rotarImagen(params) {
  //aqui quiero que las imagenes de mis pokemos vaya pasando de adelante a enfrente siempre que se pueda
  //un pequeño loop y listo
  //si se puede agregar un efecto de transicion con fade ideal
  
}





/* buscar pokemon usando la ap Les dejo las referencias a PokeAPI, a POSTMAN y al repositorio que hicimos ayer (auth-ui).
Documentación https://pokeapi.co/docs/v2
Página de PokeAPI con una herramienta de ejemplo https://pokeapi.co/
Página de POSTMAN https://www.postman.com/
Repositorio de auth-ui https://github.com/linoman/auth-ui */

/* esto es lo que propone lino

const promises = [fetch(`https://pokeapi.co/api/v2/pokemon/${PMonsterName}`),
                  fetch(`https://pokeapi.co/api/v2/pokemon-form/${PMonsterName}`)]
Promise.all(promises)
.then(responses => Promise.all(responses.forEach(r => r.json())))
.then(bodies => {
    const pokemon = bodies[0]
    const pokemonForm = bodies[1]
    // Renderizar lo que necesites de pokemon y pokemonForm
    // Obtener el id
    return fetch("https://pokeapi.co/api/v2/characteristic/"+id)
})
//.then( Hacer los then que tienes para las descripciones)

fin de la propuesta de lino
*/






