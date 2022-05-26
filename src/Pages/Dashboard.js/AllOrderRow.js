import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AllOrderRow = ({ order, index, number, setDeleteOrder, refetch }) => {


    const handleStatus = (tnxId) => {
        const payment = {
            status: true
        }
        fetch(`http://localhost:5000/status/${tnxId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(payment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    toast.success('Your Product Is being shipped')
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.productName}</td>
            <td>{order.email}</td>

            <td>{!order.paid && <span className='bg-accent font-bold text-white px-1'>UNPAID</span>}
                {order.paid && <span className='bg-green-600 font-bold text-white px-1'>
                    PAID</span>}
            </td>
            <td>{!order.status && <span className='bg-accent font-bold text-white px-1'>PENDING</span>}
                {order.status && <span className='bg-green-600 font-bold text-white px-1'>
                    SHIPPED</span>}
            </td>
            <td>{order.tnxId ? <button onClick={() => handleStatus(order.tnxId)} className='btn btn-xs btn-secondary'>Approve Order</button> : <span className='bg-accent font-bold text-white px-1'>PLEASE PAY</span>}</td>
            <td><label onClick={() => setDeleteOrder(order)} for="delete-order-modal" className="btn modal-button btn-xs btn-error">DELETE</label>
            </td>
        </tr >
    );
};

export default AllOrderRow;