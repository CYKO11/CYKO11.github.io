import './App.css';
import './styles/Colours.css'

import NavBar from './components/NavBar';
import NavBarVertical from './components/NavBarVertical';
import ContentDisplay from './components/ContentDisplay';

function App() {
  return (
    <div className="App vh-100 d-flex flex-column Dark-Background">
       <NavBar/>
       <div class="container-fluid">
          <NavBarVertical/>
          <ContentDisplay/>
       </div>
    </div>
  );
}

export default App;
