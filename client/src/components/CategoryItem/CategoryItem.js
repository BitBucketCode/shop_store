import {Container, Image, Info, Title, Button} from "./CategoryItem.elements";

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    );
};

export default CategoryItem;
