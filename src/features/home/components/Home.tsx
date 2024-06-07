/* eslint-disable prettier/prettier */
import { FC, ReactElement } from 'react';
import CreatePostHome from 'src/features/post/components/CreatePostHome';
import ChatRooms from 'src/features/rooms/components/ListGridRoom';
import CreateStories from 'src/features/stories/components/CreateStories';
import ListStories from 'src/features/stories/components/ListStories';
import SidebarLeft from 'src/shared/sidebar/SidebarLeft';
import SidebarRight from 'src/shared/sidebar/SidebarRight';

import ItemsMenuHeaderHome from './ItemsMenuHeaderHome';

const Home: FC = (): ReactElement => {
  return (
    <div className="gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row merged20" id="page-contents">
              <div className="col-lg-3">
                <SidebarLeft />
              </div>
              <div className="col-lg-6">
                <ItemsMenuHeaderHome />
                <div className="flex space-x-4">
                  <CreateStories />
                  <ListStories />
                </div>
                <CreatePostHome />
                <ChatRooms />
              </div>
              <div className="col-lg-3">
                <SidebarRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
