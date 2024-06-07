/* eslint-disable prettier/prettier */
import { IReduxState } from 'src/store/store.interface';

import { useAppSelector } from '../../../../store/store';

interface AvatarHeaderUserProps {
  onClick: () => void;
}

const AvatarHeaderUser: React.FC<AvatarHeaderUserProps> = ({ onClick }) => {
  const authUser = useAppSelector((state: IReduxState) => state.authUser);


  return (
    <div className="relative" onClick={onClick}>
      <a>
        <img
          src={`${authUser.profilePicture}`} className="h-12 w-12 rounded-full object-cover cursor-pointer"
          alt={authUser.username || ''}
        />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
      </a>
    </div>
  );
};

export default AvatarHeaderUser;
