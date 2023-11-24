import logo from "../assets/react.svg";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
        <header className="bg-red-500 flex place-content-between">
        <img src={logo} alt="logo-react" />
        <NavBar />
        
      </header>
    </>
  );
};

export default Header;
