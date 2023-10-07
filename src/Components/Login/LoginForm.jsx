import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api';

function LoginForm() {
    const username = useForm();
    const password = useForm();

    async function getUser(token) {
        const { url, options } = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json)
    }

    async function handleLogin(e) {
        e.preventDefault();

        if (username.validate() && password.validate()) {
            //Fetch na API
            const { url, options } = TOKEN_POST({ username: username.value, password: password.value })

            const response = await fetch(url, options);
            const json = await response.json();
            localStorage.setItem("TOKEN", json.token)
            getUser(json.token)

            console.log(response, json)
        }

    }

    return (
        <form onSubmit={handleLogin}>
            <h1>Entrar</h1>

            <Input label="Usuário" type="text" name="username" {...username} />
            <Input label="Senha" type="password" name="password" {...password} />

            <Button>Entrar</Button>

            <Link to="criar">Criar conta</Link>
            <Link to="recuperar">Esqueceu a senha?</Link>
        </form >
    )
}

export default LoginForm