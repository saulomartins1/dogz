import React from 'react'
import Input from '../Form/Input'
import Button from '../Form/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import { PASSWORD_RESET } from '../../api'
import { useNavigate } from 'react-router-dom'

function LoginPasswordReset() {

    const [login, setLogin] = React.useState('');
    const [key, setKey] = React.useState('');
    const { error, loading, request } = useFetch();
    const password = useForm();
    const navigate = useNavigate();

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get('key');
        const login = params.get('login');
        if (key) setKey(key);
        if (login) setLogin(login);
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();
        if (password.validate()) {
            const { url, options } = PASSWORD_RESET({ login, key, password: password.value })
            const { response } = await request(url, options)
            if (response.ok) navigate('/login')
        }

    }


    return (
        <div>
            <h1 className='title'>Redefinir senha</h1>
            <form onSubmit={handleSubmit}>
                <Input label={"Nova senha"} type={"password"} name={"password"} {...password} />
                {loading ? <Button disabled>Redefinindo...</Button> : <Button>Redefinir</Button>}
            </form>
            <Error error={error} />
        </div>
    )
}

export default LoginPasswordReset