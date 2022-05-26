import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({ deleteOrder, setDeleteOrder, refetch }) => {
    const { productName, email, _id } = deleteOrder
    console.log(_id);
    const handleDelete = () => {
        fetch(`http://localhost:5000/booking/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`Order ${productName} is removed`);
                    setDeleteOrder(null)
                    refetch()
                }
            })
    }
    return (
        <div>

            <input type="checkbox" id="delete-order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{deleteOrder.productName}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(email)} className='btn btn-xs bg-red-500'>REMOVE</button>
                        <label htmlFor="delete-order-modal" className="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteOrderModal;