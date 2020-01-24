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
            page_title="الأمان و الخصوصية"
            title_icon="fas fa-shield-alt"
          />
          <div className="white_container">
            <div className="page_content">
              <p>
                الهدف من هذه الوثيقة هو إبقائك على إطلاع على ما نملكه من بيانات
                تخصك و كيف نستخدمها. لذا نتمنى أن تكون على اطلاع دائم على هذه
                الصفحة بالإضافة لصفحة{' '}
                <a href="http://pmngr.com/terms-conditions">الشروط و الأحكام</a>
              </p>
              <p>
                <strong>: أولاً : ما هى البيانات التى نجمعها</strong>
              </p>
              <p>
                لا نقوم بجمع أى بيانات تخص حسابك أو حساب أى من الموظفين الخاصين
                بك -
              </p>
              <p>
                <strong>: ثانياً : إستخدام الكوكيز</strong>
              </p>
              <p>
                نستخدم الكوكيز الخاصة بالمتصفح فى عملية تسجيل الدخول للموقع
                كمستخدم&nbsp; -
              </p>
              <p>
                . قد نستخدمها فى حالة تواصلك مع بوابات الدفع الإلكترونى لتأكيد و
                تأمين عملية التواصل -
              </p>
              <p>
                <strong>: ثالثاً : إستغلال بياناتك</strong>
              </p>
              <p>
                . لا نقوم بأى نوع من أنواع المتاجره أو الإستغلال المادى لبياناتك
                المخزنه لدينا -
              </p>
              <p>
                . هذه البيانات لا تستخدم إلا لإجراء تحسينات على النظام و لتقديم
                خدمة أفضل لك -
              </p>

              <p>
                <strong>:الإتصال بنا</strong>
              </p>
              <p>
                <a style={{ color: '#428bca' }}>mail@pmngr.com</a> يسعدنا تواصلك
                في أي وقت على البريد الإلكتروني التالي{' '}
              </p>

              <p>&nbsp;</p>
              <p>
                .. بنود هذه السياسة والشروط والأحكام قابلة للتطوير والتغيير في
                محتواها في أي وقت نراه ضرورياً
              </p>
              <p>.. آخر تحديث في تاريخ ١٥-١-٢٠١٤</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
