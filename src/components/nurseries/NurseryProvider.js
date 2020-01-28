import React, { useState, useEffect } from "react"
// import {withRouter} from "react-router-dom"

export const NurseryContext = React.createContext()

const NurseryProvider = (props) => {
    const [nurseries, setNurseries] = useState([])

    const getNurseries = () => {
        return fetch("http://localhost:8088/nurseries")
            .then(res => res.json())
            .then(setNurseries)
    }

    const addNurseries = nursery => {
        return fetch("http://localhost:8088/nurseries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nursery)
        })
            .then(getNurseries)
            // .then(props.history.push("/nurseries"))
    }

    useEffect(() => {
        getNurseries()
    }, [])

    return (
        <NurseryContext.Provider value={{
            nurseries, addNurseries
        }}>
            {props.children}
        </NurseryContext.Provider>
    )
}

export default NurseryProvider

// withRouter(NurseryProvider)