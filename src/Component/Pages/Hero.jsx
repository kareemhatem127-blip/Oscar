import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowLeft, FaCode, FaCheckCircle } from 'react-icons/fa';

const Hero = () => {
  const whatsappNumber = "201027375220";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("مرحباً Oscar Web Development، أرغب في بدء مشروع جديد وتطوير موقعي.")}`;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="text-white min-vh-100 d-flex align-items-center position-relative overflow-hidden pt-5 pb-5"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}Oscar.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay لضمان وضوح النصوص وقراءة ممتازة */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.75) 100%)',
          zIndex: 1
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center justify-content-center text-center text-lg-start gy-5">
          
          {/* Content */}
          <div className="col-lg-10 mx-auto">
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-black bg-opacity-75 border border-success border-opacity-50 text-success mb-4 shadow"
              style={{ backdropFilter: 'blur(8px)' }}
            >
              <FaCode size={15} />
              <span className="small fw-semibold">Oscar Web Development — شريكك الرقمي</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="display-4 display-lg-2 fw-bold text-white mb-4 lh-sm"
            >
              نبتكر ونطور <span className="text-success">أحدث الحلول</span> والمواقع الإلكترونية
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white-50 lead fs-5 mb-5 mx-auto"
              style={{ maxWidth: '750px' }}
            >
              نحول أفكارك إلى منصات وتطبيقات رقمية سريعة، متجاوبة، ومصممة بأعلى معايير الجودة لرفع كفاءة أعمالك وزيادة أرباحك.
            </motion.p>

            {/* Features pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="d-flex flex-wrap justify-content-center gap-4 mb-5"
            >
              <div className="d-flex align-items-center gap-2 text-white-50 small bg-dark bg-opacity-50 px-3 py-2 rounded-pill border border-secondary border-opacity-25">
                <FaCheckCircle className="text-success" />
                <span>تصميم متجاوب 100%</span>
              </div>
              <div className="d-flex align-items-center gap-2 text-white-50 small bg-dark bg-opacity-50 px-3 py-2 rounded-pill border border-secondary border-opacity-25">
                <FaCheckCircle className="text-success" />
                <span>سرعة أداء عالية</span>
              </div>
              <div className="d-flex align-items-center gap-2 text-white-50 small bg-dark bg-opacity-50 px-3 py-2 rounded-pill border border-secondary border-opacity-25">
                <FaCheckCircle className="text-success" />
                <span>دعم فني مستمر</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="d-flex flex-wrap align-items-center justify-content-center gap-3"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success bg-gradient px-4 py-3 rounded-pill fw-semibold text-white d-flex align-items-center gap-2 shadow fs-6"
              >
                <FaWhatsapp size={20} />
                <span>ابدأ مشروعك الآن عبر الواتساب</span>
              </motion.a>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="btn btn-outline-light px-4 py-3 rounded-pill fw-semibold d-flex align-items-center gap-2 fs-6"
              >
                <span>استكشف أعمالنا</span>
                <FaArrowLeft size={14} />
              </motion.button>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;