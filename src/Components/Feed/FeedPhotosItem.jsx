import React from 'react'
import styles from './FeedPhotosItem.module.css'

function FeedPhotosItem({ photo, setModalPhoto }) {

    function showModal() {
        setModalPhoto(photo)
    }

    return (
        <li onClick={showModal} className={styles.photo}>
            <img src={photo.src} alt={photo.title} />
            <span>{photo.acessos}</span>
        </li>
    )
}

export default FeedPhotosItem