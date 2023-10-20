import React from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import Image from '../Helper/Image';
import PhotoComments from './PhotoComments';
import styles from './PhotoContent.module.css'
import PhotoDelete from './PhotoDelete';

function PhotoContent({ data, single }) {

    const { photo, comments } = data;
    const user = React.useContext(UserContext);

    return (
        <div className={`${styles.photo} ${single ? styles.single : ''} `}>
            <div className={styles.img}>
                <Image alt={photo.alt} src={photo.src} />
            </div>
            <div className={styles.details}>
                <div>
                    <p className={styles.author}>
                        {user.data && user.data.username === photo.author ? <PhotoDelete id={photo.id} /> : <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>}
                        <span className={styles.views}>{photo.acessos}</span>
                    </p>
                    <h1 className={styles.title}>
                        <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                    </h1>
                    <ul className={styles.attributes}>
                        <li>{photo.peso} kg</li>
                        <li>{photo.idade >= 1 ? `${photo.idade} anos` : `${photo.idade} ano`}</li>
                    </ul>
                </div>
            </div>
            <PhotoComments id={photo.id} single={single} comments={comments} />

        </div>
    )
}

export default PhotoContent