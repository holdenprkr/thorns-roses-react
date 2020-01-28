import React, { useState, useEffect } from "react"
// import {withRouter} from "react-router-dom"

export const DistributorContext = React.createContext()

const DistributorProvider = (props) => {
    const [distributors, setDistributors] = useState([])

    const getDistributors = () => {
        return fetch("http://localhost:8088/distributors")
            .then(res => res.json())
            .then(setDistributors)
    }

    const addDistributors = distributor => {
        return fetch("http://localhost:8088/distributors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(distributor)
        })
            .then(getDistributors)
            // .then(props.history.push("/distributors"))
    }

    useEffect(() => {
        getDistributors()
    }, [])

    return (
        <DistributorContext.Provider value={{
            distributors, addDistributors
        }}>
            {props.children}
        </DistributorContext.Provider>
    )
}

export default DistributorProvider

// withRouter(DistributorProvider)