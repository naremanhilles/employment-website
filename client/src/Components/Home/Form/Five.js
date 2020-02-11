import React from 'react';
import {
  Form as FormAnt,
  Button,
  Upload,
  Icon,
  Input,
  Select,
  DatePicker,
} from 'antd';

import moment from 'moment';

import PropTypes from 'prop-types';

import { runInThisContext } from 'vm';
import styles from './form.module.css';

import { countries } from '../../utils/countries';

const { Option } = Select;

const { TextArea } = Input;

const SecondStep = props => {
  const dateFormat = 'YYYY/MM/DD';
  // countries.map(country => console.log(111111, country));

  const {
    submittedValues,
    handleNext,
    handleBack,
    stepFiveValues: { name, lastname },
    form: { getFieldDecorator, validateFields, getFieldsValue },
  } = props;

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
      <FormAnt.Item className={styles.item} label={<span>الإسم المؤسسة</span>}>
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

      <FormAnt.Item className={styles.item} label={<span> كلمة الحماية</span>}>
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
        onClick={storeVal}
        size="large"
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
};

SecondStep.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  submittedValues: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  stepFourValues: PropTypes.objectOf(PropTypes.any).isRequired,
};

const WrappedStep = FormAnt.create({ name: 'validate_other' })(SecondStep);

export default WrappedStep;
