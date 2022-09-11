import { StyledLink, ContaBody, NavConta, HistoryConta, BottonConta, ButtonConta } from "./style";



function Conta() {


    return (

        <ContaBody>
            <NavConta><h2>Olá, Fulano</h2><ion-icon name="log-out-outline"></ion-icon></NavConta>
            <HistoryConta>
                {/* <h1>
                    <p>Não há registros de </p>
                    <p>entrada ou saída</p>
                </h1> */}

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