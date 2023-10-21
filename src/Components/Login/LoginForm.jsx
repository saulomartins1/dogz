import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Contexts/UserContext'
import Error from '../Helper/Error'
import styles from './LoginForm.module.css'
import stylesBtnModule from '../Form/Button.module.css'
import Head from '../Helper/Head';

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
        <>
            <Head title="Login" description="Descrição" />

            <section className='animeLeft'>
                <h1 className='title'>Entrar</h1>
                <form className={styles.form} onSubmit={handleLogin}>
                    <Input label="Usuário" type="text" name="username" {...username} />
                    <Input label="Senha" type="password" name="password" {...password} />

                    {loading ? <Button disabled>Aguarde...</Button> : <Button>Entrar</Button>}
                    <Error error={error} />
                </form>
                <Link className={styles.recuperar} to="recuperar">Esqueceu a senha?</Link>

                <div className={styles.cadastro}>
                    <h2 className={styles.subtitle}>Criar conta</h2>
                    <p>Não possue conta? Cadastre-se agora!</p>
                    <Link className={stylesBtnModule.button} to="criar">Criar conta</Link>
                </div>
            </section>
        </>
    )
}

export default LoginForm