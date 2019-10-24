import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {removeItem, addQuantity, subtractQuantity} from './action/addToCart'
import Recipe from "./Recipe";

class Cart extends Component {
    handleRemove = (id) => {
        this.props.removeItem(id);
    };
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    };
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    };

    render() {
        let addedItems =
                this.props.items.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>
                                <img src={item.img} alt={item.title}
                                     style={{height: '100px', with: '100px'}}/>
                            </td>
                            <td>
                                {item.quantity}
                                <div className="add-remove">
                                    <div>
                                        <Link to="/cart"><i className="ion-md-arrow-dropup" onClick={() => {
                                            this.handleAddQuantity(item.id)}}/>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/cart"><i className="ion-md-arrow-dropdown" onClick={() => {
                                            this.handleSubtractQuantity(item.id)}}/>
                                        </Link>
                                    </div>
                                </div>
                            </td>
                            <td style={textDetail}>
                                <input type="submit" defaultValue="Send Message" value="Remove"
                                       className="btn-remove-cart btn-primary py-3" style={removeProduct}
                                       onClick={() => {
                                           this.handleRemove(item.id)
                                       }}/>
                            </td>
                        </tr>
                    )
                })
             ;
        return (
            <div>
                <section className="home-slider owl-carousel img"
                         style={{backgroundImage: "url(" + '../../images/bg_1.jpg' + ")"}}>
                    <div className="slider-item"
                         style={{backgroundImage: "url(" + '../../public/images/bg_3.jpg' + ")"}}>
                        <div className="overlay"/>
                        <div className="container">
                            <div className="row slider-text justify-content-center align-items-center">
                                <div className="col-md-7 col-sm-12 text-center ftco-animate">
                                    <h1 className="mb-3 mt-5 bread">Your Cart</h1>
                                    <p className="breadcrumbs mr-2">
                                        <Link to="/home">Home</Link>
                                        Cart
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ftco-section contact-section">
                    <div className="container mt-5">
                        <div className="row block-9">
                            <div className="col-md-12 ftco-animate">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col" style={titleCart}>Product</th>
                                        <th scope="col" style={titleCart}>Quantity</th>
                                        <th scope="col" style={titleCart}>Unit Price</th>
                                        <th scope="col" style={titleCart}>Total</th>
                                        <th scope="col"/>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {addedItems}
                                    <Recipe/>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => {
            dispatch(removeItem(id))
        },
        addQuantity: (id) => {
            dispatch(addQuantity(id))
        },
        subtractQuantity: (id) => {
            dispatch(subtractQuantity(id))
        }
    }
};
const textDetail = {
    fontSize: 20
};

const inputQuantity = {
    width: 85,
    fontSize: 20,
    height: 40,
    // height: -webkit-fill-available,
};

const titleCart = {
    fontSize: 24

};

const imgProduct = {
    backgroundImage: "url(" + 'images/image_1.jpg' + ")",
};

const removeProduct = {
    width: 100,
    // marginRight: -25,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
