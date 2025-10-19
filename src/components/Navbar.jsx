function Navbar() {
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 mt-2 bg-white/90 backdrop-blur-sm rounded-full px-24 py-5 shadow-lg flex z-[1000] transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-2xl">
      <ul className="flex items-center gap-12 list-none">
        <li>
          <a
            href="#"
            className="text-black font-medium transition-colors duration-700 hover:text-blue-600 hover:font-semibold"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black font-medium transition-colors duration-700 hover:text-blue-600 hover:font-semibold"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black font-medium transition-colors duration-700 hover:text-blue-600 hover:font-semibold"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black font-medium transition-colors duration-700 hover:text-blue-600 hover:font-semibold"
          >
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
