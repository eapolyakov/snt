import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Sider";
import Welcome from "./components/Welcome";
import Properties from "./components/Properties";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Clients from "./components/Clients";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";
import Agents from "./components/Agents";
import AgentsModal from "./components/AgentsModal";


function App() {
  return (<BrowserRouter>
          <Header />
      <div className="main-content">
          <Route exact path="/" render={()=>{
              return <div>
                  <Slider/>
                  <Welcome/>
                  <Properties/>
                  <Features/>
                  <Stats/>
                  <Clients/>
                  <Newsletter/>
              </div>
          }}/>
          <Route path="/about" render={()=>{
              return <div>
                  <Breadcrumbs/>
                  <Welcome/>
                  <Stats/>
                  <Agents/>
                  <AgentsModal/>

              </div>
          }}/>
      </div>
          <Footer/>
  </BrowserRouter>
  );
}

export default App;
