import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="border-8 border-gray-50 bg-gray-50 rounded-3xl">
      <ul>
        <li>
          <Link to="./simple-component" className="hover:bg-gray-400 ">
            Simple
          </Link>
        </li>
        <li>
          <Link to="./stateful-component" className="hover:bg-gray-400">
            Stateful
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
