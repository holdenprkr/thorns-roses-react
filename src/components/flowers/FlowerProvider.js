import React, { useState, useEffect } from "react"
// import {withRouter} from "react-router-dom"

export const FlowerContext = React.createContext()

const FlowerProvider = (props) => {
    const [flowers, setFlowers] = useState([])

    const getFlowers = () => {
        return fetch("http://localhost:8088/flowers")
            .then(res => res.json())
            .then(setFlowers)
    }

    const addFlowers = flower => {
        return fetch("http://localhost:8088/flowers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(flower)
        })
            .then(getFlowers)
            // .then(props.history.push("/flowers"))
    }

    useEffect(() => {
        getFlowers()
    }, [])

    return (
        <FlowerContext.Provider value={{
            flowers, addFlowers
        }}>
            {props.children}
        </FlowerContext.Provider>
    )
}

export default FlowerProvider

// withRouter(FlowerProvider)