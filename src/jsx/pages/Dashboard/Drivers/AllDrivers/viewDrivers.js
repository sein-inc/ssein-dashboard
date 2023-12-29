import React, { useEffect, useState } from "react"
import { FilteringTable } from "../../../../components"
import { tableColumns } from "./columns"
import { useGetDriversQuery } from "../../../../../store/api/apiSlice"
import { useSelector } from "react-redux"
import { BallTriangle } from "react-loader-spinner"
import moment from "moment"

export const ViewDrivers = () => {
    const { token } = useSelector((state) => state.auth)
    const [data, setData] = useState([])
    const { data: drivers, isLoading, error, isSuccess } = useGetDriversQuery({
        token
    })

    console.log(drivers)

    useEffect(() => {
        if (drivers?.data?.length > 0) {
            let organisedData = drivers?.data?.map((driver) => {
                return {
                    id: driver?.id,
                    name: driver?.name,
                    phone: driver?.phone,
                    birth_date: driver?.birth_date,
                    joined: moment(driver?.created_at).format("DD/MM/YYYY"),
                    approved: driver.verified ? "Yes" : "No",
                    item: driver
                }
            })

            setData(organisedData)
        }
    }, [drivers])

    return (
        <>
            {data.length > 0 ?
                <FilteringTable name={"Drivers"} cols={tableColumns} data={data} link={"/driver"} />
                :
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Drivers</h4>
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