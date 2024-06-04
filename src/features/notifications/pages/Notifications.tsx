import React, { useEffect, useState } from 'react';

import AllNotifications from '../components/AllNotifications';
import UnreadNotifications from '../components/UnreadNotifications';
import ViewAllNotificationsModal from '../components/ViewAllNotifications';

interface NotificationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Notifications: React.FC<NotificationProps> = ({ isOpen, onClose }) => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const modal = document.getElementById('notifications-modal');
      if (modal && !modal.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex items-center justify-center">
        <div id="notifications-modal" className="bg-white p-4 rounded shadow-lg w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Notificaciones</h3>
            <button onClick={onClose}>
              <i className="fas fa-times text-gray-600"></i>
            </button>
          </div>
          <div className="flex justify-between mb-4">
            <button
              className={`text-gray-600 ${selectedTab === 'all' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
              onClick={() => setSelectedTab('all')}
            >
              Todas
            </button>
            <button
              className={`text-gray-600 ${selectedTab === 'unread' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
              onClick={() => setSelectedTab('unread')}
            >
              No leídas
            </button>
          </div>
          <div>
            {selectedTab === 'all' && <AllNotifications />}
            {selectedTab === 'unread' && <UnreadNotifications />}
          </div>
          <div className="text-center mt-4">
            <button
              className="text-blue-600"
              onClick={() => {
                setIsViewAllOpen(true);
                onClose();
              }}
            >
              Ver todas
            </button>
          </div>
        </div>
      </div>
      {isViewAllOpen && <ViewAllNotificationsModal isOpen={isViewAllOpen} onClose={() => setIsViewAllOpen(false)} />}
    </>
  );
};

export default Notifications;
