import logo from '../logo.svg';
import '../styles/header.css'

function Header() {
    return (
        <div className="header">
            <img src={logo} className="Logo" alt="logo" />
        </div>
    );
}

export default Header