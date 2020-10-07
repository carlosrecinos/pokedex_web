const Router = require('express').Router();
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

const counter = {
  pokemonList: 0,
};

Router.get('/pokemon', (req, res) => {
  counter.pokemonList += 1;
  const offset = parseInt(req.query.offset) || 0;
  const limit = parseInt(req.query.limit) || 20;
  
  console.log(`Request /pokemon/ quantity: ${counter.pokemonList}`)
  P.getPokemonsList({ limit, offset })
  .then((data) => {
    res.json({error: false, data})
  })
  .catch(error => {
    res.json({error: true, data: error})
  }) 
})

Router.get('/pokemon/:id', (req, res) => {
  counter.pokemonList += 1;
  console.log(`Request /pokemon/ ByName quantity: ${counter.pokemonList}`)
  P.getPokemonByName(req.params.id)
  .then((data) => {
    res.json({error: false, data})
  })
  .catch(error => {
    res.json({error: true, data: error})
  }) 
})

module.exports = Router;