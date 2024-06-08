/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Transition } from '@headlessui/react';
import { filter, find } from 'lodash';
import { FC, ReactElement, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import SearchBtnHeader from 'src/features/search/SearchBtnHeader';
import useDetectOutsideClick from 'src/shared/hooks/useDetectOutsideClick';
import { IResponse } from 'src/shared/shared.interface';
import { showErrorToast, showSuccessToast } from 'src/shared/utils/utils.service';
import { useAppDispatch, useAppSelector } from 'src/store/store';
import { IReduxState } from 'src/store/store.interface';

import { IHomeHeaderProps } from '../interfaces/header.interface';
import { updateCategoryContainer } from '../reducers/category.reducer';
import { updateHeader } from '../reducers/header.reducer';

import SettingsModal from 'src/shared/modals/SettingsModal';
import AvatarHeaderUser from 'src/features/user/components/profile/AvatarHeaderUser';
import NotificationIcon from 'src/features/notifications/components/NotificationIcon';
import MenuHeader from './MenuHeader';
import NotificationsMessages from 'src/features/notifications/components/NotificationsMessages';

const HomeHeader: FC<IHomeHeaderProps> = ({ showCategoryContainer }): ReactElement => {
  const authUser = useAppSelector((state: IReduxState) => state.authUser);
  const seller = useAppSelector((state: IReduxState) => state.seller);
  const logout = useAppSelector((state: IReduxState) => state.logout);
  const buyer = useAppSelector((state: IReduxState) => state.buyer);
  const notification = useAppSelector((state: IReduxState) => state.notification);
  const settingsDropdownRef = useRef<HTMLDivElement | null>(null);
  const messageDropdownRef = useRef<HTMLDivElement | null>(null);
  const notificationDropdownRef = useRef<HTMLDivElement | null>(null);
  const orderDropdownRef = useRef<HTMLDivElement | null>(null);
  const navElement = useRef<HTMLDivElement | null>(null);
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [authUsername, setAuthUsername] = useState<string>('');
  const dispatch = useAppDispatch();

  const [isSettingsDropdown, setIsSettingsDropdown] = useDetectOutsideClick(settingsDropdownRef, false);
  const [isMessageDropdownOpen, setIsMessageDropdownOpen] = useDetectOutsideClick(messageDropdownRef, false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useDetectOutsideClick(notificationDropdownRef, false);
  const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useDetectOutsideClick(orderDropdownRef, false);
  const [isSettingsModalVisible, setSettingsModalVisible] = useState(false);

  const onResendEmail = async (): Promise<void> => {
    try {
      const result: IResponse = await resendEmail({ userId: authUser.id as number, email: `${authUser.email}` }).unwrap();
      dispatch(addAuthUser({ authInfo: result.user }));
      showSuccessToast('Email sent successfully.');
    } catch (error) {
      showErrorToast('Error sending email.');
    }
  };

  const toggleDropdown = (): void => {
    setIsSettingsDropdown(!isSettingsDropdown);
    setIsMessageDropdownOpen(false);
    setIsNotificationDropdownOpen(false);
    setIsOrderDropdownOpen(false);
  };

  const toggleMessageDropdown = (): void => {
    setIsMessageDropdownOpen(!isMessageDropdownOpen);
    setIsNotificationDropdownOpen(false);
    setIsOrderDropdownOpen(false);
    setIsSettingsDropdown(false);
    dispatch(updateHeader('home'));
    dispatch(updateCategoryContainer(true));
  };

  const toggleOrdersDropdown = (): void => {
    setIsOrderDropdownOpen(!isOrderDropdownOpen);
    setIsMessageDropdownOpen(false);
    setIsNotificationDropdownOpen(false);
    setIsSettingsDropdown(false);
    dispatch(updateHeader('home'));
    dispatch(updateCategoryContainer(true));
  };

  const toggleNotificationDropdown = (): void => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
    setIsOrderDropdownOpen(false);
    setIsMessageDropdownOpen(false);
    setIsSettingsDropdown(false);
    dispatch(updateHeader('home'));
    dispatch(updateCategoryContainer(true));
  };

  
  const handleAvatarClick = () => {
    setSettingsModalVisible(!isSettingsModalVisible);
  };

  const handleCloseSettingsModal = () => {
    setSettingsModalVisible(false);
  };

  return (
    <>
     <div className="topbar stick">
        <div className="logo">
          <span><Link to="/">yebaam</Link></span>
          

        </div>
        <SearchBtnHeader />
        <ul className="web-elements ">
          <li>
            <AvatarHeaderUser onClick={handleAvatarClick} />
          </li>
          <li></li>
          <NotificationsMessages />
          <li>
            <NotificationIcon />
          </li>
          <li>
            <MenuHeader />
          </li>
        </ul>
      </div>
      <SettingsModal
        isVisible={isSettingsModalVisible}
        onProfileClick={handleAvatarClick}
        onClose={handleCloseSettingsModal}
      />
    </>
  );
};

export default HomeHeader;
