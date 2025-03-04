import { timelineData } from '@/data/timeline-data';

function App() {
  console.log('Timeline data loaded:', timelineData.length, 'items');
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 p-4 rounded-lg shadow-lg animate-pulse">
        Hello World
      </h1>
    </div>
  );
}

export default App;
