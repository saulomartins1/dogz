import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { PHOTOS_GET } from '../../api';
import Loading from '../Helper/Loading';
import styles from './FeedPhotos.module.css'

function FeedPhotos({ user, page, setInfinite, setModalPhoto }) {
    const { data, error, loading, request } = useFetch();

    React.useEffect(() => {
        let total = 3;

        const fetchPhotos = async () => {
            const { url, options } = PHOTOS_GET({ page, total, user });
            const { response, json } = await request(url, options);

            if (response && response.ok && json.length < total) {
                return setInfinite(false)
            }
        }
        fetchPhotos();
    }, [request, user, page, setInfinite]);

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
