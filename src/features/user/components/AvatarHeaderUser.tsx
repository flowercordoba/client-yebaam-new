import React from 'react';
import { useAppSelector } from '../../../store/store';

interface AvatarHeaderUserProps {
  onClick: () => void;
}

const AvatarHeaderUser: React.FC<AvatarHeaderUserProps> = ({ onClick }) => {
  const authUser = useAppSelector((state) => state.authUser);

  console.log('header avatar ',authUser)

  return (
    <div className="relative" onClick={onClick}>
      <a>
        <img
          src={authUser.profilePicture || 'https://source.unsplash.com/random/32x32?user'}
          alt={authUser.firstName || 'Usuario'}
          className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
        />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
      </a>
    </div>
  );
};

export default AvatarHeaderUser;
