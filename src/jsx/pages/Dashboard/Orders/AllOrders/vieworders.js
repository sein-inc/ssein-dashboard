import React, { useState, useEffect } from "react"
import { FilteringTable } from "../../../../components"
import { tableColumns } from "./columns"
import { useGetOrdersQuery } from "../../../../../store/api/apiSlice"
import { useSelector } from "react-redux"
import { BallTriangle } from "react-loader-spinner"
import moment from "moment"

export const ViewOrders = () => {
    const { token } = useSelector((state) => state.auth)
    const [data, setData] = useState([])
    const { data: orders, isLoading, error, isSuccess } = useGetOrdersQuery({
        token
    })

    useEffect(() => {
        if (orders?.data?.length > 0) {
            let organisedData = orders?.data?.map((order) => {
                return {
                    id: order.id,
                    type: order?.order_type,
                    user_name: order?.user?.name,
                    user_phone: order?.user?.phone,
                    time: moment(order?.createdAt).format("DD/MM/YYYY HH:mm"),
                    amount: `RWF ${(order?.sub_total + order?.delivery_fee + order?.container_charge).toLocaleString()}`,
                    item: order
                }
            })
            setData(organisedData)
        }
    }, [orders])

    return (
        <>
            {data.length > 0 ?
                <FilteringTable name={"Orders"} cols={tableColumns} data={data} link={"/orders"} />
                :
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Orders</h4>
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