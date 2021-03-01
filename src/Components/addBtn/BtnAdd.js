import React from 'react'

const BtnAdd = ({showMModal,data}) => {
    return (
        <>
          <button className="btnAddProduct"><i className={data ? "fa fa-times": "fa fa-plus" } onClick={()=>{showMModal(!data)}}></i></button>  
        </>
    )
}

export default BtnAdd
