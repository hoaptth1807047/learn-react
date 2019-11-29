import React, {Component} from 'react';
import {withFirebase} from '../../../Firebase';
import StickyCart from "../Cart/sticky-cart";

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            messages: [],
            limit: 3,
        };
    }

    componentDidMount() {
        this.onListenForMessages();
    }

    onListenForMessages = () => {
        this.setState({loading: true});

        this.unsubscribe = this.props.firebase
            .messages()
            .orderBy('createdAt', 'desc')
            .onSnapshot(snapshot => {
                if (snapshot.size) {
                    let messages = [];
                    snapshot.forEach(doc =>
                        messages.push({...doc.data(), uid: doc.id}),
                    );

                    this.setState({
                        messages: messages.reverse(),
                        loading: false,
                    });
                } else {
                    this.setState({messages: null, loading: false});
                }
            });
    };

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleClick = (id) => {
        this.props.addToCart(id);
        alert("Add item!")
    };


    render() {
        const {messages} = this.state;
        return (
            <div>
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
                                        A small river named Duden flows by their place and supplies it with
                                        the necessary regelialia.
                                    </p>
                                    <p>
                                        <a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">
                                            Order Now
                                        </a>{" "}
                                        <a
                                            href="#"
                                            className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3"
                                        >
                                            View Menu
                                        </a>
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

                <div>
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
                </div>

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
                            {messages.slice(0,3).map(item => (
                                <div className="col-lg-4 d-flex ftco-animate">
                                    <div className="services-wrap d-flex">
                                        <a
                                            href="#"
                                            className="img"
                                            style={{backgroundImage: "url(" + item.url + ")"}}
                                        />
                                        <div className="text p-4">
                                            <h3>{item.namedish}</h3>
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
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="container-wrap">
                        <div className="row no-gutters d-flex">
                            {messages.slice(3,6).map(item => (
                                <div className="col-lg-4 d-flex ftco-animate">
                                    <div className="services-wrap d-flex">
                                        <div className="text p-4">
                                            <h3>{item.namedish}</h3>
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
                                        <a
                                            href="#"
                                            className="img"
                                            style={{backgroundImage: "url(" + item.url + ")"}}
                                        />
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
                                {messages.slice(0,3).map(meals => (
                                    <div className="pricing-entry d-flex ftco-animate">
                                        <div
                                            className="img"
                                            style={{backgroundImage: "url(" + meals.url + ")"}}
                                        />
                                        <div className="desc pl-3">
                                            <div className="d-flex text align-items-center">
                                                <h3>
                                                    <span>{meals.namedish}</span>
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
                            <div className="col-md-6">
                                {messages.slice(3,6).map(meals => (
                                    <div className="pricing-entry d-flex ftco-animate">
                                        <div
                                            className="img"
                                            style={{backgroundImage: "url(" + meals.url + ")"}}
                                        />
                                        <div className="desc pl-3">
                                            <div className="d-flex text align-items-center">
                                                <h3>
                                                    <span>{meals.namedish}</span>
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
                                                    {messages.slice(0,3).map(table => (
                                                        <div className="col-md-4 text-center">
                                                            <div className="menu-wrap">
                                                                <a
                                                                    href="#"
                                                                    className="menu-img img mb-4"
                                                                    style={{backgroundImage: "url(" + table.url + ")"}}
                                                                />
                                                                <div className="text">
                                                                    <h3>
                                                                        <a href="#">{table.namedish}</a>
                                                                    </h3>
                                                                    <p>
                                                                        {table.title}
                                                                    </p>
                                                                    <p className="price">
                                                                        <span>${table.price}</span>
                                                                    </p>
                                                                    <p>
                                                                        <a
                                                                            onClick={() => {
                                                                                this.handleClick()
                                                                            }}
                                                                            className="btn btn-white btn-outline-white"
                                                                        >
                                                                            Add to cart
                                                                        </a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            {/*<div*/}
                                            {/*    className="tab-pane fade"*/}
                                            {/*    id="v-pills-2"*/}
                                            {/*    role="tabpanel"*/}
                                            {/*    aria-labelledby="v-pills-2-tab"*/}
                                            {/*>*/}
                                            {/*    <div className="row">*/}
                                            {/*        <div className="col-md-4 text-center">*/}
                                            {/*            <div className="menu-wrap">*/}
                                            {/*                <a*/}
                                            {/*                    href="#"*/}
                                            {/*                    className="menu-img img mb-4"*/}
                                            {/*                    style={{backgroundImage: "url(images/drink-1.jpg)"}}*/}
                                            {/*                />*/}
                                            {/*                <div className="text">*/}
                                            {/*                    <h3>*/}
                                            {/*                        <a href="#">Lemonade Juice</a>*/}
                                            {/*                    </h3>*/}
                                            {/*                    <p>*/}
                                            {/*                        Far far away, behind the word mountains, far from*/}
                                            {/*                        the*/}
                                            {/*                        countries Vokalia and Consonantia.*/}
                                            {/*                    </p>*/}
                                            {/*                    <p className="price">*/}
                                            {/*                        <span>$2.90</span>*/}
                                            {/*                    </p>*/}
                                            {/*                    <p>*/}
                                            {/*                        <a*/}
                                            {/*                            href="#"*/}
                                            {/*                            className="btn btn-white btn-outline-white"*/}
                                            {/*                        >*/}
                                            {/*                            Add to cart*/}
                                            {/*                        </a>*/}
                                            {/*                    </p>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="col-md-4 text-center">*/}
                                            {/*            <div className="menu-wrap">*/}
                                            {/*                <a*/}
                                            {/*                    href="#"*/}
                                            {/*                    className="menu-img img mb-4"*/}
                                            {/*                    style={{backgroundImage: "url(images/drink-2.jpg)"}}*/}
                                            {/*                />*/}
                                            {/*                <div className="text">*/}
                                            {/*                    <h3>*/}
                                            {/*                        <a href="#">Pineapple Juice</a>*/}
                                            {/*                    </h3>*/}
                                            {/*                    <p>*/}
                                            {/*                        Far far away, behind the word mountains, far from*/}
                                            {/*                        the*/}
                                            {/*                        countries Vokalia and Consonantia.*/}
                                            {/*                    </p>*/}
                                            {/*                    <p className="price">*/}
                                            {/*                        <span>$2.90</span>*/}
                                            {/*                    </p>*/}
                                            {/*                    <p>*/}
                                            {/*                        <a*/}
                                            {/*                            href="#"*/}
                                            {/*                            className="btn btn-white btn-outline-white"*/}
                                            {/*                        >*/}
                                            {/*                            Add to cart*/}
                                            {/*                        </a>*/}
                                            {/*                    </p>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="col-md-4 text-center">*/}
                                            {/*            <div className="menu-wrap">*/}
                                            {/*                <a*/}
                                            {/*                    href="#"*/}
                                            {/*                    className="menu-img img mb-4"*/}
                                            {/*                    style={{backgroundImage: "url(images/drink-3.jpg)"}}*/}
                                            {/*                />*/}
                                            {/*                <div className="text">*/}
                                            {/*                    <h3>*/}
                                            {/*                        <a href="#">Soda Drinks</a>*/}
                                            {/*                    </h3>*/}
                                            {/*                    <p>*/}
                                            {/*                        Far far away, behind the word mountains, far from*/}
                                            {/*                        the*/}
                                            {/*                        countries Vokalia and Consonantia.*/}
                                            {/*                    </p>*/}
                                            {/*                    <p className="price">*/}
                                            {/*                        <span>$2.90</span>*/}
                                            {/*                    </p>*/}
                                            {/*                    <p>*/}
                                            {/*                        <a*/}
                                            {/*                            href="#"*/}
                                            {/*                            className="btn btn-white btn-outline-white"*/}
                                            {/*                        >*/}
                                            {/*                            Add to cart*/}
                                            {/*                        </a>*/}
                                            {/*                    </p>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div*/}
                                            {/*    className="tab-pane fade"*/}
                                            {/*    id="v-pills-3"*/}
                                            {/*    role="tabpanel"*/}
                                            {/*    aria-labelledby="v-pills-3-tab"*/}
                                            {/*>*/}
                                            {/*    <div className="row">*/}
                                            {/*        <div className="col-md-4 text-center">*/}
                                            {/*            <div className="menu-wrap">*/}
                                            {/*                <a*/}
                                            {/*                    href="#"*/}
                                            {/*                    className="menu-img img mb-4"*/}
                                            {/*                    style={{backgroundImage: "url(images/burger-1.jpg)"}}*/}
                                            {/*                />*/}
                                            {/*                <div className="text">*/}
                                            {/*                    <h3>*/}
                                            {/*                        <a href="#">Itallian Pizza</a>*/}
                                            {/*                    </h3>*/}
                                            {/*                    <p>*/}
                                            {/*                        Far far away, behind the word mountains, far from*/}
                                            {/*                        the*/}
                                            {/*                        countries Vokalia and Consonantia.*/}
                                            {/*                    </p>*/}
                                            {/*                    <p className="price">*/}
                                            {/*                        <span>$2.90</span>*/}
                                            {/*                    </p>*/}
                                            {/*                    <p>*/}
                                            {/*                        <a*/}
                                            {/*                            href="#"*/}
                                            {/*                            className="btn btn-white btn-outline-white"*/}
                                            {/*                        >*/}
                                            {/*                            Add to cart*/}
                                            {/*                        </a>*/}
                                            {/*                    </p>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="col-md-4 text-center">*/}
                                            {/*            <div className="menu-wrap">*/}
                                            {/*                <a*/}
                                            {/*                    href="#"*/}
                                            {/*                    className="menu-img img mb-4"*/}
                                            {/*                    style={{backgroundImage: "url(images/burger-2.jpg)"}}*/}
                                            {/*                />*/}
                                            {/*                <div className="text">*/}
                                            {/*                    <h3>*/}
                                            {/*                        <a href="#">Itallian Pizza</a>*/}
                                            {/*                    </h3>*/}
                                            {/*                    <p>*/}
                                            {/*                        Far far away, behind the word mountains, far from*/}
                                            {/*                        the*/}
                                            {/*                        countries Vokalia and Consonantia.*/}
                                            {/*                    </p>*/}
                                            {/*                    <p className="price">*/}
                                            {/*                        <span>$2.90</span>*/}
                                            {/*                    </p>*/}
                                            {/*                    <p>*/}
                                            {/*                        <a*/}
                                            {/*                            href="#"*/}
                                            {/*                            className="btn btn-white btn-outline-white"*/}
                                            {/*                        >*/}
                                            {/*                            Add to cart*/}
                                            {/*                        </a>*/}
                                            {/*                    </p>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="col-md-4 text-center">*/}
                                            {/*            <div className="menu-wrap">*/}
                                            {/*                <a*/}
                                            {/*                    href="#"*/}
                                            {/*                    className="menu-img img mb-4"*/}
                                            {/*                    style={{backgroundImage: "url(images/burger-3.jpg)"}}*/}
                                            {/*                />*/}
                                            {/*                <div className="text">*/}
                                            {/*                    <h3>*/}
                                            {/*                        <a href="#">Itallian Pizza</a>*/}
                                            {/*                    </h3>*/}
                                            {/*                    <p>*/}
                                            {/*                        Far far away, behind the word mountains, far from*/}
                                            {/*                        the*/}
                                            {/*                        countries Vokalia and Consonantia.*/}
                                            {/*                    </p>*/}
                                            {/*                    <p className="price">*/}
                                            {/*                        <span>$2.90</span>*/}
                                            {/*                    </p>*/}
                                            {/*                    <p>*/}
                                            {/*                        <a*/}
                                            {/*                            href="#"*/}
                                            {/*                            className="btn btn-white btn-outline-white"*/}
                                            {/*                        >*/}
                                            {/*                            Add to cart*/}
                                            {/*                        </a>*/}
                                            {/*                    </p>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div*/}
                                            {/*    className="tab-pane fade"*/}
                                            {/*    id="v-pills-4"*/}
                                            {/*    role="tabpanel"*/}
                                            {/*    aria-labelledby="v-pills-4-tab"*/}
                                            {/*>*/}
                                            {/*    <div className="row">*/}
                                            {/*        <div className="col-md-4 text-center">*/}
                                            {/*            <div className="menu-wrap">*/}
                                            {/*                <a*/}
                                            {/*                    href="#"*/}
                                            {/*                    className="menu-img img mb-4"*/}
                                            {/*                    style={{backgroundImage: "url(images/pasta-1.jpg)"}}*/}
                                            {/*                />*/}
                                            {/*                <div className="text">*/}
                                            {/*                    <h3>*/}
                                            {/*                        <a href="#">Itallian Pizza</a>*/}
                                            {/*                    </h3>*/}
                                            {/*                    <p>*/}
                                            {/*                        Far far away, behind the word mountains, far from*/}
                                            {/*                        the*/}
                                            {/*                        countries Vokalia and Consonantia.*/}
                                            {/*                    </p>*/}
                                            {/*                    <p className="price">*/}
                                            {/*                        <span>$2.90</span>*/}
                                            {/*                    </p>*/}
                                            {/*                    <p>*/}
                                            {/*                        <a*/}
                                            {/*                            href="#"*/}
                                            {/*                            className="btn btn-white btn-outline-white"*/}
                                            {/*                        >*/}
                                            {/*                            Add to cart*/}
                                            {/*                        </a>*/}
                                            {/*                    </p>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="col-md-4 text-center">*/}
                                            {/*            <div className="menu-wrap">*/}
                                            {/*                <a*/}
                                            {/*                    href="#"*/}
                                            {/*                    className="menu-img img mb-4"*/}
                                            {/*                    style={{backgroundImage: "url(images/pasta-2.jpg)"}}*/}
                                            {/*                />*/}
                                            {/*                <div className="text">*/}
                                            {/*                    <h3>*/}
                                            {/*                        <a href="#">Itallian Pizza</a>*/}
                                            {/*                    </h3>*/}
                                            {/*                    <p>*/}
                                            {/*                        Far far away, behind the word mountains, far from*/}
                                            {/*                        the*/}
                                            {/*                        countries Vokalia and Consonantia.*/}
                                            {/*                    </p>*/}
                                            {/*                    <p className="price">*/}
                                            {/*                        <span>$2.90</span>*/}
                                            {/*                    </p>*/}
                                            {/*                    <p>*/}
                                            {/*                        <a*/}
                                            {/*                            href="#"*/}
                                            {/*                            className="btn btn-white btn-outline-white"*/}
                                            {/*                        >*/}
                                            {/*                            Add to cart*/}
                                            {/*                        </a>*/}
                                            {/*                    </p>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="col-md-4 text-center">*/}
                                            {/*            <div className="menu-wrap">*/}
                                            {/*                <a*/}
                                            {/*                    href="#"*/}
                                            {/*                    className="menu-img img mb-4"*/}
                                            {/*                    style={{backgroundImage: "url(images/pasta-3.jpg)"}}*/}
                                            {/*                />*/}
                                            {/*                <div className="text">*/}
                                            {/*                    <h3>*/}
                                            {/*                        <a href="#">Itallian Pizza</a>*/}
                                            {/*                    </h3>*/}
                                            {/*                    <p>*/}
                                            {/*                        Far far away, behind the word mountains, far from*/}
                                            {/*                        the*/}
                                            {/*                        countries Vokalia and Consonantia.*/}
                                            {/*                    </p>*/}
                                            {/*                    <p className="price">*/}
                                            {/*                        <span>$2.90</span>*/}
                                            {/*                    </p>*/}
                                            {/*                    <p>*/}
                                            {/*                        <a*/}
                                            {/*                            href="#"*/}
                                            {/*                            className="btn btn-white btn-outline-white"*/}
                                            {/*                        >*/}
                                            {/*                            Add to cart*/}
                                            {/*                        </a>*/}
                                            {/*                    </p>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
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
                    <div className="overlay" />
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
                                                <span className="icon-twitter" />
                                            </a>
                                        </li>
                                        <li className="ftco-animate">
                                            <a href="#">
                                                <span className="icon-facebook" />
                                            </a>
                                        </li>
                                        <li className="ftco-animate">
                                            <a href="#">
                                                <span className="icon-instagram" />
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
                                            style={{ backgroundImage: "url(images/image_1.jpg)" }}
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
                                                        <span className="icon-calendar" /> Sept 15, 2018
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href="#">
                                                        <span className="icon-person" /> Admin
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href="#">
                                                        <span className="icon-chat" /> 19
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-21 mb-4 d-flex">
                                        <a
                                            className="blog-img mr-4"
                                            style={{ backgroundImage: "url(images/image_2.jpg)" }}
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
                                                        <span className="icon-calendar" /> Sept 15, 2018
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href="#">
                                                        <span className="icon-person" /> Admin
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href="#">
                                                        <span className="icon-chat" /> 19
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
                                                <span className="icon icon-map-marker" />
                                                <span className="text">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </span>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon icon-phone" />
                                                    <span className="text">+2 392 3929 210</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon icon-envelope" />
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
                                    <i className="icon-heart" aria-hidden="true" /> by{" "}
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
        );
    }
}

export default withFirebase(HomePage)
