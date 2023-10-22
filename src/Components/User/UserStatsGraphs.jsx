import React from 'react'
import styles from './UserStatsGraphs.module.css'

function UserStatsGraphs({ data }) {
    const [graph, setGraph] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        const totalAcessos = data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
        setTotal(totalAcessos)
    }, [data])

    return (
        <section className={styles.graph}>
            <div><p className={styles.total}>Acessos: {total}</p></div>
        </section>

    )
}

export default UserStatsGraphs