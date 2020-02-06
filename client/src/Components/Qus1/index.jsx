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
            page_title=" ما الخطوات اللازمة لإنشاء حساب جديد ؟"
            title_icon="fas fa-shield-alt"
          />
          <div className="white_container">
            <div className="page_content">
              <p>الخطوات اللازمة لإنشاء حساب مؤسسة جديدة هى :</p>
              <p>1- الضغط على زر اشترك الآن مجاناً الموجود فى الصفحة الرئيسية <a title="أو اضغط هنا" href="/register" target="_blank">او اضغط هنا</a></p>
              <p>&nbsp;</p>
              <p>2- اختيار اسم مستخدم يتبع هذه الشروط :<br />&nbsp;&nbsp;&nbsp; - يكون بالحروف الإنجليزية و يبدأ بحرف وليس رقم<br />&nbsp;&nbsp;&nbsp; - يكون أكثر من 3 أحرف<br />&nbsp;&nbsp;&nbsp; - يمكن أن يحتوى فقط على الأرقام من 0 : 9&nbsp; و الحروف من&nbsp; A : Z و الرموز ( _ ) ( - ) ( . )</p> <p>&nbsp;</p>
              <p>3- اختيار كلمة مرور أكبر من 5 حروف لتسجيل الدخول</p>
              <p>و ننصح بإختيار كلمة مرور قوية لحماية حسابك بشكل فعال من عمليات التخمين أو محاولات الدخول الغير شرعى على الحساب</p>
              <p>&nbsp;</p>
              <p>4- كتابة البريد الإلكترونى بحيث لا يكون مستخدم من قبل فى أى من عمليات التسجيل أو الدعوات بداخل النظام .</p>
              <p>و يجب أن يكون البريد الإلكترونى حقيقياً لأنه هو الوسيلة الدائمة لحصولك على تنبيهات بخصوص ما يدور فى النظام</p>
              <p>&nbsp;</p>
              <p>5- الموافقة على <a href="/terms-conditions" target="_blank">الشروط و الأحكام</a> ثم الضغط على زر تسجيل .</p>
              <p>&nbsp;</p>
              <p>6- تأكيد صحة البريد الإلكترونى عن طريق الضغط على الرابط الموجود فى الرسالة التى تم ارسالها إلى بريد الإلكتروني .</p>
              <p>إذا لم تجد الرسالة فى بريدك الإلكترونى فعليك الآتى :</p>
              <p>- ابحث جيداً فى باقى مجلدات البريد الإلكترونى ك junk مثلاً</p>
              <p>- حاول إعادة ارسال الرسالة <a href="/activate_account" target="_blank">عبر هذا الفورم</a></p>
              <p>- إذا لم تفلح المحاولات السابقة تواصل <a href="/new_ticket" target="_blank">مع فريق الدعم الفنى</a>&nbsp; أو تواصل معنا عبر <a href="/contact" target="_blank">أى من هذا الوسائل</a></p>
              <p>&nbsp;</p>
              <p>بذلك إنتهت عملية التسجيل فى النظام و يمكنك البدأ فى <a href="/question/2" target="_self">عملية إعداد و تهيئة بيئة العمل</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
