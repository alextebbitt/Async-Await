////////////////////////////////////////////////////////////////////////////////
// DOM Constants
const firstSection = document.getElementById("first-section");
const secondSection = document.getElementById("second-section");

// Constants
let pokemonNumber = getRandomNumber();
const API = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;
const IMG = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`;

//{id or name}/"
//`https://pokeapi.co/api/v2/pokemon/1`
////////////////////////////////////////////////////////////////////////////////
// Globals

////////////////////////////////////////////////////////////////////////////////
// Functions
async function getPokemon() {
  try {
    console.log(API);
    const res = await axios.get(API);
    // const poke = await res.data.results;
    console.log(res.data.name);
    //+++firstSection.innerHTML =  API; 
    secondSection.innerHTML += "<img src='" + IMG + "'/>";
    secondSection.innerHTML += res.data.name
  } catch (error) {
    console.error(error);
  }
}

getPokemon();

function getRandomNumber() {
  return Math.floor(Math.random() * 300);
}
console.log(getRandomNumber());



