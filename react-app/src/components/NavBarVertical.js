import '../styles/NavBarVertical.css'
import '../animations/Rotate.css'
import '../styles/Colours.css'

function NavBarVertical() {
    return (
        <nav class="NavBar-Vertical rounded-pill Dark-NavBar">
            <button type="button" class="btn btn-primary NavBar-Button-Vertical rounded-pill">A1</button>
            <button type="button" class="btn btn-primary NavBar-Button-Vertical rounded-pill">A2</button>
            <button type="button" class="btn btn-primary NavBar-Button-Vertical rounded-pill">A3</button>
            <button type="button" class="btn btn-primary NavBar-Button-Vertical rounded-pill">A4</button>
            <button type="button" class="btn btn-primary NavBar-Button-Vertical rounded-pill">A5</button>
            <button type="button" class="btn btn-primary NavBar-Button-Vertical rounded-pill">A6</button>
        </nav>
    );
}

export default  NavBarVertical