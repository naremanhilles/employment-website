import React, { Component } from 'react';
import SupportBtn from '../CommonComponents/SupportBtn/index';
import './style.css';

export default class Privacy extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    return (
      <div className="main-container">
        <div className="container">
          <SupportBtn
            page_title="ما هى صلاحيات اسناد المهام للآخرين ؟"
            title_icon="fas fa-shield-alt"
          />
          <div className="white_container">
            <div className="page_content">
              <p>لكى تسند مهمة إلى موظف يجب أن تتوافر الشروط الآتية : </p>
              <p>1- أن يكون مدرجاً فى نفس المشروع الخاص بك .</p>
              <p>2- أن تكون أعلى منه فى الرتبة الوظيفية كالآتى :</p>
              <p>&nbsp;</p>

              <p>مدير النظام ( منشئ حساب الشركة ) :</p>
              <p>
                لديه كافة الصلاحيات لإعطاء مهام{' '}
                <span style={{ color: '#0000ff' }}>لكافة الموظفين</span> بأى
                رتبه رتبه <span style={{ color: '#0000ff;' }}>مدير عام</span> /{' '}
                <span style={{ color: '#0000ff' }}>مدير فرع</span> /{' '}
                <span style={{ color: '#0000ff' }}>مدير قسم</span> /{' '}
                <span style={{ color: '#0000ff' }}>مدير مشاريع</span> /{' '}
                <span style={{ color: '#0000ff' }}> موظف</span>
              </p>
              <p>&nbsp;</p>
              <p>مدير عام :</p>
              <p>
                يمكنه إعطاء المهام للموظفين لكل من :{' '}
                <span style={{ color: '#0000ff' }}>مدير فرع</span> /{' '}
                <span style={{ color: '#0000ff' }}>مدير قسم</span> /{' '}
                <span style={{ color: '#0000ff' }}>مدير مشاريع</span> /{' '}
                <span style={{ color: '#0000ff' }}>موظف</span>
              </p>
              <p>&nbsp;</p>
              <p>مدير فرع :</p>
              <p>
                يمكنه إعطاء المهام للموظفين لكل من :{' '}
                <span style={{ color: '#0000ff' }}>مدير قسم</span> /{' '}
                <span style={{ color: '#0000ff' }}>مدير مشاريع</span> /{' '}
                <span style={{ color: '#0000ff' }}>موظف</span>
              </p>
              <p>&nbsp;</p>
              <p>مدير قسم :</p>
              <p>
                يمكنه إعطاء المهام للموظفين لكل من :{' '}
                <span style={{ color: '#0000ff' }}>مدير مشاريع</span> /{' '}
                <span style={{ color: '#0000ff' }}>موظف</span>
              </p>
              <p>&nbsp;</p>
              <p>مدير مشاريع :</p>
              <p>
                يمكنه إعطاء المهام للموظفين للموظفين برتبة{' '}
                <span style={{ color: '#0000ff' }}>موظف</span> فقط
              </p>
              <p>&nbsp;</p>
              <p>موظف :</p>
              <p>
                لا يمكنه إعطاء مهام لأى موظف آخر و لكنه ينفذ فقط المهام التى
                أسندت إليه .
              </p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
