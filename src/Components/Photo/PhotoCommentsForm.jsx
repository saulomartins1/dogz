import React from 'react'
import { COMMENT_POST } from '../../api';
import SVG_Enviar from '../../Assets/enviar.svg?react'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import styles from './PhotoCommentsForm.module.css'

function PhotoCommentsForm({ id, setComments }) {
    const { request, error } = useFetch();
    const [comment, setComment] = React.useState('');


    async function handleSubmit(e) {
        e.preventDefault()
        const TOKEN = localStorage.getItem("TOKEN");

        const { url, options } = COMMENT_POST(id, { comment }, TOKEN)
        const { response, json } = await request(url, options);
        if (response.ok) {
            setComment("")
            setComments((prevComments) => [...prevComments, json])
        }
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <textarea className={styles.textarea} id="comment" name='comment' placeholder='Digite um comentário'
                    value={comment}
                    onChange={({ target }) => setComment(target.value)} />
            </div>
            <button className={styles.button}><SVG_Enviar /></button>
            <Error error={error} />
        </form >
    )
}

export default PhotoCommentsForm