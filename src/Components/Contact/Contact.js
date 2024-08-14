import React from "react";


import "./contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";
import CommonHeader from "./CommonHeader";
import WarrantyDetail from "../Shop/WarrantyDetail";
export default function Contact() {
  return (
    <div >
     
      <CommonHeader/>
      <div className="container-one" style={{paddingTop:"3%"}}>
        <div className="contact-head">
          <text className="head-1">Get In Touch With Us</text>
          <text className="head-2">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us <br />{" "}
            <span>
              An Email. Our Staff Always Be There To Help You Out. Do Not
              Hesitate!
            </span>{" "}
          </text>
        </div>
        <div className="contact-description">
          <div className="apw-header">
            <div className="desc-part">
              <div className="desc-iocn">
                <FaLocationDot
                  style={{ color: "#000000", width: "18%", height: "20%" , marginTop:"5%" ,marginRight:"10%"}}
                />
              </div>

              <div className="desc-desc">
                <text className="desc-desc-content">
                  Address
                  <br />
                </text>
                <text className="desc-address">
                  236 5th SE Avenue, New
                  <br /> York NY10000, United
                  <br />
                  States
                </text>
              </div>
            </div>

            <div className="desc-part">
              <div className="desc-iocn">
                <FaPhoneAlt
                  style={{ color: "#000000", width: "18%", height: "20%" ,marginTop:"5%" ,marginRight:"10%"  }}
                />
              </div>

              <div className="desc-desc">
                <text className="desc-desc-content">
                Phone
                  <br />
                </text>
                <text className="desc-address">
                Mobile: +(84) 546-6789

                  <br />Hotline: +(84) 456-6789
                 
                </text>
              </div>
            </div>

            <div className="desc-part">
              <div className="desc-iocn">
                <BsFillClockFill
                  style={{ color: "#000000", width: "18%", height: "20%" ,marginTop:"5%",marginRight:"10%" }}
                />
              </div>

              <div className="desc-desc">
                <text className="desc-desc-content">
                Working Time
                  <br />
                </text>
                <text className="desc-address">
                Monday-Friday: 9:00 - 22:00

                  <br />22:00
                  <br />
                  Saturday-Sunday: 9:00 -
                  <br/>
                  21:00
                </text>
              </div>
            </div>
          </div>
          <div className="nas-header">
              <div className="input-fields">
                  <div className="inputs">
                    <text>Your Name </text>
                    <input className="input-text"placeholder="Abc"></input>
                  </div>

                  <div className="inputs">
                    <text>Your Name </text>
                    <input className="input-text"placeholder="Abc"></input>
                  </div>

                  <div className="inputs">
                    <text>Your Name </text>
                    <input className="input-text"placeholder="Abc"></input>
                  </div>
                  
                
              </div>

              <div className="input-button">
                <div className="input-button-inner"> <button>
                Submit
                </button> </div>
             
              
              </div>

          </div>
        </div>
      </div>
      <WarrantyDetail/>
    </div>
  );
}
