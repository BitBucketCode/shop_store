import {
    CenterElem,
    Container,
    LeftElem,
    RightElem,
    SearchContainer,
    Wrapper,
    Input, Logo, MenuItem,
} from "./Navbar.elements";
import {Search, ShoppingCartOutlined} from "@mui/icons-material";
import Badge from '@mui/material/Badge';
import RegIcon from '@mui/icons-material/HowToReg';
import SignIn from '@mui/icons-material/ExitToApp';
import {SHOP_NAME} from "../../data";
import Animations from "./Animations";
import s from './ElementStyles.module.css'

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <LeftElem>
                    <Animations/>
                </LeftElem>
                <CenterElem>
                    <Logo>{SHOP_NAME}</Logo>
                </CenterElem>
                <RightElem>
                    <SearchContainer>
                        <Input/>
                        <Search className={s.SearchStyle}/>
                    </SearchContainer>
                    <MenuItem><RegIcon/></MenuItem>
                    <MenuItem><SignIn/></MenuItem>
                    <MenuItem><Badge className={s.BadgeStyle}><ShoppingCartOutlined/></Badge></MenuItem>
                </RightElem>
            </Wrapper>
        </Container>
    )
}

export default Navbar
