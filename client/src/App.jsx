import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import PrivatePages from './PrivatePages';

import auth from './auth/auth';
import 'antd/dist/antd.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  LandingPage,
  Login,
  Signup,
  Header,
  Footer,
  PageNotFound,
} from './Components';
// new-ticket//show-ticit//activat

import Termsconditions from './Components/Termsconditions/index';

import Privacy from './Components/Privacy/index';
import Features from './Components/Features/index';
import Contact from './Components/Contact/index';
import Help from './Components/Help/index';
import Support from './Components/Support/index';
import Faq from './Components/Faq/index';
import Faqcat from './Components/Faqt/index';
import Qustion1 from './Components/Qus1/index';
import Qustion2 from './Components/Qus2/index';
import Qustion3 from './Components/Qus3/index';
import Qustion4 from './Components/Qus4/index';
import Qustion5 from './Components/Qus5/index';
import Qustion6 from './Components/Qus6/index';
import Qustion7 from './Components/Qus7/index';
import Qustion8 from './Components/Qus8/index';
import Qustion9 from './Components/Qus9/index';
import Qustion10 from './Components/Qus10/index';
import Qustion11 from './Components/Qus11/index';
import Qustion12 from './Components/Qus12/index';
import Qustion13 from './Components/Qus13/index';
import Qustion14 from './Components/Qus14/index';

export default class App extends Component {
  state = {
    isHead: false,
    items: [
      { id: 1, name: 'gghgg', age: 18 },
      { id: 2, name: 'uuuu', age: 19 },
    ],
    islogged: null,
    userInfo: null,
  };

  componentDidMount() {
    auth.authenticate(() => {
      if (auth.isAuthenticated) {
        const userInfo = auth.getUserInfo();
        this.setState({ userInfo, islogged: auth.isAuthenticated });
      } else {
        this.setState({ islogged: auth.isAuthenticated });
      }
    });
  }

  isLoggedOut = () => {
    auth.logout();
    this.setState({ islogged: false });
  };

  setUserInfo = (_userInfo, _islogged) => {
    const userInfo = auth.getUserInfo() || _userInfo;
    this.setState({ userInfo, islogged: auth.isAuthenticated });
  };

  turnAuthHeader = () => {
    this.setState({ isHead: true });
  };

  render() {
    const { islogged, isHead } = this.state;
    return (
      <>
        {islogged === null ? (
          <Spinner animation="grow" variant="info" className="loading" />
        ) : (
          <Router>
            <Header
              isHead={isHead}
              islogged={islogged}
              isLoggedOut={this.isLoggedOut}
            />
            <div className="body-container">
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route
                  exact
                  path="/login"
                  setUserInfo={this.setUserInfo}
                  render={props => (
                    <Login {...props} setUserInfo={this.setUserInfo} />
                  )}
                />
                <Route
                  exact
                  path="/signup"
                  setUserInfo={this.setUserInfo}
                  render={props => (
                    <Signup {...props} setUserInfo={this.setUserInfo} />
                  )}
                />
                <Route
                  exact
                  path="/terms-conditions"
                  component={Termsconditions}
                />
                <Route exact path="/privacy" component={Privacy} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/faq_cat" component={Faqcat} />

                <Route exact path="/features" component={Features} />
                <Route exact path="/help" component={Help} />
                <Route exact path="/faq" component={Faq} />
                <Route exact path="/support" component={Support} />
                <Route exact path="/question/1" component={Qustion1} />
                <Route exact path="/question/2" component={Qustion2} />
                <Route exact path="/question/3" component={Qustion3} />
                <Route exact path="/question/4" component={Qustion4} />
                <Route exact path="/question/5" component={Qustion5} />
                <Route exact path="/question/6" component={Qustion6} />
                <Route exact path="/question/7" component={Qustion7} />
                <Route exact path="/question/8" component={Qustion8} />
                <Route exact path="/question/9" component={Qustion9} />
                <Route exact path="/question/10" component={Qustion10} />
                <Route exact path="/question/11" component={Qustion11} />
                <Route exact path="/question/12" component={Qustion12} />
                <Route exact path="/question/13" component={Qustion13} />
                <Route exact path="/question/14" component={Qustion14} />

                <Route
                  path="/app"
                  turnAuthHeader={this.turnAuthHeader}
                  component={PrivatePages}
                />
                <Route component={PageNotFound} />
              </Switch>
            </div>
            <Footer />
          </Router>
        )}
      </>
    );
  }
}
