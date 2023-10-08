import React from 'react'
import styles from './Input.module.css'

function Input({ name, label, type, value, onChange, onBlur, error }) {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={name} className={styles.wrapper}>{label}</label>
            <input id={name} type={type} className={styles.input} value={value} onChange={onChange} onBlur={onBlur} />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}

export default Input