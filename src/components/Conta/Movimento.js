import { MovimentoBody, NavConta, MovimentoForm } from './style'
import { useNavigate } from "react-router-dom";

function Movimento() {

    const [form, setForm] = useState({});


    function handleForm({value, name}){

        setForm({
            ...form,
            [name]: value,
        })
        //console.log(form);
    }

    return (
        <MovimentoBody>
            <NavConta>
                <h2>Nova entrada</h2>
            </NavConta>
            <MovimentoForm>
                <input placeholder="Valor" name="valor" type="number" min="1" max="10000" step="any" required></input>
                <input placeholder='Descrição' type="text" minLength="3" maxLength="20" required></input>
                <button>Salvar entrada</button>
            </MovimentoForm>
        </MovimentoBody>
    )
}

export default Movimento;