import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET, USER_POST } from '../api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null)
    const navigate = useNavigate();


    //Função que está sendo passada no onSubmit do form em "LoginForm.jsx" após ter os types[type] validados
    //...faz fetch na API enviando o username e password (TOKEN_POST) para retornar um objeto no json com o TOKEN atual;
    async function userLogin(username, password) {
        const { url, options } = TOKEN_POST({ username, password })

        try {
            setError(null);
            setLoading(true);
            const response = await fetch(url, options);
            if (!response.ok) return setError("Não foi possível entrar, tente novamente!");
            const json = await response.json();
            //Se o fetch for bem-suceddo seta o valor que está na propriedade token: do objeto json no localStorage
            localStorage.setItem("TOKEN", json.token)
            //...e também puxa as informações do usuário com base no token passado;
            await getUser(json.token)
            navigate("/conta")
        } catch (err) {
            setLogin(false);
        } finally {
            setLoading(false)
        }
    }

    //Função responsável pela criação do usuário - adicionar informações na API;
    //No curso essa parte não existe, é usado custom hook "useFetch" p/ ter acesso aos estados data, loading, error no LoginCreate.jsx...
    //...por enquanto preferi deixar tudo aqui dentro desse Context, mesmo que seja repetitivo;
    async function userSignup(username, email, password) {
        const { url, options } = USER_POST({ username, email, password })

        try {
            setError(null);
            setLoading(true);
            const response = await fetch(url, options);
            if (!response.ok) return setError("Usuário ou email não disponível!");
            await userLogin(username, password)
        } catch (err) {
            console.log(err)
            setLogin(false);
        } finally {
            setLoading(false)
        }
    }


    //Função responsável por fazer fetch na API e retornar os dados com usuário com base no token passado.
    const getUser = React.useCallback(async function (token) {
        const { url, options } = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        //Setando todas as informações do usuário retornadas do fetch no state de "data"
        setData(json);
        setLogin(true)
    }, [])

    //Função para sair da conta, resets de informações e estados;
    const userLogout = React.useCallback(async function () {
        setData(null);
        setError(null);
        setLogin(false);
        setLoading(false);
        localStorage.removeItem("TOKEN");
        navigate("/login")
    }, [navigate])

    //Verifica se no localStorage se tem a key 'TOKEN' e se o 'value' é válido via fetch (TOKEN_VALIDATE_POST) na API;
    //...caso seja, inicia o processo de auto login na conta, alterando os states de acordo com o status de cada condição.
    React.useEffect(() => {
        async function autoLogin() {
            const token = localStorage.getItem("TOKEN")
            if (token) {
                try {
                    setError(null)
                    setLoading(true)
                    const { url, options } = TOKEN_VALIDATE_POST(token);
                    const response = await fetch(url, options);
                    if (!response.ok) return null;
                    //Tudo dando certo, chama o getUser com o token que já está armazenado;
                    await getUser(token)
                } catch (err) {
                    //Se der algum erro chama a função de logout que os resets necessários;
                    await userLogout();
                }
                finally {
                    setLoading(false)
                }
            } else {
                setLogin(false);
            }
        }
        autoLogin();

    }, [getUser, userLogout])


    return (
        //Acesso a função de logar e ao data com as infos do usuário caso fetch for true;
        //...em todos os components que o <UserStorage> engloba e que está usando o contexto: useContext(UserContext)
        <UserContext.Provider value={{ userLogin, userSignup, userLogout, data, login, error, loading }}>
            {children}
        </UserContext.Provider>
    )
}