import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { timelineData } from '@/data/timeline-data';

function App() {
  console.log('Timeline data loaded:', timelineData.length, 'items');
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="flex min-h-[calc(100vh-13rem)] items-center justify-center bg-gradient-to-br from-bg-secondary to-primary-900 dark:from-bg-secondary dark:to-primary-800">
          <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 p-4 rounded-lg shadow-lg">
            E-Timeline
          </h1>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
