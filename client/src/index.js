import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import Axios from 'axios';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PokemonFont from './resources/fonts/pokemonFont.ttf';
import PokemonSolidFont from './resources/fonts/pokemonSolidFont.ttf';

Axios.defaults.baseURL = 'http://pokeapi.salestock.net/api/v2';

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
