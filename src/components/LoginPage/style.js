import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginBody = styled.div`

    height: 320px;
    width:100%;
    margin: calc(70% - 120px) auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;

    h1{
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
    }


`

const LoginForm = styled.form`

    height: 180px;
    width: auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;


    input{
        width:82vw;
        height:16vw;
        background: #FFFFFF;
        border: 1px solid #A328D6;
        border-radius: 5px;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #000000;
        padding: 8px;
     
    }

    input::placeholder{
        font-family: 'Raleway';
        font-style: bold;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #000000;

    }

    button{
        width:82vw;
        height:16vw;
        border: 1px solid #A328D6;
        background-color:#A328D6;
        border-radius: 5px;
        border-style: none;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
    }

  

`
const CadastroBody = styled(LoginBody)`
    margin: calc(60% - 120px) auto;
    height: 420px;
`
const CadastroForm = styled(LoginForm)`

    height: 320px;
`


const StyledLink = styled(Link)`

    text-decoration: none;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;

`


export { LoginBody, LoginForm, StyledLink, CadastroBody, CadastroForm } 