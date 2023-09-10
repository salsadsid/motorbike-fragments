
import React from "react";
import { toast } from "react-toastify";


const AllOrderRow = ({ order, index, number, setDeleteOrder, refetch }) => {
  const handleStatus = (tnxId) => {
    const payment = {
      status: true,
    };
    fetch(`https://motorbike-fragments.onrender.com/status/${tnxId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(payment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          toast.success("Your Product Is being shipped");
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order.productName}</td>
      <td>{order.email}</td>

      <td>
        {!order.paid && (
          <span className="font-bold text-white p-1 bg-red-400 rounded">
            UNPAID
          </span>
        )}
        {order.paid && (
          <span className="bg-indigo-400 font-bold text-white p-1 rounded">
            PAID
          </span>
        )}
      </td>
      <td>
        {!order.status && (
          <span className="bg-accent font-bold text-white p-1 rounded">
            PENDING
          </span>
        )}
        {order.status && (
          <span className="bg-green-400 font-bold text-white p-1 rounded">
            SHIPPING
          </span>
        )}
      </td>
      <td>
        {order.tnxId ? (
          <button
            onClick={() => handleStatus(order.tnxId)}
            className="btn btn-xs btn-accent"
            disabled={order.status}
          >
            Approve Order
          </button>
        ) : (
          <span className="bg-teal-500 rounded font-bold text-white p-1">
            NOT PAID
          </span>
        )}
      </td>
      <td>
        <label
          onClick={() => setDeleteOrder(order)}
          htmlFor="delete-order-modal"
          className="btn text-white modal-button btn-xs btn-warning"
        >
          DELETE
        </label>
      </td>
    </tr>
  );
};

export default AllOrderRow;
