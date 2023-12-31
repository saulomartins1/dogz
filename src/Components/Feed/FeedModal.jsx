import React from 'react'
import styles from './FeedModal.module.css'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import { PHOTO_GET } from '../../api';
import PhotoContent from '../Photo/PhotoContent';

function FeedModal({ photo, setModalPhoto }) {
    const { data, error, loading, request } = useFetch();

    React.useEffect(() => {
        const { url, options } = PHOTO_GET(photo.id);
        request(url, options)
    }, [photo, request])

    function handleModalExit(e) {
        if (e.target === e.currentTarget) {
            setModalPhoto(null)
        }
    }

    return (
        <div onClick={handleModalExit} className={styles.modal}>
            <div className={styles.modalBox}>
                {error && <Error error={error} />}
                {loading && <Loading />}
                {data && <PhotoContent data={data} />}
            </div>
        </div>
    )
}

export default FeedModal