import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHeader from './UserHeader'
import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import { UserContext } from '../../Contexts/UserContext'
import Head from '../Helper/Head'

function User() {

    const { data } = React.useContext(UserContext);
    console.log(data.id)
    return (
        <>
            <Head title="Minha conta" description="Descrição" />
            <section className='container'>
                <UserHeader />
                <Routes>
                    <Route path='/' element={<Feed user={data.id} />}></Route>
                    <Route path='postar' element={<UserPhotoPost />}></Route>
                    <Route path='stats' element={<UserStats />}></Route>
                </Routes>
            </section >
        </>
    )
}

export default User