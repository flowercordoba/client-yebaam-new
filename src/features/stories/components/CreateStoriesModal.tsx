/* eslint-disable prettier/prettier */
import React, { useState, ChangeEvent } from 'react';
import { useAppSelector } from 'src/store/store';
import { IReduxState } from 'src/store/store.interface';
import activityImg from 'src/assets/images/activity.png';
import photoVideoImg from 'src/assets/images/image.png';

interface CreateStoriesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateStoriesModal: React.FC<CreateStoriesModalProps> = ({ isOpen, onClose }) => {
  const authUser = useAppSelector((state: IReduxState) => state.authUser);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedFile(null);
    setPreview(null);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Crear historia</h3>
          <button onClick={onClose}>
            <i className="fas fa-times text-gray-600"></i>
          </button>
        </div>
        <div className="mb-4">
          <div className="flex items-center space-x-4 mb-2">
            <img src={`${authUser.profilePicture}`} className="h-12 w-12 rounded-full object-cover" alt="Profile"/>
            <div>
              <p className="font-semibold">{authUser.username}</p>
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
            placeholder={`¿Qué estás pensando, ${authUser.username}?`}
          />
          {preview && (
            <div className="relative mb-4">
              <img src={preview} alt="Preview" className="w-24 h-24 object-cover rounded"/>
              <button onClick={removeImage} className="absolute top-1 right-1 bg-gray-800 bg-opacity-75 text-white rounded-full p-1">
                <i className="fas fa-times"></i>
              </button>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <ul className="upload-media">
              <li>
                <label htmlFor="file-upload" className="cursor-pointer flex items-center">
                  <i><img src={photoVideoImg} alt="Photo/Video" /></i>
                  <span>Photo/Video</span>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </li>
              <li>
                <a title="">
                  <i><img src={activityImg} alt="Feeling/Activity" /></i>
                  <span>Feeling/Activity</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex space-x-2">
            <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded" onClick={onClose}>
              Cancelar
            </button>
            <button className="bg-blue-600 text-white py-2 px-4 rounded">
              Compartir en historia
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStoriesModal;
