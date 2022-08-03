const poke_container = document.getElementById("poke-container")
const pokemon_count = 150
const colors = {
    fire: '#fd7d24',
    grass: '#9bcc50',
    electric: '#eed535',
    steel: '#9eb7b8',
	water: '#4592c4',
    ice: '#51c4e7',
	ground: '#ab9842',
	rock: '#a38c21',
	fairy: '#fdb9e9',
    ghost: '#7b62a3',
	poison: '#b97fc9',
	bug: '#729f3f',
	dragon: '#f16e57',
	psychic: '#f366b9',
	flying: '#bdb9b8',
	fighting: '#d56723',
	normal: '#a4acaf'
}

const main_types = Object.keys(colors)

const fetchPokemons = async() => {
    for(let i = 1; i<=pokemon_count; i++){
        await getPokemon(i)
    }
}

const getPokemon = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add("pokemon")
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

    const id = pokemon.id.toString().padStart(3, '0')

    const poke_types = pokemon.types.map(type => type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const color = colors[type]

    pokemonEl.style.backgroundColor = color

    const pokemonInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}">
        </div>
        <div class="info">
            <span class="number">${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `
    pokemonEl.innerHTML = pokemonInnerHTML

    poke_container.appendChild(pokemonEl)
}

fetchPokemons()