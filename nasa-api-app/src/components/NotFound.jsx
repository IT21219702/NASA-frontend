const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold sm:text-6xl">404</h1>
        <p className="text-lg sm:text-xl">Page Not Found</p>
        <p className="mt-4">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
