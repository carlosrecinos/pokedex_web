import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Header = styled.div`
  background-color: #CC0000;
  display: flex;
  justify-content: space-between;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  padding: 20px;
  ${({ nopadding }) => (nopadding && 'padding: 0px')}
  color: #FFDE00;
  font-family: PokemonSolidFont;
  &:hover{
    background-color: #AA0000;
    color:#B3A125;  
    font-family: PokemonSolidFont;
}
`;

export const NavbarLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
