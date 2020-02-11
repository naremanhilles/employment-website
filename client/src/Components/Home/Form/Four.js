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
    stepFourValues: {
      emptyPeriod,
      mobile,
      name,
      birthdate,
      lastname,
      gender,
      country,
      extraInfo,
      preferredUse,
      thumbnail,
    },
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

  const normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <FormAnt onSubmit={validateInput} layout="vertical">
      <FormAnt.Item className={styles.item} label={<span>الدولة</span>}>
        {getFieldDecorator('emptyPeriod', {
          rules: [
            {
              required: true,
              message: 'Please specify how long it has been empty',
            },
          ],
          initialValue: country,
        })(
          <Select
            showSearch
            placeholder="Approximately. Feel free to take a guess."
          >
            {countries.map(year => (
              <Option value={`${year.name} `} key={year.id}>
                {year.name}
              </Option>
            ))}
          </Select>
        )}
      </FormAnt.Item>
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
      <FormAnt.Item
        className={styles.item}
        label={
          <span>
            عن المؤسسة
            {/* <span style={{ color: '#888' }}> (Optional)</span> */}
          </span>
        }
      >
        {getFieldDecorator('preferredUse', {
          rules: [{ required: true, message: 'Please add the prefered use' }],
          initialValue: preferredUse,
        })(<TextArea rows={3} placeholder="وصف مختصر..." />)}
      </FormAnt.Item>

      <FormAnt.Item className={styles.item} label={<span>تاريخ الإنشاء</span>}>
        {getFieldDecorator('birthdate', {
          rules: [
            {
              required: true,
            },
          ],
          initialValue: birthdate,
        })(
          <DatePicker
            defaultValue={moment('1988/07/18', dateFormat)}
            format={dateFormat}
            placeholder="2020/02/07"
          />
        )}
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

      <FormAnt.Item className={styles.item} label={<span>العملة</span>}>
        {getFieldDecorator('gender', {
          rules: [{ required: true, message: 'يرجى تحديد العملة' }],
          initialValue: gender,
        })(
          <Select id="gender" style={{ width: 80 }}>
            <Option value="1">دولار</Option>
            <Option value="2">يورو </Option>
            <Option value="3">ريال</Option>
            <Option value="4">درهم</Option>
            <Option value="5">دينار</Option>
            <Option value="6">ين</Option>
          </Select>
        )}
      </FormAnt.Item>
      <FormAnt.Item
        className={styles.item}
        label={
          <span>
            تحميل صورة شعار المؤسسة
            <span style={{ color: '#888' }}> (إختياري)</span>
          </span>
        }
      >
        {getFieldDecorator('thumbnail', {
          valuePropName: 'fileList',
          getValueFromEvent: normFile,
          initialValue: thumbnail,
        })(
          <Upload
            name="logo"
            accept="image/*"
            multiple={false}
            customRequest={() => {}}
            listType="picture"
          >
            <Button className={styles.white}>
              <Icon type="upload" /> تحميل
            </Button>
          </Upload>
        )}
      </FormAnt.Item>

      {/* 
      <FormAnt.Item
        className={styles.item}
        label={
          <span>
            Other information ?
            <span style={{ color: '#888' }}> (Optional)</span>
          </span>
        }
      >
        {getFieldDecorator('extraInfo', {
          rules: [{ required: false, message: 'Please add extra information' }],
          initialValue: extraInfo,
        })(
          <TextArea
            rows={3}
            placeholder="E.g. Broken window on first floor, corner street unit, compulsory purchased at some point, previously tried to contact owner."
          />
        )}
      </FormAnt.Item>
      <FormAnt.Item
        className={styles.item}
        label={
          <span>
            What would you like it to be used for?
            <span style={{ color: '#888' }}> (Optional)</span>
          </span>
        }
      >
        {getFieldDecorator('preferredUse', {
          rules: [{ required: false, message: 'Please add the prefered use' }],
          initialValue: preferredUse,
        })(
          <TextArea
            rows={3}
            placeholder="E.g. health centre, meeting space, cafe."
          />
        )}
      </FormAnt.Item>
      <FormAnt.Item
        className={styles.item}
        label={
          <span>
            Upload a picture of the building
            <span style={{ color: '#888' }}> (Optional)</span>
          </span>
        }
      >
        {getFieldDecorator('thumbnail', {
          valuePropName: 'fileList',
          getValueFromEvent: normFile,
          initialValue: thumbnail,
        })(
          <Upload
            name="logo"
            accept="image/*"
            multiple={false}
            customRequest={() => {}}
            listType="picture"
          >
            <Button className={styles.white}>
              <Icon type="upload" /> Picture
            </Button>
          </Upload>
        )}
      </FormAnt.Item> */}
      <div className={styles.danger}>
        <i className="fa fa-info-circle" /> تستخدم فى حماية بيانات المؤسسة حيث تطلب
        عند الحذف أو التعديل
      </div>
      <hr
        style={{
          width: '90%',
          marginLeft: '5%',
        }}
      />
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
