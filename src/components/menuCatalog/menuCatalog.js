import "./menuCatalog.css";
import { Link } from "react-router-dom";


function menuCatalog() {
  return (
    <div className="catalogStyle">
      <div className="catalogContainer">
        <Link className="catalogElementContainer" to={'/catalog'}>
          <p className="catalogTextStyle">Электротовары</p>
        </Link>
        <Link className="catalogElementContainer" to={'/catalog'}>
          <p className="catalogTextStyle">Интрументы</p>
        </Link>
        <Link className="catalogElementContainer" to={'/catalog'}>
          <p className="catalogTextStyle">Покрытия</p>
        </Link>
        <Link className="catalogElementContainer" to={'/catalog'}>
          <p className="catalogTextStyle">Строй материалы</p>
        </Link>
        <Link className="catalogElementContainer" to={'/catalog'}>
          <p className="catalogTextStyle">Краски</p>
        </Link>
        <Link className="catalogElementContainer" to={'/catalog'}>
          <p className="catalogTextStyle">Декор</p>
        </Link>
      </div>
    </div>
  );
}

export default menuCatalog;
