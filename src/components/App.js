import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from './LoginPage/Cadastro';
import Login from './LoginPage/Login';
import Conta from './Conta/Conta';
import Movimento from './Conta/Movimento'


function App() {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path='/cadastro' element={<Cadastro />}></Route>
                    <Route path='/conta' element={<Conta />}></Route>
                    <Route path='/movimento' element={<Movimento/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;