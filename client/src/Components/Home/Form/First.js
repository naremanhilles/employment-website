import React from 'react';
import { Form as FormAnt, Radio, Select, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import lll from '../../../assets/img/uploads/breadcrumb-border.png';

import styles from './form.module.css';

const { Option } = Select;

class FirstStep extends React.Component {
  componentDidUpdate(prevProps) {
    const {
      form: { setFieldsValue },
      location,
    } = this.props;
    if (prevProps.location !== location) setFieldsValue({ location });
  }

  validateInput = e => {
    const {
      submittedValues,
      handleNext,
      form: { validateFields },
    } = this.props;
    e.preventDefault();

    validateFields((err, values) => {
      const val = { ...values };
      if (!err) {
        submittedValues(val);
        handleNext();
      }
    });
  };

  render() {

    return (
      <FormAnt onSubmit={this.validateInput} layout="vertical">
        <div className="text-center">
          <img src={lll} border="0" />
          <h3
            className="nice_font"
            style={{
              fontSize: '24px',
              marginTop: '20px',
              marginBottom: '10px',
            }}
          >
            أهلاً بك فى مدير المشاريع
          </h3>
          <h4
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            فى الخطوات القليلة القادمة سوف تقوم بإعداد حسابك لتبدأ أنت وموظفيك
            بإستخدام النظام
          </h4>
          <br />
          <h4
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '20px',
            }}
          >
            <i className="fa fa-anchor" /> فى حال واجهتك مشكلة تواصل مع الدعم
            الفنى
            <a target="_blank" href="/help/new_ticket">
              من هنا
            </a>
          </h4>
          <a target="_blank" href="/help/faq">
            <i className="fa fa-info-circle" /> أسئلة و أجوبة حول النظام لتساعدك
            و تساعد موظفيك على التعامل معه
          </a>
        </div>

        <hr
          style={{
            width: '90%',
            marginLeft: '5%',
          }}
        />
        <FormAnt.Item className="next" style={{ textAlign: 'left' }}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ marginLeft: '5%' }}
          >
            التالي
          </Button>
        </FormAnt.Item>
      </FormAnt>
    );
  }
}

FirstStep.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  submittedValues: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  stepOneValues: PropTypes.objectOf(PropTypes.any).isRequired,
};

const WrappedStep = FormAnt.create({ name: 'validate_other' })(FirstStep);

export default WrappedStep;
