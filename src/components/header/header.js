import "./header.css";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="Header" style={props.background}>
      <div className="headerInfoContainer">
        <div className="headerContainer">
          <div className="headerElementStyle">
            <PhoneIphoneIcon style={props.textColor}/> <p style={props.textColor}>+8 800 555 34 55</p>
          </div>
          <div className="headerElementStyle">
            <MailOutlineIcon style={props.textColor} /> <p style={props.textColor}>erek.group@gmail.com</p>
          </div>
        </div>

        <Link className="logoStyle" to={'/main'}>
          <h1 style={props.textColor}>EREK GROUP</h1>
        </Link>

       {props.noImage ? <div className="headerElementStyle"></div>: <div className="headerElementStyle">
          <ShoppingBasketIcon />
        </div>} 
      </div>
    </header>
  );
}

export default Header;
