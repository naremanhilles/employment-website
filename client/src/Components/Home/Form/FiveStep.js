import React from 'react';
import { Form as FormAnt, Input, Button } from 'antd';
// import PropTypes from 'prop-types';

import styles from './form.module.css';

class FirstStep extends React.Component {
  state = {
    bb: false,
  };

  enterLoading = () => {
    this.setState({ bb: true });
  };

  render() {
    const {
      submittedValues,
      handleNext,
      handleBack,
      stepFiveValues: { name, lastname },
      form: {
        getFieldDecorator,
        validateFields,
        getFieldsValue,
        resetFields,
        setFieldsValue,
      },
    } = this.props;
    // deleteItem=(id)=>{
    //   const values = getFieldsValue();

    // }

    const { bb } = this.state;
    const renderAuthButton = () => {
      if (bb) {
        const values = JSON.parse(JSON.stringify(getFieldsValue()));
        // const values = getFieldsValue();
        values.id = Math.random();
        console.log(values, 333333);

        const arrayItem = [];
        arrayItem.push(values);
        console.log(arrayItem, 2222222);
        resetFields();
        return (
          <div key={arrayItem[0].id}>
            <h1>{arrayItem[0].name}</h1>
            <h1>{arrayItem[0].lastname}</h1>
            <h1>&times;</h1>
          </div>
        );
      }
    };
    const validateInput = e => {
      e.preventDefault();
      validateFields((err, values) => {
        const val = { ...values };
        if (!err) {
          submittedValues(val);
          handleNext();
        }
      });
    };

    const storeValues = () => {
      const values = getFieldsValue();
      submittedValues(values);
      handleBack();
    };

    return (
      <FormAnt onSubmit={validateInput} layout="vertical">
        <FormAnt.Item
          className={styles.item}
          label={<span>الإسم المؤسسة</span>}
        >
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'يرجى ملئ الحقل بحروف ',
                pattern: /^([أ-يa-zA-Z0-9]|\s)+$/,
              },
            ],
            initialValue: name,
          })(<Input type="text" id="name" />)}
        </FormAnt.Item>

        <FormAnt.Item
          className={styles.item}
          label={<span> كلمة الحماية</span>}
        >
          {getFieldDecorator('lastname', {
            rules: [
              {
                required: true,
                message: 'يرجى ملئ الحقل بحروف ',
                pattern: /^([أ-يa-zA-Z0-9]|\s)+$/,
              },
            ],
            initialValue: lastname,
          })(<Input type="text" id="lastname" />)}
        </FormAnt.Item>
        {renderAuthButton()}
        <div className={styles.info}>
          <i className="fa fa-info-circle" /> يمكنك تجاهل هذه الخطوة إذا لم يكن
          لمؤسستك أى فروع أو أقسام
        </div>
        <hr
          style={{
            width: '90%',
            marginLeft: '5%',
          }}
        />
        <Button
          className={`prevButton  ${styles.white} ${styles['ml-0']}`}
          onClick={this.enterLoading}
        >
          أضف
        </Button>

        <FormAnt.Item>
          <Button
            className={`prevButton  ${styles.white} ${styles['ml-0']}`}
            onClick={storeValues}
            size="large"
          >
            السابق
          </Button>
          <Button
            type="primary"
            size="large"
            onClick={validateInput}
            className="nextButton"
          >
            التالي
          </Button>
        </FormAnt.Item>
      </FormAnt>
    );
  }
}

// FirstStep.propTypes = {
//   form: PropTypes.objectOf(PropTypes.any).isRequired,
//   location: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
//   onCityChange: PropTypes.func.isRequired,
//   submittedValues: PropTypes.func.isRequired,
//   handleNext: PropTypes.func.isRequired,
//   stepOneValues: PropTypes.objectOf(PropTypes.any).isRequired,
// };

const WrappedStep = FormAnt.create({ name: 'validate_other' })(FirstStep);

export default WrappedStep;
