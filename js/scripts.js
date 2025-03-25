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
  // Select the unordered list
  let pokemonListElement = document.querySelector('.pokemon-list');

  // Create an li element
  let listItem = document.createElement('li');

  // Create a button element
  let button = document.createElement('button');
  button.innerText = pokemon.name; // Set button text to the Pokémon's name
  
  // Add a class to the button
  button.classList.add('pokemon-button');

  // Append the button to the list item
  listItem.appendChild(button);

  // Append the list item to the unordered list
  pokemonListElement.appendChild(listItem);
});