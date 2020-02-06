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
            page_title="ماهو المترتب على حذف المشروع ؟"
            title_icon="fas fa-shield-alt"
          />
          <div className="white_container">
            <div className="page_content">
              <p>عند حذف المشروع يتم حذف كل ما يتعلق بهذا المشروع من مهام , مستندات , خط زمنى , علاقات موظفين و علاقات أقسام و فروع</p>
              <p>&nbsp;</p>
              <p>و تظهر هذه الصورة لتحذر من عملية الحذف و يظهر فيها طلب كلمة مرور الحماية الخاصة بالنظام لتأكيد عملية الحذف :</p>
              <p>&nbsp;</p>
              <p><img class="decoded" src="http://pmngr.com/assets/uploads/system/uploads/upload-1417471888.png" alt="http://pmngr.com/assets/uploads/system/uploads/upload-1417471888.png" /></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
