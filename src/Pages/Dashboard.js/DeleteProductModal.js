import React from "react";
import { toast } from "react-toastify";

const DeleteProductModal = ({ deleteProduct, setDeleteProduct, refetch }) => {
  const { name, _id } = deleteProduct;
  const handleDelete = () => {
    fetch(`https://motorbike-fragments.onrender.com/part/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Product ${name} is removed`);
          setDeleteProduct(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-product-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="py-4">Are You Sure ?</p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn btn-xs bg-red-500"
            >
              REMOVE
            </button>
            <label htmlFor="delete-product-modal" className="btn btn-xs">
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
