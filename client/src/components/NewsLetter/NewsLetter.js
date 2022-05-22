import EmailIcon from '@mui/icons-material/Email';
import {
    Container,
    Title,
    Desc,
    InputContainer,
    Input,
    Button
} from "./NewsLetter.elements"

const NewsLetter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <EmailIcon />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default NewsLetter;











