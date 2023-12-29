import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav, Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useGetRestaurantMenuQuery } from '../../../../../store/api/apiSlice';
import ReactPaginate from 'react-paginate';

export const Menu = ({ restaurant }) => {

    const { token } = useSelector((state) => state.auth);
    const [page, setPage] = useState(1);

    const { data: menu } = useGetRestaurantMenuQuery({
        token,
        restaurant_id: restaurant,
        page
    });

    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <Tab.Container defaultActiveKey="Grid">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="input-group search-area2 style-1">
                                        <span className="input-group-text p-0">
                                            <Link to={"#"}>
                                                <svg className="me-1" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z" fill="#FC8019" />
                                                </svg>
                                            </Link>
                                        </span>
                                        <input type="text" className="form-control p-0" placeholder="Search menu item" />
                                    </div>
                                </div>
                                <Tab.Content>
                                    <Tab.Pane eventKey="Grid">
                                        <div className="row">
                                            {menu?.data?.items.map((item, ind) => (
                                                <div className="col-xl-3 col-xxl-4 col-sm-6" key={ind}>
                                                    <div className="card dishe-bx b-hover style-1">
                                                        <div className="card-body pb-0 pt-3">
                                                            <div className="text-center mb-2">
                                                                <img src={item?.image} alt="" />
                                                            </div>
                                                            <div className="border-bottom pb-3">

                                                            </div>
                                                        </div>
                                                        <div className="card-footer border-0 pt-2">
                                                            <div className="common d-flex align-items-center justify-content-between" >
                                                                <div>
                                                                    <Link to={"#"}><h4>{item?.name}</h4></Link>
                                                                    <h3 className=" mb-0 text-primary">RWF {parseInt(item?.cost).toLocaleString()}</h3>
                                                                    <span>Container: RWF {item?.container_charge || 0}</span>
                                                                </div>
                                                                <div className={`bg-orange rounded p-3 c-pointer`}>
                                                                    <i class="fa-solid fa-eye" style={{
                                                                        color: '#fff',
                                                                        fontSize: '18px'
                                                                    }}></i>
                                                                    <div className="sub-bx">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="d-flex align-items-center justify-content-xl-between justify-content-center flex-wrap pagination-bx">
                                                <div className="mb-sm-0 mb-3 pagination-title">
                                                    <p className="mb-0"><span>Showing page {menu?.data?.pagination?.currentPage}</span> out of <span>{menu?.data?.pagination?.totalPages}</span></p>
                                                </div>
                                                <ReactPaginate
                                                    breakLabel="..."
                                                    nextLabel="⟩"
                                                    onPageChange={(page) => {
                                                        setPage(page.selected + 1)
                                                    }}
                                                    containerClassName='pagination pagination-gutter'
                                                    pageRangeDisplayed={5}
                                                    pageClassName='page-item'
                                                    pageLinkClassName='page-link'
                                                    activeClassName='active'
                                                    previousClassName='page-item page-indicator'
                                                    nextClassName='page-item page-indicator'
                                                    previousLinkClassName='page-link'
                                                    nextLinkClassName='page-link'
                                                    previousLabel="⟨"
                                                    pageCount={menu?.data?.pagination?.totalPages}
                                                    renderOnZeroPageCount={null}
                                                />
                                                {/* <nav>
                                                    <ul className="pagination pagination-gutter">
                                                        <li className="page-item page-indicator">
                                                            <Link to={"#"} className="page-link" >
                                                                <i className="la la-angle-left"></i>
                                                            </Link>
                                                        </li>
                                                        <li className="page-item active"><Link to={"#"} className="page-link" >1</Link>
                                                        </li>
                                                        <li className="page-item"><Link to={"#"} className="page-link" >2</Link></li>

                                                        <li className="page-item"><Link to={"#"} className="page-link" >3</Link></li>
                                                        <li className="page-item page-indicator">
                                                            <Link to={"#"} className="page-link" >
                                                                <i className="la la-angle-right"></i>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </nav> */}
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </div >
            </div >
        </>
    )
}
