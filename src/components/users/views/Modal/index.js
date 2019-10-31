import React, {Component} from "react";

class Modal extends Component {
    closeModal = () => {
        document.getElementById("modal").style.display = "none";
    };

    render() {
        return (
            <React.Fragment>
                {this.props.show && (
                    <div className="modal modal-dialog modal-lg"
                         style={{position: "fixed", backgroundColor: "white", display: "block"}}>
                        <div className="modal-content"
                             style={{backgroundImage: "url(" + '../../images/bg_4.jpg' + ")"}}>
                            <div className="col-form-label-lg container card-deck mb-3 text-center"
                                 style={modalProducts}>
                                <div className="col-lg-5">
                                    <div className="text-center text-dark">
                                        <h2 className="my-0 font-weight-normal"
                                            style={{color: "#78d5ef"}}>{this.props.title}</h2>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">${this.props.price}<small
                                            className="text-muted">/ pcs</small></h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>
                                                {this.props.desc}
                                            </li>
                                        </ul>
                                        <img className="img" src={this.props.img}
                                             style={imgModelProducts}/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="text-lg-left tll1">
                                        <h4 className="my-0 font-weight-normal"
                                            style={{color: "#78d5ef"}}>Choose the cake
                                            size</h4>
                                        <div className="row">
                                            <div className="col-1 text-lg-left">
                                                <input type="radio"
                                                       value="Medium size - 9 inches"
                                                       name="gender"
                                                       style={inputCheckSizeCake}/>
                                            </div>
                                            <div className="col-5">
                                                <p style={{fontSize: 16}}>Medium size - 9
                                                    inches</p>
                                            </div>
                                            <div className="col-1">
                                                <input type="radio"
                                                       value="Large size - 12 inches"
                                                       name="gender"
                                                       style={inputCheckSizeCake}/>
                                            </div>
                                            <div className="col-5">
                                                <p style={{fontSize: 16}}>Large size - 12
                                                    inches</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-lg-left tll2">
                                        <h4 className="my-0 font-weight-normal"
                                            style={{color: "#78d5ef"}}>Choose the cake
                                            base</h4>
                                        <div className="row">
                                            <div className="col-1 text-lg-left">
                                                <input type="radio" value="Thin sole"
                                                       name="gender"
                                                       style={inputCheckSizeCake}/>
                                            </div>
                                            <div className="col-3">
                                                <p style={{fontSize: 16}}>Thin sole</p>
                                            </div>
                                            <div className="col-1">
                                                <input type="radio" value="Platform"
                                                       name="gender"
                                                       style={inputCheckSizeCake}/>
                                            </div>
                                            <div className="col-3">
                                                <p style={{fontSize: 16}}>Platform</p>
                                            </div>
                                            <div className="col-1">
                                                <input type="radio" value="Medium"
                                                       name="gender"
                                                       style={inputCheckSizeCake}/>
                                            </div>
                                            <div className="col-3">
                                                <p style={{fontSize: 16}}>Medium</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-lg-left tll3">
                                        <h4 className="my-0 font-weight-normal"
                                            style={{color: "#78d5ef"}}>Additional
                                            options</h4>
                                        <div className="text-lg-left">
                                            <div className="row">
                                                <input type="radio"
                                                       value="Medium size - 9 inches"
                                                       name="gender" style={inputOption}/>
                                                <p style={titleOption}>Add the cheese
                                                    --------------- 2.0$</p>
                                            </div>
                                        </div>
                                        <div className="text-lg-left">
                                            <div className="row">
                                                <input type="radio"
                                                       value="Large size - 12 inches"
                                                       name="gender" style={inputOption}/>
                                                <p style={titleOption}>Double the cheese
                                                    --------------- 4.0$</p>
                                            </div>
                                        </div>
                                        <div className="text-lg-left">
                                            <div className="row">
                                                <input type="radio"
                                                       value="Large size - 12 inches"
                                                       name="gender" style={inputOption}/>
                                                <p style={titleOption}>Triple the cheese
                                                    --------------- 6.0$</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-lg-left tll4">
                                        <h4 className="my-0 font-weight-normal"
                                            style={{color: "#78d5ef"}}>Border option</h4>
                                        <div className="text-lg-left">
                                            <div className="row">
                                                <input type="radio"
                                                       value="Medium size - 9 inches"
                                                       name="gender" style={inputOption}/>
                                                <p style={titleOption}>Cheese border
                                                    --------------- 25.0$</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body" style={{color: "#ffffff"}}>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li style={{fontSize: 18}}>Discount 50% for 2nd Pizza -
                                                WEEKLY
                                                promotion: Discount when buying 9 "/ 12"
                                                pizza with lower price and same size. Free
                                                30 'shipping with orders from 5.0$
                                            </li>
                                        </ul>
                                        <button type="button"
                                                className="btn btn-lg btn-block btn-primary"
                                                style={{color: "#78d5ef"}}>
                                            <p style={{fontSize: 17}}>Buy By Promotions</p>
                                        </button>
                                        <button type="button"
                                                className="btn btn-lg btn-block btn-primary"
                                                style={{color: "#78d5ef"}}>
                                            <p style={{fontSize: 17}}>Normal Order</p>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

const modalProducts = {
    marginTop: 15,
    marginBottom: 15,
};

const imgModelProducts = {
    width: 260,
};

const inputCheckSizeCake = {
    marginLeft: 7,
    width: 24,
    height: 24,
};

const inputOption = {
    marginLeft: 21,
    width: 24,
    height: 24,
};

const titleOption = {
    fontSize: 16,
    marginLeft: 10,
};

export default Modal;
