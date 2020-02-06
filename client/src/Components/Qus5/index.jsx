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
            page_title="كيفية اسناد مهمة لموظف ؟"
            title_icon="fas fa-shield-alt"
          />
          <div className="white_container">
            <div className="page_content">
              <p>المهام هى حجر البناء للمشاريع و اسناد المهام للموظفين هو الشغل الشاغل الذى يقوم عليه هذا النظام</p>
              <p>و لإسناد مهمة لموظف ما يجب توافر بعض الشروط وهى :</p>
              <p>1- ان يكون الموظف مضافاً لحساب المؤسسة فى النظام ( <a href="/question/4" target="_blank">كيف ترسل دعوة إنضمام لموظف</a> ) .</p>
              <p>2- أن يكون الموظف له صلاحيات الدخول إلى المشروع الذى تريد إضافة المهمة إليه ( <a href="/question/10" target="_blank">كيف تضيف موظف إلى مشروع</a> ) .</p>
              <p>3- أن يكون لديك الصلاحيات لإعطاء هذا الموظف مهمة ما&nbsp; ( <a href="/question/14" target="_blank">صلاحيات إعطاء المهام لموظف</a> ) .</p>
              <p>&nbsp;</p>
              <p>كيفية إنشاء مهمة جديدة :</p>
              <p>هناك أكثر من رابط يسهل عليك الوصول إلى نموذج إنشاء مهمة جديدة :</p>
              <p>&nbsp;</p>
              <p>فى الصفحة الرئيسية :</p>
              <p><img class="decoded" src="http://pmngr.com/assets/uploads/system/uploads/upload-1417561185.png" alt="http://pmngr.com/assets/uploads/system/uploads/upload-1417561185.png" /></p>
              <p>&nbsp;</p>

              <p>فى قائمة المهام :</p>
              <p><img class="decoded" src="http://pmngr.com/assets/uploads/system/uploads/upload-1417562403.png" alt="http://pmngr.com/assets/uploads/system/uploads/upload-1417562403.png" /></p>
              <p>&nbsp;</p>
              <p>فى تبويب المهام بداخل أحد المشاريع :</p>
              <p><img class="decoded" src="http://pmngr.com/assets/uploads/system/uploads/upload-1417562429.png" alt="http://pmngr.com/assets/uploads/system/uploads/upload-1417562429.png" /></p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>نموذج اسناد مهمة جديدة لأحد الموظفين و يظهر فيها خيارات توضح أهمية المهمة , ميزانية المهمة , مرفقات المهمة و الموظف المسند إليه المهمة :</p>
              <p><img class="decoded" src="http://pmngr.com/assets/uploads/system/uploads/upload-1417562448.png" alt="http://pmngr.com/assets/uploads/system/uploads/upload-1417562448.png" /></p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>

















            </div>
          </div>
        </div>
      </div>
    );
  }
}
