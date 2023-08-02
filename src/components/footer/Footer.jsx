import "./footer.css";
import {FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem"><h2>Countries</h2></li>
          <li className="fListItem"><h2>Regions</h2></li>
          <li className="fListItem"><h2>Cities</h2></li>
          <li className="fListItem"><h2>Districts</h2></li>
          <li className="fListItem"><h2>Airports</h2></li>
          <li className="fListItem"><h2>Hotels</h2></li>
        </ul>
        <ul className="fList">
          <li className="fListItem"><h2>Homes</h2></li>
          <li className="fListItem"><h2>Apartments</h2></li>
          <li className="fListItem"><h2>Resorts</h2></li>
          <li className="fListItem"><h2>Villas</h2></li>
          <li className="fListItem"><h2>Hostels</h2></li>
          <li className="fListItem"><h2>Guest houses</h2></li>
        </ul>
        <ul className="fList">
          <li className="fListItem"><h2>Unique places to stay</h2> </li>
          <li className="fListItem"><h2>Reviews</h2></li>
          <li className="fListItem"><h2>Unpacked: Travel articles</h2></li>
          <li className="fListItem"><h2>Travel communities</h2></li>
          <li className="fListItem"><h2>Seasonal and holiday deals</h2></li>
        </ul>
        <ul className="fList">
          <li className="fListItem"><h2>Car rental</h2></li>
          <li className="fListItem"><h2>Flight Finder</h2></li>
          <li className="fListItem"><h2>Restaurant reservations</h2></li>
          <li className="fListItem"><h2>Travel Agents</h2></li>
        </ul>
        <ul className="fList">
          <li className="fListItem"><h2>Curtomer Service</h2></li>
          <li className="fListItem"><h2>Partner Help</h2></li>
          <li className="fListItem"><h2>Careers</h2></li>
          <li className="fListItem"><h2>Sustainability</h2></li>
          <li className="fListItem"><h2>Press center</h2></li>
          <li className="fListItem"><h2>Safety Resource Center</h2></li>
          <li className="fListItem"><h2>Investor relations</h2></li>
          <li className="fListItem"><h2>Terms & conditions</h2></li>
        </ul>
      </div>
      <div className="fText"><h1>Copyright © 2023  MAKEMYTRIP PVT. LTD.

Country India USA UAE</h1></div>
   <div className="flist">
    <a href="#">
      <FaFacebook size={32}/>
    </a>
    <a href="#">
      <FaInstagram size={32}/>
    </a>
    <a href="#">
      <FaTwitter size={32} />
    </a>
   </div>
    </div>
  );
};

export default Footer;