import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import React from "react"

export default function NovaEntrada({ valor, setValor, descricao, setDescricao }){

    const navigate = useNavigate()

    function inserirNovaEntrada(event){
        event.preventDefault()

        const requisicao = axios.post("", {
            valor: valor,
            descricao: descricao
        })
        requisicao.then(() => navigate("/home"))
        requisicao.catch((err) => console.log(err))
    }

    return (
        <Container>
            <Tela>
                <Topo>
                    <p>Nova entrada</p>
                </Topo>

                <Formulario onSubmit={inserirNovaEntrada}>
                    <input 
                        placeholder="Valor"
                        type="number"
                        onChange={(e) => setValor(e.target.value)}
                        value={valor}
                        required
                    />
                    <input 
                        placeholder="Descrição"
                        type="text"
                        onChange={(e) => setDescricao(e.target.value)}
                        value={descricao}
                        required
                    />
                    <button type="submit"><p>Salvar entrada</p></button>
                </Formulario>
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
        font-family: "Raleway";
        font-weight: 700;
        font-size: 26px;
        color: #FFFFFF;
    }
    ion-icon {
        width: 40px;
        height: 40px;
        color: white;
    }
`

const Formulario = styled.form`
    width: 326px;
    margin-top: 40px;
    input {
        width: 360px;
        height: 58px;
        background-color: #FFFFFF;
        border-radius: 5px;
        border-style: none;
        margin-bottom: 13px;
        ::placeholder {
            font-family: 'Raleway';
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
            padding: 3%;
        }
    }
    button {
        width: 360px;
        height: 58px;
        background-color: #A328D6;
        border-radius: 5px;
        border-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
        }
    }
`
