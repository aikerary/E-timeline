import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="bg-bg-primary">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-primary-600/10 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-16">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-secondary bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              The Evolution of E-Learning
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Explore the fascinating journey of digital education through time, from its 
              early beginnings to the cutting-edge technologies of today that are shaping 
              the future of learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/timeline"
                className="px-8 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-text-secondary font-medium transition-colors"
              >
                Explore Timeline
              </a>
              <a 
                href="/about"
                className="px-8 py-3 rounded-lg bg-bg-secondary hover:bg-bg-tertiary text-text-primary border border-border-medium font-medium transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">Key Milestones in E-Learning</h2>
            <p className="text-text-secondary max-w-3xl mx-auto">
              Our interactive timeline highlights the technological advancements and pedagogical 
              innovations that have transformed how we learn in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-bg-primary p-6 rounded-xl shadow-sm border border-border-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Preview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">Interactive Historical Timeline</h2>
              <p className="text-text-secondary mb-6">
                Dive into our comprehensive timeline showcasing the evolution of e-learning through decades. 
                From early computer-based training systems to modern AI-driven personalized learning platforms, 
                explore how technology has transformed education.
              </p>
              <ul className="space-y-3 mb-6">
                {timelineFeatures.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-text-secondary">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <a 
                href="/timeline"
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
              >
                Explore the complete timeline
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-border-light">
                <img 
                  src="preview.png" 
                  alt="E-learning timeline preview" 
                  className="w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/800x500/3b82f6/FFFFFF?text=E-Learning+Timeline';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-white text-lg font-medium">Discover key technological milestones</p>
                    <p className="text-white text-sm">From 1960's PLATO system to today's AI-powered platforms</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-text-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative inline-block mb-8">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold"
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Discover the Future of Learning
              </motion.h2>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-primary-400"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
            <motion.p 
              className="text-lg opacity-90 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Join us on a journey through the digital transformation of education.
            </motion.p>
            <motion.a 
              href="/timeline"
              className="px-8 py-3 rounded-lg bg-primary-400 hover:bg-primary-500 text-text-secondary font-medium transition-colors inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Begin Your Journey
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Feature cards data
const features = [
  {
    title: 'Early Foundations',
    description: 'Explore the pioneering systems from the 1960s and 1970s that laid the groundwork for modern e-learning platforms.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3L1 9l11 6l11 -6l-11 -6" />
        <path d="M1 9v6l11 6l11 -6v-6" />
        <path d="M10 14.5v4.5" />
        <path d="M14 14.5v4.5" />
        <path d="M1 9l11 6l11 -6" />
      </svg>
    ),
  },
  {
    title: 'Digital Revolution',
    description: 'Discover how personal computers and the internet transformed education in the 1980s and 1990s.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Modern Innovations',
    description: 'Explore the latest advancements in AI, VR, and personalized learning that are reshaping education today.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.7 2.84L21 8" />
        <path d="M21 3v5h-5" />
      </svg>
    ),
  }
];

// Timeline features list
const timelineFeatures = [
  "Interactive data points spanning over six decades",
  "Rich multimedia content with historical images and videos",
  "Detailed descriptions of key technological advancements",
  "Perspectives on changing educational methodologies",
  "Impact analysis of e-learning on global education"
];

export default Home;
