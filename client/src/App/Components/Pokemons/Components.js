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
      @media (max-width: 1300px) {
        display: none;
      }
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
}
  
`;

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

export const CardTitle = styled.div`
  padding: 0px;
  position: relative;
  font-family: PokemonSolidFont;
  height: 60px;
  color: white;
  font-size: 20px;  
  text-align: center;
  background-color: #CC0006;
  margin: 0px;
  border-radius: 5px 5px 0px 0px;
  border-bottom: 3px solid black;
  text-shadow: 1px 1px #000,
              -1px -1px #000;
              
`;

export const CardBody = styled.div`
  text-align: center;
`;

export const CardImage = styled.img`
  width: 80%;
  height: 80%;
  margin: 0 auto;
`;

export const CloseButton = styled.p`
  display: inline-block;
  position: absolute;
  right: 10px;
  color: #EEE;
  cursor: pointer;
  margin: 0px;
  &:hover {
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
        flex-direction: column;
        justify-content: flex-start;
        width: 700px;
        min-height: 80%;
        z-index: 103;
        position: fixed;
        top: 5%;
        overflow-y: scroll;
        bottom: 5%;
        right: 10%;
        background-color: #F5EDE3;
        animation: ${showInfoAnimation} 200ms linear;
        @media (max-width: 1300px) {
          width: 80%;
          min-height: 80%;
          margin: 0px auto;
          left: 10%;
          right: 10%;
        }
        @media (max-width: 600px) {
          top: 5%;
          bottom: 5%;
          width: 90%;
          min-height: 90%;
          margin: 0px auto;
          left: 5%;
          right: 5%;
        }
`;
    }
    return '';
  }}
`;
export const InfoTitle = styled.div`
  width: 100%;
  margin-top: 10px;
  color: #C6AD88;
  font-size: 30px;
  font-family: PokemonSolidFont;
  text-align: center;
  text-shadow: 1px 1px #000,
              -1px -1px #000
`;

export const InfoBody = styled.div`
  height: 100%;
`;
export const BrownBackground = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #9F7F4E;
  border-radius: 3px;
  width: 40%;
  margin: 5% 20px;
  margin-top: 20px;
  min-height: 75px;
  align-items: center;
  padding: 10px;
  @media (max-width: 600px) {
    width: 90%;
  }
`;
export const PokemonTypes = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const PokemonType = styled.img`
  width: 50px;
  height: 60px;
  cursor: pointer;
  &: hover {
    transform: scale(1.2);
  }
`;

export const XpContainer = styled.div`
  font-family: Roboto;
`;

export const WeightContainer = styled.div`
  font-family: Roboto;
`;

export const InfoBoxLoaderContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const blinking = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
`;

export const InfoBoxLoader = styled.img`
  width: 300px;
  height: 300px;
  margin-top: 10%;
  text-shadow: 5px 5px 5px #CCC;
  animation: ${blinking} 1000ms ease-in-out infinite;
  filter: blur(0px) contrast(0%) brightness(100%);
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const BasicInfoTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 17px;
  font-family: PokemonSolidFont;

`;
