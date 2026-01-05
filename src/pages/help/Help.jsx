
import React from "react";
import FollowUsSection from "../../compontes/FollowUsSection";

export default function Help() {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row gap-5 gap-md-0">
          <div className="col-12 col-md-8">
            <div className="header-request d-flex flex-column align-items-start gap-2 mb-1 pb-3">
              <h5 className="text-secondary">الأسئلة الشائعة</h5>
              <h6 className="text-primary ">
إجابات سريعة وواضحة على أكثر الأسئلة شيوعًا حول نظام eatic لإدارة وتشغيل المطاعم، من استخدام النظام في أكثر من فرع، للتقارير، والدعم الفني، وطريقة التشغيل،              </h6>
            </div>
            <div
              className="accordion accordion-flush  w-100 d-flex flex-column align-items-center"
              id="accordionFlushExample"
            >
              <div className="accordion-item rounded-4 mb-2  w-100">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fs-6 fw-semibold py-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-branches"
                    aria-expanded="false"
                    aria-controls="faq-branches"
                  >
                    هل يمكنني استخدام النظام في أكثر من فرع؟
                  </button>
                </h2>
                <div
                  id="faq-branches"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body bg-primary text-white px-3 py-4 rounded-bottom-3">
                    نعم، يمكنك ربط جميع الفروع في حساب واحد ومتابعتها في الوقت
                    الحقيقي من تطبيق المدير أو لوحة التحكم.
                  </div>
                </div>
              </div>

              <div className="accordion-item rounded-4 mb-2  w-100">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fs-6 fw-semibold py-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-pos"
                    aria-expanded="false"
                    aria-controls="faq-pos"
                  >
                    هل النظام مناسب للمطاعم والكافيهات؟
                  </button>
                </h2>
                <div
                  id="faq-pos"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body bg-primary text-white px-3 py-4 rounded-bottom-3">
                    أيوه، النظام مصمم خصيصًا للمطاعم والكافيهات بجميع أحجامها
                    ويدعم الطلبات، المخزون، والحسابات.
                  </div>
                </div>
              </div>

              <div className="accordion-item rounded-4 mb-2  w-100">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fs-6 fw-semibold py-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-reports"
                    aria-expanded="false"
                    aria-controls="faq-reports"
                  >
                    هل يوفر النظام تقارير تفصيلية؟
                  </button>
                </h2>
                <div
                  id="faq-reports"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body bg-primary text-white px-3 py-4 rounded-bottom-3">
                    نعم، يوفر تقارير شاملة عن المبيعات، الأرباح، أداء الفروع،
                    والمخزون لمساعدتك في اتخاذ قرارات أدق.
                  </div>
                </div>
              </div>

              <div className="accordion-item rounded-4 mb-2  w-100">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fs-6 fw-semibold py-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-support"
                    aria-expanded="false"
                    aria-controls="faq-support"
                  >
                    هل يوجد دعم فني؟
                  </button>
                </h2>
                <div
                  id="faq-support"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body bg-primary text-white px-3 py-4 rounded-bottom-3">
                    طبعًا، فريق الدعم الفني متاح لمساعدتك في أي وقت سواء في
                    الإعداد أو التشغيل اليومي.
                  </div>
                </div>
              </div>

              <div className="accordion-item rounded-4 mb-2  w-100">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fs-6 fw-semibold py-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-cloud"
                    aria-expanded="false"
                    aria-controls="faq-cloud"
                  >
                    هل النظام سحابي أم يحتاج جهاز خاص؟
                  </button>
                </h2>
                <div
                  id="faq-cloud"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body bg-primary text-white px-3 py-4 rounded-bottom-3">
                    النظام سحابي بالكامل، ويمكنك استخدامه من أي جهاز متصل
                    بالإنترنت بدون الحاجة إلى تجهيزات معقدة.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="header-request d-flex flex-column align-items-start gap-2">
              <h5 className="text-secondary">تواصل معنا</h5>
              <h6 className="text-primary">
                يسعدنا الرد على جميع استفساراتك حول نظام eatic لإدارة وتشغيل
                المطاعم
              </h6>
            </div>

            <div className="d-flex gap-3 ps-md-0 flex-column  mt-3">
              <input
                type="text"
                className="form-control w-100 py-2"
                id="exampleFormControlInput1"
                placeholder="الاسم"
              />
              <input
                type="tel"
                className="form-control w-100 py-2"
                id="exampleFormControlInput1"
                placeholder="رقم الهاتف"
              />
              <input
                type="email"
                className="form-control w-100 py-2"
                id="exampleFormControlInput1"
                placeholder="البريد الالكتروني"
              />
              <textarea
                class="form-control w-100"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="اكتب سؤالك هنا"
              ></textarea>
            </div>

            <button className="btn btn-primary mt-4 py-2 px-4 fw-semibold ">
              ارسال
            </button>
          </div>


        </div>

         <FollowUsSection/>
      </div>
    </>
  );
}
