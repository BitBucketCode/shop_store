import React, {useState} from 'react'
import {
    Arrow, Button,
    Container, Desc, Image,
    ImgContainer, InfoContainer,
    Slide, Title, Wrapper
} from "./Slider.elements";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {sliderItems} from '../../data'

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

    return (<Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item => (
                <Slide bg={item.bg}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>Buy now!</Button>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightIcon/>
        </Arrow>
    </Container>)
}

export default Slider