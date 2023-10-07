import React from 'react'
import { TOKEN_POST, USER_GET } from '../api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    async function getUser(token) {
        const { url, options } = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
    }

    async function userLogin(username, password) {
        const { url, options } = TOKEN_POST({ username, password })

        const response = await fetch(url, options);
        const json = await response.json();
        localStorage.setItem("TOKEN", json.token)
        getUser(json.token)

    }

    return (
        //Acesso a função de logar e ao data com as infos do usuário caso fetch for true;
        //...em todos os components que o <UserStorage> engloba e que está usando o contexto: useContext(UserContext)
        <UserContext.Provider value={{ userLogin, data }}>
            {children}
        </UserContext.Provider>
    )
}