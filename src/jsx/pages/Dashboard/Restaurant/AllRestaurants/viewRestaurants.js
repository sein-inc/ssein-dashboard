import React from "react"
import { FilteringTable } from "../../../../components"
import { tableColumns } from "./columns"

const data = [
    {
        id: 1,
        restaurant_name: "Inka Steakhouse",
        restaurant_loc: "Kacyiru",
        manager: "Kagaba Junior",
        phone: "250783300000",
        approved: "Yes"

    },
    {
        id: 2,
        restaurant_name: "Iwacu 250",
        restaurant_loc: "Sonatube",
        manager: "Kagaba Senior",
        phone: "250783300000",
        approved: "Yes"

    },
    {
        id: 3,
        restaurant_name: "Alink Chinese",
        restaurant_loc: "Kacyiru",
        manager: "Kagaba Medium",
        phone: "250783300000",
        approved: "Yes"

    },
    {
        id: 4,
        restaurant_name: "Bourbon Coffee",
        restaurant_loc: "Kacyiru",
        manager: "Kagaba Moyenne",
        phone: "250783300000",
        approved: "No"
    },
    {
        id: 5,
        restaurant_name: "Rosty",
        restaurant_loc: "Kacyiru",
        manager: "Kagaba Big",
        phone: "250783300000",
        approved: "No"
    },
    {
        id: 6,
        restaurant_name: "Kigali Serena Hotel",
        restaurant_loc: "Kacyiru",
        manager: "Kagaba XL",
        phone: "250783300000",
        approved: "Yes"
    },
    {
        id: 7,
        restaurant_name: "Kigali Marriott Hotel",
        restaurant_loc: "Kacyiru",
        manager: "Kagaba Large",
        phone: "250783300000",
        approved: "Yes"
    },
    {
        id: 8,
        restaurant_name: "Kigali Radisson Blu Hotel",
        restaurant_loc: "Kacyiru",
        manager: "Kagaba Small",
        phone: "250783300000",
        approved: "Yes"
    },
    {
        id: 9,
        restaurant_name: "Riders Lounge",
        restaurant_loc: "Kacyiru Kigali Heights",
        manager: "Kagaba Minimum",
        phone: "250783300000",
        approved: "No"
    },
    {
        id: 10,
        restaurant_name: "Meze Fresh",
        restaurant_loc: "Kacyiru",
        manager: "Kagaba muto",
        phone: "250783300000",
        approved: "No"
    },
    {
        id: 11,
        restaurant_name: "Maison Noir",
        restaurant_loc: "Kicukiro",
        manager: "Kagaba munini",
        phone: "250783300000",
        approved: "Yes"
    },
    {
        id: 12,
        restaurant_name: "Pili Pili",
        restaurant_loc: "Kicukiro",
        manager: "Kagaba wigikara",
        phone: "250783300000",
        approved: "Yes"
    },
    {
        id: 13,
        restaurant_name: "Biggie'z",
        restaurant_loc: "Kicukiro",
        manager: "Kagaba winzobe",
        phone: "250783300000",
        approved: "Yes"
    },
]

export const ViewRestaurants = () => {
    return (
        <>
            <FilteringTable name={"Restaurants"} cols={tableColumns} data={data} link={"/restaurant"} />
        </>
    )
}