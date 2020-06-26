import React from "react";
import './style.css';
import logoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#161618"/>
                        Voltar para Home
                    </Link>
                </section>
                <form action="">
                    <input placeholder="Título do caso"/>
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais - R$"/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
