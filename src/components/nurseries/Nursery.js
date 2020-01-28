// Each nursery should display the following information.

// Business name
// An unordered list of all flowers that the nursery grows. Show color, species, and the price set by the nursery for that flowe`r.
// An unordered list of distributor business names that purchases flowers from the nursery.

import React from "react"
import "./Nursery.css"

export default ({ nursery, flowers, distributors }) => (
    <section className="nursery">
        <h3 className="nursery__name">{nursery.name}</h3>
        <div>Available Flowers:</div>
        <ul className="nursery__flowers">{flowers.map(flowerObj => {
        return <li key={flowerObj.id} className="eachFlower">{flowerObj.color} {flowerObj.species}, {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(flowerObj.price)}</li>
        })}</ul>
        <div>Distributors:</div>
        <ul className="nursery__distributors">{distributors.map(distObj => {
            return <li key={distObj.id} className="eachDist">{distObj.name}</li>
        })}</ul>
    </section>
)