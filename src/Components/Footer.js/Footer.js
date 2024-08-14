import React from 'react'
import './footer.css'
import { useNavigate } from 'react-router-dom';
export default function Footer(){

  const navigate = useNavigate();
  return (
    <div style={{paddingTop:"4%"}}>
    <div className="footerPart">
      <div className="footer">
        <div className="footerAddress">
          <h3>Furniro.</h3>
          <p>
            400 University Drive Suite 200 Coral
            <br />
            Gables,
            <br />
            FL 33134 USA
          </p>
        </div>
        <div className="footerLinks">
          <p>Links</p>
          <ul>
            <li onClick={()=>{ navigate("/")}} style={{cursor: "pointer"}}>Home</li>
            <li onClick={()=>{ navigate("/shop")}} style={{cursor: "pointer"}}>Shop</li>
            <li  onClick={()=>{ navigate("")}} style={{cursor: "pointer"}}>About</li>
            <li  onClick={()=>{ navigate("/contact")}} style={{cursor: "pointer"}}>Contact</li>
          </ul>
        </div>
        <div className="footerHelp">
          <p >Help</p>
          <ul>
            <li style={{cursor: "pointer"}}>Payment Options</li>
            <li style={{cursor: "pointer"}}>Returns</li>
            <li style={{cursor: "pointer"}}>Privacy Policies</li>
          </ul>
        </div>
        <div className="footerNewsletter">
          <p>Newsletter</p>
          <div className="footerNewsletterInput">
            <input  type="text" placeholder="Enter Your Email Address"></input>
            <button style={{border: "none", background: "none", padding: "0", font: "inherit", cursor: "pointer"}}>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="rightReserved">
        <p>2023 furniro. All rights reserved</p>
      </div>
    </div>
    </div>
  );
}
