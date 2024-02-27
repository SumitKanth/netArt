import React from "react";
import logo from '../assets/logo.png'
import award_img from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="nav">
                    <img src={logo} alt="img" className="logo"/>
                </div>

                <div className="section_one">
                    <div className="left_one">
                        <img src={award_img} alt="" className="award_img"/>
                    </div>

                    <div className="right_one">
                        <h4>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
                        <div className="text_list">
                            <ul>
                            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                            </ul>
                        </div>
                        <div className="award_taking_img">
                            <img src={two} alt="two" className="two_img"/>
                        </div>
                        <p>Government of India has awarded the <span className="val">"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                    </div>
                </div>

                <div className="section_two">
                    <div className="text">
                    INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
                    </div>

                    <div className="sec_two_con">
                        <img src={three} alt="img" />
                        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
                    </div>
                </div>

                <hr className="hr_tag"/>

                <div className="section_three">
                    <h4 className="head">
                        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
                    </h4>

                    <p>CHEMICALS <span>|</span> PROCESS POWER WATER <span>|</span> WASTE WATER OILS <span>|</span> GAS PHARMA SUGARS <span>|</span> DISTILLERIES PAPER <span>|</span> PULP MARINE <span>|</span> DEFENCE METAL <span>|</span> MINING FOOD <span>|</span> BEVERAGE PETROCHEMICAL <span>|</span> REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE <span>|</span> RESIDENTIAL</p>
                </div>

            <div className="footer">
                <footer>
                    <div className="one"><PhoneIcon /> Toll free 1800 200 1234</div>
                    <div className="two"><FacebookRoundedIcon /> www.facebook.com/cripumps</div>
                    <div className="three"><LanguageRoundedIcon /> www.crigroups.com</div>
                </footer>
            </div>
                
            </div>
        </>
    )
}

export default Home