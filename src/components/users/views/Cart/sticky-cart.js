import React from 'react';
import '../../../../css/shopping-cart.css'
import {connect} from "react-redux";
import Recipe from "./Recipe";

class StickyCart extends React.Component {
    openNav = () => {
        document.getElementById("mySidepanel").style.width = "350px";
        // document.getElementsByClassName("icon-bar").style.display = "none";
    };
    closeNav = () => {
        document.getElementById("mySidepanel").style.width = "0";
    };
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
        let addedItems = this.props.items.map(item => {
            return (
                <div key={item.id}>
                    <div className="row">
                        <div>{item.quantity}-&nbsp;{item.title}&nbsp;-&nbsp;</div>
                        <div>${item.price}</div>
                    </div>
                </div>
            )
        });
        return (
            <div>
                <div className="icon-bar">
                    <a className="openbtn"
                       onClick={() => {
                           this.openNav()
                       }}>
                        <i className="icon-shopping_cart"/>
                    </a>
                </div>
                <div id="mySidepanel" className="sidepanel">
                        <a className="closebtn"
                           onClick={() => {
                               this.closeNav()
                           }}>&times;</a>
                    <div className="side-cart-title">
                        <div className="booking-detail">
                            <p>Orders Detail:</p>
                            <div className="booking-table">
                                {addedItems}
                            </div>
                            <div>
                                <Recipe/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems
    }
};

export default connect(mapStateToProps)(StickyCart)