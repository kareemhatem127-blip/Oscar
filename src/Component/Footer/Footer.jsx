import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCode, 
  FaFacebookF, 
  FaWhatsapp, 
  FaHeart,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const whatsappNumber = "201027375220";
  const facebookUrl = "https://www.facebook.com/share/1CNQqPFeZA/";

  // دالة للطلع لأول الصفحة بسلاسة
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-5 pb-3 border-top border-secondary border-opacity-25 position-relative">
      <div className="container py-4">
        <div className="row g-4 justify-content-between align-items-center mb-4">
          
          {/* Brand Info */}
          <div className="col-lg-4 text-center text-lg-start">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 mb-3">
              <div className="bg-primary bg-gradient p-2 rounded-3 d-flex align-items-center justify-content-center text-white shadow-sm">
                <FaCode size={18} />
              </div>
              <span className="fw-bold fs-4 tracking-wide text-primary">
                Oscar
              </span>
            </div>
            <p className="text-white-50 small mb-0 lh-base" style={{ maxWidth: '320px' }}>
              نبتكر ونطور أحدث الحلول البرمجية والمواقع الإلكترونية لرفع كفاءة أعمالك وتحقيق أهدافك الرقمية باحترافية تامة.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 text-center">
            <h6 className="fw-bold text-white mb-3 fs-6">روابط سريعة</h6>
            <div className="d-flex justify-content-center gap-4 small text-white-50">
              <a href="#about" className="text-decoration-none text-white-50 hover-text-white transition-all">من نحن</a>
              <a href="#services" className="text-decoration-none text-white-50 hover-text-white transition-all">خدماتنا</a>
              <a href="#projects" className="text-decoration-none text-white-50 hover-text-white transition-all">أعمالنا</a>
              <a href="#contact" className="text-decoration-none text-white-50 hover-text-white transition-all">تواصل معنا</a>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="col-lg-4 text-center text-lg-end">
            <h6 className="fw-bold text-white mb-3 fs-6">تابعنا على منصات التواصل</h6>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-end gap-3">
              
              {/* Facebook Button */}
              <motion.a 
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark border border-secondary border-opacity-50 text-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm"
                style={{ width: '40px', height: '40px' }}
                title="Facebook"
              >
                <FaFacebookF size={16} />
              </motion.a>

              {/* WhatsApp Button */}
              <motion.a 
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark border border-secondary border-opacity-50 text-success rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm"
                style={{ width: '40px', height: '40px' }}
                title="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </motion.a>

              {/* Scroll to Top Button */}
              <motion.button 
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="btn btn-primary bg-gradient border-0 text-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm ms-2"
                style={{ width: '40px', height: '40px' }}
                title="الرجوع للأعلى"
              >
                <FaArrowUp size={16} />
              </motion.button>

            </div>
          </div>

        </div>

        {/* Copyright Divider */}
        <div className=" pt-4 text-center">
          <p className="text-white-50 small mb-0">
            جميع الحقوق محفوظة © {new Date().getFullYear()} <span className="text-primary fw-semibold">Oscar Web Development</span>. تم التطوير بشغف واحترافية.
          </p>
        </div>

      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;