import "./App.css";
import Header from "./components/header/header";
import MenuCatalog from "./components/menuCatalog/menuCatalog";
import toolsImg from "./img/tools.jpg";
import mockedPers from './img/mockedPers.png';
import { YMaps, Map, Placemark } from "react-yandex-maps";
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"
import Main from './containers/main/main'
import Catalog from './containers/catalog/catalog'
function App() {
  return (
    <div>
         <Switch>
            <Route path='/main' component={Main} />
            <Route path='/catalog' component={Catalog} />
            <Redirect from='/' to='/main'/>
          </Switch>
    </div>

  );
}

export default App;
