import React from 'react';

interface SharePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SharePostModal: React.FC<SharePostModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <button onClick={onClose}>
            <i className="fas fa-arrow-left text-gray-600"></i>
          </button>
          <h3 className="font-semibold text-lg">Publicar en</h3>
          <button onClick={onClose}>
            <i className="fas fa-times text-gray-600"></i>
          </button>
        </div>
        <div className="mb-4">
          <div className="flex items-center space-x-4 mb-2">
            <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-full" />
            <div>
              <p className="font-semibold">Flower Moreno</p>
              <p className="text-gray-600">362 amigos</p>
            </div>
          </div>
          <div className="border-t border-b py-4 mb-4">
            <p>¿Compartir en tus páginas?</p>
            <div className="flex items-center space-x-4">
              <input type="checkbox" />
              <p>Thanatos (0 seguidores)</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            className="bg-gray-200 text-gray-600 py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded"
            onClick={onClose}
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharePostModal;
