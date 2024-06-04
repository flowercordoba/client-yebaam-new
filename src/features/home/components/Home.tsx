import { FC, ReactElement } from 'react';
import CreatePostHome from 'src/features/post/components/CreatePostHome';
import ListStories from 'src/features/stories/components/ListStories';
import SidebarLeft from 'src/shared/sidebar/SidebarLeft';
import SidebarRight from 'src/shared/sidebar/SidebarRight';

import ItemsMenuHeaderHome from './ItemsMenuHeaderHome';
import ChatRooms from 'src/features/rooms/components/ListGridRoom';
// import { ISellerGig } from 'src/features/gigs/interfaces/gig.interface';
// import {
//   useGetGigsByCategoryQuery,
//   useGetTopRatedGigsByCategoryQuery
// } from 'src/features/gigs/services/gigs.service';
// import { ISellerDocument } from 'src/features/sellers/interfaces/seller.interface';
// import { useGetRandomSellersQuery } from 'src/features/sellers/services/seller.service';
// import TopGigsView from 'src/shared/gigs/TopGigsView';
// import { lowerCase } from 'src/shared/utils/utils.service';
// import { socketService } from 'src/sockets/socket.service';
// import { useAppSelector } from 'src/store/store';
// import { IReduxState } from 'src/store/store.interface';

// import FeaturedExperts from './FeaturedExperts';
// import HomeGigsView from './HomeGigsView';
// import HomeSlider from './HomeSlider';

const Home: FC = (): ReactElement => {
  // const authUser = useAppSelector((state: IReduxState) => state.authUser);
  // const { data, isSuccess } = useGetRandomSellersQuery('10');
  // const { data: categoryData, isSuccess: isCategorySuccess } = useGetGigsByCategoryQuery(`${authUser.username}`);
  // const { data: topGigsData, isSuccess: isTopGigsSuccess } = useGetTopRatedGigsByCategoryQuery(`${authUser.username}`);
  // // const { data: sellerData, isSuccess: isSellerDataSuccess } = useGetMoreGigsLikeThisQuery('6559d9a3620b7db8c1fb7f01');
  // let sellers: ISellerDocument[] = [];
  // let categoryGigs: ISellerGig[] = [];
  // let topGigs: ISellerGig[] = [];

  // if (isSuccess) {
  //   sellers = data.sellers as ISellerDocument[];
  // }

  // if (isCategorySuccess) {
  //   categoryGigs = categoryData.gigs as ISellerGig[];
  // }

  // if (isTopGigsSuccess) {
  //   topGigs = topGigsData.gigs as ISellerGig[];
  // }

  // if (isSellerDataSuccess) {
  //   topGigs = sellerData.gigs as ISellerGig[];
  // }

  // useEffect(() => {
  //   socketService.setupSocketConnection();
  // }, []);

  return (
    // <MenuNavbar />
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
                <ListStories />
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
