import React from 'react'
import FeedPhotos from './FeedPhotos'
import FeedModal from './FeedModal'

function Feed({ user }) {

    const [modalPhoto, setModalPhoto] = React.useState(null);

    return (
        <div>
            {modalPhoto && <FeedModal setModalPhoto={setModalPhoto} photo={modalPhoto} />}
            <FeedPhotos user={user} setModalPhoto={setModalPhoto} />
        </div>
    )
}

export default Feed