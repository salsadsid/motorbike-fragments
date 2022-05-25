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

            <input type="checkbox" id="delete-order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">{deleteOrder.productName}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(email)} className='btn btn-xs bg-red-500'>REMOVE</button>
                        <label for="delete-order-modal" class="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteOrderModal;