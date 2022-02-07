import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <img src={logo} alt="marvel-logo" />

      <div className="header__options">
        <p onClick={() => navigate("/")}>Home</p>
        <p onClick={() => navigate("/characters")}>Characters</p>
        <p onClick={() => navigate("/events")}>Events</p>
        <p onClick={() => navigate("/series")}>Series</p>
        <p onClick={() => navigate("/comics")} style={{ marginRight: 10 }}>Comics</p>
      </div>
    </div>
  );
}

export default Header;
