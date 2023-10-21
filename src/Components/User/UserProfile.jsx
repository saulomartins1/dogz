import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../Feed/Feed'
import Head from '../Helper/Head';

function UserProfile() {
    const { user } = useParams();
    return (
        <>
            <Head title={user} description="Descrição" />
            <section>
                <h1 className='title' style={{ margin: '1.9rem 0' }}>{user}</h1>
                <Feed user={user} />
            </section>
        </>
    )
}

export default UserProfile