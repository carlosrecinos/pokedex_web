const Router = require('express').Router();
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

const counter = {
  pokemonList: 0,
};
Router.get('/pokemon', (req, res) => {
  counter.pokemonList += 1;
  const {offset, limit} = req.query;
  console.log(`Request /pokemon/ quantity: ${counter.pokemonList}`)
  P.getPokemonsList({ limit: limit || 20, offset: offset || 0 })
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