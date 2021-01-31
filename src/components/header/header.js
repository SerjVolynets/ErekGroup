import "./header.css";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <header className="Header">
      <div className="headerInfoContainer">
        <div className="headerContainer">
          <div className="headerElementStyle">
            <PhoneIphoneIcon /> <p>+8 800 555 34 55</p>
          </div>
          <div className="headerElementStyle">
            <MailOutlineIcon /> <p>erek.group@gmail.com</p>
          </div>
        </div>

        <div className="logoStyle">
          <h1>EREK GROUP</h1>
        </div>

        <div className="headerElementStyle">
          <ShoppingBasketIcon />
        </div>
      </div>
    </header>
  );
}

export default Header;
