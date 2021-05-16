import "./catalog.css";
import Header from "../../components/header/header";
import MenuCatalog from "../../components/menuCatalog/menuCatalog";
import CatalogMenu from '../../components/catalogMenu/catalogMenu';
import CatalogMenuListElement from '../../components/catalogMenuListElement/catalogMenuListElement';


function Catalog() {
  return (
    <div className="App">
        <Header />
        <MenuCatalog />
        <div style={{padding: '0 10%', display: 'flex', justifyContent: 'row', marginBottom: 20}}>

            <div style={{ width: '20%', height:'50%', background: '#fdd241'}}>
                <CatalogMenu/>
            </div>

            <div style={{ width: '80%', display: 'flex', flexWrap: 'wrap',height: "100%",}}>
                  <CatalogMenuListElement/>
                  <CatalogMenuListElement/>
                  <CatalogMenuListElement/>
                  <CatalogMenuListElement/>
                  <CatalogMenuListElement/>
                  <CatalogMenuListElement/>
                  <CatalogMenuListElement/>
                  <CatalogMenuListElement/>
                  <CatalogMenuListElement/>
            </div>

        </div>
        <footer>
           <Header noImage background={{background: '#333333'}} textColor={{color: 'white'}}/>
        </footer>
       
    </div>
  );
}

export default Catalog;
