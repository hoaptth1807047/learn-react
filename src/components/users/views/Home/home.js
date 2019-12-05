import React from 'react';
import {connect} from 'react-redux'
import {addToCart} from "./../Cart/action/addToCart";
import {Link} from "react-router-dom";
import StickyCart from "../Cart/sticky-cart";
import firebase from "firebase";
import Modal from "../Modal";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('products');
        this.pizza = this.ref.where('roles', '==', 'PIZZA')
        this.drink = this.ref.where('roles', '==', 'DRINK')
        this.burger = this.ref.where('roles', '==', 'BURGER')
        this.pasta = this.ref.where('roles', '==', 'PASTA')
        this.un = null
        this.state = {
            key: '',
            products: [],
            productdrink: [],
            productburger: [],
            productpasta: [],
        }
    }

    onCollection = (snapShot) => {
        const products = []
        snapShot.forEach((doc) => {
            const {name, url, title, price, roles} = doc.data();
            products.push({key: doc.id, name, url, title, price, roles})
            console.log(doc.id)
        });
        this.setState({
            products
        })
    }
    onCollectionDrink = (snapShot) => {
        const productdrink = []
        snapShot.forEach((doc) => {
            const {name, url, title, price, roles} = doc.data();
            productdrink.push({name, url, title, price, roles})
        })
        this.setState({
            productdrink
        })
    }

    onCollectionBurger = (snapShot) => {
        const productburger = []
        snapShot.forEach((doc) => {
            const {name, url, title, price, roles} = doc.data();
            productburger.push({name, url, title, price, roles})
        })
        this.setState({
            productburger
        })
    }

    onCollectionPasta = (snapShot) => {
        const productpasta = []
        snapShot.forEach((doc) => {
            const {name, url, title, price, roles} = doc.data();
            productpasta.push({name, url, title, price, roles})
        })
        this.setState({
            productpasta
        })
    }

    componentDidMount() {
        this.un = this.pizza.onSnapshot(this.onCollection);
        this.un = this.drink.onSnapshot(this.onCollectionDrink);
        this.un = this.burger.onSnapshot(this.onCollectionBurger);
        this.un = this.pasta.onSnapshot(this.onCollectionPasta)
    }

    handleClick = (id) => {
        this.props.addToCart();
        alert("Add item!")
    };

    onSave = () => {
        console.log(this.state.id)
        alert(1)
    };

    render() {
        return (
            <div>
                <input type="checkbox" name='check' value="123"/>
                <input type="checkbox" name='check1' value="1a23"/>
                <input type="checkbox" name='check2' value="12aa"/>
                <button onClick={this.onSave}>sss</button>
                <div id='demo'></div>
                <StickyCart/>
                <section
                    className="home-slider owl-carousel img"
                    style={{backgroundImage: "url(images/bg_1.jpg)"}}
                >
                    <div className="slider-item">
                        <div className="overlay"/>
                        <div className="container">
                            <div
                                className="row slider-text align-items-center"
                                data-scrollax-parent="true"
                            >
                                <div className="col-md-6 col-sm-12 ftco-animate">
                                    <span className="subheading">Delicious</span>
                                    <h1 className="mb-4">Italian Cuizine</h1>
                                    <p className="mb-4 mb-md-5">
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia.
                                    </p>
                                </div>
                                <div className="col-md-6 ftco-animate">
                                    <img src="images/bg_1.png" className="img-fluid" alt/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-intro">
                    <div className="container-wrap">
                        <div className="wrap d-md-flex">
                            <div className="info">
                                <div className="row no-gutters">
                                    <div className="col-md-4 d-flex ftco-animate">
                                        <div className="icon">
                                            <span className="icon-phone"/>
                                        </div>
                                        <div className="text">
                                            <h3>000 (123) 456 7890</h3>
                                            <p>A small river named Duden flows</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex ftco-animate">
                                        <div className="icon">
                                            <span className="icon-my_location"/>
                                        </div>
                                        <div className="text">
                                            <h3>198 West 21th Street</h3>
                                            <p>Suite 721 New York NY 10016</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex ftco-animate">
                                        <div className="icon">
                                            <span className="icon-clock-o"/>
                                        </div>
                                        <div className="text">
                                            <h3>Open Monday-Friday</h3>
                                            <p>8:00am - 9:00pm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="social d-md-flex pl-md-5 p-4 align-items-center">
                                <ul className="social-icon">
                                    <li className="ftco-animate">
                                        <a href="#">
                                            <span className="icon-twitter"/>
                                        </a>
                                    </li>
                                    <li className="ftco-animate">
                                        <a href="#">
                                            <span className="icon-facebook"/>
                                        </a>
                                    </li>
                                    <li className="ftco-animate">
                                        <a href="#">
                                            <span className="icon-instagram"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-about d-md-flex">
                    <div
                        className="one-half img"
                        style={{backgroundImage: "url(images/about.jpg)"}}
                    />
                    <div className="one-half ftco-animate">
                        <div className="heading-section ftco-animate ">
                            <h2 className="mb-4">
                                Welcome to <span className="flaticon-pizza">Pizza</span> A Restaurant
                            </h2>
                        </div>
                        <div>
                            <p>
                                On her way she met a copy. The copy warned the Little Blind Text, that
                                where it came from it would have been rewritten a thousand times and
                                everything that was left from its origin would be the word "and" and
                                the Little Blind Text should turn around and return to its own, safe
                                country. But nothing the copy said could convince her and so it didn’t
                                take long until a few insidious Copy Writers ambushed her, made her
                                drunk with Longe and Parole and dragged her into their agency, where
                                they abused her for their.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="ftco-section ftco-services">
                    <div className="overlay"/>
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 heading-section ftco-animate text-center">
                                <h2 className="mb-4">Our Services</h2>
                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 ftco-animate">
                                <div className="media d-block text-center block-6 services">
                                    <div className="icon d-flex justify-content-center align-items-center mb-5">
                                        <span className="flaticon-diet"/>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="heading">Healthy Foods</h3>
                                        <p>
                                            Even the all-powerful Pointing has no control about the blind
                                            texts it is an almost unorthographic.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ftco-animate">
                                <div className="media d-block text-center block-6 services">
                                    <div className="icon d-flex justify-content-center align-items-center mb-5">
                                        <span className="flaticon-bicycle"/>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="heading">Fastest Delivery</h3>
                                        <p>
                                            Even the all-powerful Pointing has no control about the blind
                                            texts it is an almost unorthographic.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ftco-animate">
                                <div className="media d-block text-center block-6 services">
                                    <div className="icon d-flex justify-content-center align-items-center mb-5">
                                        <span className="flaticon-pizza-1"/>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="heading">Original Recipes</h3>
                                        <p>
                                            Even the all-powerful Pointing has no control about the blind
                                            texts it is an almost unorthographic.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 heading-section ftco-animate text-center">
                                <h2 className="mb-4">Hot Pizza Meals</h2>
                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container-wrap">
                        <div className="row no-gutters d-flex">
                            {this.state.products.slice(0, 3).map(item => (
                                <div className="col-lg-4 d-flex ftco-animate">
                                    <div className="services-wrap d-flex">
                                        <a href="#" className="img gallery d-flex align-items-center"
                                           data-toggle="modal" data-target=".bd-example-modal-lg"
                                           style={{backgroundImage: "url(" + item.url + ")"}}
                                        >
                                            <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                                <span className="icon-search"/>
                                            </div>
                                        </a>
                                        <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog"
                                             aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                            <Modal/>
                                        </div>
                                        <div className="text p-4">
                                            <h3 id="name">{item.name}</h3>
                                            <p id="title">
                                                {item.title}
                                            </p>
                                            <p className="price">
                                                <span id="price">${item.price}</span>{" "}
                                                <a href="javascript:void (0)"
                                                   className="ml-2 btn btn-white btn-outline-white">
                                                    Order
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="container-wrap">
                        <div className="row no-gutters d-flex">
                            {this.state.products.slice(3, 6).map(item => (
                                <div className="col-lg-4 d-flex ftco-animate">
                                    <div className="services-wrap d-flex">
                                        <div className="text p-4">
                                            <h3>{item.name}</h3>
                                            <p>
                                                {item.title}
                                            </p>
                                            <p className="price">
                                                <span>${item.price}</span>{" "}
                                                <a href="#" className="ml-2 btn btn-white btn-outline-white">
                                                    Order
                                                </a>
                                            </p>
                                        </div>
                                        <a href="#" className="img gallery d-flex align-items-center"
                                           data-toggle="modal" data-target=".bd-example-modal-lg"
                                           style={{backgroundImage: "url(" + item.url + ")"}}
                                        >
                                            <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                                <span className="icon-search"/>
                                            </div>
                                        </a>
                                        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                            <Modal/>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
                            <div className="col-md-7 heading-section text-center ftco-animate">
                                <h2 className="mb-4">Our Menu Pricing</h2>
                                <p className="flip">
                                    <span className="deg1"/>
                                    <span className="deg2"/>
                                    <span className="deg3"/>
                                </p>
                                <p className="mt-5">
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                {this.state.products.slice(0, 3).map(item => (
                                    <div className="pricing-entry d-flex ftco-animate">
                                        <div
                                            className="img"
                                            style={{backgroundImage: "url(" + item.url + ")"}}
                                        />
                                        <div className="desc pl-3">
                                            <div className="d-flex text align-items-center">
                                                <h3>
                                                    <span>{item.name}</span>
                                                </h3>
                                                <span className="price">{item.price}</span>
                                            </div>
                                            <div className="d-block">
                                                <p>{item.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/*             */}
                            <div className="col-md-6">
                                {this.state.products.slice(3, 6).map(meals => (
                                    <div className="pricing-entry d-flex ftco-animate">
                                        <div
                                            className="img"
                                            style={{backgroundImage: "url(" + meals.url + ")"}}
                                        />
                                        <div className="desc pl-3">
                                            <div className="d-flex text align-items-center">
                                                <h3>
                                                    <span>{meals.name}</span>
                                                </h3>
                                                <span className="price">{meals.price}</span>
                                            </div>
                                            <div className="d-block">
                                                <p>{meals.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-gallery">
                    <div className="container-wrap">
                        <div className="row no-gutters">
                            <div className="col-md-3 ftco-animate">
                                <a
                                    href="gallery.html"
                                    className="gallery img d-flex align-items-center"
                                    style={{backgroundImage: "url(images/gallery-1.jpg)", height: '300px'}}
                                >
                                    <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                        <span className="icon-search"/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 ftco-animate">
                                <a
                                    href="gallery.html"
                                    className="gallery img d-flex align-items-center"
                                    style={{backgroundImage: "url(images/gallery-2.jpg)", height: '300px'}}
                                >
                                    <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                        <span className="icon-search"/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 ftco-animate">
                                <a
                                    href="gallery.html"
                                    className="gallery img d-flex align-items-center"
                                    style={{backgroundImage: "url(images/gallery-3.jpg)", height: '300px'}}
                                >
                                    <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                        <span className="icon-search"/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 ftco-animate">
                                <a
                                    href="gallery.html"
                                    className="gallery img d-flex align-items-center"
                                    style={{backgroundImage: "url(images/gallery-4.jpg)", height: '300px'}}
                                >
                                    <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                        <span className="icon-search"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="ftco-counter ftco-bg-dark img"
                    id="section-counter"
                    style={{backgroundImage: "url(images/bg_2.jpg)"}}
                    data-stellar-background-ratio="0.5"
                >
                    <div className="overlay"/>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="row">
                                    <div
                                        className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <div className="icon">
                                                    <span className="flaticon-pizza-1"/>
                                                </div>
                                                <strong className="number" data-number={100}>
                                                    0
                                                </strong>
                                                <span>Pizza Branches</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <div className="icon">
                                                    <span className="flaticon-medal"/>
                                                </div>
                                                <strong className="number" data-number={85}>
                                                    0
                                                </strong>
                                                <span>Number of Awards</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <div className="icon">
                                                    <span className="flaticon-laugh"/>
                                                </div>
                                                <strong className="number" data-number={10567}>
                                                    0
                                                </strong>
                                                <span>Happy Customer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <div className="icon">
                                                    <span className="flaticon-chef"/>
                                                </div>
                                                <strong className="number" data-number={900}>
                                                    0
                                                </strong>
                                                <span>Staff</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-menu">
                    <div className="container-fluid">
                        <div className="row d-md-flex">
                            <div
                                className="col-lg-4 ftco-animate img f-menu-img mb-5 mb-md-0"
                                style={{backgroundImage: "url(images/about.jpg)"}}
                            ></div>
                            <div className="col-lg-8 ftco-animate p-md-5">
                                <div className="row">
                                    <div className="col-md-12 nav-link-wrap mb-5">
                                        <div
                                            className="nav ftco-animate nav-pills"
                                            id="v-pills-tab"
                                            role="tablist"
                                            aria-orientation="vertical"
                                        >
                                            <a
                                                className="nav-link active"
                                                id="v-pills-1-tab"
                                                data-toggle="pill"
                                                href="#v-pills-1"
                                                role="tab"
                                                aria-controls="v-pills-1"
                                                aria-selected="true"
                                            >
                                                Pizza
                                            </a>
                                            <a
                                                className="nav-link"
                                                id="v-pills-2-tab"
                                                data-toggle="pill"
                                                href="#v-pills-2"
                                                role="tab"
                                                aria-controls="v-pills-2"
                                                aria-selected="false"
                                            >
                                                Drinks
                                            </a>
                                            <a
                                                className="nav-link"
                                                id="v-pills-3-tab"
                                                data-toggle="pill"
                                                href="#v-pills-3"
                                                role="tab"
                                                aria-controls="v-pills-3"
                                                aria-selected="false"
                                            >
                                                Burgers
                                            </a>
                                            <a
                                                className="nav-link"
                                                id="v-pills-4-tab"
                                                data-toggle="pill"
                                                href="#v-pills-4"
                                                role="tab"
                                                aria-controls="v-pills-4"
                                                aria-selected="false"
                                            >
                                                Pasta
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-12 d-flex align-items-center">
                                        <div className="tab-content ftco-animate" id="v-pills-tabContent">
                                            <div
                                                className="tab-pane fade show active"
                                                id="v-pills-1"
                                                role="tabpanel"
                                                aria-labelledby="v-pills-1-tab"
                                            >
                                                <div className="row">

                                                    {this.state.products.slice(0, 3).map(cart =>
                                                        <div className="col-md-4 text-center">
                                                            <div className="menu-wrap">
                                                                <a
                                                                    href="#"
                                                                    className="menu-img img mb-4"
                                                                    style={{backgroundImage: "url(" + cart.url + ")"}}
                                                                />
                                                                <div className="text">
                                                                    <h3>
                                                                        <a href="#">{cart.name}</a>
                                                                    </h3>
                                                                    <p>
                                                                        {cart.title}
                                                                    </p>
                                                                    <p className="price">
                                                                        <span>${cart.price}</span>
                                                                    </p>
                                                                    <p>
                                                                        <a
                                                                            href="#"
                                                                            className="btn btn-white btn-outline-white"
                                                                        >
                                                                            Add to cart
                                                                        </a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="v-pills-2"
                                                role="tabpanel"
                                                aria-labelledby="v-pills-2-tab"
                                            >
                                                <div className="row">
                                                    {this.state.productdrink.slice(0, 3).map(drink =>
                                                        <div className="col-md-4 text-center">
                                                            <div className="menu-wrap">
                                                                <a
                                                                    href="#"
                                                                    className="menu-img img mb-4"
                                                                    style={{backgroundImage: "url(" + drink.url + ")"}}
                                                                />
                                                                <div className="text">
                                                                    <h3>
                                                                        <a href="#">{drink.name}</a>
                                                                    </h3>
                                                                    <p>
                                                                        {drink.title}
                                                                    </p>
                                                                    <p className="price">
                                                                        <span>${drink.price}</span>
                                                                    </p>
                                                                    <p>
                                                                        <a
                                                                            href="#"
                                                                            className="btn btn-white btn-outline-white"
                                                                        >
                                                                            Add to cart
                                                                        </a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="v-pills-3"
                                                role="tabpanel"
                                                aria-labelledby="v-pills-3-tab"
                                            >
                                                <div className="row">
                                                    {this.state.productburger.slice(0, 3).map(burger =>
                                                        <div className="col-md-4 text-center">
                                                            <div className="menu-wrap">
                                                                <a
                                                                    href="#"
                                                                    className="menu-img img mb-4"
                                                                    style={{backgroundImage: "url(" + burger.url + ")"}}
                                                                />
                                                                <div className="text">
                                                                    <h3>
                                                                        <a href="#">{burger.name}</a>
                                                                    </h3>
                                                                    <p>
                                                                        {burger.title}
                                                                    </p>
                                                                    <p className="price">
                                                                        <span>${burger.price}</span>
                                                                    </p>
                                                                    <p>
                                                                        <a
                                                                            href="#"
                                                                            className="btn btn-white btn-outline-white"
                                                                        >
                                                                            Add to cart
                                                                        </a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="v-pills-4"
                                                role="tabpanel"
                                                aria-labelledby="v-pills-4-tab"
                                            >
                                                <div className="row">
                                                    {this.state.productpasta.slice(0, 3).map(pasta =>
                                                        <div className="col-md-4 text-center">
                                                            <div className="menu-wrap">
                                                                <a
                                                                    href="#"
                                                                    className="menu-img img mb-4"
                                                                    style={{backgroundImage: "url(" + pasta.url + ")"}}
                                                                />
                                                                <div className="text">
                                                                    <h3>
                                                                        <a href="#">{pasta.name}</a>
                                                                    </h3>
                                                                    <p>
                                                                        {pasta.title}
                                                                    </p>
                                                                    <p className="price">
                                                                        <span>${pasta.price}</span>
                                                                    </p>
                                                                    <p>
                                                                        <a
                                                                            href="#"
                                                                            className="btn btn-white btn-outline-white"
                                                                        >
                                                                            Add to cart
                                                                        </a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 heading-section ftco-animate text-center">
                                <h2 className="mb-4">Recent from blog</h2>
                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts.
                                </p>
                            </div>
                        </div>
                        <div className="row d-flex">
                            <div className="col-md-4 d-flex ftco-animate">
                                <div className="blog-entry align-self-stretch">
                                    <a
                                        href="blog-single.html"
                                        className="block-20"
                                        style={{backgroundImage: 'url("images/image_1.jpg")'}}
                                    ></a>
                                    <div className="text py-4 d-block">
                                        <div className="meta">
                                            <div>
                                                <a href="#">Sept 10, 2018</a>
                                            </div>
                                            <div>
                                                <a href="#">Admin</a>
                                            </div>
                                            <div>
                                                <a href="#" className="meta-chat">
                                                    <span className="icon-chat"/> 3
                                                </a>
                                            </div>
                                        </div>
                                        <h3 className="heading mt-2">
                                            <a href="#">The Delicious Pizza</a>
                                        </h3>
                                        <p>
                                            A small river named Duden flows by their place and supplies it
                                            with the necessary regelialia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex ftco-animate">
                                <div className="blog-entry align-self-stretch">
                                    <a
                                        href="blog-single.html"
                                        className="block-20"
                                        style={{backgroundImage: 'url("images/image_2.jpg")'}}
                                    ></a>
                                    <div className="text py-4 d-block">
                                        <div className="meta">
                                            <div>
                                                <a href="#">Sept 10, 2018</a>
                                            </div>
                                            <div>
                                                <a href="#">Admin</a>
                                            </div>
                                            <div>
                                                <a href="#" className="meta-chat">
                                                    <span className="icon-chat"/> 3
                                                </a>
                                            </div>
                                        </div>
                                        <h3 className="heading mt-2">
                                            <a href="#">The Delicious Pizza</a>
                                        </h3>
                                        <p>
                                            A small river named Duden flows by their place and supplies it
                                            with the necessary regelialia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex ftco-animate">
                                <div className="blog-entry align-self-stretch">
                                    <a
                                        href="blog-single.html"
                                        className="block-20"
                                        style={{backgroundImage: 'url("images/image_3.jpg")'}}
                                    ></a>
                                    <div className="text py-4 d-block">
                                        <div className="meta">
                                            <div>
                                                <a href="#">Sept 10, 2018</a>
                                            </div>
                                            <div>
                                                <a href="#">Admin</a>
                                            </div>
                                            <div>
                                                <a href="#" className="meta-chat">
                                                    <span className="icon-chat"/> 3
                                                </a>
                                            </div>
                                        </div>
                                        <h3 className="heading mt-2">
                                            <a href="#">The Delicious Pizza</a>
                                        </h3>
                                        <p>
                                            A small river named Duden flows by their place and supplies it
                                            with the necessary regelialia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-appointment">
                    <div className="overlay"/>
                    <div className="container-wrap">
                        <div className="row no-gutters d-md-flex align-items-center">
                            <div className="col-md-6 d-flex align-self-stretch">
                                <div id="map"/>
                            </div>
                            <div className="col-md-6 appointment ftco-animate">
                                <h3 className="mb-3">Contact Us</h3>
                                <form action="#" className="appointment-form">
                                    <div className="d-md-flex">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="First Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-me-flex">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
              <textarea
                  name
                  id
                  cols={30}
                  rows={3}
                  className="form-control"
                  placeholder="Message"
                  defaultValue={""}
              />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            defaultValue="Send"
                                            className="btn btn-primary py-3 px-4"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="ftco-footer ftco-section img">
                    <div className="overlay"/>
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2">About Us</h2>
                                    <p>
                                        Far far away, behind the word mountains, far from the countries
                                        Vokalia and Consonantia, there live the blind texts.
                                    </p>
                                    <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                        <li className="ftco-animate">
                                            <a href="#">
                                                <span className="icon-twitter"/>
                                            </a>
                                        </li>
                                        <li className="ftco-animate">
                                            <a href="#">
                                                <span className="icon-facebook"/>
                                            </a>
                                        </li>
                                        <li className="ftco-animate">
                                            <a href="#">
                                                <span className="icon-instagram"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-5 mb-md-5">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2">Recent Blog</h2>
                                    <div className="block-21 mb-4 d-flex">
                                        <a
                                            className="blog-img mr-4"
                                            style={{backgroundImage: "url(images/image_1.jpg)"}}
                                        />
                                        <div className="text">
                                            <h3 className="heading">
                                                <a href="#">
                                                    Even the all-powerful Pointing has no control about
                                                </a>
                                            </h3>
                                            <div className="meta">
                                                <div>
                                                    <a href="#">
                                                        <span className="icon-calendar"/> Sept 15, 2018
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href="#">
                                                        <span className="icon-person"/> Admin
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href="#">
                                                        <span className="icon-chat"/> 19
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-21 mb-4 d-flex">
                                        <a
                                            className="blog-img mr-4"
                                            style={{backgroundImage: "url(images/image_2.jpg)"}}
                                        />
                                        <div className="text">
                                            <h3 className="heading">
                                                <a href="#">
                                                    Even the all-powerful Pointing has no control about
                                                </a>
                                            </h3>
                                            <div className="meta">
                                                <div>
                                                    <a href="#">
                                                        <span className="icon-calendar"/> Sept 15, 2018
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href="#">
                                                        <span className="icon-person"/> Admin
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href="#">
                                                        <span className="icon-chat"/> 19
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-5 mb-md-5">
                                <div className="ftco-footer-widget mb-4 ml-md-4">
                                    <h2 className="ftco-heading-2">Services</h2>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#" className="py-2 d-block">
                                                Cooked
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="py-2 d-block">
                                                Deliver
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="py-2 d-block">
                                                Quality Foods
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="py-2 d-block">
                                                Mixed
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2">Have a Questions?</h2>
                                    <div className="block-23 mb-3">
                                        <ul>
                                            <li>
                                                <span className="icon icon-map-marker"/>
                                                <span className="text">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </span>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon icon-phone"/>
                                                    <span className="text">+2 392 3929 210</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon icon-envelope"/>
                                                    <span className="text">info@yourdomain.com</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <p>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    Copyright © All rights reserved | This template is made with{" "}
                                    <i className="icon-heart" aria-hidden="true"/> by{" "}
                                    <a href="https://colorlib.com" target="_blank">
                                        Colorlib
                                    </a>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        )


    }

    // render() {
    //     const item_pizza = this.props.items.filter(item => item.cate_id === 1 && item.cate_id_home === 1);
    //     const item_drink = this.props.items.filter(item => item.cate_id === 2 && item.cate_id_home === 3);
    //     const item_burger = this.props.items.filter(item => item.cate_id === 3);
    //     const item_pasta = this.props.items.filter(item => item.cate_id === 4);
    //     const item_pizza_hot1 = this.props.items.filter(item => item.cate_id === 1 && item.cate_id_home === 1);
    //     const item_pizza_hot2 = this.props.items.filter(item => item.cate_id === 1 && item.cate_id_home === 2);
    //
    //
    //     let listItem_pizza = item_pizza.map(item => {
    //         return (
    //             <div className="col-md-4 text-center">
    //                 <div className="menu-wrap">
    //                     <a className="menu-img img mb-4"
    //                        style={{backgroundImage: "url(" + item.img + ")"}}/>
    //                     <div className="text">
    //                         <p>{item.desc}</p>
    //                         <h3><a href="#">{item.title}</a></h3>
    //                         <p className="price"><span>${item.price}</span></p>
    //                         <p><a className="btn btn-white btn-outline-white"
    //                               onClick={() => {
    //                                   this.handleClick(item.id)
    //                               }}>
    //                             Add to cart</a>
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     });
    //     let listItem_drink = item_drink.map(item => {
    //         return (
    //             <div className="col-md-4 text-center">
    //                 <div className="menu-wrap">
    //                     <a className="menu-img img mb-4"
    //                        style={{backgroundImage: "url(" + item.img + ")"}}/>
    //                     <div className="text">
    //                         <h3><a href="#">{item.title}</a></h3>
    //                         <p>{item.desc}</p>
    //                         <p className="price"><span>${item.price}</span></p>
    //                         <p><a className="btn btn-white btn-outline-white"
    //                               onClick={() => {
    //                                   this.handleClick(item.id)
    //                               }}>
    //                             Add to cart</a>
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     });
    //     let listItem_burger = item_burger.map(item => {
    //         return (
    //             <div className="col-md-4 text-center">
    //                 <div className="menu-wrap">
    //                     <a className="menu-img img mb-4"
    //                        style={{backgroundImage: "url(" + item.img + ")"}}/>
    //                     <div className="text">
    //                         <h3><a href="#">{item.title}</a></h3>
    //                         <p>{item.desc}</p>
    //                         <p className="price"><span>${item.price}</span></p>
    //                         <p><a className="btn btn-white btn-outline-white"
    //                               onClick={() => {
    //                                   this.handleClick(item.id)
    //                               }}>
    //                             Add to cart</a>
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     });
    //     let listItem_pasta = item_pasta.map(item => {
    //         return (
    //             <div className="col-md-4 text-center">
    //                 <div className="menu-wrap">
    //                     <a className="menu-img img mb-4"
    //                        style={{backgroundImage: "url(" + item.img + ")"}}/>
    //                     <div className="text">
    //                         <h3><a href="#">{item.title}</a></h3>
    //                         <p>{item.desc}</p>
    //                         <p className="price"><span>${item.price}</span></p>
    //                         <p><a className="btn btn-white btn-outline-white"
    //                               onClick={() => {
    //                                   this.handleClick(item.id)
    //                               }}>
    //                             Add to cart</a>
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     });
    //     let listItem_pizza_hot1 = item_pizza_hot1.map(item => {
    //         return (
    //             <div className="col-lg-4 d-flex ftco-animate">
    //                 <div className="services-wrap d-flex">
    //                     <a className="gallery img d-flex align-items-center" data-toggle="modal"
    //                        data-target=".bd-example-modal-lg"
    //                        style={{backgroundImage: "url(" + item.img + ")"}}>
    //                         <div className="icon mb-4 d-flex align-items-center justify-content-center">
    //                             <span className="icon-search"/>
    //                         </div>
    //                     </a>
    //                     <div className="modal fade" role="dialog"
    //                          aria-labelledby="myLargeModalLabel" aria-hidden="true">
    //                         <div className="modal-dialog modal-lg">
    //                             <div className="modal-content"
    //                                  style={{backgroundImage: "url(" + '../../images/bg_4.jpg' + ")"}}>
    //                                 <div className="col-form-label-lg container card-deck mb-3 text-center"
    //                                      style={modalProducts}>
    //                                     <div className="col-lg-5">
    //                                         <div className="text-center text-dark">
    //                                             <h2 className="my-0 font-weight-normal"
    //                                                 style={{color: "#78d5ef"}}>{item.title}</h2>
    //                                         </div>
    //                                         <div className="card-body">
    //                                             <h1 className="card-title pricing-card-title">${item.price}<small
    //                                                 className="text-muted">/ pcs</small></h1>
    //                                             <ul className="list-unstyled mt-3 mb-4">
    //                                                 <li>
    //                                                     {item.desc}
    //                                                 </li>
    //                                             </ul>
    //                                             <img className="img" src="../../images/pizza-1.jpg"
    //                                                  style={imgModelProducts}/>
    //                                         </div>
    //                                     </div>
    //                                     <div className="col-lg-7">
    //                                         <div className="text-lg-left tll1">
    //                                             <h4 className="my-0 font-weight-normal"
    //                                                 style={{color: "#78d5ef"}}>Choose the cake
    //                                                 size</h4>
    //                                             <div className="row">
    //                                                 <div className="col-1 text-lg-left">
    //                                                     <input type="radio"
    //                                                            value="Medium size - 9 inches"
    //                                                            name="gender"
    //                                                            style={inputCheckSizeCake}/>
    //                                                 </div>
    //                                                 <div className="col-5">
    //                                                     <p style={{fontSize: 16}}>Medium size - 9
    //                                                         inches</p>
    //                                                 </div>
    //                                                 <div className="col-1">
    //                                                     <input type="radio"
    //                                                            value="Large size - 12 inches"
    //                                                            name="gender"
    //                                                            style={inputCheckSizeCake}/>
    //                                                 </div>
    //                                                 <div className="col-5">
    //                                                     <p style={{fontSize: 16}}>Large size - 12
    //                                                         inches</p>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //
    //                                         <div className="text-lg-left tll2">
    //                                             <h4 className="my-0 font-weight-normal"
    //                                                 style={{color: "#78d5ef"}}>Choose the cake
    //                                                 base</h4>
    //                                             <div className="row">
    //                                                 <div className="col-1 text-lg-left">
    //                                                     <input type="radio" value="Thin sole"
    //                                                            name="gender"
    //                                                            style={inputCheckSizeCake}/>
    //                                                 </div>
    //                                                 <div className="col-3">
    //                                                     <p style={{fontSize: 16}}>Thin sole</p>
    //                                                 </div>
    //                                                 <div className="col-1">
    //                                                     <input type="radio" value="Platform"
    //                                                            name="gender"
    //                                                            style={inputCheckSizeCake}/>
    //                                                 </div>
    //                                                 <div className="col-3">
    //                                                     <p style={{fontSize: 16}}>Platform</p>
    //                                                 </div>
    //                                                 <div className="col-1">
    //                                                     <input type="radio" value="Medium"
    //                                                            name="gender"
    //                                                            style={inputCheckSizeCake}/>
    //                                                 </div>
    //                                                 <div className="col-3">
    //                                                     <p style={{fontSize: 16}}>Medium</p>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //
    //                                         <div className="text-lg-left tll3">
    //                                             <h4 className="my-0 font-weight-normal"
    //                                                 style={{color: "#78d5ef"}}>Additional
    //                                                 options</h4>
    //                                             <div className="text-lg-left">
    //                                                 <div className="row">
    //                                                     <input type="radio"
    //                                                            value="Medium size - 9 inches"
    //                                                            name="gender" style={inputOption}/>
    //                                                     <p style={titleOption}>Add the cheese
    //                                                         --------------- 2.0$</p>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="text-lg-left">
    //                                                 <div className="row">
    //                                                     <input type="radio"
    //                                                            value="Large size - 12 inches"
    //                                                            name="gender" style={inputOption}/>
    //                                                     <p style={titleOption}>Double the cheese
    //                                                         --------------- 4.0$</p>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="text-lg-left">
    //                                                 <div className="row">
    //                                                     <input type="radio"
    //                                                            value="Large size - 12 inches"
    //                                                            name="gender" style={inputOption}/>
    //                                                     <p style={titleOption}>Triple the cheese
    //                                                         --------------- 6.0$</p>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //
    //                                         <div className="text-lg-left tll4">
    //                                             <h4 className="my-0 font-weight-normal"
    //                                                 style={{color: "#78d5ef"}}>Border option</h4>
    //                                             <div className="text-lg-left">
    //                                                 <div className="row">
    //                                                     <input type="radio"
    //                                                            value="Medium size - 9 inches"
    //                                                            name="gender" style={inputOption}/>
    //                                                     <p style={titleOption}>Cheese border
    //                                                         --------------- 25.0$</p>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //
    //                                         <div className="card-body" style={{color: "#ffffff"}}>
    //                                             <ul className="list-unstyled mt-3 mb-4">
    //                                                 <li style={{fontSize: 18}}>Discount 50% for 2nd Pizza -
    //                                                     WEEKLY
    //                                                     promotion: Discount when buying 9 "/ 12"
    //                                                     pizza with lower price and same size. Free
    //                                                     30 'shipping with orders from 5.0$
    //                                                 </li>
    //                                             </ul>
    //                                             <button type="button"
    //                                                     className="btn btn-lg btn-block btn-primary"
    //                                                     style={{color: "#78d5ef"}}>
    //                                                 <p style={{fontSize: 17}}>Buy By Promotions</p>
    //                                             </button>
    //                                             <button type="button"
    //                                                     className="btn btn-lg btn-block btn-primary"
    //                                                     style={{color: "#78d5ef"}}>
    //                                                 <p style={{fontSize: 17}}>Normal Order</p>
    //                                             </button>
    //                                         </div>
    //                                     </div>
    //
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className="text p-4">
    //                         <h3>{item.title}</h3>
    //                         <p>{item.desc}</p>
    //                         <p className="price"><span>${item.price}</span>
    //                             <a className="ml-2 btn btn-white btn-outline-white"
    //                                onClick={() => {
    //                                    this.handleClick(item.id)
    //                                }}>Order</a>
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     });
    //     let listItem_pizza_hot2 = item_pizza_hot2.map(item => {
    //         return (
    //             <div className="col-lg-4 d-flex ftco-animate">
    //                 <div className="services-wrap d-flex">
    //                     <a className="img order-lg-last gallery d-flex align-items-center" data-toggle="modal"
    //                        data-target=".bd-example-modal-lg"
    //                        style={{backgroundImage: "url(" + item.img + ")"}}>
    //                         <div className="icon mb-4 d-flex align-items-center justify-content-center">
    //                             <span className="icon-search"/>
    //                         </div>
    //                     </a>
    //                     <div className="modal fade bd-example-modal-lg" role="dialog"
    //                          aria-hidden="true">
    //                         <div className="modal-dialog modal-lg">
    //                             <div className="modal-content"
    //                                  style={{backgroundImage: "url(" + '../../images/bg_4.jpg' + ")"}}>
    //                                 <div className="col-form-label-lg container card-deck mb-3 text-center"
    //                                      style={modalProducts}>
    //                                     <div className="col-lg-5">
    //                                         <div className="text-center text-dark">
    //                                             <h2 className="my-0 font-weight-normal"
    //                                                 style={{color: "#78d5ef"}}>{item.title}</h2>
    //                                         </div>
    //                                         <div className="card-body">
    //                                             <h1 className="card-title pricing-card-title">${item.price}<small
    //                                                 className="text-muted">/ pcs</small></h1>
    //                                             <ul className="list-unstyled mt-3 mb-4">
    //                                                 <li>
    //                                                     {item.desc}
    //                                                 </li>
    //                                             </ul>
    //                                             <img className="img" src="../../images/pizza-1.jpg"
    //                                                  style={imgModelProducts}/>
    //                                         </div>
    //                                     </div>
    //                                     <div className="col-lg-7">
    //                                         <div className="text-lg-left tll1">
    //                                             <h4 className="my-0 font-weight-normal"
    //                                                 style={{color: "#78d5ef"}}>Choose the cake
    //                                                 size</h4>
    //                                             <div className="row">
    //                                                 <div className="col-1 text-lg-left">
    //                                                     <input type="radio"
    //                                                            value="Medium size - 9 inches"
    //                                                            name="gender"
    //                                                            style={inputCheckSizeCake}/>
    //                                                 </div>
    //                                                 <div className="col-5">
    //                                                     <p style={{fontSize: 16}}>Medium size - 9
    //                                                         inches</p>
    //                                                 </div>
    //                                                 <div className="col-1">
    //                                                     <input type="radio"
    //                                                            value="Large size - 12 inches"
    //                                                            name="gender"
    //                                                            style={inputCheckSizeCake}/>
    //                                                 </div>
    //                                                 <div className="col-5">
    //                                                     <p style={{fontSize: 16}}>Large size - 12
    //                                                         inches</p>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //
    //                                         <div className="text-lg-left tll2">
    //                                             <h4 className="my-0 font-weight-normal"
    //                                                 style={{color: "#78d5ef"}}>Choose the cake
    //                                                 base</h4>
    //                                             <div className="row">
    //                                                 <div className="col-1 text-lg-left">
    //                                                     <input type="radio" value="Thin sole"
    //                                                            name="gender"
    //                                                            style={inputCheckSizeCake}/>
    //                                                 </div>
    //                                                 <div className="col-3">
    //                                                     <p style={{fontSize: 16}}>Thin sole</p>
    //                                                 </div>
    //                                                 <div className="col-1">
    //                                                     <input type="radio" value="Platform"
    //                                                            name="gender"
    //                                                            style={inputCheckSizeCake}/>
    //                                                 </div>
    //                                                 <div className="col-3">
    //                                                     <p style={{fontSize: 16}}>Platform</p>
    //                                                 </div>
    //                                                 <div className="col-1">
    //                                                     <input type="radio" value="Medium"
    //                                                            name="gender"
    //                                                            style={inputCheckSizeCake}/>
    //                                                 </div>
    //                                                 <div className="col-3">
    //                                                     <p style={{fontSize: 16}}>Medium</p>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //
    //                                         <div className="text-lg-left tll3">
    //                                             <h4 className="my-0 font-weight-normal"
    //                                                 style={{color: "#78d5ef"}}>Additional
    //                                                 options</h4>
    //                                             <div className="text-lg-left">
    //                                                 <div className="row">
    //                                                     <input type="radio"
    //                                                            value="Medium size - 9 inches"
    //                                                            name="gender" style={inputOption}/>
    //                                                     <p style={titleOption}>Add the cheese
    //                                                         --------------- 2.0$</p>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="text-lg-left">
    //                                                 <div className="row">
    //                                                     <input type="radio"
    //                                                            value="Large size - 12 inches"
    //                                                            name="gender" style={inputOption}/>
    //                                                     <p style={titleOption}>Double the cheese
    //                                                         --------------- 4.0$</p>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="text-lg-left">
    //                                                 <div className="row">
    //                                                     <input type="radio"
    //                                                            value="Large size - 12 inches"
    //                                                            name="gender" style={inputOption}/>
    //                                                     <p style={titleOption}>Triple the cheese
    //                                                         --------------- 6.0$</p>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //
    //                                         <div className="text-lg-left tll4">
    //                                             <h4 className="my-0 font-weight-normal"
    //                                                 style={{color: "#78d5ef"}}>Border option</h4>
    //                                             <div className="text-lg-left">
    //                                                 <div className="row">
    //                                                     <input type="radio"
    //                                                            value="Medium size - 9 inches"
    //                                                            name="gender" style={inputOption}/>
    //                                                     <p style={titleOption}>Cheese border
    //                                                         --------------- 25.0$</p>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //
    //                                         <div className="card-body" style={{color: "#ffffff"}}>
    //                                             <ul className="list-unstyled mt-3 mb-4">
    //                                                 <li style={{fontSize: 18}}>Discount 50% for 2nd Pizza -
    //                                                     WEEKLY
    //                                                     promotion: Discount when buying 9 "/ 12"
    //                                                     pizza with lower price and same size. Free
    //                                                     30 'shipping with orders from 5.0$
    //                                                 </li>
    //                                             </ul>
    //                                             <button type="button"
    //                                                     className="btn btn-lg btn-block btn-primary"
    //                                                     style={{color: "#78d5ef"}}>
    //                                                 <p style={{fontSize: 17}}>Buy By Promotions</p>
    //                                             </button>
    //                                             <button type="button"
    //                                                     className="btn btn-lg btn-block btn-primary"
    //                                                     style={{color: "#78d5ef"}}>
    //                                                 <p style={{fontSize: 17}}>Normal Order</p>
    //                                             </button>
    //                                         </div>
    //                                     </div>
    //
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className="text p-4">
    //                         <h3>{item.title}</h3>
    //                         <p>{item.desc}</p>
    //                         <p className="price"><span>${item.price}</span>
    //                             <a className="ml-2 btn btn-white btn-outline-white"
    //                                onClick={() => {
    //                                    this.handleClick(item.id)
    //                                }}>Order</a>
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     });
    //     return (
    //         <div>
    //             <StickyCart/>
    //             <section className="home-slider owl-carousel img"
    //                      style={{backgroundImage: "url(" + '../../images/bg_1.jpg' + ")"}}>
    //                 <div className="slider-item">
    //                     <div className="overlay"/>
    //                     <div className="container">
    //                         <div className="row slider-text align-items-center" data-scrollax-parent="true">
    //                             <div className="col-md-6 col-sm-12">
    //                                 <span className="subheading">Delicious</span>
    //                                 <h1 className="mb-4">Italian Cuizine</h1>
    //                                 <p className="mb-4 mb-md-5">A small river named Duden flows by their place and
    //                                     supplies
    //                                     it with the
    //                                     necessary regelialia.</p>
    //                                 <p><a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3"
    //                                       style={{backgroundColor: "#fac564"}}>Order Now</a> <a
    //                                     href="#" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">
    //                                     <Link to="/menu">View Menu</Link></a>
    //                                 </p>
    //                             </div>
    //                             <div className="col-md-6">
    //                                 <img src="../../../../images/bg_1.png" className="img-fluid" alt=""/>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>
    //
    //             {/*infor*/}
    //             <section className="ftco-intro">
    //                 <div className="container-wrap">
    //                     <div className="wrap d-md-flex">
    //                         <div className="info">
    //                             <div className="row no-gutters">
    //                                 <div className="col-md-4 d-flex ftco-animate">
    //                                     <div className="icon"><span className="icon-phone"/></div>
    //                                     <div className="text">
    //                                         <h3>000 (123) 456 7890</h3>
    //                                         <p>A small river named Duden flows</p>
    //                                     </div>
    //                                 </div>
    //                                 <div className="col-md-4 d-flex ftco-animate">
    //                                     <div className="icon"><span className="icon-my_location"/></div>
    //                                     <div className="text">
    //                                         <h3>198 West 21th Street</h3>
    //                                         <p>Suite 721 New York NY 10016</p>
    //                                     </div>
    //                                 </div>
    //                                 <div className="col-md-4 d-flex ftco-animate">
    //                                     <div className="icon"><span className="icon-clock-o"/></div>
    //                                     <div className="text">
    //                                         <h3>Open Monday-Friday</h3>
    //                                         <p>8:00am - 9:00pm</p>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="social d-md-flex pl-md-5 p-4 align-items-center">
    //                             <ul className="social-icon">
    //                                 <li className="ftco-animate"><a href="#"><span className="icon-twitter"/></a>
    //                                 </li>
    //                                 <li className="ftco-animate"><a href="#"><span className="icon-facebook"/></a>
    //                                 </li>
    //                                 <li className="ftco-animate"><a href="#"><span className="icon-instagram"/></a>
    //                                 </li>
    //                             </ul>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>
    //
    //             {/*welcome + our service*/}
    //             <section className="ftco-about d-md-flex">
    //                 <div className="one-half img" style={{
    //                     backgroundImage: "url(" + '../../images/about.jpg' + ")"
    //                 }}>
    //                 </div>
    //                 <div className="one-half ftco-animate">
    //                     <div className="heading-section ftco-animate ">
    //                         <h2 className="mb-4">Welcome to <span className="flaticon-pizza">Pizza</span> A
    //                             Restaurant
    //                         </h2>
    //                     </div>
    //                     <div>
    //                         <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came
    //                             from
    //                             it would have
    //                             been rewritten a thousand times and everything that was left from its origin would
    //                             be
    //                             the word "and" and
    //                             the Little Blind Text should turn around and return to its own, safe country. But
    //                             nothing the copy said
    //                             could convince her and so it didn’t take long until a few insidious Copy Writers
    //                             ambushed her, made her
    //                             drunk with Longe and Parole and dragged her into their agency, where they abused her
    //                             for
    //                             their.</p>
    //                     </div>
    //                 </div>
    //             </section>
    //
    //             {/*Services*/}
    //             <section className="ftco-section ftco-services">
    //                 <div className="overlay"/>
    //                 <div className="container">
    //                     <div className="row justify-content-center mb-5 pb-3">
    //                         <div className="col-md-7 heading-section ftco-animate text-center">
    //                             <h2 className="mb-4">Our Services</h2>
    //                             <p>Far far away, behind the word mountains, far from the countries Vokalia and
    //                                 Consonantia, there live
    //                                 the blind texts.</p>
    //                         </div>
    //                     </div>
    //                     <div className="row">
    //                         <div className="col-md-4 ftco-animate">
    //                             <div className="media d-block text-center block-6 services">
    //                                 <div className="icon d-flex justify-content-center align-items-center mb-5">
    //                                     <span className="flaticon-diet"/>
    //                                 </div>
    //                                 <div className="media-body">
    //                                     <h3 className="heading">Healthy Foods</h3>
    //                                     <p>Even the all-powerful Pointing has no control about the blind texts it is
    //                                         an
    //                                         almost
    //                                         unorthographic.</p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="col-md-4 ftco-animate">
    //                             <div className="media d-block text-center block-6 services">
    //                                 <div className="icon d-flex justify-content-center align-items-center mb-5">
    //                                     <span className="flaticon-bicycle"/>
    //                                 </div>
    //                                 <div className="media-body">
    //                                     <h3 className="heading">Fastest Delivery</h3>
    //                                     <p>Even the all-powerful Pointing has no control about the blind texts it is
    //                                         an
    //                                         almost
    //                                         unorthographic.</p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="col-md-4 ftco-animate">
    //                             <div className="media d-block text-center block-6 services">
    //                                 <div className="icon d-flex justify-content-center align-items-center mb-5">
    //                                     <span className="flaticon-pizza-1"/></div>
    //                                 <div className="media-body">
    //                                     <h3 className="heading">Original Recipes</h3>
    //                                     <p>Even the all-powerful Pointing has no control about the blind texts it is
    //                                         an
    //                                         almost
    //                                         unorthographic.</p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>
    //
    //             {/*hot pizza meal*/}
    //             <section className="ftco-section">
    //                 <div className="container">
    //                     <div className="row justify-content-center mb-5 pb-3">
    //                         <div className="col-md-7 heading-section ftco-animate text-center">
    //                             <h2 className="mb-4">Hot Pizza Meals</h2>
    //                             <p>Far far away, behind the word mountains, far from the countries Vokalia and
    //                                 Consonantia, there live the blind texts.</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="container-wrap">
    //                     <div className="row no-gutters d-flex">
    //                         {listItem_pizza_hot1}
    //                         {listItem_pizza_hot2}
    //                     </div>
    //                 </div>
    //
    //                 {/*our menu pricing*/}
    //                 <div className="container">
    //                     <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
    //                         <div className="col-md-7 heading-section text-center ftco-animate">
    //                             <h2 className="mb-4">Our Menu Pricing</h2>
    //                             <p className="flip">
    //                                 <span className="deg1"/>
    //                                 <span className="deg2"/>
    //                                 <span className="deg3"/></p>
    //                             <p className="mt-5">Far far away, behind the word mountains, far from the countries
    //                                 Vokalia and Consonantia, there live the blind texts.</p>
    //                         </div>
    //                     </div>
    //                     <div className="row">
    //                         <div className="col-md-6">
    //                             <div className="pricing-entry d-flex ftco-animate">
    //                                 <div className="img"
    //                                      style={{backgroundImage: "url(" + '../../images/pizza-1.jpg' + ")"}}/>
    //                                 <div className="desc pl-3">
    //                                     <div className="d-flex text align-items-center">
    //                                         <h3><span>Italian Pizza</span></h3>
    //                                         <span className="price">$20.00</span>
    //                                     </div>
    //                                     <div className="d-block">
    //                                         <p>A small river named Duden flows by their place and supplies</p>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="pricing-entry d-flex ftco-animate">
    //                                 <div className="img"
    //                                      style={{backgroundImage: "url(" + '../../images/pizza-2.jpg' + ")"}}/>
    //                                 <div className="desc pl-3">
    //                                     <div className="d-flex text align-items-center">
    //                                         <h3><span>Hawaiian Pizza</span></h3>
    //                                         <span className="price">$29.00</span>
    //                                     </div>
    //                                     <div className="d-block">
    //                                         <p>A small river named Duden flows by their place and supplies</p>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="pricing-entry d-flex ftco-animate">
    //                                 <div className="img"
    //                                      style={{backgroundImage: "url(" + '../../images/pizza-3.jpg' + ")"}}/>
    //                                 <div className="desc pl-3">
    //                                     <div className="d-flex text align-items-center">
    //                                         <h3><span>Greek Pizza</span></h3>
    //                                         <span className="price">$20.00</span>
    //                                     </div>
    //                                     <div className="d-block">
    //                                         <p>A small river named Duden flows by their place and supplies</p>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="pricing-entry d-flex ftco-animate">
    //                                 <div className="img"
    //                                      style={{backgroundImage: "url(" + '../../images/pizza-4.jpg' + ")"}}/>
    //                                 <div className="desc pl-3">
    //                                     <div className="d-flex text align-items-center">
    //                                         <h3><span>Bacon Crispy Thins</span></h3>
    //                                         <span className="price">$20.00</span>
    //                                     </div>
    //                                     <div className="d-block">
    //                                         <p>A small river named Duden flows by their place and supplies</p>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //
    //                         <div className="col-md-6">
    //                             <div className="pricing-entry d-flex ftco-animate">
    //                                 <div className="img"
    //                                      style={{backgroundImage: "url(" + '../../images/pizza-5.jpg' + ")"}}/>
    //                                 <div className="desc pl-3">
    //                                     <div className="d-flex text align-items-center">
    //                                         <h3><span>Hawaiian Special</span></h3>
    //                                         <span className="price">$49.91</span>
    //                                     </div>
    //                                     <div className="d-block">
    //                                         <p>A small river named Duden flows by their place and supplies</p>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="pricing-entry d-flex ftco-animate">
    //                                 <div className="img"
    //                                      style={{backgroundImage: "url(" + '../../images/pizza-6.jpg' + ")"}}/>
    //                                 <div className="desc pl-3">
    //                                     <div className="d-flex text align-items-center">
    //                                         <h3><span>Ultimate Overload</span></h3>
    //                                         <span className="price">$20.00</span>
    //                                     </div>
    //                                     <div className="d-block">
    //                                         <p>A small river named Duden flows by their place and supplies</p>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="pricing-entry d-flex ftco-animate">
    //                                 <div className="img"
    //                                      style={{backgroundImage: "url(" + '../../images/pizza-7.jpg' + ")"}}/>
    //                                 <div className="desc pl-3">
    //                                     <div className="d-flex text align-items-center">
    //                                         <h3><span>Bacon Pizza</span></h3>
    //                                         <span className="price">$20.00</span>
    //                                     </div>
    //                                     <div className="d-block">
    //                                         <p>A small river named Duden flows by their place and supplies</p>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="pricing-entry d-flex ftco-animate">
    //                                 <div className="img"
    //                                      style={{backgroundImage: "url(" + '../../images/pizza-8.jpg' + ")"}}/>
    //                                 <div className="desc pl-3">
    //                                     <div className="d-flex text align-items-center">
    //                                         <h3><span>Ham &amp; Pineapple</span></h3>
    //                                         <span className="price">$20.00</span>
    //                                     </div>
    //                                     <div className="d-block">
    //                                         <p>A small river named Duden flows by their place and supplies</p>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>
    //
    //             {/*gallery*/}
    //             <section className="ftco-gallery">
    //                 <div className="container-wrap">
    //                     <div className="row no-gutters">
    //                         <div className="col-md-3 ftco-animate">
    //                             <a href="/gallery" className="gallery img d-flex align-items-center"
    //                                style={{backgroundImage: "url(" + '../../images/gallery-1.jpg' + ")"}}>
    //                                 <div className="icon mb-4 d-flex align-items-center justify-content-center">
    //                                     <span className="icon-search"/>
    //                                 </div>
    //                             </a>
    //                         </div>
    //                         <div className="col-md-3 ftco-animate">
    //                             <a href="/gallery" className="gallery img d-flex align-items-center"
    //                                style={{backgroundImage: "url(" + '../../images/gallery-2.jpg' + ")"}}>
    //                                 <div className="icon mb-4 d-flex align-items-center justify-content-center">
    //                                     <span className="icon-search"/>
    //                                 </div>
    //                             </a>
    //                         </div>
    //                         <div className="col-md-3 ftco-animate">
    //                             <a href="/gallery" className="gallery img d-flex align-items-center"
    //                                style={{backgroundImage: "url(" + '../../images/gallery-3.jpg' + ")"}}>
    //                                 <div className="icon mb-4 d-flex align-items-center justify-content-center">
    //                                     <span className="icon-search"/>
    //                                 </div>
    //                             </a>
    //                         </div>
    //                         <div className="col-md-3 ftco-animate">
    //                             <a href="/gallery" className="gallery img d-flex align-items-center"
    //                                style={{backgroundImage: "url(" + '../../images/gallery-4.jpg' + ")"}}>
    //                                 <div className="icon mb-4 d-flex align-items-center justify-content-center">
    //                                     <span className="icon-search"/>
    //                                 </div>
    //                             </a>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>
    //
    //             <section className="ftco-counter ftco-bg-dark img" id="section-counter"
    //                      style={{backgroundImage: "url(" + 'images/bg_2.jpg' + ")"}}
    //                      data-stellar-background-ratio="0.5">
    //                 <div className="overlay"/>
    //                 <div className="container">
    //                     <div className="row justify-content-center">
    //                         <div className="col-md-10">
    //                             <div className="row">
    //                                 <div
    //                                     className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
    //                                     <div className="block-18 text-center">
    //                                         <div className="text">
    //                                             <div className="icon"><span className="flaticon-pizza-1"/></div>
    //                                             <strong className="number" data-number="100">0</strong>
    //                                             <span>Pizza Branches</span>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                                 <div
    //                                     className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
    //                                     <div className="block-18 text-center">
    //                                         <div className="text">
    //                                             <div className="icon"><span className="flaticon-medal"/></div>
    //                                             <strong className="number" data-number="85">0</strong>
    //                                             <span>Number of Awards</span>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                                 <div
    //                                     className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
    //                                     <div className="block-18 text-center">
    //                                         <div className="text">
    //                                             <div className="icon"><span className="flaticon-laugh"/></div>
    //                                             <strong className="number" data-number="10567">0</strong>
    //                                             <span>Happy Customer</span>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                                 <div
    //                                     className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
    //                                     <div className="block-18 text-center">
    //                                         <div className="text">
    //                                             <div className="icon"><span className="flaticon-chef"/></div>
    //                                             <strong className="number" data-number="900">0</strong>
    //                                             <span>Staff</span>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>
    //
    //             {/*tab pane*/}
    //             <section className="ftco-menu">
    //                 <div className="container-fluid">
    //                     <div className="row d-md-flex">
    //                         <div className="col-lg-4 ftco-animate img f-menu-img mb-5 mb-md-0"
    //                              style={{backgroundImage: "url(" + 'images/about.jpg' + ")"}}>
    //                         </div>
    //                         <div className="col-lg-8 ftco-animate p-md-5">
    //                             <div className="row">
    //                                 <div className="col-md-12 nav-link-wrap mb-5">
    //                                     <div className="nav ftco-animate nav-pills" id="v-pills-tab" role="tablist"
    //                                          aria-orientation="vertical">
    //                                         <a className="nav-link active" id="v-pills-1-tab" data-toggle="pill"
    //                                            href="#v-pills-1" role="tab" aria-controls="v-pills-1"
    //                                            aria-selected="true">Pizza</a>
    //
    //                                         <a className="nav-link" id="v-pills-2-tab" data-toggle="pill"
    //                                            href="#v-pills-2" role="tab" aria-controls="v-pills-2"
    //                                            aria-selected="false">Drinks</a>
    //
    //                                         <a className="nav-link" id="v-pills-3-tab" data-toggle="pill"
    //                                            href="#v-pills-3" role="tab" aria-controls="v-pills-3"
    //                                            aria-selected="false">Burgers</a>
    //
    //                                         <a className="nav-link" id="v-pills-4-tab" data-toggle="pill"
    //                                            href="#v-pills-4" role="tab" aria-controls="v-pills-4"
    //                                            aria-selected="false">Pasta</a>
    //                                     </div>
    //                                 </div>
    //                                 <div className="col-md-12 d-flex align-items-center">
    //
    //                                     <div className="tab-content ftco-animate" id="v-pills-tabContent">
    //
    //                                         <div className="tab-pane fade show active" id="v-pills-1"
    //                                              role="tabpanel"
    //                                              aria-labelledby="v-pills-1-tab">
    //                                             <div className="row">
    //                                                 {listItem_pizza}
    //                                             </div>
    //                                         </div>
    //
    //                                         <div className="tab-pane fade" id="v-pills-2" role="tabpanel"
    //                                              aria-labelledby="v-pills-2-tab">
    //                                             <div className="row">
    //                                                 {listItem_drink}
    //                                             </div>
    //                                         </div>
    //
    //                                         <div className="tab-pane fade" id="v-pills-3" role="tabpanel"
    //                                              aria-labelledby="v-pills-3-tab">
    //                                             <div className="row">
    //                                                 {listItem_burger}
    //                                             </div>
    //                                         </div>
    //
    //                                         <div className="tab-pane fade" id="v-pills-4" role="tabpanel"
    //                                              aria-labelledby="v-pills-4-tab">
    //                                             <div className="row">
    //                                                 {listItem_pasta}
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>
    //
    //             {/*blog*/}
    //             <section className="ftco-section">
    //                 <div className="container">
    //                     <div className="row justify-content-center mb-5 pb-3">
    //                         <div className="col-md-7 heading-section ftco-animate text-center">
    //                             <h2 className="mb-4">Recent from blog</h2>
    //                             <p>Far far away, behind the word mountains, far from the countries Vokalia and
    //                                 Consonantia, there live the blind texts.</p>
    //                         </div>
    //                     </div>
    //                     <div className="row d-flex">
    //                         <div className="col-md-4 d-flex ftco-animate">
    //                             <div className="blog-entry align-self-stretch">
    //                                 <a href="blog-single.html" className="block-20"
    //                                    style={{backgroundImage: "url(" + 'images/image_1.jpg' + ")"}}>
    //                                 </a>
    //                                 <div className="text py-4 d-block">
    //                                     <div className="meta">
    //                                         <div><a href="#">Sept 10, 2018</a></div>
    //                                         <div><a href="#">Admin</a></div>
    //                                         <div><a href="#" className="meta-chat"><span
    //                                             className="icon-chat"/> 3</a>
    //                                         </div>
    //                                     </div>
    //                                     <h3 className="heading mt-2"><a href="#">The Delicious Pizza</a></h3>
    //                                     <p>A small river named Duden flows by their place and supplies it with the
    //                                         necessary regelialia.</p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="col-md-4 d-flex ftco-animate">
    //                             <div className="blog-entry align-self-stretch">
    //                                 <a href="blog-single.html" className="block-20"
    //                                    style={{backgroundImage: "url(" + 'images/image_2.jpg' + ")"}}>
    //                                 </a>
    //                                 <div className="text py-4 d-block">
    //                                     <div className="meta">
    //                                         <div><a href="#">Sept 10, 2018</a></div>
    //                                         <div><a href="#">Admin</a></div>
    //                                         <div><a href="#" className="meta-chat"><span
    //                                             className="icon-chat"/> 3</a>
    //                                         </div>
    //                                     </div>
    //                                     <h3 className="heading mt-2"><a href="#">The Delicious Pizza</a></h3>
    //                                     <p>A small river named Duden flows by their place and supplies it with the
    //                                         necessary regelialia.</p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="col-md-4 d-flex ftco-animate">
    //                             <div className="blog-entry align-self-stretch">
    //                                 <a href="blog-single.html" className="block-20"
    //                                    style={{backgroundImage: "url(" + 'images/image_3.jpg' + ")"}}>
    //                                 </a>
    //                                 <div className="text py-4 d-block">
    //                                     <div className="meta">
    //                                         <div><a href="#">Sept 10, 2018</a></div>
    //                                         <div><a href="#">Admin</a></div>
    //                                         <div><a href="#" className="meta-chat"><span
    //                                             className="icon-chat"/> 3</a>
    //                                         </div>
    //                                     </div>
    //                                     <h3 className="heading mt-2"><a href="#">The Delicious Pizza</a></h3>
    //                                     <p>A small river named Duden flows by their place and supplies it with the
    //                                         necessary regelialia.</p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>
    //
    //             {/*contact*/}
    //             <section className="ftco-appointment">
    //                 <div className="overlay"/>
    //                 <div className="container-wrap">
    //                     <div className="row no-gutters d-md-flex align-items-center">
    //                         <div className="col-md-6 d-flex align-self-stretch">
    //                             <div id="map"/>
    //                         </div>
    //                         <div className="col-md-6 appointment ftco-animate">
    //                             <h3 className="mb-3">Contact Us</h3>
    //                             <form action="#" className="appointment-form">
    //                                 <div className="d-md-flex">
    //                                     <div className="form-group">
    //                                         <input type="text" className="form-control" placeholder="First Name"/>
    //                                     </div>
    //                                 </div>
    //                                 <div className="d-me-flex">
    //                                     <div className="form-group">
    //                                         <input type="text" className="form-control" placeholder="Last Name"/>
    //                                     </div>
    //                                 </div>
    //                                 <div className="form-group">
    //                                     <textarea name="" id="" cols="30" rows="3" className="form-control"
    //                                               placeholder="Message"/>
    //                                 </div>
    //                                 <div className="form-group">
    //                                     <input type="submit" value="Send" className="btn btn-primary py-3 px-4"/>
    //                                 </div>
    //                             </form>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>
    //
    //             {/*footer*/}
    //             <footer className="ftco-footer ftco-section img">
    //                 <div className="overlay"/>
    //                 <div className="container">
    //                     <div className="row mb-5">
    //                         <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
    //                             <div className="ftco-footer-widget mb-4">
    //                                 <h2 className="ftco-heading-2">About Us</h2>
    //                                 <p>Far far away, behind the word mountains, far from the countries Vokalia and
    //                                     Consonantia, there live the blind texts.</p>
    //                                 <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
    //                                     <li className="ftco-animate"><a href="#"><span
    //                                         className="icon-twitter"/></a>
    //                                     </li>
    //                                     <li className="ftco-animate"><a href="#"><span
    //                                         className="icon-facebook"/></a>
    //                                     </li>
    //                                     <li className="ftco-animate"><a href="#"><span
    //                                         className="icon-instagram"/></a></li>
    //                                 </ul>
    //                             </div>
    //                         </div>
    //                         <div className="col-lg-4 col-md-6 mb-5 mb-md-5">
    //                             <div className="ftco-footer-widget mb-4">
    //                                 <h2 className="ftco-heading-2">Recent Blog</h2>
    //                                 <div className="block-21 mb-4 d-flex">
    //                                     <a className="blog-img mr-4"
    //                                        style={{backgroundImage: "url(" + 'images/image_1.jpg' + ")"}}>
    //                                     </a>
    //                                     <div className="text">
    //                                         <h3 className="heading"><a href="#">Even the all-powerful Pointing has
    //                                             no
    //                                             control about</a></h3>
    //                                         <div className="meta">
    //                                             <div><a href="#"><span className="icon-calendar"/> Sept 15,
    //                                                 2018</a></div>
    //                                             <div><a href="#"><span className="icon-person"/> Admin</a></div>
    //                                             <div><a href="#"><span className="icon-chat"/> 19</a></div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                                 <div className="block-21 mb-4 d-flex">
    //                                     <a className="blog-img mr-4"
    //                                        style={{backgroundImage: "url(" + 'images/image_2.jpg' + ")"}}/>
    //                                     <div className="text">
    //                                         <h3 className="heading"><a href="#">Even the all-powerful Pointing has
    //                                             no
    //                                             control about</a></h3>
    //                                         <div className="meta">
    //                                             <div><a href="#"><span className="icon-calendar"/> Sept 15,
    //                                                 2018</a></div>
    //                                             <div><a href="#"><span className="icon-person"/> Admin</a></div>
    //                                             <div><a href="#"><span className="icon-chat"/> 19</a></div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="col-lg-2 col-md-6 mb-5 mb-md-5">
    //                             <div className="ftco-footer-widget mb-4 ml-md-4">
    //                                 <h2 className="ftco-heading-2">Services</h2>
    //                                 <ul className="list-unstyled">
    //                                     <li><a href="#" className="py-2 d-block">Cooked</a></li>
    //                                     <li><a href="#" className="py-2 d-block">Deliver</a></li>
    //                                     <li><a href="#" className="py-2 d-block">Quality Foods</a></li>
    //                                     <li><a href="#" className="py-2 d-block">Mixed</a></li>
    //                                 </ul>
    //                             </div>
    //                         </div>
    //                         <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
    //                             <div className="ftco-footer-widget mb-4">
    //                                 <h2 className="ftco-heading-2">Have a Questions?</h2>
    //                                 <div className="block-23 mb-3">
    //                                     <ul>
    //                                         <li><span className="icon icon-map-marker"/><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span>
    //                                         </li>
    //                                         <li><a href="#"><span className="icon icon-phone"/><span
    //                                             className="text">+2 392 3929 210</span></a></li>
    //                                         <li><a href="#"><span className="icon icon-envelope"/><span
    //                                             className="text">info@yourdomain.com</span></a></li>
    //                                     </ul>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className="row">
    //                         <div className="col-md-12 text-center">
    //                             Copyright &copy;
    //                             <script>document.write(new Date().getFullYear());</script>
    //                             All rights reserved | This template is made with <i className="icon-heart"
    //                                                                                 aria-hidden="true"/> by <a
    //                             href="https://colorlib.com" target="_blank">Colorlib</a>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </footer>
    //
    //             {/*/!*footer*!/*/}
    //             {/*<div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00"/></svg></div>*/}
    //         </div>
    //     )
    // }
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)



