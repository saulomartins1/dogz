import React from 'react'
import Input from '../Form/Input'
import Button from '../Form/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import { PASSWORD_RESET } from '../../api'

function LoginPassReset() {

    const email = useForm()
    const { data, loading, error, request } = useFetch();


    async function handleSubmit(e) {
        e.preventDefault();
        if (email.validate()) {
            const { url, options } = PASSWORD_RESET({ login: email.value, url: 'http://localhost:5173/login/recuperar' })
        }

    }

    return (
        <section><h1 className='title'>Recuperar senha</h1>
            {data ? <h3>Se {`"${email.value}"`} for uma credencial válida você receberá as instruções para recuperar a senha!</h3> :
                <form onSubmit={handleSubmit} action="">
                    <Input label={"Email / Usuário"} type="text" name="email" {...email} />
                    {loading ? <Button disabled>Aguarde...</Button> : <Button>Enviar email</Button>}
                </form>
            }
            <Error error={error} />
        </section>
    )
}

export default LoginPassReset