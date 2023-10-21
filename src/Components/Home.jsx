import React from 'react'
import Feed from './Feed/Feed'
import Head from './Helper/Head'

function Home() {
    return (
        <>
            <Head title="Home" description="Página inicial" />
            <section className='container mainContainer'>
                <Feed />
            </section>
        </>

    )
}

export default Home