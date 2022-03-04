import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './Components/Header/header';
import Main from './Components/Main/main';
import Sidebar from './Components/SideBar/sidebar';

function App() {
  return (
      <>
      <Header />
      <BrowserRouter>
      <div className='mainConainer'>
        <div className='dashboardConainer bg-light'>
        <Sidebar />
        </div>
        <div className='linksConainer'>
          <Main />
        </div>
      </div>
      </BrowserRouter>
      </>
  );
}

export default App;
