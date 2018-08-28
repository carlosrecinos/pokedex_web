import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  height: 300px;
  justify-content: space-around;
  z-index: 100;
  margin: 0 auto;
  border: 3px solid #9F7F4E;
  border-radius: 4px;
  `;
export const ImageBox = styled.div`
  border: ${({ active }) => (active ? '3' : '0')}px solid #9F7F4E;
  top: ${({ active }) => (active ? '-3' : '0')}px;
  cursor: ${({ active }) => (active ? 'pointer' : 'auto')};
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
  width: ${({ active }) => (active ? '40%' : '30%')};
  transition: 0.5s;
  z-index: ${({ active }) => (active ? '102' : '100')};
  background-color: ${({ active }) => (active ? '#FCFAF7' : '#F1E6D8')};
  display: ${({ showing }) => (showing ? 'inline-block' : 'none')}
  position: absolute;
  ${({ left }) => left
  && 'left: 0px;'
}
  ${({ right }) => right
  && 'right: 0px;'
}
&: hover{
  transform: ${({ active }) => (active ? 'scale(1.1)' : 'scale(1)')};
}
`;

export const ChangeImageButtom = styled.div`
  background-color: #9F7F4E;
  opacity: 0.5;
  position: absolute;
  ${({ left }) => left && 'left: 0px;'}
  ${({ right }) => right && 'right: 0px;'}
  transition: opacity 200ms ease-in-out;
  height: 101%;
  width: 7%;
  z-index: 102;
  &: hover {
    opacity: 0.8;
  }
`;

export const SpriteImg = styled.img`
  position: absolute;
  margin-top: 30px;
  height: 200px;
  width: 200px;
  z-index: ${({ active }) => (active ? '102' : '100')};
  ${({ left }) => left && 'right: 0px;'}
  ${({ right }) => right && 'left: 0px;'}
`;
export const ArrowDiv = styled.div`
  position: absolute;
  top: 40%;
  left: 20%;
  ${({ left }) => left && `
    width: 0; 
    height: 0; 
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-right: 20px solid black;
  `}
  ${({ right }) => right && `
    width: 0; 
    height: 0; 
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 20px solid black;
    
  `}
`;
export const ImageName = styled.div`
  text-align: center;
  font-size: 20px;
  font-color: #9F7F4E;
`;

export const CirclesContainer = styled.div`
  position: absolute;
  margin: 0 auto;
  height: 20px;
  width: 200px;
  z-index: 105;
  display: flex;
  bottom: 30px;
  justify-content: space-around;
  opacity: 0.5;
  &: hover { 
    opacity: 0.9;
  }
`;

export const Circle = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin: 0;
  background-color: black;
  opacity: 0.5;
  cursor: pointer;
  &: hover { 
    opacity: 0.9;
  }
`;
