import Hotels from "../../components/Check/Hotels"
import Fapi from "../../components/Fapi/Fapi"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertyList/PropertyList"
import Ftsearch from "../../components/Ftsearch/Ftsearch"

import "./fhome.css"

function Fhome() {
  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <Ftsearch/>
      <div className="homeContainer">
        <h1 className="homeTitle">Property Type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Available Ticket</h1>
        <Fapi/>
        
        <h1 className="homeTitle"></h1>
        
       
        <Footer/>
      </div>
      
    </div>
  )
}

export default Fhome
