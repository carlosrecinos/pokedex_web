import React from 'react';
import styled from 'styled-components';
import { Header, NavbarLinksContainer, Link } from './Components';
import Logo from '../../../resources/images/logo.png';

const PokemonLogo = styled.img`
  height: 60px;
`;

export default () => (
  <Header>
    <Link to="/" nopadding="">
      <PokemonLogo src={Logo} />
    </Link>
    <NavbarLinksContainer>
      <Link to="/about">
        <i className="fas fa-info-circle" />
        {' '}
        About
      </Link>
    </NavbarLinksContainer>
  </Header>
);
