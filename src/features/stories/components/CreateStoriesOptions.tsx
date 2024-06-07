// src/components/CreateStoriesOptions.tsx

const CreateStoriesOptions = () => {
  return (
    <div className="w-3/4 p-8 flex justify-center space-x-8">
      <div className="w-1/3 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg p-8 text-center text-white cursor-pointer">
        <i className="icofont-image text-4xl"></i>
        <p className="mt-4 text-lg font-semibold">Crear una historia con foto</p>
      </div>
      <div className="w-1/3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg p-8 text-center text-white cursor-pointer">
        <i className="icofont-font text-4xl"></i>
        <p className="mt-4 text-lg font-semibold">Crear una historia de texto</p>
      </div>
    </div>
  );
};

export default CreateStoriesOptions;
