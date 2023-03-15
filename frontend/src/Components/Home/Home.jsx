import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';



function Home() {
    const navigate = useNavigate();

    function paginadowload() {
        navigate("/dowload");

    }

    function paginacadastro() {
        navigate("/cadastro");
    }
    return (

        <div class="div_alinhmento">

            <header >
                <h1 >Coleta Ai</h1>
            </header>
            <button onClick={paginadowload} class="button">Dowload</button>
            <button onClick={paginacadastro} class="button1">Cadastro</button>
            <div class="texto">
                <p>Coleta Ai é um sitema para ajudar na coleta tanto para empresas e coletedore quanto clientes</p>
            </div>

            <footer>
                <p>Copyright</p>
                <p>Coleta Ai interprise</p>
                <p>2022-2023</p>
            </footer>
        </div>
    );
}
export default Home;