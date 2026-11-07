import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaWhatsapp, 
  FaPaperPlane, 
  FaComments,
  FaCheckCircle
} from 'react-icons/fa';

const Contact = () => {
  const whatsappNumber = "201027375220";
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'تطوير المواقع',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // تجهيز نص رسالة الواتساب
    const text = `مرحباً Oscar Web Development%0A%0A*الاسم:* ${formData.name}%0A*وسيلة التواصل:* ${formData.email}%0A*الخدمة المطلوبة:* ${formData.service}%0A*تفاصيل المشروع:* ${formData.message}`;
    
    // فتح الواتساب مباشرة
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');

    setSubmitted(true);
    setFormData({ name: '', email: '', service: 'تطوير المواقع', message: '' });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="bg-black text-white py-5 position-relative overflow-hidden border-top border-secondary border-opacity-25" id="contact">
      
      {/* Background Decorative Glow */}
      <div 
        className="position-absolute top-50 start-50 translate-middle rounded-circle opacity-10 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(25,135,84,0.4) 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}
      />

      <div className="container py-4 position-relative">
        
        {/* Header */}
        <div className="text-center mb-4">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-black bg-opacity-50 border border-success border-opacity-50 text-success mb-3 shadow"
            style={{ backdropFilter: 'blur(6px)' }}
          >
            <FaComments size={14} />
            <span className="small fw-semibold">تواصل مع Oscar Web Development</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="display-5 fw-bold text-white mb-3"
          >
            سجّل بيانات مشروعك <span className="text-success">الآن</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white-50 lead fs-6 mx-auto"
            style={{ maxWidth: '600px' }}
          >
            قم بتعبئة النموذج وسنتمكن من بدء مناقشة تفاصيل مشروعك فوراً عبر الواتساب.
          </motion.p>
        </div>

        {/* Centered Box Card Form */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-4 p-md-5 rounded-4 bg-dark bg-opacity-50 border border-secondary border-opacity-25 shadow-lg position-relative"
              style={{ backdropFilter: 'blur(12px)' }}
            >
              {/* Success Alert Popup */}
              <AnimatePresence>
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="alert alert-success bg-success bg-opacity-25 border border-success text-white d-flex align-items-center gap-3 p-3 rounded-3 mb-4"
                  >
                    <FaCheckCircle className="text-success fs-4 flex-shrink-0" />
                    <div>
                      <div className="fw-bold">تم تجهيز بياناتك بنجاح!</div>
                      <div className="small text-white-50">تم تحويلك إلى شات الواتساب لمناقشة التفاصيل.</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  
                  <div className="col-md-6">
                    <label className="form-label text-white-50 small">الاسم بالكامل</label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="أدخل اسمك" 
                      className="form-control bg-black text-white border-secondary border-opacity-50 py-2 px-3 rounded-3 shadow-none"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-white-50 small">البريد الإلكتروني / رقم الهاتف</label>
                    <input 
                      type="text" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="وسيلة التواصل معك" 
                      className="form-control bg-black text-white border-secondary border-opacity-50 py-2 px-3 rounded-3 shadow-none"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label text-white-50 small">الخدمة المطلوبة</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select bg-black text-white border-secondary border-opacity-50 py-2 px-3 rounded-3 shadow-none"
                    >
                      <option value="تطوير المواقع">تطوير المواقع (Web Development)</option>
                      <option value="تطوير سيستم">تطوير سيستم (Systems)</option>
                      <option value="إنشاء منصات">إنشاء منصات (Platforms)</option>
                      <option value="برتفوليو احترافي">برتفوليو احترافي (Portfolio)</option>
                      <option value="ديسك توب ابلكيشن">ديسك توب ابلكيشن (Desktop Apps)</option>
                      <option value="تطبيقات الموبايل">تطبيقات الموبايل (Mobile Apps)</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label text-white-50 small">تفاصيل المشروع / الرسالة</label>
                    <textarea 
                      name="message" 
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="اكتب نبذة مختصرة عن فكرتك أو استفسارك..." 
                      className="form-control bg-black text-white border-secondary border-opacity-50 py-2 px-3 rounded-3 shadow-none"
                    ></textarea>
                  </div>

                  <div className="col-12 mt-4">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit" 
                      className="btn btn-success bg-gradient border-0 w-100 py-3 rounded-pill fw-semibold d-flex align-items-center justify-content-center gap-2 shadow fs-6"
                    >
                      <FaWhatsapp size={22} />
                      <span>تسجيل البيانات والإرسال عبر الواتساب</span>
                    </motion.button>
                  </div>

                </div>
              </form>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;