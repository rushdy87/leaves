import './PrintableLeave.css';

import { dayInWritingMode } from '../../utils/render-days';

const PrintableLeave = ({ data }) => {
  return (
    <div className='paper'>
      <div className='paper_ref'>
        <span className='bold'>وزارة النفط</span>
        <span className='bold'>مصفى كربلاء</span>
      </div>
      <div className='paper_title'>
        <span className='bold'>استمارة طلب اجازة اعتيادية</span>
      </div>
      <div className='employee_info'>
        <div className='employee_info_right'>
          <div className='employee_info_name'>
            <span>الاسم:</span>
            <span>{data.name}</span>
          </div>
          <div className='employee_info_department'>
            <span>الشعبة:</span>
            <span>الاستلام والتجهيز</span>
          </div>
        </div>
        <div className='employee_info_left'>
          <div className='employee_info_request_date'>
            <span>التاريخ:</span>
            <span>{data.requestDate}</span>
          </div>
          <div className='employee_info_record_number'>
            <span>رقم الحاسبة:</span>
            <span>{data.recordNumber}</span>
          </div>
          <div className='employee_info_job_title'>
            <span>العنوان الوظيفي:</span>
            <span>{data.jobTitle}</span>
          </div>
        </div>
      </div>
      <div className='paper_duration'>
        <span>يرجى الموافقة على منحي اجازة اعتيادية لمدة:</span>
        <span>{dayInWritingMode(data.duration)}</span>
      </div>
      <div className='paper_starting_date'>
        <span>اعتباراً من تاريخ:</span>
        <span>{data.startingDate}</span>
      </div>
      <p className='paper_employee_signature'>توقيع طالب الاجازة</p>
      <div className='paper_hr'></div>
      <p className='bold'>نوافق على منحه الاجازة</p>
      <div className='paper_acception_signature'>
        <span>المسؤول المباشر</span>
        <span>مدير القسم</span>
        <span>معاون المدير العام</span>
      </div>
      <div className='paper_hr'></div>
      <div className='paper_financial_department'>
        <span className='bold'>إلى قسم الحسابات</span>
        <p>
          المومأ إليه يستحق <span className='blank'> </span> يوماً من الاجازة
          الاعتيادية المذكورة
        </p>
        <p>
          آعلاه وبراتب تام و <span className='blank'></span>
          يوماً بنصف راتب و
        </p>
        <p>يوماً بدون راتب</p>
        <div className='paper_financial_signature'>
          <span>موظف الاجازات</span>
          <span>مدير الأفراد</span>
        </div>
      </div>
    </div>
  );
};

export default PrintableLeave;
