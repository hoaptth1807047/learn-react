import React, {Component} from 'react';
import * as ROUTES from "../constants/routes";
import {Link} from "react-router-dom";

class AboutPage extends Component {
    render() {
        return (
            <div>
                <section className="home-slider owl-carousel img"
                         style={{backgroundImage: 'url(../../images/bg_1.jpg)'}}>
                    <div className="slider-item" style={{backgroundImage: 'url(../../public/images/bg_3.jpg)'}}>
                        <div className="overlay"/>
                        <div className="container">
                            <div className="row slider-text justify-content-center align-items-center">
                                <div className="col-md-7 col-sm-12 text-center ftco-animate">
                                    <h1 className="mb-3 mt-5 bread">Your Cart</h1>
                                    <p className="breadcrumbs"><span className="mr-2"><a href=""><Link
                                        to={ROUTES.HOME}>Home</Link></a></span>
                                        <span>Cart</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ftco-section contact-section">
                    <div className="container mt-5">
                        <div className="row block-9">
                            <div className="col-md-12 ftco-animate">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col" style={titleCart}>Product</th>
                                        <th scope="col" style={titleCart}>Quantity</th>
                                        <th scope="col" style={titleCart}>Unit Price</th>
                                        <th scope="col" style={titleCart}>Total</th>
                                        <th scope="col"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">
                                            <img className="blog-img mr-4"
                                                 style={{backgroundImage: "url(" + 'images/image_1.jpg' + ")"}}>
                                            </img>
                                        </th>
                                        <td>
                                            <input style={inputQuantity} type="number" value="1" name="quantity"
                                                   min="1" max="99"/>
                                        </td>
                                        <td style={textDetail}>45.0$</td>
                                        <td style={textDetail}>45.0$</td>
                                        <td style={textDetail}>
                                            <input type="submit" defaultValue="Send Message" value="Remove"
                                                   className="btn btn-primary py-3" style={removeProduct}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <img className="blog-img mr-4"
                                                 style={imgProduct}>
                                            </img>
                                        </th>
                                        <td>
                                            <input style={inputQuantity} type="number" value="1" name="quantity"
                                                   min="1" max="99"/>
                                        </td>
                                        <td style={textDetail}>35.6$</td>
                                        <td style={textDetail}>35.6$</td>
                                        <td style={textDetail}>
                                            <input type="submit" defaultValue="Send Message" value="Remove"
                                                   className="btn btn-primary py-3" style={removeProduct}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <img className="mr-4"
                                                 style={{backgroundImage: "url(" + 'images/image_1.jpg' + ")"}}>
                                            </img>
                                        </th>
                                        <td>
                                            <input style={inputQuantity} type="number" value="1" name="quantity"
                                                   min="1" max="99"/>
                                        </td>
                                        <td style={textDetail}>26.5$</td>
                                        <td style={textDetail}>26.5$</td>
                                        <td style={textDetail}>
                                            <input type="submit" defaultValue="Send Message" value="Remove"
                                                   className="btn btn-primary py-3" style={removeProduct}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={textDetail}>
                                            Subtotal
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td style={textDetail}>$24.59</td>
                                    </tr>
                                    <tr>
                                        <td style={textDetail}>
                                            Estimated shipping
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td style={textDetail}> $6.94</td>
                                    </tr>
                                    <tr>

                                        <td style={textDetail}>
                                            Total
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td style={textDetail}>$31.53</td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <button type="button" className="btn btn-default">
                                                <span className="glyphicon glyphicon-shopping-cart"></span> Continue
                                                Shopping
                                            </button>
                                        </th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <button type="button" className="btn btn-success">
                                                Checkout <span className="glyphicon glyphicon-play"></span>
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div id="map"/>

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

const textDetail = {
    fontSize: 20
};

const inputQuantity = {
    width: 85,
    fontSize: 20,
    height: 40,
    // height: -webkit-fill-available,
};

const titleCart = {
    fontSize: 24

};

const imgProduct = {
    backgroundImage: "url(" + 'images/image_1.jpg' + ")",
}

const removeProduct = {
    width: 100,
    // marginRight: -25,
}
export default AboutPage