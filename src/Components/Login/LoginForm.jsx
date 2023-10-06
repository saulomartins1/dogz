import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Form/Input';
import Button from '../Form/Button';

function LoginForm() {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleLogin(e) {
        e.preventDefault();

        //Fetch na API
        fetch(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                username,
                password,
            })
        }).then((response) => {
            console.log(response)
            return response.json();
        }).then((json) => console.log(json))

    }

    return (
        <form onSubmit={handleLogin}>
            <h1>Entrar</h1>

            <Input label="Usuário" type="text" name="username" />
            <Input label="Senha" type="password" name="password" />

            <Button>Entrar</Button>

            <Link to="criar">Criar conta</Link>
            <Link to="recuperar">Esqueceu a senha?</Link>
        </form >
    )
}

export default LoginForm