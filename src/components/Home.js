import styled from "styled-components"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Home({ nome }){
    const navigate = useNavigate()

    function voltarParaLogin(){
        navigate("/")
    }

    return (
        <Container>
            <Tela>
                <Topo>
                    <p>Olá, {nome}</p>
                    <ion-icon onClick={voltarParaLogin} name="exit-outline"></ion-icon>
                </Topo>

                <ContainerSemInformacoes>
                    <p>Não há registros de entrada ou saída</p>
                </ContainerSemInformacoes>

                <ContainerInformacoes>
                    <section>
                        <div>
                            <p>30/11</p>
                            <h1>Entrada</h1>
                            <h2>Valor</h2>
                        </div>
                    </section>

                    <Valor>
                        
                    </Valor>
                </ContainerInformacoes>

                <Botoes>
                    <Link to={"/nova-entrada"}>
                        <button>
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <p>Nova entrada</p>
                        </button>
                    </Link>
                    
                    <Link to={"/nova-saida"}>
                        <button>
                            <ion-icon name="remove-circle-outline"></ion-icon>
                            <p>Nova saída</p>
                        </button>
                    </Link>
                    
                </Botoes>
            </Tela>
        </Container>
    )
}

const Container = styled.div`
width: 100vw;
height: 100vh;
background: #8C2EBE;
display: flex;
flex-direction: row;
justify-content: center;
`

const Tela = styled.div`  
    width: 85%;
`

const Topo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
    p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 31px;
        color: #FFFFFF;
    }
    ion-icon {
        width: 40px;
        height: 40px;
        color: white;
    }
`

const ContainerSemInformacoes = styled.div`
    width: 100%;
    height: 450px;
    background-color: white;
    margin-top: 18px;
    border-radius: 5px;
    position: relative;
    p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #868686;
        position: absolute;
        top: 200px;
        left: 25px;
    }
`

const ContainerInformacoes = styled.div`
    display: none;
    width: 100%;
    height: 450px;
    background-color: white;
    margin-top: 18px;
    border-radius: 5px;
    position: relative;
    section {
        position: absolute;
        width: 90%;
        height: 85%;
        margin-left: 15px;
        margin-top: 15px;
        overflow-y: scroll;
        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 7px;
            p {
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 19px;
                color: #C6C6C6;
            }
            h1 {
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 19px;
                color: #000000;
            }
            h2 {
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 19px;
                text-align: right;
                color: #C70000;

            }
        }
    }
`

const Valor = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #E5E5E5;
`

const Botoes = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 13px;
    button {
        width: 155px;
        height: 100px;
        background-color: #A328D6;
        border-radius: 5px;
        border-style: none;
        position: relative;
        ion-icon {
            width: 25px;
            height: 25px;
            position: absolute;
            left: 4px;
            top: 2px;
            color: white;
        }
        p {
            width: 20px;
            position: absolute;
            bottom: 9px;
            left: 10px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
            color: #FFFFFF;
        }
    }
    
`