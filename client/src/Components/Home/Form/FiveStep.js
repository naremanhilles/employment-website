import React from 'react';
import { Form as FormAnt, Radio, Select, Input, Button } from 'antd';
import PropTypes from 'prop-types';

import styles from './form.module.css';

const { Option } = Select;

class FirstStep extends React.Component {
  state = {
    bb: false,
    items: [],
    name: '',
    lastname: '',
  };

  render() {
    const {
      submittedValues,
      handleNext,
      handleBack,
      // stepFiveValues: { name, lastname },
      form: { getFieldDecorator, validateFields, getFieldsValue, resetFields },
    } = this.props;
    const { bb, items, name, lastname } = this.state;
    const renderAuthButton = () => {
      if (bb) {
        const values = JSON.parse(JSON.stringify(getFieldsValue()));
        if (values.name !== '' && values.lastname !== '') {
          validateFields((err, values) => {
            const val = { ...values };
            if (!err) {
              val.id = Math.random();
              const newarr = [...items];
              newarr.push(val);
              this.setState({ items: newarr });
            }
          });
        }
        resetFields();
      }
    };
    const enterLoading = () => {
      this.setState({ bb: true }, () => {
        renderAuthButton();
      });
    };
    const validateInput = e => {
      e.preventDefault();
      const val = items;
      console.log(val[0], 789999999999);
      submittedValues(val);
      handleNext();
    };
    const storeValues = () => {
      const values = items;

      submittedValues(values);
      handleBack();
    };
    const deleteItem = id => {
      const newitems = items.filter(item => {
        return item.id !== id;
      });
      this.setState({ items: newitems });
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
        <div>
          <span>الفرع</span>
          <span>حذف</span>
        </div>
        {items.length
          ? items.map(ele => (
              <div key={ele.id}>
                <span>
                  {ele.name} {ele.lastname}
                </span>
                <span onClick={() => deleteItem(ele.id)}>&times;</span>
              </div>
            ))
          : null}
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
          onClick={enterLoading}
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

FirstStep.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  // location: PropTypes.string.isRequired,
  // city: PropTypes.string.isRequired,
  // onCityChange: PropTypes.func.isRequired,
  submittedValues: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  // stepOneValues: PropTypes.objectOf(PropTypes.any).isRequired,
};

const WrappedStep = FormAnt.create({ name: 'validate_other' })(FirstStep);

export default WrappedStep;
