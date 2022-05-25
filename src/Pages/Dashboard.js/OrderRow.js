import React from 'react';

const OrderRow = ({ order, index, number, setDeleteOrder }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.productName}</td>
            <td>{order.email}</td>
            <td>{order.number}</td>
            <td>UNPAID</td>
            <td><label onClick={() => setDeleteOrder(order)} for="delete-order-modal" class="btn modal-button btn-xs btn-error">DELETE</label>
            </td>
        </tr>
    );
};

export default OrderRow;