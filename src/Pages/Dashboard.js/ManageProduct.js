import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import DeleteProductModal from './DeleteProductModal';
import ProductRow from './ProductRow';

const ManageProduct = () => {

    const [deleteProduct, setDeleteProduct] = useState(null)
    const navigate = useNavigate()
    const { data: products, isLoading, refetch } = useQuery('orders', () => fetch(`https://motorbike-fragments-server-salsadsid.vercel.app/part`).then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>All Products</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, index) => <ProductRow
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                                setDeleteProduct={setDeleteProduct}
                            ></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteProduct && <DeleteProductModal
                deleteProduct={deleteProduct}
                refetch={refetch}
                setDeleteProduct={setDeleteProduct}
            ></DeleteProductModal>}
        </div>
    );
};

export default ManageProduct;