import React from 'react';
import '../MainBody.css'
import undraw_typewriter_i8xd from "../images/undraw_typewriter_i8xd.svg";
import undraw_respond_8wjt from "../images/undraw_respond_8wjt.svg";
import undraw_stepping_up_g6oo from "../images/undraw_stepping_up_g6oo.svg";
import undraw_connected_world_wuay from "../images/undraw_connected_world_wuay.svg";
import undraw_public_discussion_btnw from "../images/undraw_public_discussion_btnw.svg";
import undraw_Post_re_mtr4 from "../images/undraw_Post_re_mtr4.svg";
import undraw_community_8nwl from "../images/undraw_community_8nwl.svg";

function MainBody() {
    return (
        <div>
            <div class="totalHero">

            <div class="navbar">
            <div class="container flex">
            <h1 class="logo">SkillLy</h1>
            <nav>
                <ul>
                    <li><a href="#Googlyform">Pre Register</a></li>
                    
                </ul>
            </nav>
            </div>
            </div>



            <div class="container">
                <div class="hero-text">
                    <h2>Easiest way to start a <br/>career in Content Writing</h2>
                    <div class="subtext">Learn as a community, Give back to the community, Grow as a community</div>
                    <div class="buttonHero"><a class="aButton" href="#Googlyform">Join now</a></div>

            </div>
            </div>

            </div>



            <div class="threeBoxLayout">
                <div class="mainHeading">How We Work</div>

                <div class="boxes">
                <div className="individualBoxes">
                            <div className="individualBoxesImage"><img alt="imagesAlt" src={undraw_typewriter_i8xd}/></div>  
                            <p>Practice writing on the platform through articles on real life issues</p>
                </div>

                <div class="individualBoxes">
                            <div className="individualBoxesImage"><img alt="imagesAlt" src={undraw_respond_8wjt}/></div>
                            <p>Get feedback on your work from the community and upskill your content writing</p>                    
                </div>

                <div class="individualBoxes">
                            <div className="individualBoxesImage"><img alt="imagesAlt" src={undraw_stepping_up_g6oo}/></div>
                            <p>Create your portfolio and grow as a content writer with the community</p>  
                </div>

                </div>
            </div>

            

            


            <div class="midwayContainer">
                <div class="midwayTextContainer">
                <h2>Everyone needs talent, and we have the talent network</h2>
                <h4>Content operations platform for all kinds of customers. Save on time, quality and cost with Pepper Content.</h4>
                </div>
            </div>


            <div class="meritsSection">
            <div class="meritsContainer odd">
                <div class="meritsText">
                <div class="meritsTextContainer">
                    <h3>Real World issues</h3>
                    <p>Skillly offers you acces to real world issues to write to help buil your portfolio</p>
                </div>
                </div>
                <div class="meritsSvgs">
                    <div className="mySvg">
                            <img alt="imagesAlt" src={undraw_connected_world_wuay}/>
                    </div>
                </div>
            </div>
            </div>

            <div class="meritsSection">
            <div class="meritsContainer even">
                <div class="meritsText">
                <div class="meritsTextContainer"><h3>learn from the community</h3>
                    <p>Skilly acts as a medium to generate real and constructive feedback on your work to help you identify mistakes and improve as a writer</p>
                </div>
                </div>
                <div class="meritsSvgs">
                <div className="mySvg">
                    <img alt="imagesAlt" src={undraw_public_discussion_btnw}/>
                </div>
                </div>
            </div>
            </div>

            <div class="meritsSection">
            <div class="meritsContainer odd">
                <div class="meritsText">
                <div class="meritsTextContainer">
                    <h3>read fellow writers work</h3>
                    <p>Skilly allows you to be inspired by the content written by others in the community</p>
                </div>
                </div>
                <div class="meritsSvgs">
                <div className="mySvg">
                    <img alt="imagesAlt" src={undraw_Post_re_mtr4}/>
                </div>
                </div>
            </div>
            </div>

            <div class="meritsSection">
            <div class="meritsContainer even">
                <div class="meritsText">
                <div class="meritsTextContainer"><h3>Give back to the community</h3>
                    <p>Skillly allows you to help fellow artists learn and grow and hence give back to the community</p>
                </div>
                </div>
                <div class="meritsSvgs">
                <div className="mySvg">
                    <img alt="imagesAlt" src={undraw_community_8nwl}/>
                </div>
                </div>
            </div>
            </div>

            <iframe title="GoogleForm" id="Googlyform" className="GoogleForm" src="https://docs.google.com/forms/d/e/1FAIpQLSed0PyNxhQtjRQxhj3vX-mvi05GtwTH5IEjLxyY_usCrsrY9A/viewform?embedded=true" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>



            

            <div className="homepageFooter">
                    <div className="footerMenu">
                    <div className="col_1">
                        <div className="title">
                            Company  
                        </div>  
                        <ul>
                            <li>About Us</li>
                            <li>Contacts</li>
                            <li>Home Page</li>
                            <li>Out Of Words</li>
                        </ul>
                    </div>
                    <div className="col_2">
                        <div className="title">
                            Help & Support 
                        </div>  
                        <ul>
                            <li>Support Center</li>
                            <li>FAQ</li>
                            <li>Call Center</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div className="col_3">
                        <div className="title">
                            Services  
                        </div>  
                        <ul>
                            <li>Fashion Magazine</li>
                            <li>Web Store</li>
                            <li>Deliveries</li>
                            <li>Shoes Related Term</li>
                        </ul>
                    </div>
                    </div>

                    <div className="socialMedia">
                        <p>Copyright February 2021 © EDGE.</p>
                    </div>
                </div>
            </div>
    );
}

export default MainBody;