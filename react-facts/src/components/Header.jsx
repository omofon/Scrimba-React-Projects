import ReactLogo from "../assets/react.svg";
import './styles/Header.css'

function Header() {
  return (
    <nav className="header">
      <img src={ReactLogo} alt="React Logo" />
      <span>ReactFacts</span>
    </nav>
  );
}

export default Header;
