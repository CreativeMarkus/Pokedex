let pokemonRepository = (function () {
  let pokemonList = [
    { 
      name: "Bulbasaur",
      height: 7,
      types: ["grass", "poison"]
    },
    {
      name: "Charmander",
      height: 8,
      types: ["fire"]
    },
    {
      name: "Squirtle",
      height: 5,
      types: ["water"]
    },
    {
      name: "Jigglypuff",
      height: 0.5,
      types: ["Fairy"]
    },
    {
      name: "Mewtwo",
      height: 2.0,
      types: ["Psychic"]
    },
  ];

  function getAll() {
    return pokemonList; 
  }

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon &&
      Array.isArray(pokemon.types) 
    ) {
      pokemonList.push(pokemon);
    } else {
      console.error("Invalid Pokémon data"); 
    }
  }

  return {
    getAll: getAll,
    add: add
  };

})(); 

pokemonRepository.getAll().forEach(function (pokemon) {
  // Assign the ul element inside the forEach loop
  let pokemonListElement = document.querySelector('.pokemon-list');

  let listItem = document.createElement('li');
  listItem.textContent = `${pokemon.name} (height: ${pokemon.height})`;

  if (pokemon.height > 6.5) {
    listItem.textContent += " - Wow, that's big!";
  }

  pokemonListElement.appendChild(listItem);
});