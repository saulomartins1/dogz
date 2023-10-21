import React from 'react'
import Input from '../Form/Input'
import Button from '../Form/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import { PASSWORD_LOST } from '../../api'
import Head from '../Helper/Head'


function LoginPassReset() {

    const email = useForm()
    const { data, loading, error, request } = useFetch();


    async function handleSubmit(e) {
        e.preventDefault();
        if (email.validate()) {
            const { url, options } = PASSWORD_LOST({ login: email.value, url: window.location.href.replace("recuperar", "resetar") })
            await request(url, options);
        }
    }

    return (
        <>
            <Head title="Perdeu senha" description="Descrição" />

            <section><h1 className='title'>Recuperar senha</h1>
                {data ? <h3>Se {`"${email.value}"`} for uma credencial válida você receberá as instruções para recuperar a senha!</h3> :
                    <form onSubmit={handleSubmit}>
                        <Input label={"Email / Usuário"} type="text" name="email" {...email} />
                        {loading ? <Button disabled>Aguarde...</Button> : <Button>Enviar email</Button>}
                    </form>
                }
                <Error error={error} />
            </section>
        </>
    )
}

export default LoginPassReset