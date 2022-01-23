import { Link, } from "react-router-dom";

// const IsActive = (history, path) => {
//     if (history.location.pathname === path) return {
//         color:"#ff9900"
//     }
//     else return {color:"ffffff"}
// }
const Menu = () => {
 
  return (
    <div>
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <Link to="/" className="nav-link" >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signin" className="nav-link">
            Sign In
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
