import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CadastroDeUsuario() {
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [endereco, setEndereco] = useState();


    const cadastrarUsuario = (e) => {
        e.preventDefault();

        const body = { nome, cpf, email, senha, endereco };

        fetch("https://localhost:44340/api/usuario", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((response) => { alert("Usuário cadastrado com sucesso"); })
            .catch((error) => {
                console.log(error);
                alert("Erro ao buscar resultado");
            });
    }
}
function Cadastro() {
    const navigate = useNavigate();
    
    function paginahome(){
        navigate("/");
    
    }
    
    function paginadowload(){  
        navigate("/dowload");
    }
    return (
        <div>
                <header>
                <h1>Coleta Ai</h1>
                </header>
                <button onClick={paginahome}>Sobre nós</button>
                <button onClick={paginadowload}>Dowload</button>            
            <p>Nome</p>
            <input/>

            <p>CPF</p>
            <input/>

            <p>Email</p>
            <input/>

            <p>Senha</p>
            <input/>

            <p>Endereço</p>
            <input/>
            <footer>
                <p>Copyright</p>
                <p>Coleta Ai interprise</p>
                <p>2022-2023</p>
                 </footer>
        </div>
    );
}
export default Cadastro