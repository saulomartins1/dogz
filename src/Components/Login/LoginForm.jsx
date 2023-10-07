import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Contexts/UserContext'

function LoginForm() {
    const username = useForm();
    const password = useForm();
    const { userLogin, error, loading } = React.useContext(UserContext);

    async function handleLogin(e) {
        e.preventDefault();

        if (username.validate() && password.validate()) {
            //Fetch na API (via função do contexto UserContext.jsx )
            userLogin(username.value, password.value)
        }

    }

    return (
        <form onSubmit={handleLogin}>
            <h1>Entrar</h1>

            <Input label="Usuário" type="text" name="username" {...username} />
            <Input label="Senha" type="password" name="password" {...password} />

            {loading ? <Button disabled>Aguarde...</Button> : <Button>Entrar</Button>}
            {error && <p>Houve um erro, tente novamente...</p>}

            <Link to="criar">Criar conta</Link>
            <Link to="recuperar">Esqueceu a senha?</Link>
        </form>
    )
}

export default LoginForm