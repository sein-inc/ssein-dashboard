/// Menu
import React, { Component, useContext, useEffect, useReducer, useState } from "react";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

/// Link
import { Link, NavLink } from "react-router-dom";

import { MenuList } from './Menu';
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";


const reducer = (previousState, updatedState) => ({
  ...previousState,
  ...updatedState,
});

const initialState = {
  active: "",
  activeSubmenu: "",
}

const SideBar = () => {
  const {
    sidebarposition,
    headerposition,
    sidebarLayout,
  } = useContext(ThemeContext);

  const d = new Date();
  const [state, setState] = useReducer(reducer, initialState);

  let handleheartBlast = document.querySelector('.heart');

  function heartBlast() {
    return handleheartBlast.classList.toggle("heart-blast");
  }

  //For scroll
  const [hideOnScroll, setHideOnScroll] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll]
  )

  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];



  return (
    <div
      className={`dlabnav  border-right  ${sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
        ? hideOnScroll > 120
          ? "fixed"
          : ""
        : ""
        }`}
    >
      <PerfectScrollbar className="dlabnav-scroll">
        <ul className="metismenu" id="menu">
          <li className="menu-title"> Main Menu</li>
          {MenuList.map((data, index) => {
            return (
              <li className={` ${state.active === data.title ? 'mm-active' : ''}`}
                key={index}
              >
                <NavLink to={data.to} >
                  <i className={data.iconStyle}></i>
                  <span className="nav-text">{data.title}</span>
                </NavLink>
              </li>
            )
          }
          )}

        </ul>
        <div className="copyright mt-10">
          <p><strong>Ssein Food Delivery</strong> © {d.getFullYear()} All Rights Reserved</p>
          <p className="fs-12">Made with
            <span className="heart" onClick={() => heartBlast()}></span> by Code titans
          </p>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
