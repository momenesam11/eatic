
import React from 'react'
import image from "../../assets/poscasher.svg";
import cover from "../../assets/cover.png";

export default function About() {
  return <>
  
   <header className="hero-price d-flex flex-column  justify-content-center align-content-center text-center gap-4 mb-4 mt-5 mb-0 px-3">
        <h3 className="text-secondary fw-bold">نساعد المطاعم على إدارة وتشغيل أعمالها بسهولة وكفاءة</h3>
        <h5 className=" text-primary">
         نظام eatic هو منصة متكاملة لإدارة المطاعم، صُممت لتجمع بين سهولة الاستخدام، السرعة، الدقة، وتجربة تشغيل سلسة.
        </h5>
        <h5 className=" text-primary">
هدفنا هو توفير أدوات ذكية تساعد أصحاب المطاعم في التحكم الكامل في الطلبات، الكاشير، المطبخ، التوصيل، والمخزون — من خلال نظام واحد بسيط وواضح.        </h5>

       
    </header>

    <div className="container">
     <div className="row flex-column flex-md-row align-items-center justify-content-center">
      <div className="col-12 col-md-6 ">
          <div
            className="accordion accordion-flush w-50 w-100 d-flex flex-column align-items-center" 
            id="accordionFlushExample"
          >
            <div className="accordion-item  rounded-4  mb-3 w-100">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fs-6 fw-semibold py-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-mange"
                  aria-expanded="false"
                  aria-controls="flush-mange"
                >
                 رسالتنا
                </button>
              </h2>
              <div
                id="flush-mange"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body bg-primary text-white px-3 py-4 rounded-bottom-3">
تقديم حلول تقنية متطورة تُسهّل تشغيل المطعم، وتقلّل الأخطاء، وتُحسّن تجربة العملاء، وتوفّر لصاحب العمل رؤية واضحة في أي وقت ومن أي مكان.
                </div>
              </div>
            </div>
            <div className="accordion-item  rounded-4  mb-3 w-100">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fs-6 fw-semibold py-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-table"
                  aria-expanded="false"
                  aria-controls="flush-table"
                >
                 رؤيتنا
                </button>
              </h2>
              <div
                id="flush-table"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body bg-primary text-white px-3 py-4 rounded-bottom-3">
نطمح إننا نكون الشريك التكنولوجي الأول للمطاعم في المنطقة، من خلال منصة ذكية بتبسّط الإدارة، وتربط كل العمليات في مكان واحد، وتساعد أصحاب المطاعم ياخدوا قرارات أسرع وأدق، ويكبروا شغلهم بثقة واستدامة.                </div>
              </div>
            </div>
            <div className="accordion-item  rounded-4  mb-3 w-100">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fs-6 fw-semibold py-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-kitchen"
                  aria-expanded="false"
                  aria-controls="flush-kitchen"
                >
                 قيمنا
                </button>
              </h2>
              <div
                id="flush-kitchen"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body bg-primary text-white px-3 py-4 rounded-bottom-3">
نؤمن إن النجاح الحقيقي بيبدأ من فهم احتياج العميل، علشان كده بنبني حلول عملية وسهلة الاستخدام، معتمدين على الشفافية، والدقة، والابتكار المستمر، وملتزمين بتقديم تجربة موثوقة بتضيف قيمة حقيقية لكل مطعم بنشتغل معاه.                </div>
              </div>
            </div>
            
    </div>
      </div>

      <div className="col-12 col-md-6">
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <img src={image} alt="Restaurant" className="img-fluid w-75" />
        </div>
      </div>
     </div>


    </div>

    <div className="container">
      <header className=" d-flex flex-column  justify-content-center align-content-center text-center gap-4 mb-4 mt-5 mb-0 px-3">
        <h3 className="text-secondary fw-bold">ماذا نقدم؟</h3>
        <h5 className=" text-primary">
نقدّم منظومة متكاملة تربط جميع أجزاء المطعم في نظام واحد يشمل الكاشير، المطبخ، التوصيل، المخزون، وإدارة الفروع، ليوفّر لك تشغيلًا أسرع، رؤية أوضح، وتحكمًا كاملًا من أي مكان.        </h5>
        <div className="row">
          <div className="col-12 ">
            <img src={cover} alt="itemss" className='w-100' />
        </div>
        </div>
    </header>

    </div>
  </>
}
