
let submitButton1 = document.getElementById('sbutton')
submitButton1.addEventListener('click', event => {
  event.preventDefault()
  let search = document.getElementById("search")
  let sabueso = {
    pokemonName:search.value
  }
  console.log(sabueso)
    })

    




/* buscar pokemon usando la ap Les dejo las referencias a PokeAPI, a POSTMAN y al repositorio que hicimos ayer (auth-ui).
Documentación https://pokeapi.co/docs/v2
Página de PokeAPI con una herramienta de ejemplo https://pokeapi.co/
Página de POSTMAN https://www.postman.com/
Repositorio de auth-ui https://github.com/linoman/auth-ui */


