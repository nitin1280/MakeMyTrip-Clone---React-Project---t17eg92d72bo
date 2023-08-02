import Hotels from "../../components/Check/Hotels"
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties"
import Featured from "../../components/featurted/Featured"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertyList/PropertyList"


import "./home.css"

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Property Type</h1>
        <PropertyList/>
        {/* <h1 className="homeTitle">Home Guests is Love</h1>
        <FeaturedProperties/> */}
        <h1 className="homeTitle">Available hotels</h1>
        <Hotels/>
        
        <Footer/>
      </div>
      
    </div>
  )
}

export default Home
