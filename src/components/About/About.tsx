import { 
    Container, 
    ContentContainer, 
    LeftImage, 
    RightImage, 
    Text,
    Title, 
   /*RightContainer,
    LeftContainer, */
    ImagesContainer,
    SectionTitle, 
    TitleContainer 
} from './style.ts';
import handshake from '../../assets/images/handshake.jpg';
import oldBuilding from '../../assets/images/old-building2.jpg';

export const About: React.FC = () => {
    return (
        
        <Container>

            <TitleContainer>
                <SectionTitle>
                    About
                </SectionTitle>

                <Title>
                    the goal is to provide professional service to our customers
                </Title>
            </TitleContainer>

            <ContentContainer>

                    <Text>
                        We understand that each client has individual needs and requires a personalized approach. Therefore, we strive to create a trusting relationship with each client and pay special attention to their unique needs
                    </Text>
                <ImagesContainer>
                    <LeftImage src={oldBuilding}/>
                    <RightImage src={handshake}/>
                </ImagesContainer>

            </ContentContainer>
        </Container>
    );
};