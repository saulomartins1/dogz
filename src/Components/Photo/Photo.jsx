import React from 'react'
import { useParams } from 'react-router-dom'
import { PHOTO_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Head from '../Helper/Head';
import Loading from '../Helper/Loading';
import PhotoContent from './PhotoContent';

function Photo() {
    const { id } = useParams();
    const { data, loading, error, request } = useFetch();
    React.useEffect(() => {
        const { url, options } = PHOTO_GET(id);
        request(url, options)
    }, [id, request])

    if (error) return <Error error={error} />
    if (error) return <Loading />
    if (data) return (
        <>
            <Head title={data.photo.title} description="Descrição" />
            <section className="container mainContainer"> <PhotoContent single={true} data={data} /> </section>
        </>
    )
    else return null
}

export default Photo