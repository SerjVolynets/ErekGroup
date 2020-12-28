import logo from "./logo.svg";
import "./App.css";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <div className="headerInfoContainer">
          <div className="headerContainer">
            <div className="headerElementStyle">
              <PhoneIphoneIcon /> <p>+8 800 555 34 55</p>
            </div>
            <div className="headerElementStyle">
              <MailOutlineIcon /> <p>erek.group@gmail.com</p>
            </div>
            <div>EREK GROUP</div>
          </div>
          <div>
            <ShoppingBasketIcon />
          </div>
        </div>
      </header>
      <div>content</div>
    </div>
  );
}

export default App;
