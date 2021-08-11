import React,{useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../MainBody.css'
import undraw_typewriter_i8xd from "../images/undraw_typewriter_i8xd.svg";
import undraw_respond_8wjt from "../images/undraw_respond_8wjt.svg";
import undraw_stepping_up_g6oo from "../images/undraw_stepping_up_g6oo.svg";
import undraw_connected_world_wuay from "../images/undraw_connected_world_wuay.svg";
import undraw_public_discussion_btnw from "../images/undraw_public_discussion_btnw.svg";
import undraw_Post_re_mtr4 from "../images/undraw_Post_re_mtr4.svg";
import undraw_community_8nwl from "../images/undraw_community_8nwl.svg";

function MainBody() {
    gsap.registerPlugin(ScrollTrigger); 

    useEffect( () => {

        gsap.from('.hero-text', {
            opacity: 0, 
            duration: 1.5, 
            y: -50
        })
        
        gsap.from('.boxes', {
            scrollTrigger: '.boxes',
            opacity: 0,
            y: 50,
            duration: 1,
            scale: 0.9        
        })
        
        gsap.from('.midwayTextContainer h2', {
            scrollTrigger: '.midwayTextContainer',
            opacity: 0,
            y: 80,
            duration: 1,
        })
        
        gsap.from('.midwayTextContainer h4', {
            scrollTrigger: '.midwayTextContainer',
            opacity: 0,
            y: 50,
            duration: 1.2,
        })
        
        gsap.from('.firstBox', {
            scrollTrigger: '.firstBox',
            opacity: 0,
            x: -100,
            duration: 0.7,
            scale: 0.9,
            stagger: 1
        })
        
        gsap.from('.secondBox', {
            scrollTrigger: '.secondBox',
            opacity: 0,
            x: 100,
            duration: 0.7,
            scale: 0.9,
            stagger: 1
        })

        gsap.from('.thirdBox', {
            scrollTrigger: '.thirdBox',
            opacity: 0,
            x: -100,
            duration: 0.7,
            scale: 0.9,
            stagger: 1
        })
        
        gsap.from('.fourthBox', {
            scrollTrigger: '.fourthBox',
            opacity: 0,
            x: 100,
            duration: 0.7,
            scale: 0.9,
            stagger: 1
        })
        
        gsap.from('.GoogleForm', {
            scrollTrigger: '.GoogleForm',
            opacity: 0, 
            duration: 0.7, 
            y: 50
        })
        
        
        
    },[]);

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
                            <h2>The easiest way to start a<br/>career in Content Writing</h2>
                            <div className="subtext">Learn as a community, Give back to the community, Grow as a community</div>
                    <div class="buttonHero"><a class="aButton" href="#Googlyform">Join now</a></div>

            </div>
            </div>

            </div>



            <div class="threeBoxLayout">
                <div class="mainHeading">How We Work</div>

                <div class="boxes">
                <div className="individualBoxes">
                            <div className="individualBoxesImage"><img alt="imagesAlt" src={undraw_typewriter_i8xd}/></div>  
                            <p>Practise through writing prompts on real-world issues</p>
                </div>

                <div class="individualBoxes">
                            <div className="individualBoxesImage"><img alt="imagesAlt" src={undraw_respond_8wjt}/></div>
                            <p>The community helps you improve your craft</p>                    
                </div>

                <div class="individualBoxes">
                            <div className="individualBoxesImage"><img alt="imagesAlt" src={undraw_stepping_up_g6oo}/></div>
                            <p>Create your portfolio and grow with the community</p>  
                </div>

                </div>
            </div>

            

            


            <div class="midwayContainer">
                <div class="midwayTextContainer">
                <h2><p>Everyone has talent, and we have the network to refine it!</p></h2>
                <h4>Skillly molds you as a writer and gives you the opportunity to assist, learn and grow with the fellow artists.</h4>
                </div>
            </div>


            <div class="meritsSection">
            <div class="meritsContainer odd firstBox">
                <div class="meritsText">
                <div class="meritsTextContainer">
                    <h3>Real World issues</h3>
                    <p>The writing prompts offered are based on prevalent themes which in turn will assist you in curating an contemporary portfolio.</p>
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
            <div class="meritsContainer even secondBox">
                <div class="meritsText">
                <div className="meritsTextContainer"><h3>Learn From The Community</h3>
                                <p>The community helps you in identifying your weaknesses and improve as a writer.</p>
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
            <div class="meritsContainer odd thirdBox">
                <div class="meritsText">
                <div className="meritsTextContainer">
                                <h3>Get inspired by the community</h3>
                                <p>Take inspiration from the work of people from a diverse background and learn from them.</p>
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
            <div class="meritsContainer even fourthBox">
            <div className="meritsText">
                            <div className="meritsTextContainer"><h3>Grow With The Community</h3>
                                <p>Help others through your valuable feedback and grow with the community.</p>
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
                    <div className="FooterContainer">
                        <h1 className="FooterLogo">
                            SKILLLY.
                        </h1>
                        <h4 className="FooterQuote">
//                             Made with ❤ in New Delhi - India
                        </h4>
                        <div className="socials">
                            <a className="SocialLinks" href="http://www.google.com">
                                    Facebook
                            </a >
                            <a className="SocialLinks" href="http://www.google.com">
                                    Instagram
                            </a >
                            <a className="SocialLinks" href="http://www.google.com">
                                    LinkedIN
                            </a >
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default MainBody;
