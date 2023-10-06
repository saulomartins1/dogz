import React from 'react'
import styles from './Input.module.css'

function Input({ name, label, type }) {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={name} className={styles.wrapper}>{label}</label>
            <input id={name} type={type} className={styles.input} />
            <p className={styles.error}>Houve um erro</p>
        </div>
    )
}

export default Input