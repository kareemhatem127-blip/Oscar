import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaWhatsapp, 
  FaRocket, 
  FaLaptopCode, 
  FaServer, 
  FaMobileAlt, 
  FaCheckCircle 
} from 'react-icons/fa';

const Hero = () => {
  // رابط الواتساب المباشر
  const whatsappNumber = "201027375220";
  const whatsappMessage = encodeURIComponent("مرحباً، أرغب في الاستفسار عن خدمات تطوير البرمجيات وبدء مشروع جديد.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // إعدادات أنيميشن الظهور المتسلسل للعناصر
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // تأخير بسيط بين ظهور كل خدمة والثانية
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="text-white min-vh-100 d-flex align-items-center py-5 position-relative overflow-hidden">
      
      {/* Full Background Image */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url('/Oscar.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          zIndex: -2,
        }}
      />
      
      {/* Light Dark Overlay */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 bg-black"
        style={{
          opacity: 0.65,
          zIndex: -1,
        }}
      />

      <div className="container py-4">
        <div className="row align-items-center gy-5">
          
          {/* Left Column: Text Content */}
          <div className="col-lg-7 text-center text-lg-start">
            
            {/* Tag Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-black bg-opacity-50 border border-primary border-opacity-50 text-primary mb-4 shadow"
              style={{ backdropFilter: 'blur(6px)' }}
            >
              <FaRocket size={14} />
              <span className="small fw-semibold">حلول برمجية متكاملة لنمو أعمالك مع <span className="text-primary">Oscar</span></span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="display-4 fw-bold lh-sm mb-4 text-white"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
            >
              نحول أفكارك الرقمية إلى <span className="text-primary">واقع برمجي</span> احترافي
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lead text-light mb-4"
              style={{ textShadow: '0 1px 5px rgba(0,0,0,0.8)' }}
            >
              في شركة <span className="text-primary fw-semibold">Oscar</span> نقدم خدمات تطوير المواقع، الأنظمة، تطبيقات الموبايل، والمنصات الذكية بأعلى كفاءة وأحدث التقنيات لمساعدة شركتك على التوسع والتميز.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-lg-start gap-3 mb-5"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success bg-primary border-0 px-4 py-3 rounded-pill fw-semibold d-inline-flex align-items-center gap-2 shadow-lg w-100 w-sm-auto justify-content-center"
              >
                <FaWhatsapp size={20} />
                <span>ابدأ مشروعك الآن</span>
              </motion.a>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-100 w-sm-auto">
                <Link 
                  to="/projects" 
                  className="btn btn-outline-light px-4 py-3 rounded-pill fw-semibold border-secondary w-100 text-center bg-black bg-opacity-50"
                  style={{ backdropFilter: 'blur(5px)' }}
                >
                  استكشف أعمالنا
                </Link>
              </motion.div>
            </motion.div>

            {/* Features Checklist */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-4 text-light small"
            >
              <div className="d-flex align-items-center gap-2 bg-black bg-opacity-50 px-3 py-1 rounded-pill" style={{ backdropFilter: 'blur(4px)' }}>
                <FaCheckCircle className="text-primary" />
                <span>أكواد نظيفة ومستقرة</span>
              </div>
              <div className="d-flex align-items-center gap-2 bg-black bg-opacity-50 px-3 py-1 rounded-pill" style={{ backdropFilter: 'blur(4px)' }}>
                <FaCheckCircle className="text-primary" />
                <span>تصاميم تجاوبية 100%</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Quick Services Grid with Advanced Animations */}
          <div className="col-lg-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="p-4 rounded-4 bg-black bg-opacity-60 border border-secondary border-opacity-50 shadow-lg"
              style={{ backdropFilter: 'blur(12px)' }}
            >
              <motion.h4 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="fw-bold mb-3 text-white fs-5 border-bottom border-secondary pb-2"
              >
                خدماتنا الرئيسية
              </motion.h4>

              {/* Animated Container for Services Items */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="row g-3"
              >
                
                {/* Service 1 */}
                <motion.div variants={itemVariants} className="col-12">
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="d-flex align-items-center gap-3 p-2 rounded-3 bg-black bg-opacity-50 border border-secondary border-opacity-25 shadow-sm cursor-pointer"
                  >
                    <div className="p-2 bg-primary bg-opacity-25 text-primary rounded-2">
                      <FaLaptopCode size={20} />
                    </div>
                    <div>
                      <div className="fw-semibold text-white fs-6">تطوير المواقع والمنصات</div>
                      <small className="text-white-50">مواقع تعريفية، تجارية ومنصات رقمية</small>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Service 2 */}
                <motion.div variants={itemVariants} className="col-12">
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="d-flex align-items-center gap-3 p-2 rounded-3 bg-black bg-opacity-50 border border-secondary border-opacity-25 shadow-sm cursor-pointer"
                  >
                    <div className="p-2 bg-info bg-opacity-25 text-info rounded-2">
                      <FaServer size={20} />
                    </div>
                    <div>
                      <div className="fw-semibold text-white fs-6">تطوير الأنظمة (Systems)</div>
                      <small className="text-white-50">أنظمة إدارية متكاملة للشركات</small>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Service 3 */}
                <motion.div variants={itemVariants} className="col-12">
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="d-flex align-items-center gap-3 p-2 rounded-3 bg-black bg-opacity-50 border border-secondary border-opacity-25 shadow-sm cursor-pointer"
                  >
                    <div className="p-2 bg-warning bg-opacity-25 text-warning rounded-2">
                      <FaMobileAlt size={20} />
                    </div>
                    <div>
                      <div className="fw-semibold text-white fs-6">تطبيقات الموبايل والديسك توب</div>
                      <small className="text-white-50">تطبيقات سريعة ومتوافقة مع جميع الأجهزة</small>
                    </div>
                  </motion.div>
                </motion.div>

              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;