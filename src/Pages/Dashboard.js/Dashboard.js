import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import ActiveLink from "../Shared/ActiveLink";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile p-2">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content my-4 mx-4">
        <h2
          style={{ fontFamily: "fantasy" }}
          className="text-4xl text-center text-secondary"
        >
          DASHBOARD
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-slate-300 rounded p-4 overflow-y-auto w-80 text-base-content">
          <li>
            <ActiveLink to="/dashboard">My Profile</ActiveLink>
          </li>
          {admin ? (
            <>
              <li>
                <ActiveLink to="/dashboard/manageorder">
                  Manage All Orders
                </ActiveLink>
              </li>
              <li>
                <ActiveLink to="/dashboard/addproduct">
                  Add a Product
                </ActiveLink>
              </li>
              <li>
                <ActiveLink to="/dashboard/manageproduct">
                  Manage All Products
                </ActiveLink>
              </li>
              <li>
                <ActiveLink to="/dashboard/makeadmin">Make Admin</ActiveLink>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <ActiveLink to="/dashboard/order">My Order</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/dashboard/review">Add a review</ActiveLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
