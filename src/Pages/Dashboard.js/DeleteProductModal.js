import React from 'react';
import { toast } from 'react-toastify';

const DeleteProductModal = ({ deleteProduct, setDeleteProduct, refetch }) => {
    const { name, _id } = deleteProduct;
    const handleDelete = () => {
        fetch(`http://localhost:5000/part/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Product ${name} is removed`);
                    setDeleteProduct(null)
                    refetch()
                }
            })
    }
    return (
        <div>

            <input type="checkbox" id="delete-product-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">{name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} className='btn btn-xs bg-red-500'>REMOVE</button>
                        <label for="delete-product-modal" class="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteProductModal;