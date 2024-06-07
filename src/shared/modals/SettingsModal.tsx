/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useEffect, useRef } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import ProfileInHeaderModalCoverImage from 'src/features/user/components/profile/ProfileInHeaderModalCoverImage';
import { useAppDispatch } from 'src/store/store';

import { applicationLogout } from '../utils/utils.service';


interface SettingsModalProps {
  isVisible: boolean;
  onProfileClick: () => void;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isVisible, onProfileClick, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };
  const onLogout = (): void => {
    // if (setIsDropdownOpen) {
    //   setIsDropdownOpen(false);
    // }
    applicationLogout(dispatch, navigate);
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div ref={modalRef} className="fixed top-16 right-0 w-80 h-96 bg-white shadow-lg rounded-lg z-40">
      <div className="p-4">
        <button onClick={onProfileClick} className="flex items-center w-full py-2">
          <ProfileInHeaderModalCoverImage />
        </button>
        <hr className="my-2" />
        <ul className='cursor-pointer'>
          <li className="flex items-center py-2">
            <i className="fas fa-cog"></i>
            <span className="ml-2">Configuración y privacidad</span>
          </li>
          <li className="flex items-center py-2">
            <i className="fas fa-question-circle"></i>
            <span className="ml-2">Ayuda y soporte técnico</span>
          </li>
          <li className="flex items-center py-2 cursor-pointer">
            <i className="fas fa-sign-out-alt"></i>
            <span onClick={() => onLogout()} className="ml-2">Cerrar sesión</span>
      
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SettingsModal;
