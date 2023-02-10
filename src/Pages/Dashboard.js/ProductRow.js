import React from 'react';

const ProductRow = ({ product, setDeleteProduct, index }) => {
    const{name,availableQuantity}=product
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{availableQuantity}</td>
            <td><label onClick={() => setDeleteProduct(product)} htmlFor="delete-product-modal" className="btn modal-button btn-xs btn-warning text-white">DELETE</label>
            </td>
        </tr>
    );
};

export default ProductRow;