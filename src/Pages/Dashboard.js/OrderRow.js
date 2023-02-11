import React from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ order, index, number, setDeleteOrder }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order.productName}</td>
      <td>{order.number}</td>
      <td>
        {order.price && !order.paid && (
          <Link to={`/dashboard/payment/${order._id}`}>
            <button className="btn btn-xs btn-accent">pay</button>
          </Link>
        )}
        {order.price && order.paid && (
          <span className="bg-indigo-400 text-white p-1 rounded font-bold">
            PAID{" "}
          </span>
        )}
      </td>
      <td>
        {order.price && order.paid ? (
          <span>{order.tnxId}</span>
        ) : (
          <span>Not Generated</span>
        )}
      </td>
      <td>
        <label
          onClick={() => setDeleteOrder(order)}
          htmlFor="delete-order-modal"
          className="btn modal-button btn-xs btn-warning text-white"
        >
          DELETE
        </label>
      </td>
    </tr>
  );
};

export default OrderRow;
