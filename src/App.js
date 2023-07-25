
import './App.css';
import Header from './header';
import Content from './Content';
import cardContext from './cardContext';
import { useState } from 'react';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import Cart from './cart';






function App() {
  const[count,setCount]=useState([]);
  const[filter,setFilter]=useState([]);
  const [setter,setSetter]=useState("");

  return (
    <cardContext.Provider value={[count,setCount,filter,setFilter,setter,setSetter]}>
      <BrowserRouter>
    <div class='Body'>
      <div class="cartbadge">{count.length}</div>
      <Header className="Section-header">   </Header>
     
      <Routes>
        <Route path="/" element={<Content className="contentbody"></Content>}></Route>
        <Route path="/cart" element={<Cart className="displaycart"></Cart>}></Route>
      </Routes>
     
    
   </div>
   </BrowserRouter>
   </cardContext.Provider>

  
  );
}

export default App;
