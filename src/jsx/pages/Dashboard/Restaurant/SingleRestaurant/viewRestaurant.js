import React, { useState, useEffect } from "react"
import { Orders } from "./orders"
import { Menu } from "./menu"
import { Reviews } from "./reviews"
import { Link } from "react-router-dom"
import PageTitle from "../../../../layouts/PageTitle"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { useApproveRestaurantMutation } from "../../../../../store/api/apiSlice"
import { toast } from "react-toastify";

export const ViewSingleRestaurant = () => {
    const location = useLocation()
    const [restaurant, setRestaurant] = useState({})
    const { token } = useSelector((state) => state.auth)

    useEffect(() => {
        if (location.state) {
            setRestaurant(location.state.item)
        }
    }, [location])

    const [approveRestaurant,
        {
            isLoading: isApprovalLoading,
            isError: isApprovalError,
            isSuccess: isApprovalSuccess
        }
    ] = useApproveRestaurantMutation()

    const approve = () => {
        approveRestaurant({ phone: restaurant?.manager_details?.phone, token })
    }

    useEffect(() => {
        if (isApprovalSuccess) {
            setRestaurant({ ...restaurant, verified: true })
            toast.success("Restaurant approved successfully", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }, [isApprovalSuccess])

    useEffect(() => {
        if (isApprovalError) {
            toast.error("Error approving restaurant, try again.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }, [isApprovalError])

    return (
        <>
            <PageTitle activeMenu={restaurant?.name} motherMenu={"Restaurants"} />
            <div className="mb-3">
                {
                    restaurant?.verified ?
                        <p className="font-w500 text-primary fs-15 mb-2">Approved</p>
                        :
                        <p className="font-w500 text-danger fs-15 mb-2">Not Approved</p>
                }
                <div className="d-flex  align-items-center justify-content-between mb-2">
                    <h4 className="mb-0">
                        <svg className="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.46 9.63C20.3196 8.16892 19.8032 6.76909 18.9612 5.56682C18.1191 4.36456 16.9801 3.40083 15.655 2.7695C14.3299 2.13816 12.8639 1.86072 11.3997 1.96421C9.93555 2.06769 8.52314 2.54856 7.3 3.36C6.2492 4.06265 5.36706 4.9893 4.71695 6.07339C4.06684 7.15749 3.6649 8.37211 3.54 9.63C3.41749 10.8797 3.57468 12.1409 4.00017 13.3223C4.42567 14.5036 5.1088 15.5755 6 16.46L11.3 21.77C11.393 21.8637 11.5036 21.9381 11.6254 21.9889C11.7473 22.0397 11.878 22.0658 12.01 22.0658C12.142 22.0658 12.2727 22.0397 12.3946 21.9889C12.5164 21.9381 12.627 21.8637 12.72 21.77L18 16.46C18.8912 15.5755 19.5743 14.5036 19.9998 13.3223C20.4253 12.1409 20.5825 10.8797 20.46 9.63ZM16.6 15.05L12 19.65L7.4 15.05C6.72209 14.3721 6.20281 13.5523 5.87947 12.6498C5.55614 11.7472 5.43679 10.7842 5.53 9.83C5.62382 8.86111 5.93177 7.92516 6.43157 7.08985C6.93138 6.25453 7.61056 5.54071 8.42 5C9.48095 4.29524 10.7263 3.9193 12 3.9193C13.2737 3.9193 14.5191 4.29524 15.58 5C16.387 5.53862 17.0647 6.24928 17.5644 7.08094C18.064 7.9126 18.3733 8.84461 18.47 9.81C18.5663 10.7674 18.4484 11.7343 18.125 12.6406C17.8016 13.5468 17.2807 14.3698 16.6 15.05ZM12 6C11.11 6 10.24 6.26392 9.49994 6.75839C8.75992 7.25286 8.18314 7.95566 7.84255 8.77793C7.50195 9.6002 7.41284 10.505 7.58647 11.3779C7.7601 12.2508 8.18869 13.0526 8.81802 13.682C9.44736 14.3113 10.2492 14.7399 11.1221 14.9135C11.995 15.0872 12.8998 14.9981 13.7221 14.6575C14.5443 14.3169 15.2471 13.7401 15.7416 13.0001C16.2361 12.26 16.5 11.39 16.5 10.5C16.4974 9.30734 16.0224 8.16428 15.1791 7.32094C14.3357 6.4776 13.1927 6.00265 12 6ZM12 13C11.5055 13 11.0222 12.8534 10.6111 12.5787C10.2 12.304 9.87952 11.9135 9.6903 11.4567C9.50109 10.9999 9.45158 10.4972 9.54804 10.0123C9.6445 9.52733 9.88261 9.08187 10.2322 8.73224C10.5819 8.38261 11.0273 8.1445 11.5123 8.04804C11.9972 7.95158 12.4999 8.00109 12.9567 8.1903C13.4135 8.37952 13.804 8.69996 14.0787 9.11108C14.3534 9.5222 14.5 10.0056 14.5 10.5C14.5 11.163 14.2366 11.7989 13.7678 12.2678C13.2989 12.7366 12.663 13 12 13Z" fill="var(--primary)" />
                        </svg>
                        {restaurant?.address?.region}, {restaurant?.address?.city}, {restaurant?.address?.street_address} {restaurant?.address?.organisation}
                    </h4>
                    <Link to={"#"} className="btn btn-outline-primary btn-sm change">Edit</Link>
                </div>
                <p>Current Availability: {restaurant?.available ? "Available" : "Not available"} </p>
                <p>Manager: {restaurant?.manager_details?.name} {restaurant?.manager_details?.phone} </p>
                {
                    !restaurant?.verified ?
                        <div className="d-flex">
                            <button type="button" className="btn btn-primary" onClick={approve}>
                                {
                                    isApprovalLoading ?
                                        <i class="fa-solid fa-spinner fa-spin-pulse fa-2xs" style={{
                                            color: "white"
                                        }}></i>
                                        :
                                        "Approve restaurant"
                                }
                            </button>
                        </div> : null
                }
            </div>
            <h4 className="cate-title mb-sm-3 mb-2 mt-xl-0 mt-3">Orders</h4>
            <Orders restaurant={restaurant.id} />
            <h4 className="cate-title mb-sm-3 mb-2 mt-xl-0 mt-3">Menu</h4>
            <Menu restaurant={restaurant.id} />
            <h4 className="cate-title mb-sm-3 mb-2 mt-xl-0 mt-3">Reviews</h4>
            <Reviews restaurant={restaurant.id} />
        </>
    )
}