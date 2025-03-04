import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[var(--primary-900)]/10 to-[var(--bg-primary)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">About E-Timeline</h1>
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              An educational project dedicated to documenting and visualizing the rich history 
              and evolution of e-learning technologies and methodologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Purpose */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="prose prose-lg dark:prose-invert mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2>Project Purpose</h2>
              <p>
                E-Timeline was created to research and document the historical evolution of e-learning 
                technologies, methodologies, and approaches. By presenting this information in an interactive timeline, 
                we hope to provide educators, students, and researchers with a comprehensive understanding of how 
                digital education has transformed over time.
              </p>
              <p>
                This project aims to highlight the key milestones, innovations, and paradigm shifts that have 
                shaped e-learning, from its early computer-based training systems to today's sophisticated 
                AI-driven personalized learning platforms.
              </p>

              <h2>Our Approach</h2>
              <p>
                We've meticulously researched and organized information about significant developments in e-learning, 
                placing them within their historical context. Each entry in our timeline includes detailed 
                descriptions, references to primary sources, and analysis of the impact these developments had 
                on education and training.
              </p>
              <p>
                The interactive nature of our timeline allows users to explore this rich history at their own pace, 
                diving deeper into specific periods or technologies that interest them most.
              </p>

              <h2>Educational Value</h2>
              <p>
                E-Timeline serves as a valuable educational resource for:
              </p>
              <ul>
                <li>Students of educational technology and instructional design</li>
                <li>Educators interested in the historical context of digital learning tools</li>
                <li>Researchers examining trends and patterns in educational technology</li>
                <li>Anyone curious about how technology has transformed the way we learn</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Developer */}
      <section className="py-12 md:py-16 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-[var(--text-primary)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Meet the Developer
          </motion.h2>

          <motion.div 
            className="max-w-3xl mx-auto bg-[var(--bg-primary)] rounded-xl shadow-sm border border-[var(--border-light)] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  className="h-48 w-full object-cover md:h-full" 
                  src="https://avatars.githubusercontent.com/aikerary" 
                  alt="Aiker Acosta Cantillo"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/300x400/3b82f6/FFFFFF?text=Aiker+Acosta';
                  }}
                />
              </div>
              <div className="p-8 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-[var(--primary-600)] font-semibold">Developer</div>
                <h3 className="mt-1 text-2xl font-semibold leading-tight text-text-primary">Aiker Acosta Cantillo</h3>
                <p className="mt-2 text-text-secondary">
                  Computer Science student at Universidad del Norte in Barranquilla, Colombia. Passionate about 
                  educational technology and creating interactive learning experiences that bridge the gap between 
                  history and modern technology.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a 
                    href="https://github.com/aikerary" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 rounded-md bg-bg-secondary text-text-secondary hover:bg-bg-tertiary transition-colors text-sm"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.022A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.291 2.747-1.022 2.747-1.022.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/aiker-acosta-cantillo-03422422b/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 rounded-md bg-bg-secondary text-text-secondary hover:bg-bg-tertiary transition-colors text-sm"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a 
                    href="https://x.com/aikerary"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 rounded-md bg-bg-secondary text-text-secondary hover:bg-bg-tertiary transition-colors text-sm"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Acknowledgements */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-text-primary text-center">Acknowledgements</h2>
              <div className="prose dark:prose-invert mx-auto">
                <p>
                  I would like to express my gratitude to:
                </p>
                <ul>
                  <li>The faculty at Universidad del Norte for their guidance and support</li>
                  <li>Researchers and historians who have documented the evolution of e-learning</li>
                  <li>Open-source contributors who made the development tools for this project possible</li>
                  <li>Educational institutions that have pioneered e-learning technologies</li>
                </ul>
                <p>
                  This project would not have been possible without the wealth of research and documentation on 
                  e-learning history that has been published by educational technology historians and researchers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
