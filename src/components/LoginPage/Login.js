import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { LoginBody, LoginForm, StyledLink } from "./style";



function Login() {

    const [form, setForm] = useState({});
    const navigate = useNavigate();


    function handleForm({value, name}){

        setForm({
            ...form,
            [name]: value,
        })
        //console.log(form);
    }


    async function loginWallet(event){
        event.preventDefault();

        const {email, password} = form;
        // console.log({email, password});

        const promise = axios.post('http://localhost:5000/sign-in',{email,password});

        promise.then( (res) =>{
            console.log(res.data);
            navigate("/conta");
        })

        promise.catch((res) =>{
            alert("Usuário ou Senha inválida");
        })


    }


    return (
        <LoginBody>
            <h1>MyWallet</h1>
            <LoginForm onSubmit={loginWallet}>
                <input type="email" placeholder="E-mail" name="email" onChange={(e) => handleForm({
                    name: e.target.name,
                    value: e.target.value,
                })} required></input>
                <input type="password" placeholder="Senha" name="password" onChange={(e) => handleForm({
                    name: e.target.name,
                    value: e.target.value,
                })} required></input>
                <button type="submit">Entrar</button>
            </LoginForm>
            <StyledLink to="/cadastro">
                Primeira vez? Cadastre-se!
            </StyledLink>
        </LoginBody>
    )


}

export default Login;