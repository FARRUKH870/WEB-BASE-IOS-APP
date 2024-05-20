import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import CardListing from './components/CardListing.js';
import Buttom from './components/Buttom.js';
import Form from './components/Form.js';
import Loader from './components/Loader.js';
//import CardDetail from './Pages/CMS/CardDetail.js';
//pages>cms
// import ChampionDetail from './Pages/CMS/ChampionDetail';
import ChampionList from './Pages/CMS/ChampionList';
import ChampionForm from './Pages/CMS/ChampionForm';
import CardDetail from './Pages/CMS/CardDetail';
import CardTier from './Pages/CMS/CardTier.js';
//pages>user
import CardList from './Pages/User/CardList';
import CardForm from './Pages/User/CardForm';
import Monster from './Pages/CMS/Monster.js';
import Jar from './Pages/CMS/Jar.js';
import NightMare from './Pages/CMS/NightMare.js';
import Trap from './Pages/CMS/Trap.js';
import Magic from './Pages/CMS/Magic.js';
import CardCreator from './Pages/CMS/CardCreator.js';
import ChampiontTab from './Pages/CMS/ChampiontTab.js';
import Champions from './Pages/CMS/Champions.js';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/Login" element={<Login />}/>
          <Route path="/ChampionList" element={<ChampionList />}/>
          {/* <Route path="/ChampionDetail" element={<ChampionDetail />}/> */}
          <Route path="/ChampionForm" element={<ChampionForm />} />
          <Route path="/CardListing" element={<CardListing />} />
          <Route path="/CardDetail" element={<CardDetail />} />
          <Route path='/Form' element={<Form/>}/>
          <Route path='/Loader' element={<Loader/>}/>
          <Route path='/CardTier' element={<CardTier/>}/>
          <Route path='/Monster' element={<Monster/>}/>
          <Route path='/Trap' element={<Trap/>}/>
          <Route path='/Magic' element={<Magic/>}/>
          <Route path='/Nightmare' element={<NightMare/>}/>
          <Route path='/Jar' element={<Jar/>}/>
          <Route path="/CardList" element={<CardList />} />
          <Route path="/CardDetail" element={<CardDetail />} />
          <Route path="/CardForm" element={<CardForm />} />
         <Route path="/buttom" element={<Buttom />} />
         <Route path="/CardCreator" element={<CardCreator/>}/>
         <Route path='/ChampinTab' element={<ChampiontTab/>}/>
         <Route path='/Champions' element={<Champions/>}/>
       </Routes>
    </Router>
        
  );
}
export default App;
