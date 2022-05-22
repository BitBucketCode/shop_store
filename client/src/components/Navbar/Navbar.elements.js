import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  font-family: 'Koulen', cursive;
  background-color: lightblue;
`
export const Wrapper = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Koulen', cursive;
`
export const LeftElem = styled.div`
  flex: 1;
  display: flex;
  font-family: 'Koulen', cursive;
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  align-items: center;
`
export const CenterElem = styled.div`
  flex: 1;
  text-align: center;
  font-family: 'Koulen', cursive;
`
export const RightElem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: 'Koulen', cursive;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;  
  padding: 5px;
`
export const Input = styled.input`
  border: none;
`
export const Logo = styled.h1`
  font-weight: bold;
`
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

