/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import CreateStoriesModal from './CreateStoriesModal';

const CreateStories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className="w-1/3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg p-8 text-center text-white cursor-pointer">
        <i className="icofont-font text-4xl"></i>
        <p className="mt-4 text-lg font-semibold">Crear una historia de texto</p>
      </button>
      <CreateStoriesModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default CreateStories;
