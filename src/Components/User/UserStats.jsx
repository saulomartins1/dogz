import React from 'react'
import { GET_STATS } from '../../api';
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error';
import Head from '../Helper/Head'
import Loading from '../Helper/Loading';
import UserStatsGraphs from './UserStatsGraphs';

function UserStats() {
    const { data, loading, error, request } = useFetch();

    React.useEffect(() => {
        async function getData() {
            const { url, options } = GET_STATS();
            await request(url, options)
        }
        getData();
    }, [request])

    if (error) { <Error error={error} /> }
    if (loading) { <Loading /> }
    if (data) {
        return (
            <>
                <Head title="Estatísticas" description="Descrição" />
                <UserStatsGraphs data={data} />
            </>
        )
    } else null;
}

export default UserStats