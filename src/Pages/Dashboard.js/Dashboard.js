import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile p-2">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content my-4 mx-4">
                <h2 style={{fontFamily:"fantasy"}} className='text-4xl text-center text-secondary'>DASHBOARD</h2>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu bg-slate-300 rounded p-4 overflow-y-auto w-80 text-base-content">

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