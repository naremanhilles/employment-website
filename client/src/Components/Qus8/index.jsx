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
            page_title="كيف أقسم المهمة إلى نقاط أو إلى مهام صغيره لتسهيل إنجازها ؟"
            title_icon="fas fa-shield-alt"
          />
          <div className="white_container">
            <div className="page_content">
              <p>يوفر مدير المشاريع خاصية مساعدة للمهام تسمى ( <span style={{ color: "#ff0000" }}>خطوات التنفيذ</span> ) حيث تساعد على تنظيم المهمة و تقسيم العمل عليها إلى نقاط محدده</p>
              <p>&nbsp;</p>
              <p>تساعد هذه الخاصية كلاً من أسند المهمة و من أسندت إليه المهمة كالآتى :</p>
              <p>&nbsp;</p>
              <p><span style={{ color: "#0000ff" }}>- تساعد من أسندت إليه المهمة ( الموظف ) :</span></p>
              <p>حيث ستصبح المهمة كبيرة الحجم كثيرة التفاصيل ملخصة فى نقاط , و كلما انتهى من نقطة إنتقل إلى التى تليها فى سهولة ويسر .</p>
              <p>&nbsp;</p>
              <p><span style={{ color: "#0000ff" }}>- تساعد من أسند المهمة :</span></p>
              <p>حيث يمكنه متابعة إنجاز الموظف و ما الذى أنجزه من المهمة و ما الذى يتبقى منها و كذلك فى حالة قرر استبدال الموظف بآخر فبكل سهولة ويسر يمكنه معرفة ما تم إنجازه و البدأ باستكمال الخطوات الناقصة التى لم تستكمل بعد بدلاً من أن يبدأ من الصفر مجدداً .</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>صورة لتبويب خطوات التنفيذ :</p>
              <p><img class="decoded" src="http://pmngr.com/assets/uploads/system/uploads/upload-1417629099.png" alt="http://pmngr.com/assets/uploads/system/uploads/upload-1417629099.png" /></p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
