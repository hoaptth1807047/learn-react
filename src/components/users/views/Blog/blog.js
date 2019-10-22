import React, {Component} from 'react';
import * as ROUTES from "../../../constants/routes";
import {Link} from "react-router-dom";

class BlogPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <section className="home-slider owl-carousel img" style={{backgroundImage: 'url(../../images/bg_1.jpg)'}}>
                        <div className="slider-item" style={{backgroundImage: 'url(../../images/bg_3.jpg)'}}>
                            <div className="overlay" />
                            <div className="container">
                                <div className="row slider-text justify-content-center align-items-center">
                                    <div className="col-md-7 col-sm-12 text-center ftco-animate">
                                        <h1 className="mb-3 mt-5 bread">Read our Blog</h1>
                                        <p className="breadcrumbs"><span className="mr-2"><a href=""><Link to={ROUTES.HOME}>Home</Link></a></span>
                                            <span>Blog</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="ftco-section">
                        <div className="container">
                            <div className="row justify-content-center mb-5 pb-3">
                                <div className="col-md-7 heading-section ftco-animate text-center">
                                    <h2 className="mb-4">Read our blog</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                                        the blind texts.</p>
                                </div>
                            </div>
                            <div className="row d-flex">
                                <div className="col-md-4 d-flex ftco-animate">
                                    <div className="blog-entry align-self-stretch">
                                        <a href="" className="block-20" style={{backgroundImage: 'url("../../images/image_1.jpg")'}}>
                                        <Link to={ROUTES.BLOGSINGLE}></Link></a>
                                        <div className="text py-4 d-block">
                                            <div className="meta">
                                                <div><a href="#">Sept 10, 2018</a></div>
                                                <div><a href="#">Admin</a></div>
                                                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                                            </div>
                                            <h3 className="heading mt-2"><a href="#">The Delicious Pizza</a></h3>
                                            <p>A small river named Duden flows by their place and supplies it with the necessary
                                                regelialia.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex ftco-animate">
                                    <div className="blog-entry align-self-stretch">
                                        <a href="" className="block-20" style={{backgroundImage: 'url("../../images/image_2.jpg")'}}>
                                        <Link to={ROUTES.BLOGSINGLE}></Link></a>
                                        <div className="text py-4 d-block">
                                            <div className="meta">
                                                <div><a href="#">Sept 10, 2018</a></div>
                                                <div><a href="#">Admin</a></div>
                                                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                                            </div>
                                            <h3 className="heading mt-2"><a href="#">The Delicious Pizza</a></h3>
                                            <p>A small river named Duden flows by their place and supplies it with the necessary
                                                regelialia.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex ftco-animate">
                                    <div className="blog-entry align-self-stretch">
                                        <a href="" className="block-20" style={{backgroundImage: 'url("../../images/image_3.jpg")'}}>
                                        <Link to={ROUTES.BLOGSINGLE}></Link></a>
                                        <div className="text py-4 d-block">
                                            <div className="meta">
                                                <div><a href="#">Sept 10, 2018</a></div>
                                                <div><a href="#">Admin</a></div>
                                                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                                            </div>
                                            <h3 className="heading mt-2"><a href="#">The Delicious Pizza</a></h3>
                                            <p>A small river named Duden flows by their place and supplies it with the necessary
                                                regelialia.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex ftco-animate">
                                    <div className="blog-entry align-self-stretch">
                                        <a href="" className="block-20" style={{backgroundImage: 'url("../../images/image_4.jpg")'}}>
                                        <Link to={ROUTES.BLOGSINGLE}></Link></a>
                                        <div className="text py-4 d-block">
                                            <div className="meta">
                                                <div><a href="#">Sept 10, 2018</a></div>
                                                <div><a href="#">Admin</a></div>
                                                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                                            </div>
                                            <h3 className="heading mt-2"><a href="#">The Delicious Pizza</a></h3>
                                            <p>A small river named Duden flows by their place and supplies it with the necessary
                                                regelialia.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex ftco-animate">
                                    <div className="blog-entry align-self-stretch">
                                        <a href="" className="block-20" style={{backgroundImage: 'url("../../images/image_5.jpg")'}}>
                                        <Link to={ROUTES.BLOGSINGLE}></Link></a>
                                        <div className="text py-4 d-block">
                                            <div className="meta">
                                                <div><a href="#">Sept 10, 2018</a></div>
                                                <div><a href="#">Admin</a></div>
                                                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                                            </div>
                                            <h3 className="heading mt-2"><a href="#">The Delicious Pizza</a></h3>
                                            <p>A small river named Duden flows by their place and supplies it with the necessary
                                                regelialia.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex ftco-animate">
                                    <div className="blog-entry align-self-stretch">
                                        <a href="" className="block-20" style={{backgroundImage: 'url("../../images/image_6.jpg")'}}>
                                            <Link to={ROUTES.BLOGSINGLE}></Link>
                                        </a>
                                        <div className="text py-4 d-block">
                                            <div className="meta">
                                                <div><a href="#">Sept 10, 2018</a></div>
                                                <div><a href="#">Admin</a></div>
                                                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                                            </div>
                                            <h3 className="heading mt-2"><a href="#">The Delicious Pizza</a></h3>
                                            <p>A small river named Duden flows by their place and supplies it with the necessary
                                                regelialia.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col text-center">
                                    <div className="block-27">
                                        <ul>
                                            <li><a href="#">&lt;</a></li>
                                            <li className="active"><span>1</span></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="#">&gt;</a></li>
                                        </ul>
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
            </div>
        )
    }
}

export default BlogPage