import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      name: "مهاب إبراهيم",
      role: "مدير شركة تجارية",
      comment: "تعاملت مع فريق Oscar Web Development في تطوير سيستم الشركة، التزام تام بالمواعيد وأكواد نظيفة واحترافية جداً.",
      stars: 5
    },
    {
      name: "أحمد عبد الله",
      role: "صاحب متجر إلكتروني",
      comment: "أنصح بشدة بالتعامل مع Oscar Web Development، تصميم مواقعهم سريع جداً ومتجاوب مع كل الأجهزة بكفاءة.",
      stars: 5
    },
    {
      name: "محمود حسن",
      role: "مؤسس منصة تعليمية",
      comment: "سرعة استجابة ودعم فني ممتاز بعد التسليم، طوروا لي المنصة بأعلى معايير الأمان والأداء العالي.",
      stars: 5
    },
    {
      name: "سارة مجدي",
      role: "مديرة تسويق",
      comment: "تطبيق الموبايل كان سلاسل جداً وواجهة المستخدم عصرية، تجربة ممتازة واحترافية حقيقية مع فريق Oscar.",
      stars: 5
    }
  ];

  return (
    <section className="bg-black text-white py-5 position-relative overflow-hidden border-top border-secondary border-opacity-25" id="testimonials">
      <div className="container py-3">
        
        {/* Section Header */}
        <div className="text-center mb-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-black bg-opacity-50 border border-warning border-opacity-50 text-warning mb-2 shadow"
            style={{ backdropFilter: 'blur(6px)' }}
          >
            <FaStar size={12} />
            <span className="small fw-semibold">آراء عملاء Oscar Web Development</span>
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="fw-bold fs-3 text-white"
          >
            ثقة عملائنا في <span className="text-warning">Oscar Web Development</span>
          </motion.h3>
        </div>

        {/* Testimonials Cards Grid (4 Compact Cards) */}
        <div className="row g-4 justify-content-center">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="col-md-6 col-lg-3"
            >
              <div 
                className="p-4 rounded-4 bg-dark bg-opacity-50 border border-secondary border-opacity-25 h-100 d-flex flex-column justify-content-between position-relative shadow-sm"
                style={{ backdropFilter: 'blur(10px)' }}
              >
                {/* Quote Icon Background */}
                <div className="position-absolute top-0 end-0 m-3 text-secondary opacity-25">
                  <FaQuoteLeft size={24} />
                </div>

                <div>
                  {/* Stars */}
                  <div className="d-flex gap-1 text-warning mb-3">
                    {[...Array(review.stars)].map((_, i) => (
                      <FaStar key={i} size={13} />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-white-50 small mb-4 lh-base">
                    "{review.comment}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="d-flex align-items-center gap-2 pt-2 border-top border-secondary border-opacity-25 mt-auto">
                  <div className="bg-primary bg-opacity-25 text-primary rounded-circle p-2 d-flex align-items-center justify-content-center fw-bold flex-shrink-0" style={{ width: '36px', height: '36px', fontSize: '14px' }}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h6 className="fw-bold text-white mb-0 fs-6">{review.name}</h6>
                    <small className="text-white-50 fs-7">{review.role}</small>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;