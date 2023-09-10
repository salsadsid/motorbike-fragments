import React from "react";
import { toast } from "react-toastify";

const DeleteOrderModal = ({ deleteOrder, setDeleteOrder, refetch }) => {
  const { productName, email, _id } = deleteOrder;
  console.log(deleteOrder);
  const handleDelete = () => {
    fetch(`https://motorbike-fragments.onrender.com/booking/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Order ${productName} is removed`);
          setDeleteOrder(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-order-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm delete ?</h3>
          <p className="mt-2">Order placed by: {email}</p>
          <p className="">Item: {productName}</p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete(email)}
              className="btn btn-xs btn-primary"
            >
              REMOVE
            </button>
            <label
              htmlFor="delete-order-modal"
              className="btn btn-xs btn-accent"
            >
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderModal;
