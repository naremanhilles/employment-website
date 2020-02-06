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
              <p>يوفر مدير المشاريع خاصية بداخل كل مهمة تسمى ( <span style={{ color: "#ff0000" }}>اوقات العمل</span> ) و تمكنك هذه الخاصية من متابعة عمل أحد موظفيك على أحد المهام</p>
              <p>&nbsp;</p>
              <p>يتم ذلك عن طريق دخول الموظف إلى تبويب أوقات العمل بداخل المهمة و يقوم بالضغط على بدأ فترة عمل لتشغيل المؤقت ( Timer ) قبل البدأ فى إنجاز المهمة , و حينما ينتهى أو يتوقف يقوم بالضغط مره أخرى لإيقاف المهمة و كتابة ماقام بإنجازه خلال الفترة التى قضت و توضح الصور التالية كيف يتم ذلك :</p>
              <p>&nbsp;</p>
              <p><img class="decoded overflowing" src="http://pmngr.com/assets/uploads/system/uploads/upload-1417623939.png" alt="http://pmngr.com/assets/uploads/system/uploads/upload-1417623939.png" /></p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>و لكى تتمكن من ذلك عليك أن تضع قوانين صارمة للعمل حيث عليك أن تتفق مع الموظف أنه لا يقوم بأى بهمة إلا بعد أن يقوم بتشغيل المؤقت ( Timer ) الخاص بها أثناء فترة العمل عليه و أن يكتب الإنجازات التى قام بها</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
