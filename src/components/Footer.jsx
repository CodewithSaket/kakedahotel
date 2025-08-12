const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-6">
        <h1 className="text-xl font-semibold text-white">
          Thank you for visiting <span className="text-yellow-400">Diego Hotels</span>
        </h1>

        <nav>
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            <li className="hover:text-white transition-colors duration-200 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white transition-colors duration-200 cursor-pointer">Terms of Service</li>
            <li className="hover:text-white transition-colors duration-200 cursor-pointer">Contact Us</li>
            <li className="hover:text-white transition-colors duration-200 cursor-pointer">Careers</li>
            <li className="hover:text-white transition-colors duration-200 cursor-pointer">Help Center</li>
          </ul>
        </nav>

        <div className="text-xs text-gray-500">
          © {new Date().getFullYear()} Diego Hotels. All rights reserved. <br />
                 Made with ❤️ by Saket Raj
        </div>
      </div>
    </footer>
  );
};

export default Footer;
