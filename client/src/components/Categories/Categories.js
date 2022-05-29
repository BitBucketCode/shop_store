import React from "react"
import {Container} from "./Categories.elements";
import { categories } from "../../data";
import CategoryItem from "../CategoryItem/CategoryItem";

const Categories = () => {
    return (
        <Container>
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Categories;
