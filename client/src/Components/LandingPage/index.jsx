import React from 'react';
import { Row, Col } from 'react-bootstrap';
import landing__tweet__title from './title_slogan.png';
import landing__tweet__img from './new_logo.png';
import CountUp from './Countup/countbox';
import Box from './Box/box';
import GrayBox from './GrayBox/graybox';

import './style.css';

export default function LandingPage() {
  return (
    <>
      <Row className="landing__header">
        <Col>
          <h1 className="landing__tweet">
            <div className="landing__tweet__img">
              <img src={landing__tweet__img} width="128px" height="128px" />
            </div>
            <img src={landing__tweet__title} width="261px" height="90px" />
            <div className="btn__tweet__div">
              <a href="/" className="btn__tweet">
                اشترك الآن مجاناً
                <i className="fa fa-power-off" />
              </a>
            </div>
            <div className="free_service">
              اشترك الآن و احصل على مساحة تخزينية
            </div>
            <div className="support_us">
              <a href="/">جيجابايت مجاناً</a>
            </div>
          </h1>
        </Col>
      </Row>
      <h2 className="landing__title landing__title--center">
        تعامل**إنجاز**نقاش
      </h2>

      <div className="section_1">
        <div className="container">
          <div className="text-center">
            <Box
              section_title="التقارير و السجلات"
              section_desc=" يمكنك توليد تقارير إحصائية عن موظفيك و الإطلاع على سجل تحركاتهم فى النظام "
              icon_class="fas fa-chart-pie section_icon"
            />
            <Box
              section_title="أوقات العمل"
              section_desc=" هذه الآداه الرائعه تساعدك على مرقبة آداء موظفيك وتحديد مستوياتهم وفقاً لإنجازاتهم فى أوقات العمل "
              icon_class="far fa-clock section_icon"
            />{' '}
            <Box
              section_title="الإنجاز وخطوات التنفيذ"
              section_desc=" تابع تحديث نسبة إنجاز المهام أولاً بأول و خطوات التنفيذ التى تم الإنتهاء منها والمتبقى منها "
              icon_class="fas fa-list-ol section_icon"
            />{' '}
            <Box
              section_title="التنبيهات"
              section_desc=" نظام التنبيهات يعمل طوال الوقت لتنبيهك بمستجدات المشاريع والمهام عبر البريد ورسائل الهاتف المحمول"
              icon_class="fas fa-bell bottom_section_icon"
            />{' '}
            <Box
              section_title="محرك البحث"
              section_desc=" يساعدك محرك بحث النظام على الوصول لأى معلومات ذكرتها فى مهامك أو تعليقاتك بسهولة "
              icon_class="fas fa-search bottom_section_icon"
            />{' '}
            <Box
              section_title="الخط الزمني"
              section_desc=" قم بتحديث الخط الزمنى لمشروعك و ضع عليه النقاط الهامة التى توضح خط سير المشروع "
              icon_class="fas fa-sort-amount-down bottom_section_icon"
            />
          </div>
        </div>
      </div>

      <div className="section_4">
        <div className="container">
          <div className="text-center">
            <GrayBox
              section_title="النظام المؤسسى"
              section_desc=" إذا كنت تمتلك مؤسسة فنظام مدير المشاريع يمكنه أن يمثلها بشكل رائع حيث يوفر لك إضافة الفروع و الأقسام و تحديد مدراء لهم "
              icon_class="far fa-building section_icon"
            />
            <GrayBox
              section_title="الصلاحيات والرتب"
              section_desc=" تعمل الصلاحيات وفقاً للنظام الهرمى و التدرج الوظيفى من رتبة مدير نظام , مدير عام , مدير فرع , مدير قسم إلى مدير مشاريع و موظف "
              icon_class="fas fa-lock section_icon"
            />{' '}
            <GrayBox
              section_title="الميزانية وبنود المصروفات"
              section_desc=" المشاركين بالمشروع يمكنهم إضافة بنود توضح ما تم من مصروفات, كما يمكن تحديد ميزانية أحد المهام حتى يراعى من يقوم بتنفيذ المهمة عدم تخطى هذه الميزانية "
              icon_class="fas fa-shopping-cart section_icon"
            />{' '}
            <GrayBox
              section_title=" قنوات التواصل"
              section_desc=" محادثات جماعية مباشرة بين فريق العمل كله أو بعض الموظفين فقط للنقاش حول المشروع "
              icon_class="fas fa-comments bottom_section_icon"
            />{' '}
            <GrayBox
              section_title=" الرسائل الخاصة"
              section_desc=" يوفر مدير المشاريع نظام الرسائل الخاصة بين جميع الموظفين وبعضهم البعض وكذلك مدرائهم "
              icon_class="fas fa-envelope bottom_section_icon"
            />{' '}
            <GrayBox
              section_title=" المساعدة والدعم الفنى"
              section_desc=" يمكنك التواصل مع ممثلي الدعم الفني و المساعدة فى حل المشكلات فى أى وقت "
              icon_class="fa fa-anchor bottom_section_icon"
            />
          </div>
        </div>
      </div>
      <div className="section_3">
        <div className="container">
          <div className="center_landing_section">
            <div className="section_title">
              <h2>
                <i className="fas fa-cube" />
                التطبيقات الملحقة
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="section_5">
        <div className="container">
          <div className="text-center">
            <GrayBox
              section_title="قوائم المهام"
              section_desc="يمكنك إنشاء قوائم مهام عديده تحتوى كل منها على مهام فرعية لتنظيم أعمالك ومعرفة ما ينتظرك"
              icon_class="far fa-list-alt section_icon"
              width_class="four_col"
            />
            <GrayBox
              section_title="المفكرة"
              section_desc="تساعدك على حفظ أى معلومات أو بيانات تريد الإحتفاظ بها لحين الرجوع إليها أو تعديلها و لا يطلع عليها غيرك"
              icon_class="fas fa-book section_icon"
              width_class="four_col"
            />{' '}
            <GrayBox
              section_title="الأخبار"
              section_desc="يسمح لك نظام الأخبار بجعل موظفيك على اطلاع دائم بآخر أخبار مؤسستك وما تضعه من إعلانات للموظفين"
              icon_class="fas fa-bullhorn section_icon"
              width_class="four_col"
            />{' '}
            <GrayBox
              section_title="الفعاليات"
              section_desc="مناسبات مؤسستك , الإجتماعات وأى فعاليات أخرى يمكنك الإعلان عنها وعن مواعيد و أماكن إقامتها"
              icon_class="far fa-calendar-alt section_icon"
              width_class="four_col"
            />{' '}
          </div>
        </div>
      </div>
      <div className="landing_statistics">
        <h1>
          مدير المشاريع في أرقام
          <i className="far fa-chart-bar" />
        </h1>
        <CountUp stat_title="مؤسسة" stat_desc="تدير أعمالها" end={1679} />
        <CountUp stat_title="موظف" stat_desc="يتلقى المهام" end={4724} />
        <CountUp stat_title="مشروع" stat_desc="تم البدء فيه" end={2309} />
        <CountUp stat_title="مهمة" stat_desc="تم إسنادها" end={4867} />
      </div>
      <div className="section_6 text-center">
        <div>
          <a href="/" className="section_6_btn">
            اشترك الآن مجاناً
            <i className="fa fa-cloud" />
          </a>
        </div>
        <h3>اشترك و احصل على مساحة تخزينية جيجابايت مجاناً</h3>
        <br />
        <br />
      </div>
    </>
  );
}
