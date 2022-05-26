import React from 'react';

const ProductRow = ({ product, setDeleteProduct, index }) => {
    console.log(product)
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{product?.name}</td>
            <td><label onClick={() => setDeleteProduct(product)} htmlFor="delete-product-modal" className="btn modal-button btn-xs btn-error">DELETE</label>
            </td>
        </tr>
    );
};

export default ProductRow;