import React from 'react';
import { Link } from 'react-router-dom';

const AllOrderRow = ({ order, index, number, setDeleteOrder }) => {
    const { data: orders, isLoading, refetch } = useQuery('payment', () => fetch(`http://localhost:5000/payment`, {
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
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.productName}</td>
            <td>{order.email}</td>

            <td>{!order.paid && <span>UNPAID</span>}
                {order.paid && <span>
                    PAID</span>}
            </td>
            <td>{!order.status && <span>Pending</span>}
                {order.status && <span>
                    Shipped</span>}
            </td>
            <td>{order.tnxId ? <button>Approve Order</button> : <>Please Pay</>}</td>
            <td><label onClick={() => setDeleteOrder(order)} for="delete-order-modal" class="btn modal-button btn-xs btn-error">DELETE</label>
            </td>
        </tr >
    );
};

export default AllOrderRow;