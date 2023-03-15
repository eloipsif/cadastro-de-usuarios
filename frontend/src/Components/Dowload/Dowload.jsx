import React from "react";
import { useNavigate } from "react-router-dom"

function Dowload() {
    const navigate = useNavigate();
    
    function paginahome(){
        navigate("/");
    
    }
    
    function paginacadastro(){  
        navigate("/cadastro");
    }
    return (
        <div>
                <header>
                <h1>Coleta Ai</h1>
                </header>
                <button onClick={paginahome}>Sobre nós</button>
                <button onClick={paginacadastro}>Casdatro</button>            
                <button>Faça o Dowload</button>
            <footer>
                <p>Copyright</p>
                <p>Coleta Ai interprise</p>
                <p>2022-2023</p>
                 </footer>
        </div>
    );
}
export default Dowload;