import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { PHOTOS_GET } from '../../api';
import Loading from '../Helper/Loading';

function FeedPhotos() {
    const { data, error, loading, request } = useFetch();

    React.useEffect(() => {
        const fetchPhotos = async () => {
            const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });

            const { response, json } = await request(url, options);
            console.log(json)
        }
        fetchPhotos();
    }, [request]);

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    if (data)
        return (
            <ul>
                {data.map((photo) => <FeedPhotosItem id={photo.id} photo={photo} />)}

            </ul>
        );

}

export default FeedPhotos;
