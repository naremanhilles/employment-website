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
            page_title="ما هو المشروع و الأدوات الخاصة به ؟"
            title_icon="fas fa-shield-alt"
          />
          <div className="white_container">
            <div className="page_content">
              <p>المشاريع هى أهداف كبيرة ترغب فى تحقيقها وإنجازها و يوفر نظام مدير المشاريع الأدوات اللازمة لذلك إبتداءً من تقسيم هذه المشاريع إلى مهام و اسنادها لعدة موظفين و عمل خطة زمنية تساعدك على الإطلاع الدائم على مسار المشروع و كذلك مشاركة البيانات و الملفات الهامة للمشروع بين الموظفين المختصين به .</p>
              <p>&nbsp;</p>
              <p>ولا يمكن لأى موظف غير مدرج فى المشروع أن يدخل عليه و يطلع على محتواه .</p>
              <p>&nbsp;</p>
              <p><span style={{ color: "#800000" }}>و يندرج تحت المشروع الواحد عدة أدوات و هى :</span></p>
              <p><span style={{ color: "#0000ff" }}>- المهام .</span></p>
              <p>هى الطلبات أو الأوامر التى توجهها إلى موظفيك المدرجين فى المشروع لتنفيذ شئ ما خاص بهذا المشروع .</p>
              <p>&nbsp;</p>
              <p>صورة لمهام أحد المشاريع :</p>
              <p><img src="http://pmngr.com/assets/uploads/system/uploads/upload-1417470663.png" alt="" />&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p><span style={{ color: "#0000ff" }}>- الخط الزمنى للمشروع</span></p>
              <p>يعبر الخط الزمنى فى نقاط زمنية محدده عن الخطوات التى مر بها مشروعك إبتداءً من بدأ العمل عليه إلى إنهاء المشروع مروراً بالأحداث التى يمكن أن تلم بالمشروع كتوقفه لفترة ما أو حصول على دعم مالى .</p>
              <p>&nbsp;</p>
              <p>صورة لخط زمنى لأحد المشاريع :</p>
              <p><img src="http://pmngr.com/assets/uploads/system/uploads/upload-1417470750.png" alt="" /></p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p><span style={{ color: "#0000ff" }}>- المستندات الخاصة بالمشروع</span></p>
              <p>المستندات هى ملفات كتابية و مرفقات يتم وضعها أمام جميع القائمين ( المدرجين ) فى المشروع و تتيح الفرصة للجميع ليطلع عليها المستندات الخاصة بالمشروع دون الحاجه إلى ارسالها لكل شخص على حده .</p>
              <p>&nbsp;</p>
              <p>صورة لمستندات أحد المشاريع :</p>
              <p><img src="http://pmngr.com/assets/uploads/system/uploads/upload-1417470821.png" alt="" /></p>
              <p>&nbsp;</p>
              <p><span style={{ color: "#0000ff" }}>- الميزانية</span></p>
              <p>يمكنك اضافة بنود الميزانية الخاصة بأى مشروع لتكون ظاهرة أمام الجميع ليكونوا على دراية بما تنفقه من أجل انجاح هذا المشروع مما يعطى الجميع دفعة قوية للعمل عليه بقوة فى سبيل إنجازه و نجاحه .</p> <p>&nbsp;</p>
              <p>صورة لبنود ميزانية أحد المشاريع :</p>
              <p><img src="http://pmngr.com/assets/uploads/system/uploads/upload-1417470870.png" alt="" /></p>
              <p>&nbsp;</p>
              <p><span style={{ color: "#0000ff" }}>- الفروع و الأقسام</span></p>
              <p>هى الفروع و الأقسام المدرجة بالمشروع و عند إضافة فرع ما أو قسم ما إلى أحد المشاريع فإنه يتم تلقائياً إضافتة مدرائها إلى قائمة الموظفين المدرجين بالمشروع ومن ثم يكون لهم الصلاحية للدخول عليه .</p> <p>و هى مفيدة جداً فى حالة كان لديك عدد كبير من مدراء الفروع و الأقسام الذين لا ترغب فى إضافتهم واحداً بواحد .</p> <p>&nbsp;</p>
              <p>صورة للفروع والأقسام المدرجة فى أحد المشاريع :</p>
              <p><img class="decoded" src="http://pmngr.com/assets/uploads/system/uploads/upload-1417470927.png" alt="http://pmngr.com/assets/uploads/system/uploads/upload-1417470927.png" /></p>
              <p>&nbsp;</p> <p>&nbsp;</p>
              <p><span style={{ color: "#0000ff" }}>- الموظفين</span></p>
              <p>هم الموظفون الذين لديهم صلاحية الدخول و الإطلاع على أحد المشاريع و الذين يمكنك إعطائهم المهام بداخل هذا المشروع . ( <a href="http://pmngr.com/general/help/question/6" target="_blank">كيف تعطى الموظف صلاحيات الدخول للمشروع ؟</a> )</p>
              <p>&nbsp;</p>
              <p>صورة للموظفين المدرجين فى أحد المشاريع :</p>
              <p>
                <img class="decoded" src="http://pmngr.com/assets/uploads/system/uploads/upload-1417470260.png" alt="http://pmngr.com/assets/uploads/system/uploads/upload-1417470260.png" /></p>
              <p>&nbsp;</p>
              <p><span style={{ color: "#0000ff" }}>- قنوات التواصل .</span></p>
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
