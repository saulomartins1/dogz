import React from 'react'
import FeedPhotos from './FeedPhotos'
import FeedModal from './FeedModal'

function Feed() {

    const [modalPhoto, setModalPhoto] = React.useState(null);

    return (
        <div>
            {modalPhoto && <FeedModal setModalPhoto={setModalPhoto} photo={modalPhoto} />}
            <FeedPhotos setModalPhoto={setModalPhoto} />
        </div>
    )
}

export default Feed