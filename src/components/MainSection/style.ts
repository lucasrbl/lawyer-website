import styled from 'styled-components';

export const Container = styled.section `
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    justify-content: center;
    align-items: center;
`;

export const SectionContent = styled.div `
    display: flex;
    align-items: center;
    gap: 3rem;
`;

export const Title = styled.h1 `
    font-size: 5.5rem;
    width: 300px; 
    text-align: end;
    font-weight: 500;
    color: #C69043;
    transform: translate(0, 10px);
    line-height: 0.9;
`;


export const Text = styled.p `
    font-size: .70rem;
    align-self: end;
    max-width: 250px;
`;


export const Image = styled.img `
    width: 180px;
    height: 180px;
`;