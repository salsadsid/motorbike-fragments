import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, number, setDeleteOrder }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.productName}</td>
            <td>{order.number}</td>
            <td>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs'>pay</button></Link>}
                {(order.price && order.paid) && <span className='bg-green-600 text-white px-1 font-bold'>
                    PAID <span className='bg-accent text-white px-1 font-bold'>TnxID: {order.tnxId}</span></span>}
            </td>
            <td><label onClick={() => setDeleteOrder(order)} for="delete-order-modal" class="btn modal-button btn-xs btn-error">DELETE</label>
            </td>
        </tr>
    );
};

export default OrderRow;