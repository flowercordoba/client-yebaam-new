import React from 'react';
import storycard5 from 'src/assets/images/resources/story-card5.jpg';

import CreateStories from './CreateStories';

const ListStories = () => {
  return (
    <div className="story-card">
      <div className="story-wraper">
        <CreateStories />
      </div>
      <div className="story-wraper">
        <img src={storycard5} />
        <div className="users-dp">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHBlb3BsZXxlbnwwfHx8fDE2ODI3ODg2MzQ&ixlib=rb-4.0.3&q=80&w=400"
            alt=""
          />
        </div>
        <span>Tamana Bhatia</span>
      </div>
      <div className="story-wraper">
        <img
          src="https://images.unsplash.com/photo-1517260913999-7d7c5a2ab9f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHN0b3J5fGVufDB8fHx8MTY4Mjc4ODU4OQ&ixlib=rb-4.0.3&q=80&w=400"
          alt=""
        />
        <div className="users-dp">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHBlb3BsZXxlbnwwfHx8fDE2ODI3ODg2MzY&ixlib=rb-4.0.3&q=80&w=400"
            alt=""
          />
        </div>
        <span>Emily Caros</span>
      </div>
      <div className="story-wraper">
        <img
          src="https://images.unsplash.com/photo-1517260913999-7d7c5a2ab9f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHN0b3J5fGVufDB8fHx8MTY4Mjc4ODU4OQ&ixlib=rb-4.0.3&q=80&w=400"
          alt=""
        />
        <div className="users-dp">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBlb3BsZXxlbnwwfHx8fDE2ODI3ODg2Mzk&ixlib=rb-4.0.3&q=80&w=400"
            alt=""
          />
        </div>
        <span>Daniel Cardos</span>
      </div>
      <div className="story-wraper">
        <img
          src="https://images.unsplash.com/photo-1517260913999-7d7c5a2ab9f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHN0b3J5fGVufDB8fHx8MTY4Mjc4ODU4OQ&ixlib=rb-4.0.3&q=80&w=400"
          alt=""
        />
        <div className="users-dp">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHBlb3BsZXxlbnwwfHx8fDE2ODI3ODg2NDI&ixlib=rb-4.0.3&q=80&w=400"
            alt=""
          />
        </div>
        <span>Emma Watson</span>
      </div>
    </div>
  );
};

export default ListStories;
