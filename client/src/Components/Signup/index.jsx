import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './style.css';
import { Form, Button, Container } from 'react-bootstrap';
import Recaptcha from 'react-recaptcha';
import signupValidation from './validation';
import auth from '../../auth/auth';

export default class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confPassword: '',
    errormsg: '',
    isVerified: false,
    disabled: true,
  };

  // handleSubscribe() {
  //   if (this.state.isVerified) {
  //     alert('You have successfully subscribed!');
  //   } else {
  //     alert('Please verify that you are a human!');
  //   }
  // }
  handleClick = e => {
    e.preventDefault();
    const { setUserInfo } = this.props;
    const {
      username,
      password: pass,
      email,
      confPassword,
      isVerified,
      disabled,
    } = this.state;
    this.setState({ errormsg: '' });
    // if (isVerified) {
    signupValidation
      .validate(
        {
          email,
          pass,
          confPassword,
          username,
          disabled,
        },
        { abortEarly: false }
      )
      .then(() => {
        fetch('/api/v1/members', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, pass }),
        })
          .then(res => res.json())
          .then(response => {
            if (response.data) {
              const { history } = this.props;
              auth.setUserInfo(response.data[0]);
              auth.isAuthenticated = true;
              setUserInfo(response.data);
              history.push('/app/home');
            } else {
              this.setState({ errormsg: response.error.msg });
            }
          })
          .catch(err => {
            auth.error = err;
          });
      })
      .catch(({ inner }) => {
        if (inner) {
          const errors = inner.reduce(
            (acc, item) => ({ ...acc, [item.path]: item.message }),
            {}
          );
          this.setState({ errormsg: { ...errors } });
        }
      });
    // } else {
    //   alert('Please verify that you are a human!');
    // }
  };

  // recaptchaLoaded = () => {
  //   console.log('capcha successfully loaded');
  // };

  // verifyCallback = response => {
  //   if (response) {
  //     this.setState({
  //       isVerified: true,
  //     });
  //   }
  // };

  handleChange = ({ target: { value, name } }) => {
    this.setState(({ errormsg }) => {
      const newErrormsg = { ...errormsg };
      newErrormsg[name] = '';
      return { [name]: value, errormsg: newErrormsg };
    });
  };

  handleCheck = e => {
    this.setState({ disabled: !this.state.disabled });
  };

  render() {
    const { username, email, password, confPassword, errormsg } = this.state;
    const { location } = this.props;
    if (auth.isAuthenticated) {
      return (
        <Redirect
          to={{
            pathname: '/home',
            state: { from: location },
          }}
        />
      );
    }
    return (
      <div className="main-container">
        <Container>
          <Form className="content-signup">
            <h2 className="content-signup__word-sigup">إنشاء حساب جديد</h2>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>
                اسم المستخدم :{' '}
                <span className="content-signup__username-star">*</span>
              </Form.Label>
              <Form.Control
                name="username"
                value={username}
                onChange={this.handleChange}
                type="username"
                placeholder="اسم المستخدم"
              />
              {errormsg && (
                <span className="errormsg">{errormsg.username}</span>
              )}
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                البريد الإلكترونى :{' '}
                <span className="content-signup__email-star">*</span>
              </Form.Label>
              <Form.Control
                name="email"
                value={email}
                onChange={this.handleChange}
                type="email"
                placeholder="البريد الإلكتروني"
              />
              {errormsg && <span className="errormsg">{errormsg.email}</span>}
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                كلمة المرور :{' '}
                <span className="content-signup__password-star">*</span>
              </Form.Label>
              <Form.Control
                name="password"
                value={password}
                onChange={this.handleChange}
                type="password"
                placeholder="كلمة المرور"
              />
              {errormsg && <span className="errormsg">{errormsg.pass}</span>}
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                تأكيد كلمة المرور :{' '}
                <span className="content-signup__confirm-password-star">*</span>
              </Form.Label>
              <Form.Control
                name="confPassword"
                value={confPassword}
                onChange={this.handleChange}
                type="password"
                placeholder="كلمة المرور"
              />
              {errormsg && (
                <span className="errormsg">{errormsg.confPassword}</span>
              )}
            </Form.Group>
            <div
              style={{ fontSize: '12px' }}
              className="alert alert-warning text-center"
            >
              {' '}
              <p>من المهم جداً أن يكون البريد الالكترونى صحيحاً</p>{' '}
              <p>لأنه لن يمكن الدخول للنظام إلا بعد تأكيد البريد الإلكتروني </p>{' '}
            </div>
            <p className="errormsg">{errormsg.msg}</p>
            {/* <Recaptcha
              sitekey="6LfTolwUAAAAAJ16pnJ1qBgXKlzGeKXRsCMRXllK"
              render="explicit"
              onloadCallback={this.recaptchaLoaded}
              verifyCallback={this.verifyCallback}
            /> */}

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="أوافق على"
                onChange={this.handleCheck}
              />
              <Link to="/terms-conditions" style={{ marginRight: '6px' }}>
                الشروط والأحكام
              </Link>{' '}
              {errormsg && (
                <span className="errormsg">{errormsg.disabled}</span>
              )}
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="content-signup__submit"
              onClick={this.handleClick}
            >
              تسجيل
            </Button>
            <Form.Text className="content-signup__text-muted">
              لديك حساب ؟{' '}
              <Link to="/login" className="content-signup__word-login">
                سجل دخول
              </Link>
            </Form.Text>
          </Form>
        </Container>
      </div>
    );
  }
}
