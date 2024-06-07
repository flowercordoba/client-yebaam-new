/* eslint-disable prettier/prettier */
import { FC, ReactElement } from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { applicationLogout } from 'src/shared/utils/utils.service';
import { useAppDispatch } from 'src/store/store';

import { IHomeHeaderProps } from '../interfaces/header.interface';
import { updateCategoryContainer } from '../reducers/category.reducer';
import { updateHeader } from '../reducers/header.reducer';

const SettingsDropdown: FC<IHomeHeaderProps> = ({  setIsDropdownOpen }): ReactElement => {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();

  const onLogout = (): void => {
    if (setIsDropdownOpen) {
      setIsDropdownOpen(false);
    }
    applicationLogout(dispatch, navigate);
  };

  return (
    <div className="border-grey w-44 divide-y divide-gray-100 rounded border bg-white shadow-md">
      <ul className="text-gray-700s py-2 text-sm" aria-labelledby="avatarButton">
        <li>
          <Link
            to={''}
            className="block px-4 py-2 hover:text-sky-400"
            onClick={() => {
              if (setIsDropdownOpen) {
                setIsDropdownOpen(false);
              }
              dispatch(updateHeader('home'));
              dispatch(updateCategoryContainer(true));
            }}
          >
            Perfil
          </Link>
        </li>

      </ul>
      <div className="py-1">
        <div onClick={() => onLogout()} className="block px-4 py-2 text-sm hover:text-sky-400">
          Cerrar session
        </div>
      </div>
    </div>
  );
};

export default SettingsDropdown;
