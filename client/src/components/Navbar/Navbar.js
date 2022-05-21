import {
    CenterElem,
    Container,
    Language,
    LeftElem,
    RightElem,
    SearchContainer,
    Wrapper,
    Input, Logo, MenuItem,
} from "./Navbar.elements";
import {Search, ShoppingCartOutlined} from "@mui/icons-material";
import Badge from '@mui/material/Badge';

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <LeftElem>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color: 'gray', fontSize: 16}}/>
                    </SearchContainer>
                </LeftElem>
                <CenterElem>
                    <Logo>
                        EUGENE-SHOP
                    </Logo>
                </CenterElem>
                <RightElem>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={2} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </RightElem>
            </Wrapper>
        </Container>
    )
}

export default Navbar
