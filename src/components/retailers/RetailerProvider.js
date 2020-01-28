import React, { useState, useEffect } from "react"
// import {withRouter} from "react-router-dom"

export const RetailerContext = React.createContext()

const RetailerProvider = (props) => {
    const [retailers, setRetailers] = useState([])

    const getRetailers = () => {
        return fetch("http://localhost:8088/retailers")
            .then(res => res.json())
            .then(setRetailers)
    }

    const addRetailers = retailer => {
        return fetch("http://localhost:8088/retailers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(retailer)
        })
            .then(getRetailers)
            // .then(props.history.push("/retailers"))
    }

    useEffect(() => {
        getRetailers()
    }, [])

    return (
        <RetailerContext.Provider value={{
            retailers, addRetailers
        }}>
            {props.children}
        </RetailerContext.Provider>
    )
}

export default RetailerProvider

// withRouter(RetailerProvider)