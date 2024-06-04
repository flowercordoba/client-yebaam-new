import React, { useState } from 'react';
import photoVideoImg from 'src/assets/images/image.png';
import activityImg from 'src/assets/images/activity.png';
import liveStreamImg from 'src/assets/images/live-stream.png';
import CreatePostModal from '../modals/CreatePostModal';

const CreatePostHome: React.FC = () => {
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  return (
    <div className="main-wraper">
      <span className="new-title">Crear publicacion</span>
      <div className="new-post">
        <form method="post" onClick={() => setIsCreatePostOpen(true)}>
          <i className="icofont-pen-alt-1"></i>
          <input type="text" placeholder="Create New Post" />
        </form>
        <ul className="upload-media">
          <li>
            <a href="#" title="">
              <i><img src={photoVideoImg} alt="Photo/Video" /></i>
              <span>Photo/Video</span>
            </a>
          </li>
          <li>
            <a href="#" title="">
              <i><img src={activityImg} alt="Feeling/Activity" /></i>
              <span>Feeling/Activity</span>
            </a>
          </li>
          <li>
            <a href="live-stream.html" title="">
              <i><img src={liveStreamImg} alt="Live Stream" /></i>
              <span>Live Stream</span>
            </a>
          </li>
        </ul>
      </div>
      {isCreatePostOpen && <CreatePostModal isOpen={isCreatePostOpen} onClose={() => setIsCreatePostOpen(false)} />}
    </div>
  );
}

export default CreatePostHome;
