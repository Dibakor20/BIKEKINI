import React, { useEffect, useState } from 'react';
import { IProduct } from '../../services/Type'
import ProductService from '../../services/ProductService'

const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([] as IProduct[])
    useEffect(() => {
        ProductService.getProduct()
        .then((res)=>setProducts(res))
    }, [])

    return (
        <div>
            {
                products?.map((pd) => <li>{ pd.title}</li>)
            }
        </div>
    );
};

export default Products;