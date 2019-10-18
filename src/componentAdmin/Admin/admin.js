import React, {Component} from 'react';
import {withFirebase} from '../../components/Firebase';

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users: [],
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();
            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));
            this.setState({
                users: usersList,
                loading: false,
            });
        });
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
        const {users, loading} = this.state;
        return (
            <div>
                <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                    <div className="navbar-brand-wrapper d-flex justify-content-center">
                        <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
                            <a className="navbar-brand flaticon-pizza-1 mr-1" href="/admin">Cowboy <br/><small>Jack</small></a>
                        </div>
                    </div>
                    <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                        <ul className="navbar-nav mr-lg-4 w-100">

                            <li className="nav-item nav-search d-none d-lg-block w-100">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                    <span className="input-group-text" id="search">
                      <i className="mdi mdi-magnify" />
                    </span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Search now" aria-label="search" aria-describedby="search" />
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav navbar-nav-right">
                            <li className="nav-item dropdown mr-1">
                                <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-toggle="dropdown">
                                    <i className="mdi mdi-message-text mx-0" />
                                    <span className="count" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="messageDropdown">
                                    <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                                    <a className="dropdown-item">
                                        <div className="item-thumbnail">
                                            <img src="images/faces/face4.jpg" alt="image" className="profile-pic" />
                                        </div>
                                        <div className="item-content flex-grow">
                                            <h6 className="ellipsis font-weight-normal">David Grey
                                            </h6>
                                            <p className="font-weight-light small-text text-muted mb-0">
                                                The meeting is cancelled
                                            </p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item">
                                        <div className="item-thumbnail">
                                            <img src="images/faces/face2.jpg" alt="image" className="profile-pic" />
                                        </div>
                                        <div className="item-content flex-grow">
                                            <h6 className="ellipsis font-weight-normal">Tim Cook
                                            </h6>
                                            <p className="font-weight-light small-text text-muted mb-0">
                                                New product launch
                                            </p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item">
                                        <div className="item-thumbnail">
                                            <img src="images/faces/face3.jpg" alt="image" className="profile-pic" />
                                        </div>
                                        <div className="item-content flex-grow">
                                            <h6 className="ellipsis font-weight-normal"> Johnson
                                            </h6>
                                            <p className="font-weight-light small-text text-muted mb-0">
                                                Upcoming board meeting
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown mr-4">
                                <a className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center notification-dropdown" id="notificationDropdown" href="#" data-toggle="dropdown">
                                    <i className="mdi mdi-bell mx-0" />
                                    <span className="count" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="notificationDropdown">
                                    <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                                    <a className="dropdown-item">
                                        <div className="item-thumbnail">
                                            <div className="item-icon bg-success">
                                                <i className="mdi mdi-information mx-0" />
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <h6 className="font-weight-normal">Application Error</h6>
                                            <p className="font-weight-light small-text mb-0 text-muted">
                                                Just now
                                            </p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item">
                                        <div className="item-thumbnail">
                                            <div className="item-icon bg-warning">
                                                <i className="mdi mdi-settings mx-0" />
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <h6 className="font-weight-normal">Settings</h6>
                                            <p className="font-weight-light small-text mb-0 text-muted">
                                                Private message
                                            </p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item">
                                        <div className="item-thumbnail">
                                            <div className="item-icon bg-info">
                                                <i className="mdi mdi-account-box mx-0" />
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <h6 className="font-weight-normal">New user registration</h6>
                                            <p className="font-weight-light small-text mb-0 text-muted">
                                                2 days ago
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item nav-profile dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                                    <img src="images/faces/face5.jpg" alt="profile" />
                                    <span className="nav-profile-name">Louis Barnett</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                                    <a className="dropdown-item">
                                        <i className="mdi mdi-settings text-primary" />
                                        Settings
                                    </a>
                                    <a className="dropdown-item">
                                        <i className="mdi mdi-logout text-primary" />
                                        Logout
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                            <span className="mdi mdi-menu" />
                        </button>
                    </div>
                </nav>
                <div className="container-scroller">
                    {/* partial:partials/_navbar.html */}

                    {/* partial */}
                    <div className="container-fluid page-body-wrapper">
                        {/* partial:partials/_sidebar.html */}
                        <nav className="sidebar sidebar-offcanvas" id="sidebar">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/admin">
                                        <i className="mdi mdi-home menu-icon" />
                                        <span className="menu-title">Dashboard</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                                        <i className="mdi mdi-account menu-icon" />
                                        <span className="menu-title">Quản lý Admin</span>
                                        <i className="menu-arrow" />
                                    </a>
                                    <div className="collapse" id="ui-basic">
                                        <ul className="nav flex-column sub-menu">
                                            <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">List tài khoản Admin</a></li>
                                            <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Tạo tài khoản Admin</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                                        <i className="mdi mdi-pizza menu-icon" />
                                        <span className="menu-title">Quản lý cửa hàng</span>
                                        <i className="menu-arrow" />
                                    </a>
                                    <div className="collapse" id="auth">
                                        <ul className="nav flex-column sub-menu">
                                            <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> List cửa hàng </a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <div className="main-panel">
                            <div className="content-wrapper">
                                <div className="row">

                                </div>
                            </div>

                            <footer className="footer">
                                <div className="d-sm-flex justify-content-center justify-content-sm-between">
                                    <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2018 <a href="https://www.urbanui.com/" target="_blank">Urbanui</a>. All rights reserved.</span>
                                    <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted &amp; made with <i className="mdi mdi-heart text-danger" /></span>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const UserList = ({users}) => (
    <ul>
        {users.map(user => (
            <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
                <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
                <span>
          <strong>Username:</strong> {user.username}
            </span>
            </li>
        ))}
    </ul>
);
export default withFirebase(AdminPage);