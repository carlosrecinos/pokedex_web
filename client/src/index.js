import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import Axios from 'axios';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PokemonFont from './resources/fonts/pokemonFont.ttf';
import PokemonSolidFont from './resources/fonts/pokemonSolidFont.ttf';

// Axios.defaults.baseURL = 'http://pokeapi.co/api/v2';
Axios.defaults.baseURL = 'http://192.168.1.10:5000/api/';

injectGlobal`
  @font-face {
    font-family: PokemonFont;
    src: url('${PokemonFont}') format('opentype');
  }
  @font-face {
    font-family: PokemonSolidFont;
    src: url('${PokemonSolidFont}') format('opentype');
  }
`;
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
