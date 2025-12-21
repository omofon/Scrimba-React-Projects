import ReactLogo from "../assets/react.svg";
import './styles/Header.css'

function Header() {
  return (
    <nav className="header">
      <img src={ReactLogo} alt="React Logo" />
      <h1>React</h1>
    </nav>
  );
}

export default Header;
