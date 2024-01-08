import styled from 'styled-components';

export const HeaderContent = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px 2rem;
  font-weight: 400;

  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #E9E9E9;
    margin-top: 15px;
  }

  @media (min-width: 769px) {
    padding: 15px 4rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: 'Dancing Script', cursive;
    font-size: calc(16px + 0.4vw);
    font-weight: 600;
    color: #C69043;
    width: 70px;
    text-align: end;
  }

  a {
    text-decoration: none;
  }
`;

export const Link = styled.a`
  color: #C69043;
  padding-bottom: 5px;
  transform: translateY(3px);
  border-bottom: 1px solid #c69049;
  transition: .3s ease-in-out;

  &:hover {
    color: #E9E9E9;
    border-color: #E9E9E9;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
