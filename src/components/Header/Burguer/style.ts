import styled from 'styled-components';

export const StyledBurguer = styled.div<{open: boolean}>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 20px;
  right: 2rem;
  cursor: pointer;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: .25rem;
    background-color: ${({open}) => open ? '#c69049' : '#696969'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all .3s linear;

    &:nth-child(1) {
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({open}) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

  }
`;