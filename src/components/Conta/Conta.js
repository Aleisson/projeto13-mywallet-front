import axios from "axios";
import { useState,useEffect } from "react";
import { StyledLink, ContaBody, NavConta, HistoryConta, BottonConta, ButtonConta, SaldoConta, MovimentoConta, ContaTempo, ValorConta } from "./style";



function Conta() {

    const [movimentos, setMovimentos] = [];


    useEffect(() => {

        // alert(urlMovies + `/${idMovie}/showtimes`)

        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idMovie}/showtimes`);

        promise.then(
            (res) => {
                // console.log(res.data);
                setHorarios(res.data);
            }
        );


    },[]);

    const promise = axios.get("http://localhost:5000/movimento", { headers: { "Authorization": `Bearer ad72a5df-4555-4159-83c9-befde8ff99b1`, "user": "caio beck" } })

    promise.then(res => setMovimentos(res.data));



    return (

        <ContaBody>
            <NavConta><h2>Olá, Fulano</h2><ion-icon name="log-out-outline"></ion-icon></NavConta>
            <HistoryConta>

                {movimentos ?<><div>
                    <MovimentoConta><ContaTempo>30/10</ContaTempo><p>Almoço mãe</p><ValorConta cor={"#03AC00"}>39,90</ValorConta></MovimentoConta>
                    <MovimentoConta><ContaTempo>30/10</ContaTempo><p>teste</p><ValorConta cor={"#03AC00"}>39,90</ValorConta></MovimentoConta>
                    <MovimentoConta><ContaTempo>30/10</ContaTempo><p>Almoço mãe</p><ValorConta cor={"#03AC00"}>39,90</ValorConta></MovimentoConta>
                </div>
                <div>
                    <SaldoConta cor={"#03AC00"}>
                        <h2>SALDO</h2>
                        <h3>2849,96</h3>
                    </SaldoConta>
                </div> </>: <h1>
                    <p>Não há registros de </p>
                    <p>entrada ou saída</p>
                </h1>}

            </HistoryConta>
            <BottonConta>
                <StyledLink to="/movimento">
                    <ButtonConta>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <h4><p>Nova</p><p>entrada</p></h4>
                    </ButtonConta>
                </StyledLink>
                <StyledLink to="/movimento">
                    <ButtonConta>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <h4><p>Nova</p><p>saída</p></h4>
                    </ButtonConta>
                </StyledLink>
            </BottonConta>
        </ContaBody>

    )
}

export default Conta;