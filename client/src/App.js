import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import Container from './App/Components/Container';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Container />
    </BrowserRouter>
  </Provider>
);

export default App;
