import { useState } from 'react';

import Notifications from '../pages/Notifications';

const NotificationIcon = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <>
      <a className="mesg-notif" href="#" title="Notifications" data-toggle="tooltip" onClick={() => setIsNotificationsOpen(true)}>
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-bell"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </i>
        {isNotificationsOpen && <Notifications isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />}
      </a>
      <span></span>
    </>
  );
};

export default NotificationIcon;
