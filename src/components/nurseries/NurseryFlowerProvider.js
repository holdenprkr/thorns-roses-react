import React, { useState, useEffect } from "react"
// import {withRouter} from "react-router-dom"

export const NurseryFlowerContext = React.createContext()

const NurseryFlowerProvider = (props) => {
    const [nurseryFlowers, setNurseryFlowers] = useState([])

    const getNurseryFlowers = () => {
        return fetch("http://localhost:8088/nurseryFlowers")
            .then(res => res.json())
            .then(setNurseryFlowers)
    }

    const addNurseryFlowers = nurseryFlower => {
        return fetch("http://localhost:8088/nurseryFlowers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nurseryFlower)
        })
            .then(getNurseryFlowers)
            // .then(props.history.push("/nurseries"))
    }

    useEffect(() => {
        getNurseryFlowers()
    }, [])

    return (
        <NurseryFlowerContext.Provider value={{
            nurseryFlowers, addNurseryFlowers
        }}>
            {props.children}
        </NurseryFlowerContext.Provider>
    )
}

export default NurseryFlowerProvider

// withRouter(NurseryFlowerProvider)