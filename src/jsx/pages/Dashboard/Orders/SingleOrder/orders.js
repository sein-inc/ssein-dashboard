import React from 'react';
import { Link } from "react-router-dom";
import { Tab, Nav } from 'react-bootstrap';
import { useGetDeliveriesQuery } from '../../../../../store/api/apiSlice';
import { useSelector } from "react-redux";
import moment from 'moment';

export const Orders = ({ restaurant }) => {

    const { token } = useSelector((state) => state.auth)

    const { data: deliveries, isLoading, error, isSuccess } = useGetDeliveriesQuery({
        token,
        restaurant_id: restaurant
    })

    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <Tab.Container defaultActiveKey="Paid">
                            <div className="card-body">
                                <nav className="order-tab">
                                    <Nav className="nav-tabs" >
                                        <Nav.Link eventKey="Paid" id="nav-order-tab">New Orders</Nav.Link>
                                        <Nav.Link eventKey="Preparing" id="nav-prepared-tab">Preparing</Nav.Link>
                                        <Nav.Link eventKey="Ready" id="nav-delivered-tab">Ready</Nav.Link>
                                        <Nav.Link eventKey="Dispatched" id="nav-delivered-tab">Dispatched</Nav.Link>
                                        <Nav.Link eventKey="Delivered" id="nav-delivered-tab">Delivered</Nav.Link>
                                    </Nav>
                                </nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="Paid">
                                        {
                                            deliveries?.data?.filter((item) => item.status == "paid")?.length > 0 ? deliveries?.data?.filter((item) => item.status == "paid").map((delivery, index) => (
                                                <div className="orderin-bx d-flex align-items-center justify-content-between" key={index}>
                                                    <div>
                                                        <h4>Order #{delivery?.order?.id}</h4>
                                                        <span>{moment(delivery?.order?.createdAt).format("MMMM Do YYYY, h:mm a")}</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <h4 className="text-primary mb-0">RWF {(delivery?.order?.sub_total + delivery?.order?.delivery_fee + delivery?.order?.container_charge).toLocaleString()}</h4>
                                                        <Link to={"#"} className="icon-bx"><i className="fa-solid fa-angle-right"></i></Link>
                                                    </div>
                                                </div>
                                            )) : <span>There are no new orders from this restaurant</span>
                                        }
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Preparing">
                                        {
                                            deliveries?.data?.filter((item) => item.status == "preparing")?.length > 0 ? deliveries?.data?.filter((item) => item.status == "preparing").map((delivery, index) => (
                                                <div className="orderin-bx d-flex align-items-center justify-content-between" key={index}>
                                                    <div>
                                                        <h4>Order #{delivery?.order?.id}</h4>
                                                        <span>{moment(delivery?.order?.createdAt).format("MMMM Do YYYY, h:mm a")}</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <h4 className="text-primary mb-0">RWF {(delivery?.order?.sub_total + delivery?.order?.delivery_fee + delivery?.order?.container_charge).toLocaleString()}</h4>
                                                        <Link to={"#"} className="icon-bx"><i className="fa-solid fa-angle-right"></i></Link>
                                                    </div>
                                                </div>
                                            )) : <span>There are no orders being prepared from this restaurant</span>
                                        }
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Ready">
                                        {
                                            deliveries?.data?.filter((item) => item.status == "ready")?.length > 0 ? deliveries?.data?.filter((item) => item.status == "ready").map((delivery, index) => (
                                                <div className="orderin-bx d-flex align-items-center justify-content-between" key={index}>
                                                    <div>
                                                        <h4>Order #{delivery?.order?.id}</h4>
                                                        <span>{moment(delivery?.order?.createdAt).format("MMMM Do YYYY, h:mm a")}</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <h4 className="text-primary mb-0">RWF {(delivery?.order?.sub_total + delivery?.order?.delivery_fee + delivery?.order?.container_charge).toLocaleString()}</h4>
                                                        <Link to={"#"} className="icon-bx"><i className="fa-solid fa-angle-right"></i></Link>
                                                    </div>
                                                </div>
                                            )) : <span>There are no ready orders from this restaurant</span>
                                        }
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Dispatched">
                                        {
                                            deliveries?.data?.filter((item) => item.status == "dispatched")?.length > 0 ? deliveries?.data?.filter((item) => item.status == "dispatched").map((delivery, index) => (
                                                <div className="orderin-bx d-flex align-items-center justify-content-between" key={index}>
                                                    <div>
                                                        <h4>Order #{delivery?.order?.id}</h4>
                                                        <span>{moment(delivery?.order?.createdAt).format("MMMM Do YYYY, h:mm a")}</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <h4 className="text-primary mb-0">RWF {(delivery?.order?.sub_total + delivery?.order?.delivery_fee + delivery?.order?.container_charge).toLocaleString()}</h4>
                                                        <Link to={"#"} className="icon-bx"><i className="fa-solid fa-angle-right"></i></Link>
                                                    </div>
                                                </div>
                                            )) : <span>There are no dispatched orders from this restaurant</span>
                                        }
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Delivered">
                                        {
                                            deliveries?.data?.filter((item) => item.status == "derivered")?.length > 0 ? deliveries?.data?.filter((item) => item.status == "derivered").map((delivery, index) => (
                                                <div className="orderin-bx d-flex align-items-center justify-content-between" key={index}>
                                                    <div>
                                                        <h4>Order #{delivery?.order?.id}</h4>
                                                        <span>{moment(delivery?.order?.createdAt).format("MMMM Do YYYY, h:mm a")}</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <h4 className="text-primary mb-0">RWF {(delivery?.order?.sub_total + delivery?.order?.delivery_fee + delivery?.order?.container_charge).toLocaleString()}</h4>
                                                        <Link to={"#"} className="icon-bx"><i className="fa-solid fa-angle-right"></i></Link>
                                                    </div>
                                                </div>
                                            )) : <span>There are no delivered orders from this restaurant</span>
                                        }
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </>
    )
}