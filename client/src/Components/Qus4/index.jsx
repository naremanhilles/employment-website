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
            page_title="كيفية إرسال أو إعادة ارسال دعوات إنضمام إلى الموظفين ؟"
            title_icon="fas fa-shield-alt"
          />
          <div className="white_container">
            <div className="page_content">
              <p>يعتمد نظام مدير المشاريع على وجود أكثر من موظف فى الشركة ليكون هناك إمكانية لإضافة المشاريع و إعطاء المهام و متابعة إنجازها و لكى يتحقق ذلك قمنا بتطوير نظام إرسال دعوات الإنضمام إلى الموظفين .</p>
              <p>&nbsp;</p>
              <p>حيث يتم إرسال رسالة إلى بريد الموظف المدعو إلى النظام بمجرد إضافته إلى قائمة الموظفين , و تظهر علامة تنبيه بجوار اسم الموظف الذى لم يلبي دعوة الإنضمام بعد كما هو موضح بالصورة :</p>
              <p><img src="http://pmngr.com/assets/uploads/system/uploads/upload-1417458966.png" alt="" /></p>
              <p>&nbsp;</p>
              <p><span style={{ color: "#ff0000" }}>إعادة إرسال الدعوة :</span></p>
              <p>إذا لم تصل رسالة الدعوة إلى الموظف فيمكن ارسالها عن طريق الضغط على زر تعديل ثم القيام بالضغط على زر حفظ , كما يمكن تغيير البريد الخاص بالموظف الغير منضم لإعادة إرسال الدعوة إلى البريد الجديد .</p>
              <p>&nbsp;</p>
              <p>شكل الدعوة الموجهة للموظف :</p>
              <p><img src="http://pmngr.com/assets/uploads/system/uploads/upload-1417459498.png" alt="" /></p>
              <p>&nbsp;</p>
              <p>شكل فورم الإنضمام بعد الدخول على رابط الدعوة :</p>
              <p><img src="http://pmngr.com/assets/uploads/system/uploads/upload-1417459644.png" alt="" /></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
