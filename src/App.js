import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Home from "./components/Home";
import NovaEntrada from "./components/NovaEntrada";
import NovaSaida from "./components/NovaSaida";

export default function App() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
	const [senha, setSenha] = useState("")
  const [confirmaSenha, setConfirmaSenha] = useState("")
  const [valor, setValor] = useState("")
  const [descricao, setDescricao] = useState("")

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <Login 
          email={email} 
          setEmail={setEmail} 
          senha={senha} 
          setSenha={setSenha}
      />}/>
      <Route path="/cadastro" element={
        <Cadastro 
          email={email} 
          setEmail={setEmail} 
          senha={senha} 
          setSenha={setSenha}
          nome={nome}
          setNome={setNome}
          confirmaSenha={confirmaSenha}
          setConfirmaSenha={setConfirmaSenha}
        />
      }/>
      <Route path="/home" element={
        <Home 
          nome={nome}
        />
      }/>
      <Route path="/nova-entrada" element={
        <NovaEntrada 
          valor={valor}
          setValor={setValor}
          descricao={descricao}
          setDescricao={setDescricao}
        />
      }/>
      <Route path="/nova-saida" element={
        <NovaSaida />
      }/>
    </Routes>
   </BrowserRouter>
  );
}

