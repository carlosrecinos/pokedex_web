import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  height: 40%;
  justify-content: space-around;
  z-index: 100;
  margin: 0 auto;
  `;
export const ImageBox = styled.div`
  border: 3px solid #9F7F4E;
  cursor: ${({ active }) => (active ? 'pointer' : 'auto')};
  border-radius: 4px;
  height: 100%;
  width: ${({ active }) => (active ? '40%' : '30%')};
  transition: 0.5s;
  z-index: ${({ active }) => (active ? '102' : '101')};
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
  background-color: rgba(0,0,0,0.8);
  position: absolute;
  ${({ left }) => left && 'left: 0px;'}
  ${({ right }) => right && 'right: 0px;'}
  transition: opacity 200ms ease-in-out;
  height: 102%;
  width: 7%;
  z-index: 102;
  &: hover {
    opacity: 0.5;
  }
`;

export const SpriteImg = styled.img`
  position: absolute;
  margin-top: 30px;
  height: 200px;
  width: 200px;
  right: 5%;
`;
