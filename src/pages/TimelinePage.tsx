import { motion } from 'framer-motion';
import { timelineData } from '@/data/timeline-data';
import Timeline from '@/components/TimeLine';

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
              <motion.div
                className="min-h-[600px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Timeline items={timelineData} />
              </motion.div>
    </div>
  );
};

export default TimelinePage;
