import React, {Component} from 'react'
import {connect} from 'react-redux'

//import { addShipping } from './actions/cartActions'
class Recipe extends Component {

    // componentWillUnmount() {
    //     if (this.refs.shipping.checked)
    //         this.props.substractShipping()
    // }

    handleChecked = (e) => {
        if (e.target.checked) {
            this.props.addShipping();
        } else {
            this.props.substractShipping();
        }
    };

    render() {
        return (
            <div>
                <div className="row checkout">
                    <div>Total : {this.props.total}</div>
                </div>
                <button type="button" className="btn btn success">
                    Checkout
                </button>
                {/*<tr>*/}
                {/*    <td style={textDetail} onChange={this.handleChecked}>*/}
                {/*        Estimated shipping*/}
                {/*    </td>*/}
                {/*    <td/>*/}
                {/*    <td/>*/}
                {/*    <td/>*/}
                {/*    <td style={textDetail}>Shipping(+6$)</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td style={textDetail}>*/}
                {/*        Total*/}
                {/*    </td>*/}
                {/*    <td/>*/}
                {/*    <td/>*/}
                {/*    <td/>*/}
                {/*    <td style={textDetail}>${this.props.total}</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <th>*/}
                {/*        <button type="button" className="btn btn-default">*/}
                {/*            <span className="glyphicon glyphicon-shopping-cart"/> Continue*/}
                {/*            Shopping*/}
                {/*        </button>*/}
                {/*    </th>*/}
                {/*    <td/>*/}
                {/*    <td/>*/}
                {/*    <td/>*/}
                {/*    <td>*/}
                {/*        <button type="button" className="btn btn-success">*/}
                {/*            Checkout <span className="glyphicon glyphicon-play"/>*/}
                {/*        </button>*/}
                {/*    </td>*/}
                {/*</tr>*/}
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
