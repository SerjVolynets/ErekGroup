import "./main.css";
import Header from "../../components/header/header";
import MenuCatalog from "../../components/menuCatalog/menuCatalog";
import toolsImg from "../../img/tools.jpg";
import mockedPers from '../../img/mockedPers.png';
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
  center: [55.705858, 37.480750],
  zoom: 16,
};

const coordinates = [
  [55.705858, 37.480750],
  [55.705858, 37.480750]
];


function Main() {
  return (
    <div className="App">
      <Header />
      <MenuCatalog />

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

    <div className="person">

      <div className="personBlock">
        <img src={mockedPers} alt="Tools" width="80px" height="100px" />
        <h4 className="personTextColor">Директор</h4>
        <h5 className="personTextColor">Email: test@gmail.com</h5>
        <h5 className="personTextColor">tel: +1113322445566</h5>
      </div>

      <div className="personBlock">
        <img src={mockedPers} alt="Tools" width="80px" height="100px" />
        <h4 className="personTextColor">Директор</h4>
        <h5 className="personTextColor">Email: test@gmail.com</h5>
        <h5 className="personTextColor">tel: +1113322445566</h5>
      </div>

      <div className="personBlock">
        <img src={mockedPers} alt="Tools" width="80px" height="100px" />
        <h4 className="personTextColor">Директор</h4>
        <h5 className="personTextColor">Email: test@gmail.com</h5>
        <h5 className="personTextColor">tel: +1113322445566</h5>
      </div>
      
    </div>

    <div className="mapContainer">

      <div className="addressContainer">
        <h2 className="addressText">Мы находимся по адрессу - Веерная 1</h2>
      </div>

    <YMaps>
     <Map defaultState={mapData} width={'100%'} height={'100%'}>
       {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
     </Map>
    </YMaps>

    </div>
      

    <Header noImage background={{background: '#333333'}} textColor={{color: 'white'}}/>


    </div>
  );
}

export default Main;
