import './App.css';
import NavBar from './Components/NavBar';
import ItemsList from './Components/ItemsList';
import Item from './Components/Item';
import Footer from './Components/Footer';




function App() {
  const itemArray = [
    {
      imgSrc: "data:image/jpeg;base64,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",
      name: 'Yeux Tous Couleurs',
      price: "10 000dt",
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/CG_Heart.gif/320px-CG_Heart.gif",
      name: 'Coeur occasion',
      price: "150 000 d",
    },
    {
      imgSrc: "data:image/jpeg;base64,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",
      name: 'Cerveau',
      price: "100 000 d",
    },
    {
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCFJs5OS1nbeOehiMKwEnqeKRYp5n12fqVA&usqp=CAU",
        name: 'Un rein',
        price: "200 000 dt",
      },
      {
        imgSrc: "data:image/jpeg;base64,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",
        name: 'Pancreas',
        price: "30 000 dt",
      },
      {
        imgSrc: "https://www.news-medical.net/image.axd?picture=2020%2F10%2Fshutterstock_718049254.jpg",
        name: 'Moelle épinière',
        price: "500 000 d",
      },
  ];
const handelCilck=(name,price)=>{
  alert(`the price of ${name} is ${price}`)
}
  return (
    <div className="App">
     <NavBar/>
     <ItemsList  Productlist={itemArray} handel={handelCilck}/>
     
   <Footer>
     <h4> copyrights by Me Oussama Footer  </h4>
   </Footer>
  
    </div>
  );
}

export default App;
