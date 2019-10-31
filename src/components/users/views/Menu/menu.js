import React, {Component} from 'react';
import {addToCart} from "../Cart/action/addToCart";
import {connect} from "react-redux";
import '../../../../css/shopping-cart.css'
import StickyCart from "../Cart/sticky-cart";
import Modal from "../Modal";

class MenuPage extends Component {
    state = {
        showModal: 0
    };

    getModal = value => {
        this.setState({showModal: value});
    };

    hideModal = value => {
        this.setState({showModal: 0});
    };

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
                        <a className="gallery img d-flex align-items-center"
                           data-toggle="modal" data-target=".bd-example-modal-lg"
                           onClick={() => {
                               this.getModal(item.id);
                           }}
                           style={{backgroundImage: "url(" + item.img + ")"}}>
                            <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                <span className="icon-search"/>
                            </div>
                        </a>
                        <Modal class="modal fade" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
                               show={this.state.showModal === item.id}
                               onHide={() => this.hideModal(item.id)}
                               title={item.title}
                               img={item.img}
                               desc={item.desc}
                               price={item.price}
                        />
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
                <StickyCart/>
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
