/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../../../store/store';

const ProfileInHeaderModalCoverImage: React.FC = () => {
  const navigate = useNavigate();
  const authUser = useAppSelector((state) => state.authUser);

  const profiles = [
    {
      name: 'GT Games',
      icon: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Reemplaza con la URL del icono de GT Games
    },
    {
      name: 'Thanatos',
      icon: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Reemplaza con la URL del icono de Thanatos
    }
  ];

  const handleImageClick = () => {
    if (authUser && authUser.uId) {
      console.log(`Navigating to /user/${authUser.uId}`);
      navigate(`/user/${authUser.uId}`);
    } else {
      console.error('authUser.uId is undefined');
    }
  };

  // <img src={`${authUser.profilePicture}`} className="h-12 w-12 rounded-full object-cover"/>
  // <div>
  //   <p className="font-semibold">{authUser.username}</p>
  return (
    <div className="w-full">
      <div className="flex items-center space-x-2 mb-2" onClick={handleImageClick}>
        <img
          src={`${authUser.profilePicture}`} className="h-12 w-12 rounded-full object-cover"
          alt={authUser.firstName}
        />
        <div>
          <h2 className="text-lg font-semibold">{authUser.username}</h2>
        </div>
      </div>
      <ul>
        {profiles.map((profile, index) => (
          <li key={index} className="flex items-center py-2">
            <img src={profile.icon} alt={profile.name} className="w-8 h-8 rounded-full mr-2" />
            <span>{profile.name}</span>
          </li>
        ))}
      </ul>
      <div
        className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow cursor-pointer text-center"
        onClick={() => navigate('/profiles')}
      >
        Ver todos los perfiles
      </div>
    </div>
  );
};

export default ProfileInHeaderModalCoverImage;
