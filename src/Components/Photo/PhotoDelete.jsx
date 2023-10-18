import React from 'react'
import styles from './photoDelete.module.css'
import { PHOTO_DELETE } from '../../api'
import useFetch from '../../Hooks/useFetch';

function PhotoDelete({ id }) {

    const { loading, request } = useFetch();
    const TOKEN = localStorage.getItem("TOKEN");

    async function handleClick() {
        const confirm = window.confirm("Você deseja EXCLUIR permanentemente essa imagem?");
        if (confirm) {
            const { url, options } = PHOTO_DELETE(id, TOKEN)
            const { response } = await request(url, options);
            if (response.ok) window.location.reload();
            alert("Imagem deletada com sucesso!");
        } else null;


    }

    return (
        <>
            {loading ? <button className={styles.delete}>Deletando...</button> : <button onClick={handleClick} className={styles.delete}>Excluir</button>}

        </>
    )
}

export default PhotoDelete