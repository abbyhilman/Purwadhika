const express = require("express");
const cors = require("cors");

const PORT = 4110;

const app = express();

app.use(cors());
app.use(express.json());

const db = {
  pokemon: [
    { id: 1, name: "charizard" },
    { id: 2, name: "squitrle" },
    { id: 3, name: "bulbasaur" },
  ],
  digimon: [],
};

app.get("/pokemons/:id", (req, res) => {
  const pokemonId = req.params.id;

  const findPokemons = db.pokemon.find((pokemons) => {
    return pokemons.id == pokemonId;
  });

  if (!findPokemons) {
    return res.status(204).json({
      message: `Pokemon with ID ${pokemonID} not found`,
    });
  }

  return res.status(200).json({
    message: "Get Pokemons Success",
    result: findPokemons,
  });
});

app.post("/pokemons", (req, res, next) => {
  const pokemonData = req.body;

  db.pokemon.push(pokemonData);

  res.status(200).json({
    message: "POST Pokemons Success",
    pokemonData,
  });
});

app.delete("/pokemon", (req, res) => {});

app.listen(PORT, () => console.log("listening on port", PORT));
