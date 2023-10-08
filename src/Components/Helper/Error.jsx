import React from 'react'

function Error({ error }) {
    if (!error) return null;
    return <p style={{ color: "#f00", margin: ".9rem 0" }}>{error}</p>

}

export default Error