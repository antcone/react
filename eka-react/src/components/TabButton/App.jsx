import logo from '../logo.svg';
import './App.css';
import EkaComponent from './EkaComponent';
import ClassComponent from '../ClassComponent';
import Counter from '../Counter';
import Product from '../Product/Product';
import {PRODUCTS} from '../../data/data';
import { useState } from 'react';
import HeaderTest from '../HeaderTest';
import TabButton from './TabButton';

function App() {

  function handleSelectApp(selectedButton) {
    console.log(`Category clicked! - ${selectedButton}`);
    setSelectedCategory(selectedButton);
}

//jotta käyttöliittymä päivittyy, tarvitaan komponentin state
// useState pitää luoda komponentin juureen
const [selectedCategory, setSelectedCategory] = useState("Valitse kategoria");


const [categories, setCategories] = useState();


  return (
    <div className="App">
      <header className="App-header">
        <HeaderTest/>
        <Counter/>
       {/* <EkaComponent/>
        <ClassComponent/>    */}
        <section>
          <h2>Tuotteet</h2>
            <ul> {/*1. vaihtoehto props, properties*/ }
                <Product 
                img={PRODUCTS[0].img} 
                title= {PRODUCTS[0].title} 
                description= {PRODUCTS[0].description} />
                {/* voi käyttää destructure syntaksia, jos lähdedatan avaimet ovat samat
                  kuin componentin avaimet*/}
                <Product
                {...PRODUCTS[1]}/>
                <Product
                {...PRODUCTS[2]}/>
            </ul>
        </section>

        <section>
          <h2>Kategoriat</h2>
          <menu>
            {/* <li><button>Kategoria 1</button></li>
            <li><button>Kategoria 2</button></li>

            2. tapa component composition
            kaikkea lapsidataa ei tartte pyöritää propsien kautta */}

            {/* <TabButton onSelect={() =>{handleSelectApp('Kategoria 1')}}> Kategoria 1</TabButton>
            <TabButton onSelect={() =>{handleSelectApp('Kategoria 2')}}> Kategoria 2</TabButton>
            <TabButton onSelect={() =>{handleSelectApp('Kategoria 3')}}> Kategoria 3</TabButton>
            <TabButton onSelect={() =>{handleSelectApp('Kategoria 4')}}> Kategoria 4</TabButton>
 */}

            {/* Generoidaan napit "haetun" datan perusteella */}
             {/* taulukon map() -funktiolla leivotaan data toiseen muotoon */}
              {categories.map((category, index)=> (

               
              //   <TabButton onSelect ={()=> {handleSelectApp(category)}}>
              //     {category.title}
              //  </TabButton>
               
              <TabButton key ={index} onSelect ={()=> {handleSelectApp(category)}}>
              {category.title}
              </TabButton>
              
              ))}



          </menu>

          <div>
              <h3></h3>

          </div>

        </section>

      </header>
    </div>
  );
}

export default App;
