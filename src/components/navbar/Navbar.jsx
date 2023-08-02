import {
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css"
import { useNavigate } from "react-router-dom";

function Navbar () {

  const navigate = useNavigate();
   const userName = (localStorage.getItem("nameData"));
  //  console.log(userName);
  const handleSign = () => {
    navigate("/register");
  };
  const handleLogin = () => {
    navigate("/register");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Make <span className="my">My</span> Trip</span>
        <div className="navItems">
          <button className="navButton" onClick={handleSign}>Register</button>
          <button className="navButton" onClick={handleLogin}>Login</button>
          {/* <FontAwesomeIcon icon={faUser} /> */}
          {/* <div className="user">{userName}</div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar