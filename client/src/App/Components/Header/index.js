import React from 'react';
import styled from 'styled-components';
import { Header, NavbarLinksContainer, Link } from './Components';

const PokemonLogo = styled.img`
  height: 50px;
`;

export default () => (
  <Header>
    <Link to="/">
      <PokemonLogo src={`/images/logo.png`} />
    </Link>
    <NavbarLinksContainer>
      <Link to="/about">
        <div>
          <i className="fas fa-info-circle" />
          {' '}
        About
        </div>
      </Link>
    </NavbarLinksContainer>
  </Header>
);
