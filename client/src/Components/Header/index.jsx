import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, Col, Dropdown, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Notification from './Notification';
import './style.css';
import auth from '../../auth/auth';
import logon from './logo-small.png';

class Header extends Component {
  state = {
    userInfo: {
      fullName: null,
      username: null,
      avatar: null,
      defaultAvatar: '',
    },
  };

  componentDidMount() {
    const userInfo = auth.getUserInfo();
    if (userInfo) {
      userInfo.defaultAvatar =
        'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1';
      this.setState({ userInfo });
    }
  }

  componentDidUpdate() {
    const {
      userInfo: { username },
    } = this.state;
    const userInfo = auth.getUserInfo();
    if (userInfo && username !== userInfo.username) {
      userInfo.defaultAvatar =
        'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1';
      this.setState({ userInfo });
    }
  }

  handleLogout = () => {
    fetch('/api/v1/logout')
      .then(res => res.json())
      .then(res => {
        if (res.data === 'success') {
          auth.logout();
          this.props.isLoggedOut();
          this.props.history.push('/');
        }
      })
      .catch();
  };

  render() {
    const { islogged, isHead } = this.props;
    console.log(1111111, 44444, isHead);
    const {
      userInfo: { username, avatar, defaultAvatar },
    } = this.state;
    return (
      <Navbar bg="light" expand="lg" className="Navbar__container">
        <Col md="auto">
          <Nav>
            <NavLink to="/login" className="navbar__link">
              <div className="navbar__link--text">
                {' '}
                تسجيل الدخول
                <i className="fas fa-user" />
              </div>
            </NavLink>
            <NavLink to="/Signup" className="navbar__link">
              <div className="navbar__link--text">
                {' '}
                عضوية جديدة
                <i className="fas fa-power-off" />
              </div>
            </NavLink>
          </Nav>
        </Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navigation">
          {!islogged && (
            <Col md="auto">
              <Nav>
                <NavLink to="/" className="navbar__link">
                  <div className="navbar__link--text">
                    مركز المساعدة
                    <i className="fa fa-anchor" />
                  </div>
                </NavLink>
                <NavLink to="/login" className="navbar__link">
                  <div className="navbar__link--text">
                    الخصائص والمميزات
                    <i className="fa fa-trophy" />
                  </div>
                </NavLink>
                <div to="/" className="navbar-header">
                  <a className="navbar-logo" href="/">
                    مدير المشاريع
                    <img src={logon} />
                  </a>
                </div>
              </Nav>
            </Col>
          )}
          {islogged && (
            <>
              <Col md="auto">
                <Nav>
                  <NavLink to="/app/home" className="navbar__link">
                    <div className="navbar__link--text">Home</div>
                  </NavLink>

                  <NavLink
                    to={isHead ? '/app/my-applications' : '/app/home'}
                    className="navbar__link"
                  >
                    <div className="navbar__link--text">My Applications</div>
                  </NavLink>

                  <NavLink
                    to={isHead ? '/app/my-offers' : '/app/home'}
                    className="navbar__link"
                  >
                    <div className="navbar__link--text">My Offers</div>
                  </NavLink>

                  <NavLink
                    to={isHead ? '/app/saved-offers' : '/app/home'}
                    className="navbar__link"
                  >
                    <div className="navbar__link--text">Saved Offers</div>
                  </NavLink>

                  <NavLink
                    to={isHead ? '/app/new-offer' : '/app/home'}
                    className="navbar__link"
                  >
                    <div className="navbar__link--text">New Offer</div>
                  </NavLink>
                </Nav>
              </Col>
              <Col md="auto">
                {/* frop down menu to show member profile and logout */}
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="nav__dropdown"
                  >
                    <img
                      src={avatar || defaultAvatar}
                      alt="Avatar"
                      className="nav__avatar"
                    />{' '}
                    {'    '}
                    <span>{username}</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown__menu-avatar">
                    <Dropdown.Item
                      as={Link}
                      to={isHead ? `/app/profile/${username}` : '/app/home'}
                      className="dropdown__item"
                    >
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      // to="/logout"
                      onClick={this.handleLogout}
                      className="dropdown__item"
                    >
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col md="auto">
                {/* show notificatios component */}
                <Notification />
              </Col>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
// prop types validation
Header.propTypes = {
  islogged: PropTypes.bool.isRequired,
};

export default withRouter(Header);
