import React from 'react'
import styles from './Footer.module.css'
import SVG_DogsFooter from '../Assets/dogz-footer.svg?react'

function Footer() {
    return (
        <footer className={styles.footer}>
            <SVG_DogsFooter />
            Dogz. Alguns direitos reservados.
        </footer>
    )
}

export default Footer