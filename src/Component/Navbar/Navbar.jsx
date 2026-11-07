import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, 
  FaLaptopCode, 
  FaServer, 
  FaThLarge, 
  FaUserTie, 
  FaDesktop, 
  FaMobileAlt, 
  FaChevronDown, 
  FaBars, 
  FaTimes, 
  FaWhatsapp 
} from 'react-icons/fa';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setShowDropdown(false);
  };

  // دالة الانتقال السلس للسكشن المطلوبة باستخدام الـ ID
  const scrollToSection = (sectionId) => {
    closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // قائمة الخدمات الـ 6 لشركة Oscar Web Development
  const services = [
    { title: 'تطوير المواقع', sub: 'Web Development', target: 'services', icon: <FaLaptopCode className="text-primary fs-5" /> },
    { title: 'تطوير سيستم', sub: 'System Development', target: 'services', icon: <FaServer className="text-info fs-5" /> },
    { title: 'إنشاء منصات', sub: 'Platforms Creation', target: 'services', icon: <FaThLarge className="text-warning fs-5" /> },
    { title: 'برتفوليو احترافي', sub: 'Professional Portfolio', target: 'services', icon: <FaUserTie className="text-success fs-5" /> },
    { title: 'ديسك توب ابلكيشن', sub: 'Desktop Applications', target: 'services', icon: <FaDesktop className="text-danger fs-5" /> },
    { title: 'تطوير تطبيقات الموبايل', sub: 'Mobile Apps', target: 'services', icon: <FaMobileAlt className="text-purple fs-5" /> },
  ];

  const whatsappNumber = "201027375220";
  const whatsappMessage = encodeURIComponent("مرحباً Oscar Web Development، أرغب في الاستفسار عن خدماتكم وبدء مشروع جديد.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <nav className="navbar navbar-expand-lg bg-black py-3 border-bottom border-secondary border-opacity-25 shadow-sm sticky-top" style={{ zIndex: 1080 }}>
      <div className="container">
        
        {/* Brand Logo */}
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <button 
            onClick={() => scrollToSection('hero')} 
            className="navbar-brand d-flex align-items-center gap-2 text-white bg-transparent border-0 text-decoration-none cursor-pointer"
          >
            <div className="bg-primary bg-gradient p-2 rounded-3 d-flex align-items-center justify-content-center text-white shadow-sm">
              <FaCode size={20} />
            </div>
            <span className="fw-bold fs-4 tracking-wide text-primary">
              Oscar
            </span>
          </button>
        </motion.div>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 text-white shadow-none p-2"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-2">
            
            <li className="nav-item">
              <button onClick={() => scrollToSection('hero')} className="nav-link btn text-white-50 border-0 py-2 px-3 fw-medium bg-transparent hover-text-white">
                الرئيسية
              </button>
            </li>

            <li className="nav-item">
              <button onClick={() => scrollToSection('about')} className="nav-link btn text-white-50 border-0 py-2 px-3 fw-medium bg-transparent hover-text-white">
                من نحن
              </button>
            </li>

            {/* Services Dropdown Menu */}
            <li 
              className="nav-item dropdown position-relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button 
                className="nav-link btn text-white-50 border-0 d-flex align-items-center gap-1 py-2 px-3 fw-medium bg-transparent hover-text-white"
                onClick={() => scrollToSection('services')}
              >
                خدماتنا 
                <motion.div animate={{ rotate: showDropdown ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <FaChevronDown size={11} className="ms-1" />
                </motion.div>
              </button>

              <AnimatePresence>
                {showDropdown && (
                  <motion.ul
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="dropdown-menu dropdown-menu-dark show position-absolute border-0 shadow-lg p-2 rounded-3 bg-black border border-secondary border-opacity-25"
                    style={{ minWidth: '260px', top: '100%', right: '0', zIndex: 1050 }}
                  >
                    {services.map((service, index) => (
                      <li key={index}>
                        <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
                          <button 
                            className="dropdown-item d-flex align-items-center gap-3 p-2 rounded-2 text-white-50 bg-transparent border-0 w-100 text-start cursor-pointer" 
                            onClick={() => scrollToSection(service.target)}
                          >
                            <div className="p-2 bg-secondary bg-opacity-25 rounded-2 d-flex align-items-center justify-content-center">
                              {service.icon}
                            </div>
                            <div>
                              <div className="fw-semibold text-white fs-6">{service.title}</div>
                              <div className="text-secondary small">{service.sub}</div>
                            </div>
                          </button>
                        </motion.div>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="nav-item">
              <button onClick={() => scrollToSection('projects')} className="nav-link btn text-white-50 border-0 py-2 px-3 fw-medium bg-transparent hover-text-white">
                أعمالنا
              </button>
            </li>

            <li className="nav-item">
              <button onClick={() => scrollToSection('testimonials')} className="nav-link btn text-white-50 border-0 py-2 px-3 fw-medium bg-transparent hover-text-white">
                آراء العملاء
              </button>
            </li>

            <li className="nav-item">
              <button onClick={() => scrollToSection('contact')} className="nav-link btn text-white-50 border-0 py-2 px-3 fw-medium bg-transparent hover-text-white">
                تواصل معنا
              </button>
            </li>

          </ul>

          {/* WhatsApp CTA Button */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="mt-3 mt-lg-0"
          >
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success bg-gradient border-0 px-4 py-2 rounded-pill fw-semibold shadow-sm text-white d-inline-flex align-items-center justify-content-center gap-2 w-100 w-lg-auto"
              onClick={closeMenu}
            >
              <FaWhatsapp size={18} />
              <span>تواصل معنا </span>
            </a>
          </motion.div>

        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;