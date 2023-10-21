import React from 'react'
import useForm from '../../Hooks/useForm';
import Input from '../Form/Input'
import Error from '../Helper/Error'
import { UserContext } from '../../Contexts/UserContext'
import styles from './LoginForm.module.css'
import Button from '../Form/Button';
import Head from '../Helper/Head';

function LoginCreate() {
    const username = useForm();
    const email = useForm();
    const password = useForm();
    const { userSignup, error, loading } = React.useContext(UserContext);

    function handleSignup(e) {
        e.preventDefault()
        if (username.validate() && email.validate() && password.validate()) {
            userSignup(username.value, email.value, password.value)
        }
    }

    return (
        <>
            <Head title="Crie sua conta" description="Descrição" />

            <section className='animeLeft'>
                <h1 className='title'>Cadastre-se</h1>
                <form className={styles.form} onSubmit={handleSignup}>
                    <Input label="Usuário" type="text" name="username" {...username} />
                    <Input label="Email" type="email" name="email" {...email} />
                    <Input label="Senha" type="password" name="password" {...password} />

                    {loading ? <Button disabled>Cadastrando...</Button> : <Button>Entrar</Button>}
                    <Error error={error} />
                </form>
            </section>
        </>
    )
}

export default LoginCreate