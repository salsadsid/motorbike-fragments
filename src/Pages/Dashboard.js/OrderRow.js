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
            <button
               
               class="group flex w-full items-center justify-center rounded-md bg-accent px-3 py-1 text-secondary transition focus:outline-none focus:ring focus:ring-yellow-400 sm:w-auto"
             >
               <span class="text-sm font-medium"> Proceed to Pay </span>
     
               <svg
                 class="ml-3 h-5 w-5 "
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M17 8l4 4m0 0l-4 4m4-4H3"
                 />
               </svg>
             </button>
           
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
