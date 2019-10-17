import React, {Component} from 'react';
import * as ROUTES from "../constants/routes";
import {Link} from "react-router-dom";

class AboutPage extends Component {
    render() {
        return (
            <div>
                <section className="home-slider owl-carousel img" style={{backgroundImage: "url(" + '../../images/bg_1.jpg' + ")"}}>
                    <div className="slider-item" style={{backgroundImage: "url(" + '../../images/bg_3.jpg' + ")"}}>
                        {/*style={{backgroundImage: "url(" + '../../images/bg_1.jpg' + ")"}}*/}
                        <div className="overlay"/>
                        <div className="container">
                            <div className="row slider-text justify-content-center align-items-center">
                                <div className="col-md-7 col-sm-12 text-center ftco-animate">
                                    <h1 className="mb-3 mt-5 bread">About</h1>
                                    <p className="breadcrumbs"><span className="mr-2"><a href=""><Link to={ROUTES.HOME}>Home</Link></a></span>
                                        <span>About</span></p>
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
                                        <div className="icon"><span className="fas fa-phone-alt" /></div>
                                        <div className="text">
                                            <h3>000 (123) 456 7890</h3>
                                            <p>A small river named Duden flows</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex ftco-animate">
                                        <div className="icon"><span className="fas fa-map-marker-alt" /></div>
                                        <div className="text">
                                            <h3>198 West 21th Street</h3>
                                            <p>Suite 721 New York NY 10016</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex ftco-animate">
                                        <div className="icon"><span className="fas fa-clock" /></div>
                                        <div className="text">
                                            <h3>Open Monday-Friday</h3>
                                            <p>8:00am - 9:00pm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="social d-md-flex pl-md-5 p-4 align-items-center">
                                {/*                <ul class="social-icon">*/}
                                {/*                    <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>*/}
                                {/*                    <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>*/}
                                {/*                    <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>*/}
                                {/*                </ul>*/}
                                <div className="social-buttons">
                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                    <a href="#"><i className="fab fa-twitter" /></a>
                                    <a href="#"><i className="fab fa-instagram" /></a>
                                    <a href="#"><i className="fab fa-youtube" /></a>
                                    <a href="#"><i className="fab fa-google" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ftco-about d-md-flex">
                    <div className="one-half img" style={{backgroundImage: 'url(../../images/about.jpg)'}} />
                    <div className="one-half ftco-animate">
                        <div className="heading-section ftco-animate ">
                            <h2 className="mb-4">Welcome to <span className="flaticon-pizza">Pizza</span> A Restaurant</h2>
                        </div>
                        <div>
                            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have
                                been rewritten a thousand times and everything that was left from its origin would be the word "and" and
                                the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said
                                could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her
                                drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                        </div>
                    </div>
                </section>

                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 heading-section ftco-animate text-center">
                                <h2 className="mb-4">Our Chef</h2>
                                <p className="flip"><span className="deg1" /><span className="deg2" /><span className="deg3" /></p>
                                <p className="mt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 d-flex mb-sm-4 ftco-animate">
                                <div className="staff">
                                    <div className="img mb-4" style={{backgroundImage: 'url(../../images/person_1.jpg)'}} />
                                    <div className="info text-center">
                                        <h3><a href="#">Tom Smith</a></h3>
                                        <span className="position">Hair Specialist</span>
                                        <div className="text">
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                                there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 d-flex mb-sm-4 ftco-animate">
                                <div className="staff">
                                    <div className="img mb-4" style={{backgroundImage: 'url(../../images/person_2.jpg)'}} />
                                    <div className="info text-center">
                                        <h3><a href="#">Mark Wilson</a></h3>
                                        <span className="position">Beard Specialist</span>
                                        <div className="text">
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                                there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 d-flex mb-sm-4 ftco-animate">
                                <div className="staff">
                                    <div className="img mb-4" style={{backgroundImage: 'url(../../images/person_3.jpg)'}} />
                                    <div className="info text-center">
                                        <h3><a href="#">Patrick Jacobson</a></h3>
                                        <span className="position">Hair Stylist</span>
                                        <div className="text">
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                                there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 d-flex mb-sm-4 ftco-animate">
                                <div className="staff">
                                    <div className="img mb-4" style={{backgroundImage: 'url(../../images/person_4.jpg)'}} />
                                    <div className="info text-center">
                                        <h3><a href="#">Ivan Dorchsner</a></h3>
                                        <span className="position">Beard Specialist</span>
                                        <div className="text">
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                                there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ftco-section ourteam">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 heading-section ftco-animate text-center">
                                <h2 className="mb-4">Our Team</h2>
                                <p className="flip"><span className="deg1" /><span className="deg2" /><span className="deg3" /></p>
                                <p className="mt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 d-flex mb-sm-4 ftco-animate">
                                <div className="staff">
                                    <div className="img mb-4" style={{backgroundImage: 'url(../../images/hoainam.jpg)'}} />
                                    <div className="info text-center">
                                        <h3><a href="#">Phan Hoai Nam</a></h3>
                                        <span className="position">Hair Specialist</span>
                                        <div className="text">
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                                there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 d-flex mb-sm-4 ftco-animate">
                                <div className="staff">
                                    <div className="img mb-4" style={{backgroundImage: 'url(../../images/phamthanhhoa.jpg)'}} />
                                    <div className="info text-center">
                                        <h3><a href="#">Pham Thanh Hoa</a></h3>
                                        <span className="position">Beard Specialist</span>
                                        <div className="text">
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                                there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 d-flex mb-sm-4 ftco-animate">
                                <div className="staff">
                                    <div className="img mb-4" style={{backgroundImage: 'url(../../images/lequangbach.jpg)'}} />
                                    <div className="info text-center">
                                        <h3><a href="#">Le Quang Bach</a></h3>
                                        <span className="position">Hair Stylist</span>
                                        <div className="text">
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                                there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 d-flex mb-sm-4 ftco-animate">
                                <div className="staff">
                                    <div className="img mb-4" style={{backgroundImage: 'url(../../images/nguyentuananh.jpg)'}} />
                                    <div className="info text-center">
                                        <h3><a href="#">Nguyen Tuan Anh</a></h3>
                                        <span className="position">Beard Specialist</span>
                                        <div className="text">
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                                there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-counter ftco-bg-dark img" id="section-counter" style={{backgroundImage: 'url(../../images/bg_2.jpg)'}} data-stellar-background-ratio="0.5">
                    <div className="overlay" />
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <div className="icon"><span className="flaticon-pizza-1" /></div>
                                                <strong className="number" data-number={100}>0</strong>
                                                <span>Pizza Branches</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <div className="icon"><span className="flaticon-medal" /></div>
                                                <strong className="number" data-number={85}>0</strong>
                                                <span>Number of Awards</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <div className="icon"><span className="flaticon-laugh" /></div>
                                                <strong className="number" data-number={10567}>0</strong>
                                                <span>Happy Customer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <div className="icon"><span className="flaticon-chef" /></div>
                                                <strong className="number" data-number={900}>0</strong>
                                                <span>Staff</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-appointment">
                    <div className="overlay" />
                    <div className="container-wrap">
                        <div className="row no-gutters d-md-flex align-items-center">
                            <div className="col-md-6 d-flex align-self-stretch">
                                <div id="map" />
                            </div>
                            <div className="col-md-6 appointment ftco-animate">
                                <h3 className="mb-3">Contact Us</h3>
                                <form action="#" className="appointment-form">
                                    <div className="d-md-flex">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="d-me-flex">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea name id cols={30} rows={3} className="form-control" placeholder="Message" defaultValue={""} />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" defaultValue="Send" className="btn btn-primary py-3 px-4" />
                                    </div>
                                </form>
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

export default AboutPage