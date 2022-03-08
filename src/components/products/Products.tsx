import React, { useEffect, useState } from 'react';
import { IProduct } from '../../services/Type'
import productService from '../../services/ProductService'

const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([] as IProduct[])
    useEffect(() => {
        productService.getProduct()
        .then(res=>console.log(res))
    },[])

    return (
        <div>
            {
                products.map((pd) => <li>{ pd.title}</li>)
            }
        </div>
    );
};

export default Products;