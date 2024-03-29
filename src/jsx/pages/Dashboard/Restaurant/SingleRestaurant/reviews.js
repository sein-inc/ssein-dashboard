import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useGetRestaurantReviewsQuery } from "../../../../../store/api/apiSlice";
import moment from "moment";

export const Reviews = ({ restaurant }) => {
  const { token } = useSelector((state) => state.auth);

  const { data: reviews } = useGetRestaurantReviewsQuery({
    token,
    reviewee_type: "restaurant",
    reviewee_id: restaurant,
  });

  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card">
          <Tab.Container defaultActiveKey="Grid">
            <div className="card-body">
              <div>
                <div className="d-flex align-items-center justifiy-content-between mb-4">
                  <div className="input-group search-area2 style-1 w-50">
                    <span className="input-group-text p-0">
                      <Link to={"#"}>
                        <svg
                          className="me-1"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z"
                            fill="#FC8019"
                          />
                        </svg>
                      </Link>
                    </span>
                    <input
                      type="text"
                      className="form-control p-0"
                      placeholder="What do you want eat today..."
                    />
                  </div>
                </div>
              </div>
              <Tab.Content>
                <Tab.Pane eventKey="Grid">
                  <div className="row">
                    {reviews?.data?.map((item, ind) => (
                      <div className="col-xl-3 col-xxl-4 col-sm-6" key={ind}>
                        <div className="card">
                          <div className="card-body">
                            <div className="recent-review d-flex align-items-center">
                              <div>
                                <ul className="d-flex mb-2">
                                  {[...Array(item?.rating)].map(() => {
                                    return (
                                      <li>
                                        <svg
                                          width="16"
                                          height="15"
                                          viewBox="0 0 16 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M8 0.500031L9.79611 6.02789H15.6085L10.9062 9.4443L12.7023 14.9722L8 11.5558L3.29772 14.9722L5.09383 9.4443L0.391548 6.02789H6.20389L8 0.500031Z"
                                            fill="#FC8019"
                                          ></path>
                                        </svg>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            </div>
                            <p>{item?.description}</p>
                            <div>
                              <h6 className="font-w400">
                                {moment(item?.createdAt).format(
                                  "MMMM Do YYYY, h:mm a"
                                )}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};
