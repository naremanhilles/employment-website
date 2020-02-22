import React from 'react';
import { Container, Alert } from 'react-bootstrap';
import Form from './Form';

import './style.css';
import styles from './report.module.css';

export default class MyApplications extends React.Component {
  redirectToView = () => {
    const { turnAuthHeader } = this.props;
    turnAuthHeader();
    const { history } = this.props;
    if (history) history.push('/');
  };

  render() {
    return (
      <>
        <div className="main-container">
          <div className={styles['form--container']}>
            <Form redirectToView={this.redirectToView} />
          </div>
        </div>
      </>
    );
  }
}
