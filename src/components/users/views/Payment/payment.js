import React from 'react'
import '../../../../css/payment-orders.css'

class Pay extends React.Component {
    onSubmit = event => {

    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="container payment">
                    <div className="row col-12">
                        <div className="col-6">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    name="fullName"
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    name="phone"
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Apartment Number</label>
                                <input
                                    name="apartment-number"
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label>City</label>
                                <input
                                    name="city"
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>District</label>
                                <input
                                    name="district"
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input
                                    name="address"
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Voucher</label>
                                <input
                                    name="voucher"
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <button type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Pay