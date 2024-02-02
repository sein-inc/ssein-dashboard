import React, { useContext } from "react";

/// React router dom
import { Routes, Route, Outlet } from "react-router-dom";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";

// Dashboard Pages
import { ViewRestaurants, ViewSingleRestaurant } from "./pages/Dashboard/Restaurant";
import { ViewDrivers, ViewSingleDriver } from "./pages/Dashboard/Drivers";
import { ViewOrders, ViewSingleOrder } from "./pages/Dashboard/Orders";
import { Statistics } from "./pages/Dashboard/Stats";

import ScrollToTop from "./layouts/ScrollToTop";
/// Dashboard
import Message from "./components/Dashboard/Message";
import Notification from "./components/Dashboard/Notification";

import { ThemeContext } from "../context/ThemeContext";

const DashboardRoutes = () => {
  const allroutes = [
    /// Dashboard
    { url: "/", component: <Statistics /> },
    { url: "/dashboard", component: <Statistics /> },
    { url: "/message", component: <Message /> },
    { url: "/notification", component: <Notification /> },

    // Restaurant
    { url: "/restaurants", component: <ViewRestaurants /> },
    { url: "/restaurant/:id", component: <ViewSingleRestaurant /> },


    //Drivers
    { url: "/drivers", component: <ViewDrivers /> },
    { url: "/driver/:id", component: <ViewSingleDriver /> },

    //Orders
    { url: "/orders", component: <ViewOrders /> },
    { url: "/orders/:id", component: <ViewSingleOrder /> },
  ];


  return (
    <>
      <Routes>
        <Route element={<MainLayout />} >
          {allroutes.map((data, i) => (
            <Route
              key={i}
              exact
              path={`${data.url}`}
              element={data.component}
            />
          ))}
        </Route>
      </Routes>
      <ScrollToTop />

    </>
  );
};


function MainLayout() {
  const { menuToggle } = useContext(ThemeContext);
  return (
    <div id="main-wrapper" className={`show ${menuToggle ? "menu-toggle" : ""}`}>
      <Nav />
      <div className="content-body" style={{ minHeight: window.screen.height - 45 }}>
        <div className="container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )

};

export default DashboardRoutes;
