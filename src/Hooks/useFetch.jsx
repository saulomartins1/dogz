import React from 'react'

function useFetch() {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(null);

    const request = React.useCallback(async (url, options) => {
        let response;
        let json;
        try {
            setError(null)
            setLoading(true)
            response = await fetch(url, options);
            json = await response.json();
            if (response.ok !== true) throw new Error("Error no response fetch");
        }
        catch (err) {
            json = null;
            setError(err.message)
        }
        finally {
            setData(json) //Caso houver erro, setData como "null" (json = null)
            setLoading(false)
            return { response, json }
        }

    }, [])
    return {
        data,
        error,
        loading,
        request
    }
}

export default useFetch