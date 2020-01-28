import React, { useContext } from "react"
import { NurseryContext } from "./NurseryProvider"
import { FlowerContext } from "../flowers/FlowerProvider"
import { DistributorContext } from "../distributors/DistributorProvider"
import { NurseryFlowerContext } from "./NurseryFlowerProvider"
import { NurseryDistributorContext } from "./NurseryDistributorProvider"
import Nursery from "./Nursery"

export default () => {
    const { nurseries } = useContext(NurseryContext)
    const { flowers } = useContext(FlowerContext)
    const { distributors } = useContext(DistributorContext)
    const { nurseryFlowers } = useContext(NurseryFlowerContext)
    const { nurseryDistributors } = useContext(NurseryDistributorContext)

    return (
        <div className="nurseries">
        {
            nurseries.map(nurs => {
                const foundNurseriesF = nurseryFlowers.filter(NF => NF.nurseryId === nurs.id)
                const foundFlowers = foundNurseriesF.map(foundNF => {
                    const foundFlower = flowers.find(flower => flower.id === foundNF.flowerId) 
                    foundFlower.price = foundNF.price
                    return foundFlower
                })
                console.log(foundFlowers)

                const foundNurseriesD = nurseryDistributors.filter(ND => ND.nurseryId === nurs.id)
                const foundDistributors = foundNurseriesD.map(foundND => {
                    return distributors.find(distrib => distrib.id === foundND.distributorId)
                })

            return <Nursery key={nurs.id} 
                    nursery={nurs}
                    flowers={foundFlowers}
                    distributors={foundDistributors}
                    // price={foundNurseriesF}
                     />
            })
        }
        </div>
    )
}