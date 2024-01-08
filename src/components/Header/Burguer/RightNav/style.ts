import styled from 'styled-components';

export const Ul = styled.ul<{open: boolean}>`
  display: flex;
  flex-flow: row nowrap;
  list-style: none;

  li {
    padding: 0 1rem;
  }

  a {
    transition: .3s ease-in-out;
    color: black;
  }

  a:hover {
    color: #C69043;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #F4F4F4;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform .3s ease-in-out;

    li {
      padding: 10px 0 10px 50px;
    }
  }
`;