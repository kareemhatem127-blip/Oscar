import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaCheckCircle, 
  FaBullseye, 
  FaUsers, 
  FaProjectDiagram, 
  FaAward 
} from 'react-icons/fa';

// مكون فرعي لأنيميشن تصاعد الأرقام تلقائياً
const Counter = ({ target, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // مدة الأنيميشن بالميلي ثانية (2 ثانية)
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const stats = [
    { icon: <FaProjectDiagram className="text-primary fs-3" />, target: 50, label: "مشروع ناجح" },
    { icon: <FaUsers className="text-info fs-3" />, target: 30, label: "عميل سعيد" },
    { icon: <FaAward className="text-warning fs-3" />, target: 5, label: "سنوات خبرة" },
  ];

  return (
    <section className="bg-black text-white py-5 position-relative overflow-hidden border-top border-secondary border-opacity-25" id="about">
      
      {/* Decorative Glow Background */}
      <div 
        className="position-absolute top-50 start-50 translate-middle rounded-circle opacity-10"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(13,110,253,0.4) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(90px)'
        }}
      />

      <div className="container py-4 position-relative">
        <div className="row align-items-center justify-content-center gy-5">
          
          <div className="col-lg-10 text-center">
            
            {/* Sub-heading Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-black bg-opacity-50 border border-primary border-opacity-50 text-primary mb-4 shadow"
              style={{ backdropFilter: 'blur(6px)' }}
            >
              <FaBullseye size={14} />
              <span className="small fw-semibold">من نحن - Oscar Tech</span>
            </motion.div>

            {/* Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="display-5 fw-bold lh-base mb-4 text-white"
            >
              نحن شريكك التقني لتطوير <span className="text-primary">أعمالك الرقمية</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white-50 lead fs-6 mb-5 mx-auto"
              style={{ maxWidth: '800px', textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
            >
              شركة <strong className="text-white">Oscar</strong> متخصصة في تقديم حلول البرمجيات المتقدمة، بداية من تصميم وتطوير المواقع والمنصات وتطبيقات الموبايل وحتى بناء الأنظمة الإدارية المعقدة وبرامج سطح المكتب. نركز على كتابة أكواد نظيفة وقابلة للتوسع (Clean & Scalable Code) مع تصميم تجربة مستخدم سلسة وعصرية.
            </motion.p>

            {/* Key Strengths Checklist */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="row g-4 mb-5 text-start justify-content-center"
            >
              <div className="col-md-5">
                <motion.div 
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="p-3 rounded-4 bg-dark bg-opacity-60 border border-secondary border-opacity-25 d-flex align-items-center gap-3 shadow-sm"
                  style={{ backdropFilter: 'blur(8px)' }}
                >
                  <div className="text-primary fs-4"><FaCheckCircle /></div>
                  <div className="text-white-50 small">تحليل ودراسة متطلبات المشروع بدقة واحترافية</div>
                </motion.div>
              </div>

              <div className="col-md-5">
                <motion.div 
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="p-3 rounded-4 bg-dark bg-opacity-60 border border-secondary border-opacity-25 d-flex align-items-center gap-3 shadow-sm"
                  style={{ backdropFilter: 'blur(8px)' }}
                >
                  <div className="text-primary fs-4"><FaCheckCircle /></div>
                  <div className="text-white-50 small">تصاميم متجاوبة 100% مع كافة الشاشات والأجهزة</div>
                </motion.div>
              </div>

              <div className="col-md-5">
                <motion.div 
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="p-3 rounded-4 bg-dark bg-opacity-60 border border-secondary border-opacity-25 d-flex align-items-center gap-3 shadow-sm"
                  style={{ backdropFilter: 'blur(8px)' }}
                >
                  <div className="text-primary fs-4"><FaCheckCircle /></div>
                  <div className="text-white-50 small">التزام تام بالمواعيد المحددة والتسليم في الوقت المناسب</div>
                </motion.div>
              </div>

              <div className="col-md-5">
                <motion.div 
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="p-3 rounded-4 bg-dark bg-opacity-60 border border-secondary border-opacity-25 d-flex align-items-center gap-3 shadow-sm"
                  style={{ backdropFilter: 'blur(8px)' }}
                >
                  <div className="text-primary fs-4"><FaCheckCircle /></div>
                  <div className="text-white-50 small">دعم فني مستمر وصيانة دورية بعد إطلاق المشروع</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Statistics Cards with Animated Counters */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="row g-4 justify-content-center"
            >
              {stats.map((stat, index) => (
                <div key={index} className="col-md-4">
                  <motion.div 
                    whileHover={{ y: -8 }}
                    className="p-4 rounded-4 bg-black bg-opacity-75 border border-secondary border-opacity-50 text-center shadow-lg position-relative overflow-hidden"
                    style={{ backdropFilter: 'blur(12px)' }}
                  >
                    <div className="mb-3 d-inline-flex p-3 bg-dark rounded-circle border border-secondary border-opacity-25">
                      {stat.icon}
                    </div>
                    <div className="fw-bold display-5 text-white mb-1">
                      <Counter target={stat.target} />
                    </div>
                    <div className="text-white-50 fw-medium">{stat.label}</div>
                  </motion.div>
                </div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;