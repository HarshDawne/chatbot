
import React from 'react';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    // This App component acts as a host environment for the widget.
    // In a real deployment, you would embed <ChatWidget /> inside any container on your site.
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-8">
      {/* Widget Container - The widget fills this container */}
      {/* You can resize this div to test the widget's responsiveness */}
      <div className="relative w-full max-w-[450px] h-[700px] max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden ring-8 ring-black/5">
        <ChatWidget />
      </div>
    </div>
  );
};

export default App;
