import React, { useState, useEffect } from "react"
import { FilteringTable } from "../../../../components"
import { tableColumns } from "./columns"
import { useGetRestaurantsQuery } from "../../../../../store/api/apiSlice"
import { useSelector } from "react-redux"
import { BallTriangle } from "react-loader-spinner"

export const ViewRestaurants = () => {
    const { token } = useSelector((state) => state.auth)
    const [data, setData] = useState([])
    const { data: restaurants, isLoading, error, isSuccess } = useGetRestaurantsQuery({
        token
    })

    useEffect(() => {
        if (restaurants?.data?.length > 0) {
            let organisedData = restaurants?.data?.map((restaurant) => {
                return {
                    id: restaurant.id,
                    restaurant_name: restaurant.name,
                    restaurant_loc: restaurant.address.street_address,
                    manager: restaurant.manager_details.name,
                    phone: restaurant.manager_details.phone,
                    approved: restaurant.verified ? "Yes" : "No",
                    item: restaurant
                }
            })

            setData(organisedData)
        }
    }, [restaurants])

    return (
        <>
            {data.length > 0 ?
                <FilteringTable name={"Restaurants"} cols={tableColumns} data={data} link={"/restaurant"} />
                :
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Restaurants</h4>
                    </div>
                    <div className="card-body" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <BallTriangle
                            height={400}
                            width={100}
                            radius={5}
                            color="#fc8019"
                            ariaLabel="ball-triangle-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                </div>
            }
        </>
    )
}