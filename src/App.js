

import React from "react"
import { Route, Routes} from "react-router-dom"
import Layout from "./component/layout/Layout";
import Home from "./page/home/Home";
import Section from "./component/section/Section";
import Content from "./component/content/Content";
import Business from "./component/business/Business";
import Navbar from "./component/navbar/Navbar"
import About from "./page/about/About"
import Footer from "./component/footer/Footer"
import ClaimForm from "./page/clam/ClaimForm";
import QuoteForm from "./page/quote/QuoteForm"
import ContactPage from "./page/contact/ContactPage";
import ClaimList from "./page/claimList/ClaimList";



function App() {
 
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/section" element={<Section/>}/>
        <Route path="/content" element={<Content/>}/>
        <Route path="/business" element={<Business/>}/>
        <Route path="/layout" element={<Layout/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/claim" element={<ClaimForm/>}/>
        <Route path="/quote" element={<QuoteForm/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/claimList" element={<ClaimList/>}/>
      </Routes>
      <Footer/> 
      
      
    </div>
  );
}

export default App;
