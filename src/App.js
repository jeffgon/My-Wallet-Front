import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Home from "./components/Home";
import NovaEntrada from "./components/NovaEntrada";
import NovaSaida from "./components/NovaSaida";
import { useState } from "react";


export default function App() {
  const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("")
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

