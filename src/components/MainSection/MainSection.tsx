import { Container, Text, Title, Image, SectionContent } from './style';
import oldBuildingImage from '../../assets/images/old-building.jpg';

export const MainSection: React.FC = () => {
    return (
        <Container>
            <Title>
                Johnson Law
            </Title>

            <SectionContent>
                <Image src={oldBuildingImage}/>
                <Text>
                    Our law firm provides high quality legal services for individuals and businesses. Our team of experienced lawyers specializes in various areas of law and is always ready to offer professional assistance in solving the most complex legal issues
                </Text>
            </SectionContent>
        </Container>
    );
};