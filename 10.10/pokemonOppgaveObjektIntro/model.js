
const model = {
    currentPlayer: '',
    randomPokemon:{} ,
    players:[
        {
        playerName: "Bjarne",
        playerImage: "https://github.com/aaltofar/pokemonOppgaveObjektIntro/blob/main/Images/pokemonTrainerIdle.png?raw=true",
       
        pokemons: [],
        },
        {
            playerName: "Therese",
            playerImage: "https://github.com/aaltofar/pokemonOppgaveObjektIntro/blob/main/Images/pokemonTrainerIdle.png?raw=true",
           
            pokemons: [],
            }
       
    ],
  

  pokemon:[

      {
          name: "Bulbasaur",
          health: 70,
          image: "https://github.com/aaltofar/pokemonOppgaveObjektIntro/blob/main/Images/bulbasaur.png?raw=true",
          level: 12,
        },
        {
          name: "Oranguru",
          health: 170,
          image: "https://github.com/aaltofar/pokemonOppgaveObjektIntro/blob/main/Images/oranguru.png?raw=true",
          level: 45,
        },
        {
          name: "Pikachu",
          health: 45,
          image:"https://github.com/aaltofar/pokemonOppgaveObjektIntro/blob/main/Images/pikachu.png?raw=true",
          level: 8,
        },
        {
          name: "Drowzee",
          health: 90,
          image: "https://github.com/aaltofar/pokemonOppgaveObjektIntro/blob/main/Images/drowzee.png?raw=true",
          level: 33,
        },

  ]
}
// let possiblePokemon = [model.pokemon[0].name, model.pokemon[1].name, model.pokemon[2].name, model.pokemon[3].name];