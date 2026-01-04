import React from 'react'
import HeaderBlogs from '../../compontes/HeaderBlogs'
import BlogsCard from '../../compontes/BlogsCard'
import imgBlog from '../../assets/freepik__talk__43861 1.svg'

export default function Blogs() {


let data = {
  img: imgBlog,
  title: "كيف تسرّع المطاعم عملياتها باستخدام شاشة عرض المطبخ (KDS)؟",
  subtitle:
    "في عالم المطاعم السريع، لم تعد السرعة رفاهية، بل عاملًا أساسيًا لنجاح أي مطعم. في هذا المقال نوضح كيف تساعد شاشة عرض المطبخ (KDS) على تحسين الأداء ورفع رضا العملاء وزيادة المبيعات.",
  article: [
    {
      img: imgBlog,
      sectioName: "لماذا السرعة عامل حاسم في نجاح المطاعم؟",
      sectioDetails:
        "يتوقع العملاء اليوم خدمة سريعة ودقيقة دون أخطاء. أي تأخير في تجهيز الطلبات قد يؤدي إلى تجربة سيئة وفقدان العميل. لذلك أصبحت سرعة تجهيز الطلبات عنصرًا أساسيًا لزيادة رضا العملاء وتحسين تقييمات المطعم."
    },
    {
      img: "",
      sectioName: "ما هي شاشة عرض المطبخ (KDS)؟",
      sectioDetails:
        "شاشة عرض المطبخ هي نظام رقمي يعرض الطلبات مباشرة على شاشات داخل المطبخ بدلًا من التذاكر الورقية. يتم تحديث الطلبات لحظيًا، مما يقلل الأخطاء ويساعد فريق العمل على متابعة الأولويات بسهولة."
    },
    {
      img: "",
      sectioName: "كيف تساهم KDS في تقليل الأخطاء؟",
      sectioDetails:
        "من خلال عرض الطلبات بشكل واضح ومنظم، تقل احتمالية ضياع الطلبات أو تنفيذها بشكل خاطئ. كما تتيح شاشة عرض المطبخ تتبع حالة كل طلب، مما يضمن دقة أعلى في التنفيذ وتقليل المرتجعات."
    },
    {
      img: "",
      sectioName: "تحسين إدارة الوقت داخل المطبخ",
      sectioDetails:
        "يساعد نظام KDS على ترتيب الطلبات حسب الأولوية ووقت الاستلام، مما يسمح للطهاة بالعمل بكفاءة أكبر. هذا التنظيم يقلل من التكدس ويُسرّع عملية التحضير دون التأثير على جودة الطعام."
    },
    {
      img: "",
      sectioName: "زيادة المبيعات وتحسين تجربة العميل",
      sectioDetails:
        "عندما يحصل العميل على طلبه بسرعة ودقة، تزداد احتمالية تكرار الزيارة والتوصية بالمطعم. ومع تحسن سرعة الخدمة، يمكن للمطعم خدمة عدد أكبر من الطلبات في نفس الوقت، مما ينعكس مباشرة على زيادة المبيعات."
    }
  ]
};




  return <>
   <HeaderBlogs/>
   <div className="container">
    <div className="row g-4">
      <div className="col-md-4">
        <BlogsCard data={data} />
      </div>
      <div className="col-md-4">
        <BlogsCard data={data} />
      </div>
      <div className="col-md-4">
        <BlogsCard data={data} />
      </div>
      <div className="col-md-4">
        <BlogsCard data={data} />
      </div>
      

      <div className="col-md-4">
        <BlogsCard data={data} />
      </div>

      <div className="col-md-4">
        <BlogsCard data={data} />
      </div>

      <div className="col-md-4">
        <BlogsCard data={data} />
      </div>
    </div>
   </div>
  </>
}
