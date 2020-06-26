import React, { useState } from "react";
import { FiLogIn } from 'react-icons/fi';
import './styles.css';

import api from "../../services/api";

import logoImg from '../../assets/logo.png';
import heroesImg from '../../assets/heroes.png';
import { Link, useHistory } from "react-router-dom";

export default function Login() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(event) {
        event.preventDefault();

        try {
            const response = await api.post('sessions', { id })

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (err) {
            alert('Falha no Login, tente novamente!')
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>

                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={event => setId(event.target.value)}
                    />
                    <button type="submit" className={"button"}>Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16}  color="#161618"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="heroes"/>
        </div>
    );
}
