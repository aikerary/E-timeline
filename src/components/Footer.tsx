const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* About section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-text-primary mb-4">E-Timeline</h3>
            <p className="text-text-secondary text-sm mb-4">
              Exploring the evolution of e-learning from its inception to the present day through an interactive timeline experience.
            </p>
          </div>

          {/* Contact/Social */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://twitter.com" aria-label="Twitter" className="text-text-secondary hover:text-primary-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://github.com" aria-label="GitHub" className="text-text-secondary hover:text-primary-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-text-secondary hover:text-primary-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
            <p className="text-text-secondary text-sm">
              Contact us at:<br />
              <a href="mailto:info@e-timeline.com" className="text-primary-600 hover:underline">
                info@e-timeline.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar with copyright and links */}
        <div className="border-t border-border-light mt-10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-text-tertiary mb-4 md:mb-0">
            © {currentYear} E-Timeline. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-text-tertiary hover:text-primary-600 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-text-tertiary hover:text-primary-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
