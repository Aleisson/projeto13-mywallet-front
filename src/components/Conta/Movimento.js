import { MovimentoBody, NavConta, MovimentoForm } from './style'
import { useState } from "react";

function Movimento() {

    const [form, setForm] = useState({});


    function handleForm({ value, name }) {

        setForm({
            ...form,
            [name]: value,
        })
        console.log(form);
    }

    function sendMovimento(e){
        e.preventDefault();
    }


    return (
        <MovimentoBody>
            <NavConta>
                <h2>Nova entrada</h2>
            </NavConta>
            <MovimentoForm onSubmit={sendMovimento}>
                <input placeholder="Valor" name="valor" type="number" min="1" max="10000" step="any" onChange={(e) => handleForm({
                    name: e.target.name,
                    value: e.target.value,
                })} required></input>
                <input placeholder='Descrição'name="descricao" type="text" minLength="3" maxLength="20" onChange={(e) => handleForm({
                    name: e.target.name,
                    value: e.target.value,
                })} required></input>
                <button>Salvar entrada</button>
            </MovimentoForm>
        </MovimentoBody>
    )
}

export default Movimento;