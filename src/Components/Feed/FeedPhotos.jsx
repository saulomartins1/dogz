import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { PHOTOS_GET } from '../../api';
import Loading from '../Helper/Loading';
import styles from './FeedPhotos.module.css'

function FeedPhotos({ user, setModalPhoto }) {
    const { data, error, loading, request } = useFetch();

    React.useEffect(() => {
        const fetchPhotos = async () => {
            const { url, options } = PHOTOS_GET({ page: 1, total: 3, user });

            const { response, json } = await request(url, options);
        }
        fetchPhotos();
    }, [request, user]);

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    if (data)
        return (
            <ul className={styles.feed}>
                {data.map((photo) => {
                    return <FeedPhotosItem setModalPhoto={setModalPhoto} key={photo.id} id={photo.id} photo={photo} />
                })}

            </ul>
        );

}

export default FeedPhotos;
