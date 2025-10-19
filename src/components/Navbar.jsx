import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100); 
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 mt-2 bg-white/90 backdrop-blur-sm rounded-full px-24 py-5 shadow-lg flex z-[1000] transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-2xl">
      <ul className="flex items-center gap-12 list-none">
        <li>
          <Link
            to="/"
            className="text-black font-medium transition-colors duration-700 hover:text-blue-600 hover:font-semibold"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-black font-medium transition-colors duration-700 hover:text-blue-600 hover:font-semibold"
          >
            About
          </Link>
        </li>
        <li>
          <button
            onClick={() => handleScrollTo("projects")}
            className="text-black font-medium transition-colors duration-700 hover:text-blue-600 hover:font-semibold"
          >
            Projects
          </button>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-black font-medium transition-colors duration-700 hover:text-blue-600 hover:font-semibold"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
