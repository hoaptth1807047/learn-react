import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

class Recipe extends Component {

    render() {
        return (
            <div>
                <div className="row checkout">
                    <div>Total : {this.props.total}</div>
                </div>
                <button type="button" className="btn btn success">
                    <Link to="/pay">Checkout</Link>
                </button>
            </div>
        )
    }
}

const textDetail = {
    fontSize: 20
};

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addShipping: () => {
            dispatch({type: 'ADD_SHIPPING'})
        },
        substractShipping: () => {
            dispatch({type: 'SUB_SHIPPING'})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
