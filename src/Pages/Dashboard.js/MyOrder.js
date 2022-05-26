import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import DeleteOrderModal from './DeleteOrderModal';
import OrderRow from './OrderRow';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [deleteOrder, setDeleteOrder] = useState(null)
    const navigate = useNavigate()
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/booking?user=${user.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
            console.log(res.status)
        }
        return res.json()
    }))
    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <h2 className='text-2xl'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) => <OrderRow
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                                setDeleteOrder={setDeleteOrder}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteOrder && <DeleteOrderModal
                deleteOrder={deleteOrder}
                refetch={refetch}
                setDeleteOrder={setDeleteOrder}
            ></DeleteOrderModal>}
        </div>
    );
};

export default MyOrder;