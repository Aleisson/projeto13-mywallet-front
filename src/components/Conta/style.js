import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`

    text-decoration: none;
   
`

const ContaBody = styled.div`

    background-color: crimson;
    height: 180vw;
    width:100%;
    margin: 10px auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;

`
const NavConta = styled.div`

        

`

export {StyledLink, ContaBody};