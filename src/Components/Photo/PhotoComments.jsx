import React from 'react'
import { UserContext } from '../../Contexts/UserContext'
import PhotoCommentsForm from './PhotoCommentsForm'
import styles from './PhotoComments.module.css'

const PhotoComments = (props) => {
    const [comments, setComments] = React.useState(() => props.comments)
    const { login } = React.useContext(UserContext)

    return (
        <>
            <ul className={styles.comment}>
                {comments.map((c) =>
                    <li key={c.comment_ID}>{c.comment_author}: <span>{c.comment_content}</span></li>
                )}
            </ul>
            {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
        </>
    )
}

export default PhotoComments