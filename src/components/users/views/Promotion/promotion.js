import React, {Component} from 'react';
import * as ROUTES from "../../../constants/routes";
import {Link} from "react-router-dom";

class PromotionPage extends Component {
    render() {
        return (
            <div>
                <div style={{marginBottom: 140}}>
                    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
                        {/*style={{backgroundImage: "url(" + '../../images/bg_4.jpg' + ")"}}*/}
                        <div className="col-md-5 p-lg-5 mx-auto my-5">
                            <h1 className="display-4 font-weight-normal">Promotion</h1>
                        </div>
                        <div className="product-device box-shadow d-none d-md-block"/>
                        <div className="product-device product-device-2 box-shadow d-none d-md-block"/>
                    </div>
                    <div className="container">
                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="img mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-6"
                                 style={{backgroundImage: "url(" + 'https://i.pinimg.com/564x/b0/58/e9/b058e9df71327cdc562ef1051a73fe72.jpg' + ")"}}>
                                <div className="my-3 py-3">
                                    <h2 className="display-5">50% OFF 2ND OF THE PIZZA</h2>
                                    <p className="lead">All Week</p>
                                </div>
                                <div className="box-shadow mx-auto"
                                     style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}>
                                    <p className="lead">
                                        * Discount applies to pizza with lower prices.
                                        <br/>
                                        * Valid when buying pizza 9 "/ 12" and same size.
                                        <br/>
                                        * Free 30 'shipping with orders from 100,000 VND and within the scope of
                                        delivery.
                                    </p>
                                    <div className="row">
                                        <div className="col-lg-5 offset-lg-1">
                                            <button type="button" className="btn btn-lg btn-block btn-primary"
                                                    style={{color: "#78d5ef"}}>
                                                <p style={{fontSize: 17}}>Order cake 9"</p>
                                            </button>
                                        </div>
                                        <div className="col-lg-5">
                                            <button type="button" className="btn btn-lg btn-block btn-primary"
                                                    style={{color: "#78d5ef"}}>
                                                <p style={{fontSize: 17}}>Order cake 12"</p>
                                            </button>
                                        </div>
                                        <div className="col-lg-1"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="img mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-6"
                                 style={{backgroundImage: "url(" + '../../images/food.png' + ")"}}>
                                <div className="my-3 p-3">
                                    <h2 className="display-5">PROMOTION WEEKEND</h2>
                                    <p className="lead">Jubilant DOMINO'S PIZZA OPENING NGUYEN SON</p>
                                </div>
                                <div className="box-shadow mx-auto"
                                     style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}>
                                    <p className="lead">
                                        * Discount: 50% off pizza 9 "/ 12" immediately when purchased with any country.
                                        <br/>
                                        * Time: October 16 - October 27, 2019
                                        <br/>
                                        * Apply to order via Website / Call Center / Domino's Pizza Nguyen Son Shop
                                    </p>
                                    <button type="button" className="btn btn-lg btn-block btn-primary"
                                            style={{color: "#78d5ef"}}>
                                        <p style={{fontSize: 17}}>Order cake 9"</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="img mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-6"
                                 style={{backgroundImage: "url(" + 'https://i.pinimg.com/564x/9a/20/cc/9a20cc8eb5bdf5f06e88b7fcb3f272b1.jpg' + ")"}}>
                                <div className="my-3 p-3">
                                    <h2 className="display-5">PROMOTION WEEKEND</h2>
                                    <p className="lead">Jubilant DOMINO'S PIZZA OPENING NGUYEN SON</p>
                                </div>
                                <div className="box-shadow mx-auto"
                                     style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}>
                                    <p className="lead">
                                        * Discount applies to pizza with lower prices.
                                        <br/>
                                        * Valid when buying pizza 9 "/ 12" and same size.
                                        <br/>
                                        * Free 30 'shipping with orders from 100,000 VND and within the scope of
                                        delivery.
                                    </p>
                                    <button type="button" className="btn btn-lg btn-block btn-primary"
                                            style={{color: "#78d5ef"}}>
                                        <p style={{fontSize: 17}}>Order cake 9"</p>
                                    </button>
                                </div>
                            </div>
                            <div className="img mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-6"
                                 style={{backgroundImage: "url(" + '../../images/food.png' + ")"}}>
                                <div className="my-3 py-3">
                                    <h2 className="display-5">50% OFF 2ND OF THE PIZZA</h2>
                                    <p className="lead">All Week</p>
                                </div>
                                <div className="box-shadow mx-auto"
                                     style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}>
                                    <p className="lead">
                                        * Discount: 50% off pizza 9 "/ 12" immediately when purchased with any country.
                                        <br/>
                                        * Time: October 16 - October 27, 2019
                                        <br/>
                                        * Apply to order via Website / Call Center / Domino's Pizza Nguyen Son Shop
                                    </p>
                                    <div className="row">
                                        <div className="col-lg-5 offset-lg-1">
                                            <button type="button" className="btn btn-lg btn-block btn-primary"
                                                    style={{color: "#78d5ef"}}>
                                                <p style={{fontSize: 17}}>Order cake 9"</p>
                                            </button>
                                        </div>
                                        <div className="col-lg-5">
                                            <button type="button" className="btn btn-lg btn-block btn-primary"
                                                    style={{color: "#78d5ef"}}>
                                                <p style={{fontSize: 17}}>Order cake 12"</p>
                                            </button>
                                        </div>
                                        <div className="col-lg-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default PromotionPage