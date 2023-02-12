import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile p-2">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content my-4 mx-4">
        <h2
          style={{ fontFamily: "'Roboto', sans-serif;" }}
          className="text-3xl font-semibold text-center text-secondary"
        >
          DASHBOARD
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-slate-300 rounded p-4 overflow-y-auto w-80 text-base-content">
         
          {admin ? (
            <>
            <li>
            <NavLink to="/dashboard/profile">
              {({ isActive }) => (
                <span className={isActive ? undefined : undefined}>
                  Personal Information
                </span>
              )}
            </NavLink>
          </li>
              <li>
                <NavLink to="/dashboard/manageorder">
                  {({ isActive }) => (
                    <span className={isActive ? undefined : undefined}>
                      Manage All Orders
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addproduct">
                  {({ isActive }) => (
                    <span className={isActive ? undefined : undefined}>
                      Add Product
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageproduct">
                  {({ isActive }) => (
                    <span className={isActive ? undefined : undefined}>
                      Manage All Products
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/makeadmin">
                  {({ isActive }) => (
                    <span className={isActive ? undefined : undefined}>
                      Make Admin
                    </span>
                  )}
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
            <NavLink to="/dashboard/profile">
              {({ isActive }) => (
                <span className={isActive ? undefined : undefined}>
                  Personal Information
                </span>
              )}
            </NavLink>
          </li>
              <li>
                <NavLink to="/dashboard/order">
                  {({ isActive }) => (
                    <span className={isActive ? undefined : undefined}>
                      My Order
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  {({ isActive }) => (
                    <span className={isActive ? undefined : undefined}>
                      Add a review
                    </span>
                  )}
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
