import React from 'react'
import FeedPhotos from './FeedPhotos'
import FeedModal from './FeedModal'

function Feed({ user }) {

    const [modalPhoto, setModalPhoto] = React.useState(null);
    const [pages, setPages] = React.useState([1]);
    const [infinite, setInfinite] = React.useState(true);



    React.useEffect(() => {
        let wait = false;

        function infiniteScroll() {
            const scroll = window.scrollY;
            const height = document.body.offsetHeight - window.innerHeight;
            if (infinite) {
                if (scroll > height * .75 && !wait) {

                    setPages((pagesAnterior) => [...pagesAnterior, pagesAnterior.length + 1]);
                    wait = true;

                    setTimeout(() => {
                        wait = false;
                    }, 500);
                }
            }
        }

        window.addEventListener("wheel", infiniteScroll);
        window.addEventListener("scroll", infiniteScroll);
        return () => {
            window.removeEventListener("wheel", infiniteScroll);
            window.removeEventListener("scroll", infiniteScroll);
        }
    }, [infinite])

    return (
        <div>
            {modalPhoto && <FeedModal setModalPhoto={setModalPhoto} photo={modalPhoto} />}

            {pages.map((page) => {
                return <FeedPhotos user={user} page={page} setInfinite={setInfinite} key={page} setModalPhoto={setModalPhoto} />
            })}
        </div>
    )
}

export default Feed