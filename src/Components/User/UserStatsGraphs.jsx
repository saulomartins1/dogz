import React from 'react'
import styles from './UserStatsGraphs.module.css'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'

function UserStatsGraphs({ data }) {
    const [graph, setGraph] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        const graphData = data.map((item) => {
            return { x: item.title, y: Number(item.acessos) }
        })
        setGraph(graphData);


        const totalAcessos = data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
        setTotal(totalAcessos)
    }, [data])

    return (
        <section className={styles.graph}>
            <div className={`${styles.total} ${styles.graphItem}`}>
                <p>Acessos: {total}</p>
            </div>
            <div className={styles.graphItem}>
                <VictoryPie data={graph}
                    innerRadius={50}
                    padding={{ top: 20, bottom: 20, left: 90, right: 90 }}
                    style={{
                        data: {
                            fillOpacity: .9,
                            stroke: "#FFF",
                            strokeWidth: 3,
                        },
                        labels: {
                            fontSize: 14,
                            fill: "#3339",
                        }

                    }}
                />
            </div>
            <div className={`${styles.graphItem}`}>
                <VictoryChart>
                    <VictoryBar alignment='start' data={graph}>

                    </VictoryBar>
                </VictoryChart>
            </div>
        </section>

    )
}

export default UserStatsGraphs