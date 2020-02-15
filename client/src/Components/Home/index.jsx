import React from 'react';
import { Container, Alert } from 'react-bootstrap';

import ApplicationCard from '../CommonComponents/OfferCard';
import PageTitle from '../CommonComponents/PageTitle';
import auth from '../../auth/auth';
import Form from './Form';

import './style.css';
import styles from './report.module.css';

export default class MyApplications extends React.Component {
  state = {
    myApplications: [],
    message: '',
  };

  redirectToView = () => {
    const { turnAuthHeader } = this.props;
    turnAuthHeader();
    const { history } = this.props;
    if (history) history.push('/');
  };

  // componentDidMount() {
  //   const userInfo = auth.getUserInfo();
  //   const { id } = userInfo;
  //   fetch(`/api/v1/${id}/my-applications`)
  //     .then(res => res.json())
  //     .then(({ data, error }) => {
  //       if (data) this.setState({ myApplications: data });
  //       else this.setState({ message: error.msg });
  //     })
  //     .catch(er => {
  //       this.setState({ message: er.message });
  //     });
  // }

  render() {
    // const { myApplications, message } = this.state;
    return (
      <>
        <div className="main-container">
          <div className={styles['form--container']}>
            <Form
              // city={city}
              // location={location}
              // onCityChange={onCityChange}
              // longitude={longitude}
              // latitude={latitude}
              redirectToView={this.redirectToView}
            />
          </div>
        </div>
        {/* 
        <Container className="page__container">
          <PageTitle title="My Applications" />
          {message && <Alert variant="danger">{message}</Alert>}
          {myApplications
            ? myApplications.map(item => {
                return (
                  <ApplicationCard
                    hover
                    offer={item}
                    id={item.id}
                    key={item.id}
                    status={item.status}
                  />
                );
              })
            : null}
          <div className={styles['form--container']}>
            <Form
            // city={city}
            // location={location}
            // onCityChange={onCityChange}
            // longitude={longitude}
            // latitude={latitude}
            // redirectToView={redirectToView}
            />
          </div>
        </Container> */}
      </>
    );
  }
}
