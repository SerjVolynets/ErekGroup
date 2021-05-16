import "./catalogMenuListElement.css";
import hammer from '../../img/hamer.jpeg';
import CounterInput from "react-counter-input";


function catalogMenuListElement() {
  return (
    <div className="elementContainer">   
        <img src={hammer} alt="Tools" width="20%" height="30%" />
        <h4>Молоток - Viking 2</h4>
        <CounterInput
               min={0}
               max={1000}
               onCountChange={count => console.log(count)}
        />
        <div className="button">
            <p className="buttonText">Купить</p>
        </div>
    </div>
  );
}

export default catalogMenuListElement;
