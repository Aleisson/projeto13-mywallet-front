import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { CadastroBody, CadastroForm, StyledLink } from "./style"


function Cadastro() {

    const [form, setForm] = useState({});
    const navigate = useNavigate();


    function handleForm({ value, name }) {

        setForm({
            ...form,
            [name]: value,
        })
        console.log(form)
    }

    async function cadastroWallet(event) {

        event.preventDefault();

        const { name, email, password, confirmpass } = form;

        if (password !== confirmpass) {
            alert("Senhas diferentes");
            return;
        }

        // console.log({name, email, password});
        const promise = axios.post('http://localhost:5000/sign-up',{name, email,password});

        promise.then( () =>{
            alert("Usuário Cadastrado");
            navigate("/");
        })

        promise.catch(() =>{
            alert("Usuário Inválido");
        })

        

    }



    return (
        <CadastroBody>
            <h1>MyWallet</h1>
            <CadastroForm onSubmit={cadastroWallet}>
                <input type="text" placeholder="Nome" name="name" onChange={(e) => handleForm({
                    name: e.target.name,
                    value: e.target.value,
                })} required></input>
                <input type="email" placeholder="E-mail" name="email" onChange={(e) => handleForm({
                    name: e.target.name,
                    value: e.target.value,
                })} required></input>
                <input type="password" placeholder="Senha" name="password" onChange={(e) => handleForm({
                    name: e.target.name,
                    value: e.target.value,
                })} required></input>
                <input type="password" placeholder="Confirma a senha" name="confirmpass" onChange={(e) => handleForm({
                    name: e.target.name,
                    value: e.target.value,
                })} required></input>
                <button type="submit">Cadastrar</button>
            </CadastroForm>
            <StyledLink to="/">
                Já tem uma conta? Entre agora!
            </StyledLink>
        </CadastroBody>
    )

}

export default Cadastro;