import React from 'react'

const ModalCreateProduct = ({ showMModal, data, handleSubimt }) => {
    return (
        <>
            <div className="modal show d-block" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <form onSubmit={handleSubimt}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { showMModal(!data) }}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">Product Name:</label>
                                    <input type="text" className="form-control" id="recipient-name" name="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">Product price:</label>
                                    <input type="text" className="form-control" id="recipient-name" name="price" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">Product material:</label>
                                    <input type="text" className="form-control" id="recipient-name" name="material" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message-text" className="col-form-label">Message:</label>
                                    <textarea name="desc" className="form-control" id="message-text" ></textarea>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => { showMModal(!data) }}>Close</button>
                                <button type="submit" className="btn btn-primary">Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ModalCreateProduct
