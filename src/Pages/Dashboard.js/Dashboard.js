import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl text-secondary font-bold'>Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {admin ?
                        <>
                            <li><Link to='/dashboard/manageorder'>Manage All Orders</Link></li>
                            <li><Link to='/dashboard/addproduct'>Add a Product</Link></li>
                            <li><Link to='/dashboard/manageproduct'>Manage All Products</Link></li>
                            <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
                        </> :
                        <> <li><Link to='/dashboard/order'>My Order</Link></li>
                            <li><Link to='/dashboard/review'>Add a review</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;