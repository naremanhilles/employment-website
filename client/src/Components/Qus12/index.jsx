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
            page_title="ما هى قنوات التواصل وكيفية عملها ؟"
            title_icon="fas fa-shield-alt"
          />
          <div className="white_container">
            <div className="page_content">
              <p>&nbsp;قنوات تسمح بالتواصل المباشر عن طريق ال Chat بين مجموعة من الموظفين المدرجين داخل أى مشروع و يمكن لأى موظف داخل المشروع إنشاء قناة تواصل بين عدد من الموظفين دون غيرهم تكون لهم صلاحية الدخول و التواصل فى هذه القناة . و يتم إرسال تنبيه إلى الموظف لدعوته للإنضمام لهذه القناة .</p>
              <p>&nbsp;</p>
              <p>صورة لقناة التواصل بأحد المشاريع و أخرى لرسالة دعوة الإنضمام لقناة التواصل :</p>
              <p><img class="decoded" src="http://pmngr.com/assets/uploads/system/uploads/upload-1417471046.png" alt="http://pmngr.com/assets/uploads/system/uploads/upload-1417471046.png" /></p>
              <p>&nbsp;</p>
              <p><img class="decoded" src="http://pmngr.com/assets/uploads/system/uploads/upload-1417471025.png" alt="http://pmngr.com/assets/uploads/system/uploads/upload-1417471025.png" /></p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
