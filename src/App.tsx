import React from 'react';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import SessionScheduling from './pages/SessionScheduling';
import VideoPortal from './pages/VideoPortal';
import Resources from './pages/Resources';
import Messages from './pages/Messages';
import Settings from './pages/Settings';

type Page = 'dashboard' | 'sessions' | 'video' | 'resources' | 'messages' | 'settings';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} />;
      case 'sessions':
        return <SessionScheduling />;
      case 'video':
        return <VideoPortal />;
      case 'resources':
        return <Resources />;
      case 'messages':
        return <Messages />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header currentPage={currentPage} />
        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-white">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;