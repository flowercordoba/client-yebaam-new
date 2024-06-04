import React, { useState } from 'react';
import SharePostModal from './SharePostModal';

import photoVideoImg from 'src/assets/images/image.png';
import activityImg from 'src/assets/images/activity.png';
import liveStreamImg from 'src/assets/images/live-stream.png';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ isOpen, onClose }) => {
  const [isSharePostOpen, setIsSharePostOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Crear publicación</h3>
          <button onClick={onClose}>
            <i className="fas fa-times text-gray-600"></i>
          </button>
        </div>
        <div className="mb-4">
          <div className="flex items-center space-x-4 mb-2">
            <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-full" />
            <div>
              <p className="font-semibold">Flower Moreno</p>
              <select className="border rounded p-1">
                <option>Público</option>
                <option>Amigos</option>
                <option>Solo yo</option>
              </select>
            </div>
          </div>
          <textarea
            className="w-full p-2 border rounded mb-4"
            rows={4}
            placeholder="¿Qué estás pensando, Flower?"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
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
          <div className="flex space-x-2">
            <button
              className="bg-gray-200 text-gray-600 py-2 px-4 rounded"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded"
              onClick={() => setIsSharePostOpen(true)}
            >
              Siguiente
            </button>
          </div>
        </div>
        {isSharePostOpen && <SharePostModal isOpen={isSharePostOpen} onClose={() => setIsSharePostOpen(false)} />}
      </div>
    </div>
  );
};

export default CreatePostModal;
