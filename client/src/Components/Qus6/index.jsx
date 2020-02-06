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
            page_title="ما هو ترتيب المهام و كيف تعيد ترتيبها ؟"
            title_icon="fas fa-shield-alt"
          />
          <div className="white_container">
            <div className="page_content">
              <p>بالدخول إلى رابط المهام الموجود بأعلى الصفحات تظهر جميع المهام التى لديك صلاحية الدخول عليها سواء كنت طرفاً فيها أو لك إمكانية مشاهدة محتواها بحكم أنك مدرج فى مشروعها أو بحكم رتبتك .</p>
              <p>&nbsp;</p>
              <p>تترتب المهام وفقاً لنسبة الإنتهاء كعامل أولى فى الترتيب و وفقاً لدرجة الأهمية كعامل ثانى فى الترتيب و يعنى ذلك أن المهام ستظهر مرتبة وفقاً لدرجة إنجازه , و إذا تساوت أكثر من مهمة فى درجة الإنجاز تترتب المهام المتساوية وفقاً لدرجة الأهمية من الأهم إلى الأقل أهمية</p>
              <p>&nbsp;</p>
              <p>يمكنك إعادة ترتيب المهام عن طريق زر الترتيب الموجود بجانب زر إضافة مهمة جديدة</p>
              <p>و يمكن ترتيب المهام وفقاً لأى من القيم الآتية&nbsp; :</p>
              <p><span style={{ color: "#0000ff" }}>تاربخ المهمة</span> / <span style={{ color: "#0000ff" }}>نسبة إنجاز المهمة</span> / <span style={{ color: "#0000ff" }}>درجة أهمية المهمة</span> / <span style={{ color: "#0000ff" }}>عنوان المهمة</span> / <span style={{ color: "#0000ff" }}>تاريخ المشروع</span> / <span style={{ color: "#0000ff" }}>ميزانية المهمة</span></p>
              <p>&nbsp;</p>
              <p><img class="decoded" src="http://pmngr.com/assets/uploads/system/uploads/upload-1417617751.png" alt="http://pmngr.com/assets/uploads/system/uploads/upload-1417617751.png" /></p>



            </div>
          </div>
        </div>
      </div>
    );
  }
}
