import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaExternalLinkAlt, 
  FaWhatsapp, 
  FaLaptopCode, 
  FaProjectDiagram,
  FaShoppingBag,
  FaDumbbell,
  FaBuilding,
  FaUserTie
} from 'react-icons/fa';

const Projects = () => {
  const whatsappNumber = "201027375220";

  // قائمة مشاريعك المميزة مع روابطها الحية وتفاصيلها
  const projectsList = [
    {
      title: 'Exclusive E-Commerce',
      category: 'متجر إلكتروني متكامل',
      desc: 'متجر إلكتروني مودرن بتصميم عصري لعرض المنتجات، سلة تسوق، وتجربة مستخدم سريعة وسلسة.',
      link: 'https://exclusive-ecommerce-phi.vercel.app/',
      icon: <FaShoppingBag className="text-primary fs-3" />,
      glow: 'rgba(13, 110, 253, 0.3)',
      tag: 'E-Commerce'
    },
    {
      title: 'Professional Portfolio',
      category: 'معرض أعمال شخصي',
      desc: 'برتفوليو احترافي بتصميم أنيق ومميز يعرض المهارات والخبرات والأعمال السابقة بكفاءة.',
      link: 'https://my-portfolio-lake-beta-64.vercel.app',
      icon: <FaUserTie className="text-info fs-3" />,
      glow: 'rgba(13, 202, 240, 0.3)',
      tag: 'Portfolio'
    },
    {
      title: 'Fitness Gym system',
      category: 'سيستيم جيم متكامل',
      desc: 'موقع رياضي متكامل لخدمات الجيم، عرض البرامج التدريبية، والجداول الزمنية بأسلوب جذاب.',
      link: 'https://fitness-my-gym.vercel.app/',
      icon: <FaDumbbell className="text-warning fs-3" />,
      glow: 'rgba(255, 193, 7, 0.3)',
      tag: 'Health & Fitness'
    },
    {
      title: 'Remasco Group',
      category: 'موقع شركة تجارية/صناعية',
      desc: 'الموقع الرسمي لشركة ريماسكو جروب، مصمم بأعلى معايير الاحترافية ليعكس قوة الشركة الهندسية والتجارية.',
      link: 'https://remascogroup.com/',
      icon: <FaBuilding className="text-success fs-3" />,
      glow: 'rgba(25, 135, 84, 0.3)',
      tag: 'Corporate'
    }
  ];

  // إعدادات الأنيميشن المتتابع
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section className="bg-black text-white py-5 position-relative overflow-hidden border-top border-secondary border-opacity-25" id="projects">
      
      {/* Background Decorative Glow */}
      <div 
        className="position-absolute top-50 start-50 translate-middle rounded-circle opacity-10 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(13,110,253,0.4) 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}
      />

      <div className="container py-4 position-relative">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-black bg-opacity-50 border border-primary border-opacity-50 text-primary mb-3 shadow"
            style={{ backdropFilter: 'blur(8px)' }}
          >
            <FaProjectDiagram size={14} />
            <span className="small fw-semibold">معرض أعمالنا المتميزة</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-5 fw-bold text-white mb-3"
          >
            نخبة من أحدث <span className="text-primary">مشاريعنا الناجحة</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white-50 lead fs-6 mx-auto"
            style={{ maxWidth: '650px' }}
          >
            استكشف نماذج من أعمالنا التي تم تنفيذها بأحدث التقنيات وأعلى معايير الأداء لتناسب تطلعات عملائنا.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row g-4"
        >
          {projectsList.map((project, index) => {
            // رسالة واتساب مخصصة عند الرغبة في طلب مشروع شبيه
            const waMsg = encodeURIComponent(`مرحباً Oscar، أعجبني مشروع (${project.title}) وأرغب في تنفيذ مشروع مشابه له.`);
            const waLink = `https://wa.me/${whatsappNumber}?text=${waMsg}`;

            return (
              <motion.div key={index} variants={cardVariants} className="col-lg-6">
                
                {/* Project Card */}
                <motion.div 
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-4 bg-dark bg-opacity-50 border border-secondary border-opacity-25 h-100 d-flex flex-column justify-content-between shadow-lg position-relative overflow-hidden"
                  style={{ backdropFilter: 'blur(12px)' }}
                >
                  
                  {/* Subtle Glow inside card on hover */}
                  <div 
                    className="position-absolute top-0 end-0 rounded-circle opacity-0 transition-opacity pointer-events-none"
                    style={{
                      width: '200px',
                      height: '200px',
                      background: project.glow,
                      filter: 'blur(60px)',
                    }}
                  />

                  <div>
                    {/* Top Meta info */}
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="p-3 bg-black bg-opacity-50 rounded-3 border border-secondary border-opacity-25 shadow-sm">
                        {project.icon}
                      </div>
                      <span className="badge bg-secondary bg-opacity-25 text-white-50 px-3 py-2 rounded-pill small font-monospace">
                        {project.tag}
                      </span>
                    </div>

                    {/* Category & Title */}
                    <div className="small text-primary fw-semibold mb-1">{project.category}</div>
                    <h3 className="fw-bold fs-3 text-white mb-3">{project.title}</h3>

                    {/* Description */}
                    <p className="text-white-50 small lh-base mb-4">{project.desc}</p>
                  </div>

                  {/* Actions Buttons (Live Preview & Order via WhatsApp) */}
                  <div className="d-flex flex-column flex-sm-row gap-2 mt-auto">
                    
                    {/* Live Preview Button */}
                    <motion.a 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light border-secondary border-opacity-50 py-2 px-3 rounded-pill fw-semibold text-white d-flex align-items-center justify-content-center gap-2 flex-grow-1 small"
                    >
                      <FaExternalLinkAlt size={13} />
                      <span>معاينة الموقع حي</span>
                    </motion.a>

                    {/* Order similar via WhatsApp */}
                    <motion.a 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success bg-gradient border-0 py-2 px-3 rounded-pill fw-semibold text-white d-flex align-items-center justify-content-center gap-2 flex-grow-1 small shadow-sm"
                    >
                      <FaWhatsapp size={16} />
                      <span>اطلب مشروع مشابه</span>
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

export default Projects;