import React from 'react'

const Product = ({itemDetail,remove}) => {
    const {id,productname,image,price,rate,date,disc}=itemDetail
    return (
        <>
            <div className="col-md-3 col-12 "  key={id} style={{height:'450px'}}>
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h5>{productname}</h5>
                        <button className="fa fa-trash text-danger" onClick={()=>{remove(id)}}></button>
                    </div>
                    <div className="card-body">
                        <img src={image} className="img-fluid" />
                        <p>
                             price : <span className="text-success">{price} $</span>
                        </p>
                        <p>
                           material : <span>{rate}</span> <i className="fa fa-star text-warning"></i>
                        </p>
                        <p>
                            {disc}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
