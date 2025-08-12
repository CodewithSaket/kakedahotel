const Header = () => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-orange-500 to-blue-500 px-6 py-4">
      
      <div className="flex items-center space-x-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztQpiNlhlcNHkTSQMybW3reCrRTf9BlyXBw&s"
          alt="Diego symbol"
          className="w-12 h-12 object-cover rounded-full"
        />
        <h1 className="text-3xl font-bold text-yellow-400">Diego</h1>
      </div>

 
      <nav className="flex items-center space-x-8">
        <ul className="flex space-x-6 items-center cursor-pointer">
          <li className="text-black hover:text-white">Home</li>
          <li className="text-black hover:text-white">About</li>
          <li className="text-black hover:text-white">Contact</li>
          <li className="text-black hover:text-white">Services</li>
          <li className="text-black hover:text-white">Blog</li>
          <li className="text-black hover:text-white">Gallery</li>
        </ul>

        
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 outline-none w-40"
          />
          <button className="bg-orange-200 px-3 hover:bg-yellow-900 hover:text-white">
            🔍
          </button>
        </div>

       
        <div className="flex items-center space-x-4">
          <button className="bg-orange-200 text-black px-4 py-2 rounded hover:bg-yellow-900 hover:text-white">
            Book Now
          </button>
          <span className="text-black hover:text-white cursor-pointer">Login</span>
          <span className="text-black hover:text-white cursor-pointer">Sign Up</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
