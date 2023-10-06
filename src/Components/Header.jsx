import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import DogzLogo from '../Assets/dogz.svg?react'

function Header() {
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to='/' aria-label='Dogz - Home'>
                    <DogzLogo />
                </Link>
                <Link className={styles.login} to='/login'>Entrar / Cadastrar</Link>
            </nav>
        </header>
    )
}

export default Header