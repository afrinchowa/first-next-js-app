const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} My Site. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
          <div className="mt-4">
            <p className="text-xs text-gray-400">Designed with ❤️ using Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  