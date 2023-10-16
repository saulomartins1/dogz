import React from 'react'
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import styles from './PhotoContent.module.css'

function PhotoContent({ data }) {

    const { photo, comments } = data;

    return (
        <div className={styles.photo}>
            <div className={styles.img}>
                <img src={photo.src} alt={photo.title} />
            </div>
            <div className={styles.details}>
                <div>
                    <p>
                        <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
                        <span className={styles.visualizacoes}>${photo.acessos}</span>
                    </p>
                    <h1 className={styles.title}>
                        <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                    </h1>
                    <ul className={styles.atributos}>
                        <li>{photo.peso} kg</li>
                        <li>{photo.idade >= 1 ? `${photo.idade} anos` : `${photo.idade} ano`}</li>
                    </ul>
                </div>
                <PhotoComments id={photo.id} comments={comments} />
            </div>

        </div>
    )
}

export default PhotoContent