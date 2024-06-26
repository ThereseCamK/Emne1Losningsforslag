
  let app = document.getElementById("app");
  getRandomPlayer();
  updateView();
  function updateView() {
   getRandomPokemon();
   
   let randomPokemon = model.randomPokemon
 
  
    app.innerHTML = /*HTML*/ `
    <div class="container">
      <div class="opposingPokemon">
          <div>${randomPokemon.name} </div>
          <div>lvl: ${randomPokemon.level}</div>
          <img src="${randomPokemon.image}">
      </div>
      
      <div class="bottomScreen">
          <div class="player">
              <img src="${model.currentPlayer.playerImage}">
              <div>${model.currentPlayer.playerName}</div>
          </div>
  
          <div class="buttonContainer">
              <button onclick="catchPokemon()">Fang</button>    
            ${buttons()}      
          </div>
  
      </div>
    </div>
    `;
  }
  function buttons(){
    let html = `    <button onclick="updateView()">Finn en annen</button>
              <button onclick="showPokemon()">Vis dine pokemon</button>   `
              return html 
  }
  
  function caughtPokemonView(pokemonToCatch) {
    app.innerHTML = /*HTML*/ `
    <div class="caughtContainer">
      <h1>Du fanget ${pokemonToCatch.name}</h1>
      <div class="buttonContainer">
      ${buttons()}       
            </div>
    </div>
    `;
  }

  function getRandomPlayer(){
    let randomNum = Math.floor(Math.random() * model.players.length);
    model.currentPlayer = model.players[randomNum];
  }
  
  function catchPokemon() {
    let playerIndex = getIndexOfCurrentPlayer();
    let pokemonToCatch = model.randomPokemon;
    model.players[playerIndex].pokemons.push(pokemonToCatch);
    caughtPokemonView(pokemonToCatch);
  }
  
function getIndexOfCurrentPlayer() {
  let currentPlayerName = model.currentPlayer.playerName;
  let playerIndex = model.players.findIndex(player => player.playerName === currentPlayerName);
  return playerIndex;
}

  function showPokemon() {

    let html = ``;
    for(let i = 0; i < model.currentPlayer.pokemons.length; i++){
      let pokemon = model.currentPlayer.pokemons[i];
        html += `<div class="playersPokemon">
                  <div>${pokemon.name} </div>
          <div>lvl: ${pokemon.level}</div>
          <img src="${pokemon.image}">
            </div> `;
    }
          html += `${buttons()}`
          app.innerHTML = html;

  }
  
  function getRandomPokemon() {
    let randomNum = Math.floor(Math.random() * model.pokemon.length);
    model.randomPokemon = model.pokemon[randomNum];
    
  }