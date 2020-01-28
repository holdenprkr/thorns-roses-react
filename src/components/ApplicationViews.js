import React from "react"
import { Route } from "react-router-dom"
import NurseryProvider from "./nurseries/NurseryProvider"
import NurseryList from "./nurseries/NurseryList"
import FlowerProvider from "./flowers/FlowerProvider"
import DistributorProvider from "./distributors/DistributorProvider"
import NurseryFlowerProvider from "./nurseries/NurseryFlowerProvider"
import NurseryDistributorProvider from "./nurseries/NurseryDistributorProvider"

export default (props) => {
    return (
        <>
            <NurseryProvider>
                <FlowerProvider>
                    <DistributorProvider>
                        <NurseryFlowerProvider>
                            <NurseryDistributorProvider>
                                <Route exact path="/nurseries">
                                    <NurseryList />
                                </Route>
                            </NurseryDistributorProvider>
                        </NurseryFlowerProvider>
                    </DistributorProvider>
                </FlowerProvider>
            </NurseryProvider>
            
            {/* <Route exact path="/distributors">
                <></>
            </Route>
            <Route exact path="/retailers">
                <></>
            </Route> */}
        </>
    )
}