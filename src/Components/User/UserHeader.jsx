import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom';

function UserHeader() {
    const [title, setTitle] = React.useState('');
    const { pathname } = useLocation();

    React.useEffect(() => {
        switch (pathname) {
            case '/conta':
                setTitle('Minhas Fotos');
                break;
            case '/conta/stats':
                setTitle('Estatísticas');
                break;
            case '/conta/postar':
                setTitle('Nova Foto');
                break;
            default:
                setTitle("Minha Conta")
                break;
        }

    }, [pathname])

    return (
        <header className={styles.header}>
            <h1 className='title'>{title}</h1>
            <UserHeaderNav />
        </header>
    )
}

export default UserHeader