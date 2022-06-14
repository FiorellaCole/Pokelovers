import { pokemonCard } from './data.js';


import data from './data/pokemon/pokemon.js';


const allPokemon = data.pokemon //Data de todos los pokemon y características

const pokemonCards = allPokemon.map((pokemon)=>pokemonCard(pokemon))

const container = document.querySelector('.pokemonContainer');
container.innerHTML = pokemonCards.join('')

//let numberAndName = allPokemon.map(whatPokemon) Devuelve todos los números y nombres en un array de strings

//document.getElementById('print').innerHTML=numberAndName //Imprime numberAndName en el id 'print'

/*function whatPokemon (pokemon){ //Función para iterar y devolver ciertos elementos de la data, devuelve string
    return pokemon.num + ' ' + pokemon.name
}*/


console.log(pokemonCards)
/*const pokemonFirstGen = pokemon.filter(p => p.num <= 151);

const pokemonSecondGen = pokemon.filter(p => p.num > 151 && p.num <=251)*/






