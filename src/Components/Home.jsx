import React from 'react'
import Feed from './Feed/Feed'
import Loading from './Helper/Loading'

function Home() {
    return (
        <section className='container mainContainer'>
            <Feed />
            {/* <Loading /> */}
        </section>
    )
}

export default Home