import { motion } from 'framer-motion';
import { timelineData } from '@/data/timeline-data';

const TimelinePage = () => {
  return (
    <div className="bg-bg-primary">
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-900/10 to-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">E-Learning Timeline</h1>
            <p className="text-lg text-text-secondary mb-8">
              Explore the evolution of e-learning technology from its earliest beginnings to the present day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Placeholder for actual timeline component */}
            <div className="bg-bg-secondary p-8 rounded-xl shadow-sm border border-border-light">
              <p className="text-text-secondary text-center mb-8">
                This is where the interactive timeline will be rendered.
              </p>
              
              {/* Simple placeholder timeline */}
              <div className="space-y-8">
                {timelineData.map((item) => (
                  <motion.div
                    key={item.id}
                    className="bg-bg-primary p-6 rounded-lg border border-border-light shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start">
                      <div className="md:w-1/4 mb-4 md:mb-0">
                        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-md text-sm font-medium">
                          {item.date}
                        </span>
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="text-xl font-semibold mb-2 text-text-primary">{item.title}</h3>
                        <p className="text-text-secondary mb-4">{item.description}</p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {item.tags.map((tag, index) => (
                            <span 
                              key={index}
                              className="bg-bg-tertiary px-2 py-1 rounded-md text-xs text-text-secondary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-text-secondary">
                  Note: In a future update, this will be replaced with a more interactive timeline component.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimelinePage;
