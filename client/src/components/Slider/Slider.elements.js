import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
`
export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props=> props.direction === "left" && "15px"};
  right: ${props=> props.direction === "right" && "15px"};
  margin: auto;
  opacity: 0.5;
  z-index: 2;
`

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`

export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`

export const Image = styled.img`
  height: 80%;
`

export const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`

export const Title = styled.h1`
  font-size: 70px;
  font-family: 'Koulen', cursive;
`

export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Koulen', cursive;
  letter-spacing: 3px;
`

export const Button = styled.button`
  font-family: 'Koulen', cursive;
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`