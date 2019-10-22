import React, {Component} from 'react';
import * as ROUTES from "../../../constants/routes";
import {Link} from "react-router-dom";

class ServicesPage extends Component {
    render() {
        return (
            <div>
                <section className="home-slider owl-carousel img" style={{backgroundImage: 'url(../../images/bg_1.jpg)'}}>
                    <div className="slider-item" style={{backgroundImage: 'url(../../images/bg_3.jpg)'}}>
                        <div className="overlay" />
                        <div className="container">
                            <div className="row slider-text justify-content-center align-items-center">
                                <div className="col-md-7 col-sm-12 text-center ftco-animate">
                                    <h1 className="mb-3 mt-5 bread">Services</h1>
                                    <p className="breadcrumbs"><span className="mr-2"><a href=""><Link to={ROUTES.HOME}>Home</Link></a></span>
                                        <span>Services</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ftco-section ftco-services">
                    <div className="overlay" />
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 heading-section ftco-animate text-center">
                                <h2 className="mb-4">Our Services</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                                    the blind texts.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 ftco-animate">
                                <div className="media d-block text-center block-6 services">
                                    <div className="icon d-flex justify-content-center align-items-center mb-5">
                                        <span className="flaticon-diet" />
                                    </div>
                                    <div className="media-body">
                                        <h3 className="heading">Healthy Foods</h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                                            unorthographic.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ftco-animate">
                                <div className="media d-block text-center block-6 services">
                                    <div className="icon d-flex justify-content-center align-items-center mb-5">
                                        <span className="flaticon-bicycle" />
                                    </div>
                                    <div className="media-body">
                                        <h3 className="heading">Fastest Delivery</h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                                            unorthographic.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ftco-animate">
                                <div className="media d-block text-center block-6 services">
                                    <div className="icon d-flex justify-content-center align-items-center mb-5"><span className="flaticon-pizza-1" /></div>
                                    <div className="media-body">
                                        <h3 className="heading">Original Recipes</h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                                            unorthographic.</p>
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
                                <h2 className="mb-4">Hot Meals</h2>
                                <p className="flip"><span className="deg1" /><span className="deg2" /><span className="deg3" /></p>
                                <p className="mt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 text-center ftco-animate">
                                <div className="menu-wrap">
                                    <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(../../images/pizza-1.jpg)'}} />
                                    <div className="text">
                                        <h3><a href="#">Itallian Pizza</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                        <p className="price"><span>$2.90</span></p>
                                        <p><a href="#" className="btn btn-white btn-outline-white">Add to cart</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 text-center ftco-animate">
                                <div className="menu-wrap">
                                    <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(../../images/pizza-2.jpg)'}} />
                                    <div className="text">
                                        <h3><a href="#">Itallian Pizza</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                        <p className="price"><span>$2.90</span></p>
                                        <p><a href="#" className="btn btn-white btn-outline-white">Add to cart</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 text-center ftco-animate">
                                <div className="menu-wrap">
                                    <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(../../images/pizza-3.jpg)'}} />
                                    <div className="text">
                                        <h3><a href="#">Itallian Pizza</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                        <p className="price"><span>$2.90</span></p>
                                        <p><a href="#" className="btn btn-white btn-outline-white">Add to cart</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 text-center ftco-animate">
                                <div className="menu-wrap">
                                    <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(../../images/pizza-4.jpg)'}} />
                                    <div className="text">
                                        <h3><a href="#">Itallian Pizza</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                        <p className="price"><span>$2.90</span></p>
                                        <p><a href="#" className="btn btn-white btn-outline-white">Add to cart</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*footer*/}
                <footer className="ftco-footer ftco-section img">
                    <div className="overlay"/>
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2">About Us</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                        Consonantia, there live the blind texts.</p>
                                    <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                        <li className="ftco-animate"><a href="#"><span className="icon-twitter"/></a>
                                        </li>
                                        <li className="ftco-animate"><a href="#"><span className="icon-facebook"/></a>
                                        </li>
                                        <li className="ftco-animate"><a href="#"><span
                                            className="icon-instagram"/></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-5 mb-md-5">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2">Recent Blog</h2>
                                    <div className="block-21 mb-4 d-flex">
                                        <a className="blog-img mr-4"
                                           style={{backgroundImage: "url(" + 'images/image_1.jpg' + ")"}}>
                                        </a>
                                        <div className="text">
                                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no
                                                control about</a></h3>
                                            <div className="meta">
                                                <div><a href="#"><span className="icon-calendar"/> Sept 15,
                                                    2018</a></div>
                                                <div><a href="#"><span className="icon-person"/> Admin</a></div>
                                                <div><a href="#"><span className="icon-chat"/> 19</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-21 mb-4 d-flex">
                                        <a className="blog-img mr-4"
                                           style={{backgroundImage: "url(" + 'images/image_2.jpg' + ")"}}/>
                                        <div className="text">
                                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no
                                                control about</a></h3>
                                            <div className="meta">
                                                <div><a href="#"><span className="icon-calendar"/> Sept 15,
                                                    2018</a></div>
                                                <div><a href="#"><span className="icon-person"/> Admin</a></div>
                                                <div><a href="#"><span className="icon-chat"/> 19</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-5 mb-md-5">
                                <div className="ftco-footer-widget mb-4 ml-md-4">
                                    <h2 className="ftco-heading-2">Services</h2>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="py-2 d-block">Cooked</a></li>
                                        <li><a href="#" className="py-2 d-block">Deliver</a></li>
                                        <li><a href="#" className="py-2 d-block">Quality Foods</a></li>
                                        <li><a href="#" className="py-2 d-block">Mixed</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2">Have a Questions?</h2>
                                    <div className="block-23 mb-3">
                                        <ul>
                                            <li><span className="icon icon-map-marker"/><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span>
                                            </li>
                                            <li><a href="#"><span className="icon icon-phone"/><span
                                                className="text">+2 392 3929 210</span></a></li>
                                            <li><a href="#"><span className="icon icon-envelope"/><span
                                                className="text">info@yourdomain.com</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                Copyright &copy;
                                <script>document.write(new Date().getFullYear());</script>
                                All rights reserved | This template is made with <i className="icon-heart"
                                                                                    aria-hidden="true"/> by <a
                                href="https://colorlib.com" target="_blank">Colorlib</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default ServicesPage