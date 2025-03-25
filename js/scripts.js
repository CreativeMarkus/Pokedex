let pokemonRepository = (function () {
  // List of Pokémon
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

  // Get all Pokémon from the list
  function getAll() {
    return pokemonList; 
  }

  // Add new Pokémon to the list
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

  // Function to add list item to the DOM
  function addListItem(pokemon) {
    // Select the unordered list where the items will go
    let pokemonListElement = document.querySelector('.pokemon-list');
    
    // Create a list item <li>
    let listItem = document.createElement('li');

    // Create a button element
    let button = document.createElement('button');
    button.innerText = pokemon.name; // Use the pokemon parameter here
    
    // Add a class to the button
    button.classList.add('pokemon-button');
    
    // Append the button to the list item
    listItem.appendChild(button);

    // Append the list item to the unordered list
    pokemonListElement.appendChild(listItem);

    // Add the event listener to the button (click)
    addEventListenerToButton(button, pokemon);
  }

  // Function to add an event listener to the button
  function addEventListenerToButton(button, pokemon) {
    button.addEventListener('click', function () {
      showDetails(pokemon); // Call showDetails when the button is clicked
    });
  }

  // Function to display Pokémon details in the console
  function showDetails(pokemon) {
    console.log(pokemon); // Log the Pokémon object to the console
  }

  // Adding Pokémon list items to the page
  function displayPokemons() {
    getAll().forEach(function (pokemon) {
      addListItem(pokemon); // Call addListItem for each Pokémon
    });
  }

  return {
    getAll: getAll,
    add: add,
    displayPokemons: displayPokemons,
    addListItem: addListItem, // Expose addListItem outside the IIFE
    showDetails: showDetails // Expose showDetails outside the IIFE
  };

})(); 

// Calling the function to display the Pokémon list
pokemonRepository.displayPokemons();