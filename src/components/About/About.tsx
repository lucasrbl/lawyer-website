import * as s from './style';
import handshake from '../../assets/images/handshake.jpg';
import oldBuilding from '../../assets/images/old-building2.jpg';

export const About: React.FC = () => {
    return (
        <s.Container>
            <s.TitleContainer>
                <s.SectionTitle>
                    About
                </s.SectionTitle>

                <s.Title>
                    the goal is to provide professional service to our customers
                </s.Title>
            </s.TitleContainer>

            <s.ContentContainer>
                <s.ImagesContainer>
                    <s.LeftImage src={oldBuilding}/>
                    <s.RightContainer>
                        <s.Text>We understand that each client has individual needs and requires a personalized approach. Therefore, we strive to create a trusting relationship with each client and pay special attention to their unique needs</s.Text>
                        <s.RightImage src={handshake}/>
                    </s.RightContainer>
                </s.ImagesContainer>
                <s.BelowContainer>
                    <s.Text>
                        Our services include, but are not limited to, legal counseling, court representation, arbitration and mediation, consumer protection. 
                    </s.Text>
                </s.BelowContainer>
            </s.ContentContainer>
        </s.Container>
    );
};