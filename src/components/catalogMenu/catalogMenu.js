import "./catalogMenu.css";


function CatalogMenu() {
  return (
    <div>
      <ul className="catalogMenuList">
          <li className="catalogMenuElement"><h3>Электротовары</h3></li>
          <li className="catalogMenuElement"><h3>Инструменты</h3></li>
          <li className="catalogMenuElement"><h3>Покрытия</h3></li>
          <li className="catalogMenuElement"><h3>Строй материалы</h3></li>
          <li className="catalogMenuElement"><h3>Краски</h3></li>
          <li className="catalogMenuElement"><h3>Декор</h3></li>
      </ul>
    </div>
  );
}

export default CatalogMenu;
