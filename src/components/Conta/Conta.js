import { StyledLink, ContaBody, NavConta, HistoryConta, BottonConta, ButtonConta, SaldoConta, MovimentoConta, ContaTempo, ValorConta } from "./style";



function Conta() {


    return (

        <ContaBody>
            <NavConta><h2>Olá, Fulano</h2><ion-icon name="log-out-outline"></ion-icon></NavConta>
            <HistoryConta>

                <div>
                    {/* <h1>
                    <p>Não há registros de </p>
                    <p>entrada ou saída</p>
                </h1> */}
                    <MovimentoConta><ContaTempo>30/10</ContaTempo><p>Almoço mãe</p><ValorConta cor={"#03AC00"}>39,90</ValorConta></MovimentoConta>
                    <MovimentoConta><ContaTempo>30/10</ContaTempo><p>teste</p><ValorConta cor={"#03AC00"}>39,90</ValorConta></MovimentoConta>
                    <MovimentoConta><ContaTempo>30/10</ContaTempo><p>Almoço mãe</p><ValorConta cor={"#03AC00"}>39,90</ValorConta></MovimentoConta>
                </div>
                <div>
                    <SaldoConta cor={"#03AC00"}>
                        <h2>SALDO</h2>
                        <h3>2849,96</h3>
                    </SaldoConta>
                </div>

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