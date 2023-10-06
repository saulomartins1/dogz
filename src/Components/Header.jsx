import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>Entrar / Cadastrar</Link>
            </nav>
        </header>
    )
}

export default Header