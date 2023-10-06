import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import DogzLogo from '../Assets/dogz.svg?react'

function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <Link to='/' aria-label='Dogz - Home'>
                    <DogzLogo />
                </Link>
                <Link to='/login'>Entrar / Cadastrar</Link>
            </nav>
        </header>
    )
}

export default Header