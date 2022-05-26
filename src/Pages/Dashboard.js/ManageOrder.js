import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import AllOrderRow from './AllOrderRow';
import DeleteOrderModal from './DeleteOrderModal';

const ManageOrder = () => {
    const [deleteOrder, setDeleteOrder] = useState(null)
    const navigate = useNavigate()
    const { data: orders, isLoading, refetch } = useQuery('allorders', () => fetch(`http://localhost:5000/booking`, {
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
    console.log(orders)
    return (
        <div>
            <h2>All Orders</h2>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) => <AllOrderRow
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                                setDeleteOrder={setDeleteOrder}
                            ></AllOrderRow>)
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

export default ManageOrder;     