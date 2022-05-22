import { popularProducts } from "../../data";
import Product from "../Product/Product";
import {Container} from "./Products.elements"

const Products = () => {
    return (
        <Container>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Products;
