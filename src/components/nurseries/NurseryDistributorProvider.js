import React, { useState, useEffect } from "react"
// import {withRouter} from "react-router-dom"

export const NurseryDistributorContext = React.createContext()

const NurseryDistributorProvider = (props) => {
    const [nurseryDistributors, setNurseryDistributors] = useState([])

    const getNurseryDistributors = () => {
        return fetch("http://localhost:8088/nurseryDistributors")
            .then(res => res.json())
            .then(setNurseryDistributors)
    }

    const addNurseryDistributors = nurseryDistributor => {
        return fetch("http://localhost:8088/nurseryDistributors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nurseryDistributor)
        })
            .then(getNurseryDistributors)
            // .then(props.history.push("/distributors"))
    }

    useEffect(() => {
        getNurseryDistributors()
    }, [])

    return (
        <NurseryDistributorContext.Provider value={{
            nurseryDistributors, addNurseryDistributors
        }}>
            {props.children}
        </NurseryDistributorContext.Provider>
    )
}

export default NurseryDistributorProvider

// withRouter(NurseryDistributorProvider)