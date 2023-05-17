import '../styles/NavBar.css'
import '../animations/Rotate.css'
import '../styles/Colours.css'

import logo from '../images/logo.svg'

function NavBar() {
    return (
        <nav class="NavBar rounded-pill my-2 mx-2 Dark-NavBar">
            <img src={logo} class="navbar-brand NavBar-Logo Rotate-Slow" href="/"/>
            <button type="button" class="btn btn-primary NavBar-Button rounded-pill">Experience</button>
            <button type="button" class="btn btn-primary NavBar-Button rounded-pill">Control</button>
            <button type="button" class="btn btn-primary NavBar-Button rounded-pill">Voice</button>
            <button type="button" class="btn btn-primary NavBar-Button rounded-pill">Info</button>
        </nav>
    );
}

export default NavBar