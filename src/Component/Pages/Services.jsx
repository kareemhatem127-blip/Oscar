import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLaptopCode, 
  FaServer, 
  FaThLarge, 
  FaUserTie, 
  FaDesktop, 
  FaMobileAlt, 
  FaWhatsapp, 
  FaCogs,
  FaArrowLeft
} from 'react-icons/fa';

const Services = () => {
  const whatsappNumber = "201027375220";

  const servicesList = [
    {
      id: '01',
      title: 'تطوير المواقع',
      sub: 'Web Development',
      desc: 'تصميم وتطوير مواقع إلكترونية تعريفية وتجارية فائقة السرعة ومتجاوبة 100% مع كافة الشاشات.',
      icon: <FaLaptopCode className="text-primary fs-2" />,
      glowColor: 'rgba(13, 110, 253, 0.4)',
      badgeClass: 'bg-primary text-primary'
    },
    {
      id: '02',
      title: 'تطوير سيستم',
      sub: 'System Development',
      desc: 'بناء أنظمة إدارية وبرمجية متكاملة ومخصصة لتنظيم العمليات وإدارة الشركات بدقة عالية.',
      icon: <FaServer className="text-info fs-2" />,
      glowColor: 'rgba(13, 202, 240, 0.4)',
      badgeClass: 'bg-info text-info'
    },
    {
      id: '03',
      title: 'إنشاء منصات',
      sub: 'Platforms Creation',
      desc: 'إنشاء منصات رقمية وتعليمية وتجارية ضخمة قابلة للتوسع والنمو وبنية تحتية مستقرة.',
      icon: <FaThLarge className="text-warning fs-2" />,
      glowColor: 'rgba(255, 193, 7, 0.4)',
      badgeClass: 'bg-warning text-warning'
    },
    {
      id: '04',
      title: 'برتفوليو احترافي',
      sub: 'Professional Portfolio',
      desc: 'تصميم معرض أعمال شخصي أو للشركات يعكس هويتك واحترافيتك بأفضل لمسات بصريّة.',
      icon: <FaUserTie className="text-success fs-2" />,
      glowColor: 'rgba(25, 135, 84, 0.4)',
      badgeClass: 'bg-success text-success'
    },
    {
      id: '05',
      title: 'ديسك توب ابلكيشن',
      sub: 'Desktop Applications',
      desc: 'برامج سطح مكتب قوية وآمنة لأنظمة التشغيل المختلفة لتسهيل وتسريع إدارة أعمالك.',
      icon: <FaDesktop className="text-danger fs-2" />,
      glowColor: 'rgba(220, 53, 69, 0.4)',
      badgeClass: 'bg-danger text-danger'
    },
    {
      id: '06',
      title: 'تطوير تطبيقات الموبايل',
      sub: 'Mobile Applications',
      desc: 'تطبيقات موبايل احترافية وسريعة جداً لأنظمة Android و iOS بأحدث تقنيات الفريم ورك.',
      icon: <FaMobileAlt className="text-purple fs-2" />,
      glowColor: 'rgba(130, 49, 211, 0.4)',
      badgeClass: 'bg-purple text-purple'
    },
  ];

  // Variants للأنيميشن المتتابع
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] } 
    },
  };

  return (
    <section className="bg-black text-white py-5 position-relative overflow-hidden" id="services">
      
      {/* Background Animated Glow Spheres */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="position-absolute top-25 start-0 translate-middle-y rounded-circle pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(13,110,253,0.3) 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}
      />

      <div className="container py-4 position-relative">
        
        {/* Header Section */}
        <div className="text-center mb-5">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-black bg-opacity-50 border border-primary border-opacity-50 text-primary mb-3 shadow"
            style={{ backdropFilter: 'blur(8px)' }}
          >
            <FaCogs size={14} />
            <span className="small fw-semibold">خدمات Oscar التقنية</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-5 fw-bold text-white mb-3"
          >
            حلول برمجية متكاملة لجميع <span className="text-primary">احتياجاتك</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white-50 lead fs-6 mx-auto"
            style={{ maxWidth: '650px' }}
          >
            نُصمم ونطور الأفكار البرمجية بأعلى كفاءة لتناسب تطلعات مشروعك وتضمن لك التواجد التنافسي القوي.
          </motion.p>
        </div>

        {/* Animated Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row g-4"
        >
          {servicesList.map((service, index) => {
            const msg = encodeURIComponent(`مرحباً Oscar، أرغب في الاستفسار عن خدمة (${service.title}) والبدء في تنفيذه.`);
            const waLink = `https://wa.me/${whatsappNumber}?text=${msg}`;

            return (
              <motion.div key={index} variants={cardVariants} className="col-lg-4 col-md-6">
                
                {/* Motion Hover Wrapper */}
                <motion.div 
                  whileHover={{ 
                    y: -12, 
                    scale: 1.02,
                    boxShadow: `0px 15px 30px ${service.glowColor}`
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="p-4 rounded-4 bg-dark bg-opacity-40 border border-secondary border-opacity-25 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden cursor-pointer"
                  style={{ backdropFilter: 'blur(12px)' }}
                >
                  
                  {/* Subtle Card Background Glow */}
                  <div 
                    className="position-absolute top-0 end-0 rounded-circle opacity-0 transition-opacity pointer-events-none"
                    style={{
                      width: '180px',
                      height: '180px',
                      background: service.glowColor,
                      filter: 'blur(50px)',
                      zIndex: 0
                    }}
                  />

                  <div className="position-relative" style={{ zIndex: 1 }}>
                    
                    {/* Header Inside Card */}
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      
                      {/* Floating Icon Animation */}
                      <motion.div 
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                        className="p-3 bg-black bg-opacity-60 rounded-3 border border-secondary border-opacity-25 shadow-sm"
                      >
                        {service.icon}
                      </motion.div>

                      {/* Number Badge */}
                      <span className="fs-5 fw-bold text-white-50 font-monospace opacity-50">
                        {service.id}
                      </span>
                    </div>

                    {/* Service Titles */}
                    <div className="mb-2">
                      <span className="badge bg-secondary bg-opacity-25 text-white-50 mb-2 px-2 py-1 rounded-2 small">
                        {service.sub}
                      </span>
                      <h3 className="fw-bold fs-4 text-white mb-2">{service.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-white-50 small lh-base mb-4">{service.desc}</p>
                  </div>

                  {/* WhatsApp Action Button with Pulse Animation */}
                  <div className="position-relative mt-auto" style={{ zIndex: 1 }}>
                    <motion.a 
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success bg-primary border-0 py-2 px-3 rounded-pill fw-semibold text-white d-flex align-items-center justify-content-center gap-2 shadow-sm w-100"
                    >
                      <FaWhatsapp size={18} />
                      <span>اطلب الخدمة الآن</span>
                      <motion.div
                        animate={{ x: [0, -4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FaArrowLeft size={12} />
                      </motion.div>
                    </motion.a>
                  </div>

                </motion.div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;