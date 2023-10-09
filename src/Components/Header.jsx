import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import DogzLogo from '../Assets/dogz.svg?react'
import { UserContext } from '../Contexts/UserContext'

function Header() {

    //Testando
    //Puxa e retorna o username no console; Se conseguir logar (pois data deve ter algum valor)
    const { data } = React.useContext(UserContext);


    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to='/' aria-label='Dogz - Home'>
                    <DogzLogo />
                </Link>
                {data ?
                    <Link className={styles.login} to='/conta'>{data.username}</Link>
                    :
                    <Link className={styles.login} to='/login'>Entrar / Cadastrar</Link>
                }

            </nav>
        </header>
    )
}

export default Header