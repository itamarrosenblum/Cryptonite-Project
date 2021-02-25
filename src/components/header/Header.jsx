import logo from './logo.gif';
import './Header.css';

const Header = () => {
    return(
      <header>
        <img className="logo" src={logo} alt="Logo" />
        <h1>Cryptonite<span>.com</span></h1>
      </header>
    );
}
export default Header;