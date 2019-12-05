import React, {Component} from 'react';
import * as ROUTES from "../../../constants/routes";
import {Link} from "react-router-dom";

class BlogSinglePage extends Component {
    render() {
        return (
            <div>
                <section className="home-slider owl-carousel img" style={{backgroundImage: 'url(../../images/bg_1.jpg)'}}>
                    <div className="slider-item" style={{backgroundImage: 'url(../../public/images/bg_3.jpg)'}}>
                        <div className="overlay" />
                        <div className="container">
                            <div className="row slider-text justify-content-center align-items-center">
                                <div className="col-md-7 col-sm-12 text-center ftco-animate">
                                    <h1 className="mb-3 mt-5 bread">Read our Blog</h1>
                                    <p className="breadcrumbs"><span className="mr-2"><a href=""><Link to={ROUTES.HOME}>Home</Link></a></span> <span className="mr-2"><a href="blog.html">Blog</a></span> <span>Blog Single</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ftco-section ftco-degree-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 ftco-animate">
                                <h2 className="mb-3">10 Tips For The Traveler</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit,
                                    quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro
                                    adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis,
                                    enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta
                                    architecto tempora.</p>
                                <p>
                                    <img src="../../../../images/image_1.jpg" alt="" className="img-fluid" />
                                </p>
                                <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt
                                    doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo
                                    eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis
                                    ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
                                <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
                                <p>Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in.
                                    Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error
                                    dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi
                                    repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
                                <p>
                                    <img src="../../../../images/image_2.jpg" alt="" className="img-fluid" />
                                </p>
                                <p>Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod,
                                    est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab
                                    consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit,
                                    porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>
                                <p>Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem
                                    pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo
                                    soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni.
                                    Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.</p>
                                <p>Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique
                                    asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates
                                    beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum
                                    provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur
                                    recusandae!</p>
                                <p>Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo
                                    a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis
                                    alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta
                                    doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis,
                                    inventore?</p>
                                <div className="tag-widget post-tag-container mb-5 mt-5">
                                    <div className="tagcloud">
                                        <a href="#" className="tag-cloud-link">Life</a>
                                        <a href="#" className="tag-cloud-link">Sport</a>
                                        <a href="#" className="tag-cloud-link">Tech</a>
                                        <a href="#" className="tag-cloud-link">Travel</a>
                                    </div>
                                </div>
                                <div className="about-author d-flex">
                                    <div className="bio align-self-md-center mr-5">
                                        <img src="../../../../images/image_1.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="desc align-self-md-center">
                                        <h3>Lance Smith</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem
                                            necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente
                                            consectetur similique, inventore eos fugit cupiditate numquam!</p>
                                    </div>
                                </div>
                                <div className="pt-5 mt-5">
                                    <h3 className="mb-5">6 Comments</h3>
                                    <ul className="comment-list">
                                        <li className="comment">
                                            <div className="vcard bio">
                                                <img src="../../../../images/person_1.jpg" alt="Image placeholder" />
                                            </div>
                                            <div className="comment-body">
                                                <h3>John Doe</h3>
                                                <div className="meta">June 27, 2018 at 2:21pm</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum
                                                    necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente
                                                    iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                <p><a href="#" className="reply">Reply</a></p>
                                            </div>
                                        </li>
                                        <li className="comment">
                                            <div className="vcard bio">
                                                <img src="../../../../images/person_1.jpg" alt="Image placeholder" />
                                            </div>
                                            <div className="comment-body">
                                                <h3>John Doe</h3>
                                                <div className="meta">June 27, 2018 at 2:21pm</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum
                                                    necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente
                                                    iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                <p><a href="#" className="reply">Reply</a></p>
                                            </div>
                                            <ul className="children">
                                                <li className="comment">
                                                    <div className="vcard bio">
                                                        <img src="../../../../images/person_1.jpg" alt="Image placeholder" />
                                                    </div>
                                                    <div className="comment-body">
                                                        <h3>John Doe</h3>
                                                        <div className="meta">June 27, 2018 at 2:21pm</div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem
                                                            laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe
                                                            enim sapiente iste iure! Quam voluptas earum impedit necessitatibus,
                                                            nihil?</p>
                                                        <p><a href="#" className="reply">Reply</a></p>
                                                    </div>
                                                    <ul className="children">
                                                        <li className="comment">
                                                            <div className="vcard bio">
                                                                <img src="../../../../images/person_1.jpg" alt="Image placeholder" />
                                                            </div>
                                                            <div className="comment-body">
                                                                <h3>John Doe</h3>
                                                                <div className="meta">June 27, 2018 at 2:21pm</div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
                                                                    quidem laborum necessitatibus, ipsam impedit vitae autem, eum
                                                                    officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
                                                                    impedit necessitatibus, nihil?</p>
                                                                <p><a href="#" className="reply">Reply</a></p>
                                                            </div>
                                                            <ul className="children">
                                                                <li className="comment">
                                                                    <div className="vcard bio">
                                                                        <img src="../../../../images/person_1.jpg" alt="Image placeholder" />
                                                                    </div>
                                                                    <div className="comment-body">
                                                                        <h3>John Doe</h3>
                                                                        <div className="meta">June 27, 2018 at 2:21pm</div>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                            Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                                                                            autem, eum officia, fugiat saepe enim sapiente iste iure!
                                                                            Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                                        <p><a href="#" className="reply">Reply</a></p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="comment">
                                            <div className="vcard bio">
                                                <img src="../../../../images/person_1.jpg" alt="Image placeholder" />
                                            </div>
                                            <div className="comment-body">
                                                <h3>John Doe</h3>
                                                <div className="meta">June 27, 2018 at 2:21pm</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum
                                                    necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente
                                                    iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                <p><a href="#" className="reply">Reply</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                    {/* END comment-list */}
                                    <div className="comment-form-wrap pt-5">
                                        <h3 className="mb-5">Leave a comment</h3>
                                        <form action="#">
                                            <div className="form-group">
                                                <label htmlFor="name">Name *</label>
                                                <input type="text" className="form-control" id="name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email *</label>
                                                <input type="email" className="form-control" id="email" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="website">Website</label>
                                                <input type="url" className="form-control" id="website" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="message">Message</label>
                                                <textarea name id="message" cols={30} rows={10} className="form-control" defaultValue={""} />
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" defaultValue="Post Comment" value="Send" className="btn py-3 px-4 btn-primary" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 sidebar ftco-animate">
                                <div className="sidebar-box">
                                    <form action="#" className="search-form">
                                        <div className="form-group">
                                            <div className="icon">
                                                <span className="icon-search" />
                                            </div>
                                            <input type="text" className="form-control" placeholder="Search..." />
                                        </div>
                                    </form>
                                </div>
                                <div className="sidebar-box ftco-animate">
                                    <div className="categories">
                                        <h3>Categories</h3>
                                        <li><a href="#">Tour <span>(12)</span></a></li>
                                        <li><a href="#">Hotel <span>(22)</span></a></li>
                                        <li><a href="#">Coffee <span>(37)</span></a></li>
                                        <li><a href="#">Drinks <span>(42)</span></a></li>
                                        <li><a href="#">Foods <span>(14)</span></a></li>
                                        <li><a href="#">Travel <span>(140)</span></a></li>
                                    </div>
                                </div>
                                <div className="sidebar-box ftco-animate">
                                    <h3>Recent Blog</h3>
                                    <div className="block-21 mb-4 d-flex">
                                        <a className="blog-img mr-4" style={{backgroundImage: 'url(../../public/images/image_1.jpg)'}} />
                                        <div className="text">
                                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the
                                                blind texts</a></h3>
                                            <div className="meta">
                                                <div><a href="#"><span className="icon-calendar" /> July 12, 2018</a></div>
                                                <div><a href="#"><span className="icon-person" /> Admin</a></div>
                                                <div><a href="#"><span className="icon-chat" /> 19</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-21 mb-4 d-flex">
                                        <a className="blog-img mr-4" style={{backgroundImage: 'url(../../public/images/image_2.jpg)'}} />
                                        <div className="text">
                                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the
                                                blind texts</a></h3>
                                            <div className="meta">
                                                <div><a href="#"><span className="icon-calendar" /> July 12, 2018</a></div>
                                                <div><a href="#"><span className="icon-person" /> Admin</a></div>
                                                <div><a href="#"><span className="icon-chat" /> 19</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-21 mb-4 d-flex">
                                        <a className="blog-img mr-4" style={{backgroundImage: 'url(../../public/images/image_3.jpg)'}} />
                                        <div className="text">
                                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the
                                                blind texts</a></h3>
                                            <div className="meta">
                                                <div><a href="#"><span className="icon-calendar" /> July 12, 2018</a></div>
                                                <div><a href="#"><span className="icon-person" /> Admin</a></div>
                                                <div><a href="#"><span className="icon-chat" /> 19</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-box ftco-animate">
                                    <h3>Tag Cloud</h3>
                                    <div className="tagcloud">
                                        <a href="#" className="tag-cloud-link">dish</a>
                                        <a href="#" className="tag-cloud-link">menu</a>
                                        <a href="#" className="tag-cloud-link">food</a>
                                        <a href="#" className="tag-cloud-link">sweet</a>
                                        <a href="#" className="tag-cloud-link">tasty</a>
                                        <a href="#" className="tag-cloud-link">delicious</a>
                                        <a href="#" className="tag-cloud-link">desserts</a>
                                        <a href="#" className="tag-cloud-link">drinks</a>
                                    </div>
                                </div>
                                <div className="sidebar-box ftco-animate">
                                    <h3>Paragraph</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus
                                        voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur
                                        similique, inventore eos fugit cupiditate numquam!</p>
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

export default BlogSinglePage;