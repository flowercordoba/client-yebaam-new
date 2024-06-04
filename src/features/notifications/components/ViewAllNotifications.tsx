import React from 'react';

interface ViewAllNotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ViewAllNotificationsModal: React.FC<ViewAllNotificationsModalProps> = ({ isOpen, onClose }) => {
  const notifications = [
    {
      id: 1,
      message: 'Tenemos novedades sobre tu reporte. Ve al buzón de ayuda para obtener más información.',
      time: '3 d',
      userImage: 'https://via.placeholder.com/40',
    },
    {
      id: 2,
      message: 'Conseguiste una insignia de fan destacado como uno de los seguidores de Sin Libreto que más...',
      time: '6 d',
      userImage: 'https://via.placeholder.com/40',
    },
    {
      id: 3,
      message: 'A Eva Paez y Juan David les gusta tu comentario: "Muy bueno!"',
      time: '1 sem',
      userImage: 'https://via.placeholder.com/40',
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex items-center justify-center">
      <div id="view-all-notifications-modal" className="bg-white p-4 rounded shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Todas las Notificaciones</h3>
          <button onClick={onClose}>
            <i className="fas fa-times text-gray-600"></i>
          </button>
        </div>
        <div className="space-y-4">
          {notifications.map(notification => (
            <div key={notification.id} className="flex items-start mb-4">
              <div className="flex-shrink-0">
                <img src={notification.userImage} alt="User" className="w-10 h-10 rounded-full mr-4" />
              </div>
              <div>
                <p className="text-sm">{notification.message}</p>
                <p className="text-xs text-gray-500">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewAllNotificationsModal;
