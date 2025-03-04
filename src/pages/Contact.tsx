import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="bg-[var(--bg-primary)]">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-b from-[var(--primary-900)]/10 to-[var(--bg-primary)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">Contact Me</h1>
            <p className="text-[var(--text-secondary)]">
              Have questions about the E-Timeline project or want to collaborate? Get in touch!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Contact Info Card */}
            <motion.div 
              className="bg-[var(--bg-secondary)] p-8 rounded-lg border border-[var(--border-light)] shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-8 text-[var(--text-primary)] text-center">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--primary-100)] text-[var(--primary-700)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-text-primary">Email</p>
                    <a href="mailto:aikerary@proton.me" className="text-text-secondary hover:text-primary-600">
                      aikerary@proton.me
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-text-primary">Phone</p>
                    <p className="text-text-secondary flex items-center">
                      <img 
                        src="https://flagcdn.com/w20/co.png" 
                        width="20" 
                        alt="Colombia flag"
                        className="inline-block mr-2"
                      />
                      +57 3012967865
                    </p>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-text-primary">Location</p>
                    <p className="text-text-secondary">Universidad del Norte</p>
                    <p className="text-text-secondary">Barranquilla, Colombia</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border-light my-6"></div>
                
                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-medium text-text-primary mb-4 text-center">Connect With Me</h3>
                  <div className="flex justify-center space-x-6">
                    <a 
                      href="https://github.com/aikerary" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-bg-tertiary text-text-secondary hover:text-primary-600 hover:bg-primary-50 transition-colors"
                      aria-label="GitHub"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.022A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.291 2.747-1.022 2.747-1.022.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/aiker-acosta-cantillo-03422422b/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-bg-tertiary text-text-secondary hover:text-primary-600 hover:bg-primary-50 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a 
                      href="https://x.com/aikerary" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-bg-tertiary text-text-secondary hover:text-primary-600 hover:bg-primary-50 transition-colors"
                      aria-label="Twitter/X"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-6 text-text-primary">Find Me Here</h2>
            <motion.div 
              className="h-80 rounded-lg overflow-hidden border border-border-light shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <iframe
                title="Universidad del Norte, Barranquilla, Colombia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3419572302436!2d-74.85122772427112!3d11.019053489155394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d097e7744d3%3A0x43abb5457101ff60!2sUniversidad%20del%20Norte!5e0!3m2!1sen!2sus!4v1688930608029!5m2!1sen!2sus"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-8 md:py-12 bg-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-8 text-text-primary">Ready to Connect?</h2>
            <p className="text-text-secondary mb-6">
              Feel free to reach out through any of the contact methods above. 
              I'm always interested in discussing e-learning, educational technology, 
              or potential collaborations on this project.
            </p>
            <motion.div
              className="mt-8 inline-flex"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <a 
                href="mailto:aikerary@proton.me" 
                className="px-8 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors inline-flex items-center"
              >
                <svg className="mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email Me
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;