import React from 'react'
import Image from '../Helper/Image'
import styles from './FeedPhotosItem.module.css'

function FeedPhotosItem({ photo, setModalPhoto }) {

    function showModal() {
        setModalPhoto(photo)
    }

    return (
        <li onClick={showModal} className={styles.photo}>
            <Image alt={photo.alt} src={photo.src} />
            <span>{photo.acessos}</span>
        </li>
    )
}

export default FeedPhotosItem