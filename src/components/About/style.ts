import styled from 'styled-components';


export const Container = styled.div `


`;

export const ImagesContainer = styled.div `
    display: flex;
    align-items: flex-end;
    gap: 10px;
`;


export const TitleContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 2fr
`;


export const ContentContainer = styled.div `
`;

export const RightContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const BelowContainer = styled.div `

`;

export const Text = styled.p `
    font-size: .70rem;
`;

export const Title = styled.h2 `
    text-transform: uppercase;
    font-size: 2.2rem;
    text-align: start;
`;

export const SectionTitle = styled.span `
    font-size: 1rem;
    text-transform: uppercase;
`;


export const LeftImage = styled.img `
    width: 220px;
    height: 260px;

`;

export const RightImage = styled.img `
    width: 200px;
    height: 145px;
`;