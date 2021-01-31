import "./App.css";
import Header from "./components/header/header";
import MenuCatalog from "./components/menuCatalog/menuCatalog";
import toolsImg from "./img/tools.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <MenuCatalog />
      <div className="imageBlock">
        <img src={toolsImg} alt="Tools" width="100%" height="100%" />
        <div className="plate">
          <h1 className="textPlate">Воплощайте идеи</h1>
          <h2 className="textPlate">Турецкое и русское катчество</h2>
          <p className="textPlate"> Надежные инструменты для профессиональных работ</p>
        </div>
      </div>
    </div>
  );
}

export default App;
