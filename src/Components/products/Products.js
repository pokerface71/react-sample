import React from 'react'
import Product from './Product'


const Products = ({product,handelRemove}) => {

    return (
        <>
            <div className="row mt-4">
                 {product && product.map(item=>(
                        <Product itemDetail={item} key={item.id} remove={handelRemove}/>
                ))}
               
            </div>
        </>
    )
}

export default Products
