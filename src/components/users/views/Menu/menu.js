import React, {Component} from 'react';
import {addToCart} from "../Cart/action/addToCart";
import {connect} from "react-redux";

class MenuPage extends Component {
    handleClick = (id) => {
        this.props.addToCart(id);
        alert("Add item!")
    };
    render() {
        const item_pizza = this.props.items.filter(item => item.cate_id === 1);
        const item_drink = this.props.items.filter(item => item.cate_id === 2);
        const item_burger = this.props.items.filter(item => item.cate_id === 3);
        const item_pasta = this.props.items.filter(item => item.cate_id === 4);
        const item_pizza_hot1 = this.props.items.filter(item => item.cate_id === 1 && item.cate_id_home === 1);
        const item_pizza_hot2 = this.props.items.filter(item => item.cate_id === 1 && item.cate_id_home === 2);
        let listItem_pizza = item_pizza.map(item => {
            return (
                <div className="col-md-4 text-center">
                    <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4"
                           style={{backgroundImage: "url(" + item.img + ")"}}/>
                        <div className="text">
                            <h3><a href="#">{item.title}</a></h3>
                            <p>{item.desc}</p>
                            <p className="price"><span>${item.price}</span></p>
                            <p><a className="btn btn-white btn-outline-white"
                                  onClick={() => {
                                      this.handleClick(item.id)
                                  }}>
                                Add to cart</a>
                            </p>
                        </div>
                    </div>
                </div>
            )
        });
        let listItem_drink = item_drink.map(item => {
            return (
                <div className="col-md-4 text-center">
                    <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4"
                           style={{backgroundImage: "url(" + item.img + ")"}}/>
                        <div className="text">
                            <h3><a href="#">{item.title}</a></h3>
                            <p>{item.desc}</p>
                            <p className="price"><span>${item.price}</span></p>
                            <p><a className="btn btn-white btn-outline-white"
                                  onClick={() => {
                                      this.handleClick(item.id)
                                  }}>
                                Add to cart</a>
                            </p>
                        </div>
                    </div>
                </div>
            )
        });
        let listItem_burger = item_burger.map(item => {
            return (
                <div className="col-md-4 text-center">
                    <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4"
                           style={{backgroundImage: "url(" + item.img + ")"}}/>
                        <div className="text">
                            <h3><a href="#">{item.title}</a></h3>
                            <p>{item.desc}</p>
                            <p className="price"><span>${item.price}</span></p>
                            <p><a className="btn btn-white btn-outline-white"
                                  onClick={() => {
                                      this.handleClick(item.id)
                                  }}>
                                Add to cart</a>
                            </p>
                        </div>
                    </div>
                </div>
            )
        });
        let listItem_pasta = item_pasta.map(item => {
            return (
                <div className="col-md-4 text-center">
                    <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4"
                           style={{backgroundImage: "url(" + item.img + ")"}}/>
                        <div className="text">
                            <h3><a href="#">{item.title}</a></h3>
                            <p>{item.desc}</p>
                            <p className="price"><span>${item.price}</span></p>
                            <p><a className="btn btn-white btn-outline-white"
                                  onClick={() => {
                                      this.handleClick(item.id)
                                  }}>
                                Add to cart</a>
                            </p>
                        </div>
                    </div>
                </div>
            )
        });
        let listItem_pizza_hot1 = item_pizza_hot1.map(item => {
            return (
                <div className="col-lg-4 d-flex ftco-animate">
                    <div className="services-wrap d-flex">
                        <a className="gallery img d-flex align-items-center" data-toggle="modal"
                           data-target=".bd-example-modal-lg"
                           style={{backgroundImage: "url(" + item.img + ")"}}>
                            <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                <span className="icon-search"/>
                            </div>
                        </a>
                        <div className="modal fade bd-example-modal-lg" role="dialog"
                             aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content"
                                     style={{backgroundImage: "url(" + '../../images/bg_4.jpg' + ")"}}>
                                    <div className="col-form-label-lg container card-deck mb-3 text-center"
                                         style={modalProducts}>
                                        <div className="col-lg-5">
                                            <div className="text-center text-dark">
                                                <h2 className="my-0 font-weight-normal"
                                                    style={{color: "#78d5ef"}}>{item.title}</h2>
                                            </div>
                                            <div className="card-body">
                                                <h1 className="card-title pricing-card-title">${item.price}<small
                                                    className="text-muted">/ pcs</small></h1>
                                                <ul className="list-unstyled mt-3 mb-4">
                                                    <li>
                                                        {item.desc}
                                                    </li>
                                                </ul>
                                                <img className="img" src="../../images/pizza-1.jpg"
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
                        </div>
                        <div className="text p-4">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <p className="price"><span>${item.price}</span>
                                <a className="ml-2 btn btn-white btn-outline-white"
                                   onClick={() => {this.handleClick(item.id)}}>Order</a>
                            </p>
                        </div>
                    </div>
                </div>
            )
        });
        let listItem_pizza_hot2 = item_pizza_hot2.map(item => {
            return (
                <div className="col-lg-4 d-flex ftco-animate">
                    <div className="services-wrap d-flex">
                        <a className="img order-lg-last gallery d-flex align-items-center" data-toggle="modal"
                           data-target=".bd-example-modal-lg"
                           style={{backgroundImage: "url(" + item.img + ")"}}>
                            <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                <span className="icon-search"/>
                            </div>
                        </a>
                        <div className="text p-4">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <p className="price"><span>${item.price}</span>
                                <a className="ml-2 btn btn-white btn-outline-white"
                                   onClick={() => {this.handleClick(item.id)}}>Order</a>
                            </p>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div>
                <section
                    className="home-slider owl-carousel img"
                    style={{backgroundImage: "url(../../images/bg_1.jpg)"}}>
                    <div
                        className="slider-item"
                        style={{backgroundImage: "url(../../images/bg_3.jpg)"}}>
                        <div className="overlay"/>
                        <div className="container">
                            <div className="row slider-text justify-content-center align-items-center">
                                <div className="col-md-7 col-sm-12 text-center ftco-animate">
                                    <h1 className="mb-3 mt-5 bread">Our Menu</h1>
                                    <p className="breadcrumbs">
                                        <span className="mr-2">
                                            <a href="/home">Home</a>
                                        </span>
                                        <span>Menu</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*hot pizza meal*/}
                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 heading-section ftco-animate text-center">
                                <h2 className="mb-4">Hot Pizza Meals</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                    Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-wrap">
                        <div className="row no-gutters d-flex">
                            {listItem_pizza_hot1}
                            {listItem_pizza_hot2}
                        </div>
                    </div>

                    {/*our menu pricing*/}
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
                            <div className="col-md-7 heading-section text-center ftco-animate">
                                <h2 className="mb-4">Our Menu Pricing</h2>
                                <p className="flip">
                                    <span className="deg1"/>
                                    <span className="deg2"/>
                                    <span className="deg3"/></p>
                                <p className="mt-5">Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="pricing-entry d-flex ftco-animate">
                                    <div className="img"
                                         style={{backgroundImage: "url(" + '../../images/pizza-1.jpg' + ")"}}/>
                                    <div className="desc pl-3">
                                        <div className="d-flex text align-items-center">
                                            <h3><span>Italian Pizza</span></h3>
                                            <span className="price">$20.00</span>
                                        </div>
                                        <div className="d-block">
                                            <p>A small river named Duden flows by their place and supplies</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pricing-entry d-flex ftco-animate">
                                    <div className="img"
                                         style={{backgroundImage: "url(" + '../../images/pizza-2.jpg' + ")"}}/>
                                    <div className="desc pl-3">
                                        <div className="d-flex text align-items-center">
                                            <h3><span>Hawaiian Pizza</span></h3>
                                            <span className="price">$29.00</span>
                                        </div>
                                        <div className="d-block">
                                            <p>A small river named Duden flows by their place and supplies</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pricing-entry d-flex ftco-animate">
                                    <div className="img"
                                         style={{backgroundImage: "url(" + '../../images/pizza-3.jpg' + ")"}}/>
                                    <div className="desc pl-3">
                                        <div className="d-flex text align-items-center">
                                            <h3><span>Greek Pizza</span></h3>
                                            <span className="price">$20.00</span>
                                        </div>
                                        <div className="d-block">
                                            <p>A small river named Duden flows by their place and supplies</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pricing-entry d-flex ftco-animate">
                                    <div className="img"
                                         style={{backgroundImage: "url(" + '../../images/pizza-4.jpg' + ")"}}/>
                                    <div className="desc pl-3">
                                        <div className="d-flex text align-items-center">
                                            <h3><span>Bacon Crispy Thins</span></h3>
                                            <span className="price">$20.00</span>
                                        </div>
                                        <div className="d-block">
                                            <p>A small river named Duden flows by their place and supplies</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="pricing-entry d-flex ftco-animate">
                                    <div className="img"
                                         style={{backgroundImage: "url(" + '../../images/pizza-5.jpg' + ")"}}/>
                                    <div className="desc pl-3">
                                        <div className="d-flex text align-items-center">
                                            <h3><span>Hawaiian Special</span></h3>
                                            <span className="price">$49.91</span>
                                        </div>
                                        <div className="d-block">
                                            <p>A small river named Duden flows by their place and supplies</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pricing-entry d-flex ftco-animate">
                                    <div className="img"
                                         style={{backgroundImage: "url(" + '../../images/pizza-6.jpg' + ")"}}/>
                                    <div className="desc pl-3">
                                        <div className="d-flex text align-items-center">
                                            <h3><span>Ultimate Overload</span></h3>
                                            <span className="price">$20.00</span>
                                        </div>
                                        <div className="d-block">
                                            <p>A small river named Duden flows by their place and supplies</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pricing-entry d-flex ftco-animate">
                                    <div className="img"
                                         style={{backgroundImage: "url(" + '../../images/pizza-7.jpg' + ")"}}/>
                                    <div className="desc pl-3">
                                        <div className="d-flex text align-items-center">
                                            <h3><span>Bacon Pizza</span></h3>
                                            <span className="price">$20.00</span>
                                        </div>
                                        <div className="d-block">
                                            <p>A small river named Duden flows by their place and supplies</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pricing-entry d-flex ftco-animate">
                                    <div className="img"
                                         style={{backgroundImage: "url(" + '../../images/pizza-8.jpg' + ")"}}/>
                                    <div className="desc pl-3">
                                        <div className="d-flex text align-items-center">
                                            <h3><span>Ham &amp; Pineapple</span></h3>
                                            <span className="price">$20.00</span>
                                        </div>
                                        <div className="d-block">
                                            <p>A small river named Duden flows by their place and supplies</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*tab pane*/}
                <section className="ftco-menu">
                    <div className="container-fluid">
                        <div className="row d-md-flex">
                            <div className="col-lg-4 ftco-animate img f-menu-img mb-5 mb-md-0"
                                 style={{backgroundImage: "url(" + 'images/about.jpg' + ")"}}>
                            </div>
                            <div className="col-lg-8 ftco-animate p-md-5">
                                <div className="row">
                                    <div className="col-md-12 nav-link-wrap mb-5">
                                        <div className="nav ftco-animate nav-pills" id="v-pills-tab" role="tablist"
                                             aria-orientation="vertical">
                                            <a className="nav-link active" id="v-pills-1-tab" data-toggle="pill"
                                               href="#v-pills-1" role="tab" aria-controls="v-pills-1"
                                               aria-selected="true">Pizza</a>
                                            <a className="nav-link" id="v-pills-2-tab" data-toggle="pill"
                                               href="#v-pills-2" role="tab" aria-controls="v-pills-2"
                                               aria-selected="false">Drinks</a>
                                            <a className="nav-link" id="v-pills-3-tab" data-toggle="pill"
                                               href="#v-pills-3" role="tab" aria-controls="v-pills-3"
                                               aria-selected="false">Burgers</a>
                                            <a className="nav-link" id="v-pills-4-tab" data-toggle="pill"
                                               href="#v-pills-4" role="tab" aria-controls="v-pills-4"
                                               aria-selected="false">Pasta</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12 d-flex align-items-center">
                                        <div className="tab-content ftco-animate" id="v-pills-tabContent">
                                            <div className="tab-pane fade show active" id="v-pills-1"
                                                 role="tabpanel"
                                                 aria-labelledby="v-pills-1-tab">
                                                <div className="row">
                                                    {listItem_pizza}
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="v-pills-2" role="tabpanel"
                                                 aria-labelledby="v-pills-2-tab">
                                                <div className="row">
                                                    {listItem_drink}
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="v-pills-3" role="tabpanel"
                                                 aria-labelledby="v-pills-3-tab">
                                                <div className="row">
                                                    {listItem_burger}
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="v-pills-4" role="tabpanel"
                                                 aria-labelledby="v-pills-4-tab">
                                                <div className="row">
                                                    {listItem_pasta}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {
            dispatch(addToCart(id))
        }
    }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage)
