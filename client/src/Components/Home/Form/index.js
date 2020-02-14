import React, { Component } from 'react';
import { Steps, notification } from 'antd';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { useState, useEffect } from 'react';

import FirstStep from './First';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import Four from './Four';
import Five from './FiveStep';

import styles from './form.module.css';

const { Step } = Steps;

const steps = [
  {
    title: 'Empty Building',
  },
  {
    title: 'Extra Information',
  },
  {
    title: 'Personal Information',
  },
  {
    title: 'Peformation',
  },
  {
    title: 'Peformation',
  },
];

class Form extends Component {
  state = {
    current: 0,
    stepOneValues: {
      city: '',
      location: 'gaza',
      knownAddress: '',
      previousUse: '',
      owner: '',
      isOwnerLocal: '',
    },
    stepTwoValues: {
      emptyPeriod: '',
      extraInfo: '',
      preferredUse: '',
      thumbnail: '',
      mobile: '',
      name: '',
      birthdate: '',
      lastname: '',
      country: 'السعودية',
      gender: '',
    },
    stepFourValues: {
      emptyPeriod: '',
      extraInfo: '',
      preferredUse: '',
      thumbnail: '',
      mobile: '',
      name: '',
      birthdate: '',
      lastname: '',
      country: 'السعودية',
      gender: '',
    },
    stepFiveValues: [],
    stepThreeValues: {
      reporterName: '',
      reporterEmail: '',
      reporterAddress: '',
      receiveNotifications: false,
      shareData: false,
    },
    loading: false,
    iconLoading: false,
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  getStepOneValues = values => {
    const { stepOneValues } = this.state;
    this.setState({
      stepOneValues: {
        ...stepOneValues,
        ...values,
      },
    });
  };

  getStepTwoValues = values => {
    console.log(values, 7777777);

    const { stepTwoValues } = this.state;
    this.setState({
      stepTwoValues: {
        ...stepTwoValues,
        ...values,
      },
    });
  };

  getStepFourValues = values => {
    const { stepFourValues } = this.state;
    this.setState({
      stepFourValues: {
        ...stepFourValues,
        ...values,
      },
    });
  };

  getStepFiveValues = values => {
    this.setState(prevState => {
      let { stepFiveValues } = prevState;
      stepFiveValues = [...values];
      console.log(this.state, 55555);
      return {
        stepFiveValues,
      };
    });
    console.log(this.state, 44444);
  };

  getStepThreeValues = values => {
    const { stepThreeValues } = this.state;
    this.setState({
      stepThreeValues: {
        ...stepThreeValues,
        ...values,
      },
    });
  };

  handleConfirm = values => {
    const { stepThreeValues } = this.state;
    this.setState(
      {
        stepThreeValues: {
          ...stepThreeValues,
          ...values,
        },
      },
      () => this.sendData()
    );
  };

  // sendData = async () => {
  //   const openNotificationWithIcon = (type, message) => {
  //     notification[type]({
  //       message,
  //       duration: 3,
  //     });
  //   };
  //   const {
  //     stepOneValues,
  //     stepTwoValues: { emptyPeriod, extraInfo, preferredUse, thumbnail },
  //     stepThreeValues,
  //   } = this.state;

  //   const { redirectToView } = this.props;

  //   const formData = new FormData();
  //   const building = {
  //     ...stepOneValues,

  //     emptyPeriod,
  //     extraInfo,
  //     preferredUse,
  //     ...stepThreeValues,
  //   };

  //   Object.keys(building).forEach(key => {
  //     if (typeof building[key] === 'string')
  //       building[key] = building[key].trim();
  //     if (building[key] === '') delete building[key];
  //   });

  //   formData.append('data', JSON.stringify(building));
  //   if (thumbnail && thumbnail[0])
  //     formData.append('thumbnail', thumbnail[0].originFileObj);

  //   const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  //   try {
  //     const { data } = await axios.post(
  //       '/api/v1/report-building',
  //       formData,
  //       config
  //     );
  //     if (data.statusCode === 201) {
  //       openNotificationWithIcon(
  //         'success',
  //         'Great !! You added the empty building successfully'
  //       );
  //       redirectToView();
  //     } else if (data.statusCode === 400) {
  //       openNotificationWithIcon('error', data.error);
  //     } else if (data.statusCode === 409) {
  //       openNotificationWithIcon('info', 'The building is already exist');
  //     }
  //   } catch (err) {
  //     this.setState({ loading: false });
  //     openNotificationWithIcon(
  //       'error',
  //       'Something went wrong! Please try again'
  //     );
  //   }
  // };

  getStep = current => {
    const {
      stepOneValues,
      stepTwoValues,
      stepThreeValues,
      stepFourValues,
      stepFiveValues,

      loading,
    } = this.state;

    switch (current) {
      case 0:
        return (
          <Five
            stepFiveValues={stepFiveValues}
            submittedValues={this.getStepFiveValues}
            handleNext={() => this.next()}
            handleBack={() => this.prev()}
          />
        );

      case 1:
        return (
          <SecondStep
            stepTwoValues={stepTwoValues}
            submittedValues={this.getStepTwoValues}
            handleNext={() => this.next()}
            handleBack={() => this.prev()}
          />
        );
      case 2:
        return (
          <Four
            stepFourValues={stepFourValues}
            submittedValues={this.getStepFourValues}
            handleNext={() => this.next()}
            handleBack={() => this.prev()}
          />
        );
      case 3:
        return (
          <FirstStep
            stepOneValues={stepOneValues}
            submittedValues={this.getStepOneValues}
            handleNext={() => this.next()}
          />
        );
      case 4:
        return (
          <ThirdStep
            stepThreeValues={stepThreeValues}
            submittedValues={this.getStepThreeValues}
            handleBack={() => this.prev()}
            handleConfirm={this.handleConfirm}
            enterLoading={this.enterLoading}
            loading={loading}
          />
        );
      default:
        return <FirstStep />;
    }
  };

  next() {
    let { current } = { ...this.state };
    current += 1;
    this.setState({ current });
  }

  prev() {
    let { current } = { ...this.state };
    current -= 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div className={styles.form}>
        <Steps
          current={current}
          className={styles.steps}
          style={{ marginBottom: '4%' }}
        >
          {steps.map(item => (
            <Step key={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{this.getStep(current)}</div>
      </div>
    );
  }
}

Form.propTypes = {
  city: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  redirectToView: PropTypes.func.isRequired,
  // longitude: PropTypes.number.isRequired,
  // latitude: PropTypes.number.isRequired,
};

export default Form;
