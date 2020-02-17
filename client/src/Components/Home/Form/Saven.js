import React from 'react';
import {
  Form as FormAnt,
  Radio,
  Select,
  Input,
  Button,
  notification,
} from 'antd';
import PropTypes from 'prop-types';
import EmpDiv from './EmpDiv';

import styles from './form.module.css';

const { Option } = Select;

class FirstStep extends React.Component {
  state = {
    bb: false,
    items: [],
    name: '',
    lastname: '',
    NNN: '',
    valm: '',
  };

  render() {
    const {
      submittedValues,
      prevData,
      handleNext,
      handleBack,
      form: { getFieldDecorator, validateFields, getFieldsValue, resetFields },
    } = this.props;
    const { bb, items, name, lastname, NNN, valm } = this.state;

    const renderAuthButton = depname => {
      if (bb) {
        const values = JSON.parse(JSON.stringify(getFieldsValue()));
        if (values.name !== '' && values.lastname !== '') {
          validateFields((err, values) => {
            const val = { ...values };
            if (!err) {
              val.id = Math.random();
              val.dep = depname;
              const newarr = [...items];
              newarr.push(val);
              this.setState({ items: newarr });
            }
          });
        }
        resetFields();
      }
    };
    const enterLoading = deprtment => {
      console.log(4445, deprtment);
      this.setState({ bb: true }, () => {
        renderAuthButton(deprtment);
      });
    };

    const handleChange = value => {
      console.log(111111, value);
      this.setState({ valm: value });
    };
    const openNotificationWithIcon = (type, message) => {
      notification[type]({
        message,
        duration: 4,
      });
    };
    const validateInput = e => {
      e.preventDefault();
      const val = items;
      console.log('im', 45, val);
      if (items.length > 0) {
        console.log(11111111);
        submittedValues(val);
        handleNext();
      } else {
        console.log(222222);
        openNotificationWithIcon(
          'error',
          'لم تقم بإضافة أقسام فى بعض الفروع يجب إضافة قسم واحد على الأقل فى كل فرع'
        );
      }
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
      <>
        <FormAnt onSubmit={validateInput} layout="vertical">
          <FormAnt.Item label="اختر المستوى " hasFeedback>
            {getFieldDecorator('previousUse', {
              rules: [
                { required: true, message: 'Please select previous use ' },
              ],
              initialValue: NNN || undefined,
            })(
              <Select
                placeholder="أضف لكل مستوى موظفيه"
                onSelect={handleChange}
              >
                <Option value="Residential building">مستوى المدير العام</Option>
                <Option value="Retail building">مستوى مدير الفرع</Option>
                <Option value="Office building">مستوى مدير القسم</Option>
                <Option value="Community building">مستوى مدير المشاريع</Option>
                <Option value="Industrial building">مستوى الموظف</Option>
              </Select>
            )}
          </FormAnt.Item>
          {/* 999999999999999999999 بكرا comp */}
          {valm !== '' ? <EmpDiv valm={valm} /> : null}
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
      </>
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
