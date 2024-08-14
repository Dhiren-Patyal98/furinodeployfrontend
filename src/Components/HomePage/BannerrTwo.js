import React from 'react'
import { Row,Col } from "react-bootstrap";
import'./bannerTwo.css'
import dinning from "../../Images/Homepageimages/Dining banner.png";
import living from'../../Images/Homepageimages/Living banner.png';
import bedroom from'../../Images/Homepageimages/bedroom banner.png';
export default function BannerTwo() {
  return (
    <div>
      
      <div >
        <div className="head-container">
          <div className="contentt">
            <div className="heading">
              <p>
                Browse The Range<br></br>
              </p>
            </div>
            <span className="heading-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <Row className="banner-images">
              <div className="image1">
                <img src={dinning} alt=""></img>
              </div>
              

              <div className="image1">
                <img src={living} alt=""></img>
              </div>

              <div className="image1">
                <img src={bedroom}alt=""></img>
              </div>
             
            </Row>
            <Row style={{ paddingTop:"1%"}}>
              <Col className="tags">
               Dinning
              </Col>
                <Col className="tags">
                Living
                </Col>
                <Col className="tags">
                Bedroom
                </Col>
            </Row>
            
          </div>
        </div>
      </div>
    </div>
  )
}
