import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Contexts/UserContext'
import Icon_MyPhotos from '../../Assets/feed.svg?react'
import Icon_Stats from '../../Assets/estatisticas.svg?react'
import Icon_AddPost from '../../Assets/adicionar.svg?react'
import Icon_Logout from '../../Assets/sair.svg?react'
import styles from './userHeaderNav.module.css'

function UserHeaderNav() {
    const { userLogout } = React.useContext(UserContext)
    const [mobile, setMobile] = React.useState(null)
    const navigate = useNavigate();

    const handleLogout = () => {
        userLogout();
        navigate('/login')
    }


    return (
        <nav className={styles.nav}>
            <NavLink to='' end><Icon_MyPhotos />{mobile && 'Minhas fotos'}</NavLink>
            <NavLink to='stats'><Icon_Stats />{mobile && 'Estatísticas'}</NavLink>
            <NavLink to='postar'><Icon_AddPost />{mobile && 'Adicionar foto'}</NavLink>
            <button onClick={handleLogout}><Icon_Logout />{mobile && 'Sair'}</button>
        </nav>
    )
}

export default UserHeaderNav