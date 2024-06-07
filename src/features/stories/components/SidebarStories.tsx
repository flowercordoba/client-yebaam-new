// src/components/SidebarStories.tsx
import React from 'react';

const SidebarStories = () => {
  return (
    <div className="w-1/4 p-4 bg-white border-r h-screen">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="User"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="text-lg font-semibold">Flower Moreno</p>
        </div>
      </div>
      <div>
        <button className="flex items-center p-2 space-x-2 w-full text-left hover:bg-gray-100 rounded">
          <span>Configuración</span>
        </button>
      </div>
    </div>
  );
};

export default SidebarStories;
