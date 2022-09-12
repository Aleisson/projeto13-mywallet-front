import styled from "styled-components";
import { Link } from "react-router-dom";
import { LoginForm } from "../LoginPage/style"


const StyledLink = styled(Link)`

    text-decoration: none;
   
`

const ContaBody = styled.div`

    /* background-color: crimson; */
    height: 182vw;
    width:100%;
    margin: 10px auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    padding:4vw;

`
const NavConta = styled.div`

        /* background-color:greenyellow; */
        display:flex;
        width: 100%;
        height: 16vw;
        padding:2px;
        justify-content: space-between;
        align-items:center;
        

        h2{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 31px;
            color:#ffffff;
        }

        ion-icon{
            font-size: 24px;
            color:#ffffff
        }

`

const HistoryConta = styled.div`

    background: #FFFFFF;
    border-radius: 5px;
    width:100%;
    height:  118vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;

    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
        position:relative;
        top:50%;
        
    }

   div{
    width:100%;
   }

`
const MovimentoConta = styled.h2`

    
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    height: 10vw;
    width:100%;    
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:8px;

`
const ContaTempo = styled.p`

    color: #C6C6C6;
    margin-right: 8px;
    

`
const ValorConta = styled.p`

    color:${props => props.cor};
    

`


const SaldoConta = styled.div`

    height: 12vw;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position: relative;
    top: 0;
    padding:2vw;

    h2{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }

    h3{

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        text-align: right;
        color: ${props => props.cor};


    }

`


const BottonConta = styled.div`


/* background-color:#ffffff; */
    width:100%;
    height:24vw;
    display:Flex;
    justify-content:space-between;


`

const ButtonConta = styled.div`

    background-color: #A328D6;
    border-radius: 3.5px;
    width: 42vw;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-between;
    padding:6px;

    h4{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
    }

    ion-icon{
        color:#ffffff;
    }

`

const MovimentoBody = styled(ContaBody)`

    height: 80vw;

`

const MovimentoForm = styled(LoginForm)`
    
 
    width: 100%;

    input{
        width: 100%;
    }

    button{
        width: 100%;
    }

`




export { StyledLink, ContaBody, NavConta, HistoryConta, BottonConta, ButtonConta, MovimentoBody, MovimentoForm, SaldoConta, MovimentoConta, ContaTempo, ValorConta };