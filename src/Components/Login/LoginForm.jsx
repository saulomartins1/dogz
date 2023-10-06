import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';

function LoginForm() {

    const username = useForm();
    const password = useForm();

    function handleLogin(e) {
        e.preventDefault();

        if (username.validate() && password.validate()) {
            //Fetch na API
            fetch(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(),

            }).then((response) => {
                console.log(response)
                return response.json();
            }).then((json) => console.log(json))
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