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
import Property from "./components/Property";
import Blog from "./components/Blog";
import Contacts from "./components/Contacts";


function App() {
  return (<BrowserRouter>
          <Header />
          <Route exact path="/" render={()=>{
              return <div>
                  <Slider/>
                  <Welcome/>
                  <Features/>
                  <Stats/>

                  <Newsletter/>
              </div>
          }}/>
          <Route path="/about" render={()=>{
              return <div>
                  <Breadcrumbs/>
                  <Welcome/>
                  <Agents/>
                  <AgentsModal/>
                  <Clients/>
              </div>
          }}/>
          <Route path="/property" render={()=>{
              return <div>
                  <Breadcrumbs/>
                  <Property/>
              </div>
          }}/>
          <Route path="/blog" render={()=>{
              return <div>
                  <Breadcrumbs/>
                  <Blog/>
              </div>
          }}/>
          <Route path="/contacts" render={()=> {
              return <div>
                  <Breadcrumbs/>
                  <Contacts/>
              </div>
          }}/>
          <Footer/>
  </BrowserRouter>
  );
}

export default App;
