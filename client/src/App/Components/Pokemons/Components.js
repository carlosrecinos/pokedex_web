import styled, { keyframes } from 'styled-components';

export const PokemonsWrapper = styled.div`
  padding-top: 20px
`;

export const PokemonButton = styled.div`
  background-color: #71BCCA;
  text-align: center;
  color: #FFDE00;
  font-family: PokemonSolidFont;
  font-size: 20px;
  border-radius: 5px;
  border: 2px solid #3B4CCA;
  padding: 5px;
  &:hover {
    background-color: #5BACBB;
    color: #EEDE00;
    cursor: pointer;
}
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 50%;
  margin: 0 auto;
`;

export const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: space-around;
`;

export const PokemonCard = styled.div`
  width: 250px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 5px; 
  transition: 100ms linear;
  ${({ clicked }) => {
    if (clicked) {
      return `
      width: 300px;
      height: 400px; 
      z-index: 2;
      margin-left: 10%;
      `;
    }
    return `
    box-shadow: 5px 10px 10px #555;
    &:hover{
      cursor: pointer;
      transform: scale(1.1);
    }
    `;
  }
}
  `;

export const PokemonModal = styled.div`
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4);
  margin-bottom: 40px;
  ${({ clicked }) => (
    clicked
      ? `
  position: fixed;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
` : '')
}`;

export const PokemonBall = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: white;
  border: 5px solid black;
  position: relative;
  margin: 0 auto;
  margin-top -14px;
  z-index: 0
`;

export const CardTitle = styled.p`
  padding: 10px;
  font-family: PokemonSolidFont;
  color: white;
  font-size: 25px;  
  text-align: center;
  background-color: #CC0006;
  margin: 0px;
  border-radius: 5px 5px 0px 0px;
  border-bottom: 3px solid black;
  text-shadow: 1px 1px #000,
              -1px -1px #000
`;

export const CardBody = styled.div`
  text-align: center;
`;

export const CardImage = styled.img`
  width: 80%;
  height: 80%;
  margin: 0 auto;
`;

export const CloseButton = styled.div`
  color: #EEE;
  float: right;
  cursor: pointer;
  &: hover {
    color: #555;
  }
`;
const showInfoAnimation = keyframes`
  from {
    transform: translateX(200px) scale(0.8);
    opacity: 0.1;

  }
  to {
    opacity: 1;
    transform: translateX(0px) scale(1);
  }
`;
export const PokemonInfo = styled.div`
  display:none;
  border-radius: 3px;
  border: 5px solid #E1D4C0;
  ${({ clicked }) => {
    if (clicked) {
      return `
        display: flex;
        justify-content: space-between;
        width: 700px;
        height: 500px;
        z-index: 2;
        position: fixed;
        top: 10%;
        right: 10%;
        background-color: #F5EDE3;
        animation: ${showInfoAnimation} 200ms linear;
`;
    }
    return '';
  }}
`;
export const InfoTitle = styled.div`
  width: 100%;
  color: #C6AD88;
  font-size: 30px;
  font-family: PokemonSolidFont;
  text-align: center;
  text-shadow: 1px 1px #000,
              -1px -1px #000
`;
