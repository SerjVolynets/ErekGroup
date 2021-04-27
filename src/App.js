import "./App.css";
import Header from "./components/header/header";
import MenuCatalog from "./components/menuCatalog/menuCatalog";
import toolsImg from "./img/tools.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <MenuCatalog />
{/*                                                               */}
      <div className="imageBlock">
        <img src={toolsImg} alt="Tools" width="100%" height="100%" />
        <div className="plate">
          <h1 className="textPlate">Воплощайте идеи!</h1>
          <p className="textPlate">Катчественные материалы.</p>
          <p className="textPlate"> Надежные инструменты для профессиональных работ.</p>
        </div>
      </div>

      <div className='textInfo'>
        <div className='textInfoBlock'>
          <h2 className='textFont'>Добро пожаловать в наш интернет-магазин стройматериалов</h2>
          <p className='textFont'>Мы с радостью обслуживаем заказы через сайт 5 дней в неделю с 9 до 18 по московскому времени.</p>
          <p className='textFont'>Доставка возможна по Москве. Вы можете оставить заказ на сайте и наш менеджер свяжется с вами для уточнения вашего заказа</p>
        </div>
      </div>


    </div>
  );
}

export default App;
