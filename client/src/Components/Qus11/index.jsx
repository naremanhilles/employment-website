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
            page_title="كيفية تغيير العملة المستخدمة فى بنود ميزانية المشروع ؟"
            title_icon="fas fa-shield-alt"
          />
          <div className="white_container">
            <div className="page_content">
              <p>أثناء إعداد وتهيئة النظام قمت بإختيار العملة التى سيعمل بها النظام الخاص بك و يمكن فى أى وقت تغييرها عن طريق :</p>
              <p>&nbsp;</p>
              <p>من القائمة العلوية تختار المؤسسة &gt; ثم البيانات</p>
              <p>الضغط على زر تعديل لتعديل بيانات المؤسسة ثم حفظ</p>
              <p>&nbsp;</p> <p>صورة توضح القيام بذلك :</p>
              <p>&nbsp;</p>
              <p><img src="http://pmngr.com/assets/uploads/system/uploads/upload-1417471512.png" alt="http://pmngr.com/assets/uploads/system/uploads/upload-1417471512.png" /></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
