import React from 'react';

const UnreadNotifications: React.FC = () => {
  const notifications = [
    {
      id: 1,
      message: 'Tenemos novedades sobre tu reporte. Ve al buzón de ayuda para obtener más información.',
      time: '3 d',
      read: false,
      userImage: 'https://via.placeholder.com/40',
    },
    {
      id: 2,
      message: 'Conseguiste una insignia de fan destacado como uno de los seguidores de Sin Libreto que más...',
      time: '6 d',
      read: false,
      userImage: 'https://via.placeholder.com/40',
    },
  ];

  return (
    <div>
      <h4 className="text-gray-600 text-sm mb-2">No leídas</h4>
      {notifications.map(notification => (
        <div key={notification.id} className="flex items-start mb-4">
          <div className="flex-shrink-0">
            <img src={notification.userImage} alt="User" className="w-10 h-10 rounded-full mr-4" />
          </div>
          <div>
            <p className="text-sm">{notification.message}</p>
            <p className="text-xs text-gray-500">{notification.time}</p>
          </div>
          {!notification.read && <div className="ml-auto bg-blue-600 w-2 h-2 rounded-full"></div>}
        </div>
      ))}
    </div>
  );
};

export default UnreadNotifications;
