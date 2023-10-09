import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Contexts/UserContext'
import Icon_MyPhotos from '../../Assets/feed.svg?react'
import Icon_Stats from '../../Assets/estatisticas.svg?react'
import Icon_AddPost from '../../Assets/adicionar.svg?react'
import Icon_Logout from '../../Assets/sair.svg?react'
import styles from './userHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'

function UserHeaderNav() {
    const { userLogout } = React.useContext(UserContext)
    const navigate = useNavigate();

    //Mobile menu and responsive parts
    const mobile = useMedia("(max-width: 40rem)") //Custom hook que retorna true ou false em relação ao max-width atual de window
    const [menuMobile, setMenuMobile] = React.useState(false)
    const { pathname } = useLocation();

    React.useEffect(() => {
        setMenuMobile(false)
    }, [pathname])
    //===============================

    const handleLogout = () => {
        userLogout();
        navigate('/login')
    }

    return (
        <>
            {mobile &&
                <button className={`${styles.mobileBtn} ${menuMobile && styles.mobileBtnActive}`}

                    aria-label="menuBtn" onClick={() => setMenuMobile(!menuMobile)}>
                </button>}
            <nav className={`${!mobile ? styles.nav : styles.navMobile} ${menuMobile && styles.navMobileActive}`}>
                <NavLink to='' end><Icon_MyPhotos />{mobile && 'Minhas fotos'}</NavLink>
                <NavLink to='stats'><Icon_Stats />{mobile && 'Estatísticas'}</NavLink>
                <NavLink to='postar'><Icon_AddPost />{mobile && 'Adicionar foto'}</NavLink>
                <button onClick={handleLogout}><Icon_Logout />{mobile && 'Sair'}</button>
            </nav>
        </>
    )
}

export default UserHeaderNav