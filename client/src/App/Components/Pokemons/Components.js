import styled from "styled-components";

export const PokemonsWrapper = styled.div`
  padding-top: 20px
`

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
`
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 50%;
  margin: 0 auto;
`

export const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: space-around;
`

export const PokemonCard = styled.div`
  width: 250px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 5px; 
  margin-bottom: 40px;
  &:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: 500ms ease-in-out;
  }
  `
export const PokemonBall = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: white;
  border: 5px solid black;
  position: relative;
  margin: 0 auto;
  margin-top -14px;
`

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
`

export const CardBody = styled.div`
  text-align: center;
`

export const CardImage = styled.img`
  width: 80%;
  height: 80%;
  margin: 0 auto;
`