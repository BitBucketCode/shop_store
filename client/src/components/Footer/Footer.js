import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
    Container,
    Left,
    Logo,
    Desc,
    SocialContainer,
    SocialIcon,
    Title,
    Center,
    List,
    ListItem,
    Right,
    ContactItem,
    Payment
} from "./Footer.elements"
import {SHOP_NAME} from "../../data";
import paymentMethods from "../../sources/Images/paymentMethods.png"

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>{SHOP_NAME}</Logo>
                <Desc>
                    HOME TO THE BEST INDEPENDENT BRANDS AND VINTAGE BOUTIQUES.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>My Account</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <MeetingRoomIcon style={{marginRight:"10px"}}/> 100 Columbiana Cir, Columbia, SC 29212, United States
                </ContactItem>
                <ContactItem>
                    <LocalPhoneIcon style={{marginRight:"10px"}}/> +1 803-781-1000
                </ContactItem>
                <ContactItem>
                    <MailOutlineIcon style={{marginRight:"10px"}} /> columbiana@gmail.com
                </ContactItem>
                <Payment src={paymentMethods} />
            </Right>
        </Container>
    );
};

export default Footer;
