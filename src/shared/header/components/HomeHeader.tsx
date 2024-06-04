/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, ReactElement } from 'react';
import { useAppSelector } from 'src/store/store';
import { IReduxState } from 'src/store/store.interface';

import { IHomeHeaderProps } from '../interfaces/header.interface';

const HomeHeader: FC<IHomeHeaderProps> = (): ReactElement => {
  const authUser = useAppSelector((state: IReduxState) => state.authUser);
  const logout = useAppSelector((state: IReduxState) => state.logout);

  return (
    <>
      <header>header</header>
    </>
  );
};

export default HomeHeader;
