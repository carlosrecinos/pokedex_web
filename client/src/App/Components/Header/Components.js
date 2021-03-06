import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Header = styled.div`
  background-color: #CC0000;
  display: flex;
  justify-content: space-between;
  height: 60px;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  color: #FFDE00;
  font-family: PokemonSolidFont;
  padding-right: 5px;
  padding-left: 5px;
  &:hover {
    background-color: #AA0000;
    color:#B3A125;  
  }
`;

export const NavbarLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
