
import React from 'react';
// import Header from './Header';
import "./Home.css";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import ComputerIcon from '@material-ui/icons/Computer';
import GestureIcon from '@material-ui/icons/Gesture';
import FaceIcon from '@material-ui/icons/Face';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ChatIcon from '@material-ui/icons/Chat';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import LanguageIcon from '@material-ui/icons/Language';
import ListIcon from '@material-ui/icons/List';
import HttpIcon from '@material-ui/icons/Http';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
function Home() {
    
    return (
        <div className = "Home">
            <div className = "home__container" id = "home">
                
                <div className = "greeting__background">
                    <div className = "greeting__divider">
                        <h3>Hello, I'm Vaibhav Patel</h3>
                        <h4 className = "greeting__line01">A student <span
                            class = "greeting__line02" > at Wilfrid Laurier University.</span> 
                        </h4>
                    </div>
                </div>
            </div>

           <div className = "aboutme__container" id = "about"> 
                <img 
                    className = "about__img"
                    src = "https://firebasestorage.googleapis.com/v0/b/instagram-clone-9babf.appspot.com/o/images%2F90389389_218504109264280_814475539061407744_n.jpg?alt=media&token=13078fbd-ed85-4215-9260-063cebe70fac"
                    alt = ""
                />
                <div className = "about__container">
                    
                    <h2>Hi there! Nice to meet you</h2>
                    <p className = "about_para">
                    I'm a second-year Computer Science student at Wilfrid Laurier University. I'm an enthusiastic individual, 
                    aiming to become a professional software and app developer. From a young age, I have always been dreven to 
                    research about new technologies that can drastically change our life. Automation and Artificial 
                    Intelligence (AI) is few of the main topics for me, as I believe it can exceedingly improve our lifestyle.
                    </p>
                    
                    <div className = "about_contact">
                        <div className = "line_one"> 
                            <p className = "a_contact_items">
                                <LocationOnIcon / > 
                                <span className = "about_header">Location</span>: Ajax, Ontario
                                <p className = "a_contact_items_l01"><PhoneIcon / > 
                                <span className = "about_header">Phone</span>: +(647)-588-0930</p>
                            </p>
                            
                            <p className = "a_contact_items">
                                <PersonIcon / >  
                                <span className = "about_header">Age</span>: 19
                                <p className = "a_contact_items_l02">
                                    <EmailIcon / >
                                    <span className = "about_header">Email</span> : vaibhav.p2305@gmail.com
                                </p>
                            </p>
                        </div>
                        
                    </div>

                    <div className = "skills_container"> 
                        <h3>Proficent In:</h3>
                        <span>
                            <button className="skill_list">Python</button>
                        </span>
                        <span>
                            <button className="skill_list">Java</button>
                        </span>
                        <span>
                            <button className="skill_list">C</button>
                        </span>
                        <span>
                            <button className="skill_list">CSS</button>
                        </span>
                        <span>
                            <button className="skill_list">JavaScript</button>
                        </span>
                        <span>
                            <button className="skill_list">Andriod Studio</button>
                        </span>
                    </div>

                    <a className = "cv_link" href = "https://drive.google.com/file/d/167GR1ou6hxRThfdHW6KYehjform1Bqfk/view?usp=sharing" target = "_blank">
                        <button>
                            Download CV
                        </button>           
                    </a>
                </div>
                {/* <div className = "maintenance">
                    <h1>Sorry for the inconvenience.</h1>
                    <p>The site is still developing, please come back later...</p>
                </div> */}
            </div> 
            
            <div className = "whatI_canDo" id = "talents">
                <h1>~~~~What I Can Do~~~~</h1>
                <div className = "whatIcanDo_cards">
                    <div className = "cards">
                        <PhoneIphoneIcon fontSize = "large"/>
                        <h3>App Development</h3>
                        <span><p>I have created few web based applications such as instagram-clone, and todo-list but now looking to become a Andriod/iOS app developer. </p></span>
                    </div>
                    <div className = "cards">
                        <ComputerIcon fontSize = "large"/>
                        <h3>Web Design</h3>
                        <span><p>Using JavaScript, CSS, HTML, and databases like Firebase, I can design a functional E-commerce website. One of my projects that utilizes this is Amazon-clone.</p></span>
                    </div>
                    <div className = "cards">
                        <GestureIcon fontSize = "large"/>
                        <h3>Drawing</h3>
                        <span><p>Ever since I was young, I loved drawing out my ideas as it helped me visualize while also increasing my creativity.</p></span>
                    </div>
                </div>
            </div>

            <div className = "experience_container" id = "experience">
                <h1>~~~~Experience~~~~</h1>
                <div className = "experience_list">
                    <h3>Laurier Work Study Program | <span className = "position">Research Assistant</span></h3>
                    <li>
                    Conducted internet research, and analyzed the website about most Legal departments present in Canada such as Law firms, and Police services.
                    </li>
                    <li>
                    Compiled results in an organized and useful format using Microsoft Excel, to provide access to the information collected.
                    </li>
                    <li>
                    Analyzed and picked relative information about the departments that may be useful for the organization.
                    </li>
                </div>
                <div className = "experience_list2">
                    <h3>Patel Accounting and Tax Consultant Inc. | <span className = "position">UX Designer / Tax Accountant</span></h3>
                    <li>
                        Helped give insightful ideas on how to better layout the website to make it as user-friendly as possible.
                    </li>
                    <li>
                        Effectively used QuickBooks and DT Max software to manage clients accounts and tax respectively.
                    </li>
                    <li>
                        Prepared tax returns for various clients.
                    </li>
                </div>
            </div>
            
            <div className = "projects_container" id = "projects">
                <h1>~~~~Projects~~~~</h1>
                <div className = "projects_list">
                    <div className = "project_card">
                        <FaceIcon fontSize = "large"/>
                        <h3>Face Detection and Recognition</h3>
                        <span>
                            <p>Developed a program using <strong>OpenCV</strong> that recognizes number of individuals present in the picture or video, and create a seperate image of those faces.</p>
                        </span>
                        <h2><a href = "https://github.com/vp2305/Face-Detection-and-Face-Recognition" target = "_blank"><GitHubIcon/></a></h2>
                    </div>
                    <div className = "project_card">
                        <ChatIcon fontSize = "large"/>
                        <h3>TCP-Chatroom</h3>
                        <span>
                            <p>Created a server and client program using <strong>Python</strong> and <strong>socket</strong> that serves as a simple chatroom where the admin has the ability to ban or kick someone out, 
                            while also having the ability to text.</p>
                        </span>
                        <h2><a href = "https://github.com/vp2305/TCP-Chatroom" target = "_blank"><GitHubIcon/></a></h2>
                    </div>
                    <div className = "project_card">
                        <RecordVoiceOverIcon fontSize = "large"/>
                        <h3>Voice Assistant</h3>
                        <span>
                            <p>Created a voice assistant using <strong>Python</strong> and libraries such as <strong>pyttsx3, PyAudio, and SpeechRecognition.</strong> Implemented 
                            the program to do basic calculations, give information or search on a topic, open an application, send whatsapp message, or tell the current time through text to speech.
                            </p>
                        </span>
                        <h2><a href = "https://github.com/vp2305/VoiceAssistant" target = "_blank"><GitHubIcon/></a></h2>
                    </div>
                    <div className = "project_card">
                        <SportsEsportsIcon fontSize="large"/>
                        <h3>Snake Game</h3>
                        <span>
                            <p>Developed an Event-Driven programming snake game using <strong>Java</strong>, that is triggerd based on the users input and key press.</p>
                        </span>
                        <h2><a href = "https://github.com/vp2305/Snake-Game" target = "_blank"><GitHubIcon/></a></h2>
                    </div>
                </div>
                <div className = "projects_list">
                    <div className = "project_card">
                        <LanguageIcon fontSize="large"/>
                        <h3>Amazon-Clone (E-commerce)</h3>
                        <span>
                            <p>Created a full E-commerce website using <strong>React, JS, CSS, Stripes, and Firebase</strong>. Implemented functionalities such as login in,
                            add to cart, proceed with checkout, and order history.</p>
                        </span>
                        <h2><a href = "https://github.com/vp2305/AmazonClone" target = "_blank"><GitHubIcon/></a> <a href="https://clone-341d6.web.app/" target = "_blank"><LaunchIcon/></a></h2>
                    </div>
                    <div className = "project_card">
                        <ListIcon fontSize="large"/>
                        <h3>Todo-List</h3>
                        <span>
                            <p>Developed a web application using the <strong>Firebase database</strong> that keeps track of the user's planned, important or daily tasks.</p>
                        </span>
                        <h2><a href = "https://github.com/vp2305/Todo-List" target = "_blank"><GitHubIcon/></a> <a href="https://todo-list-23.web.app/" target = "_blank"><LaunchIcon/></a></h2>
                    </div>
                    <div className = "project_card">
                        <HttpIcon fontSize = "large"/>
                        <h3>Website Portfolio</h3>
                        <span>
                            <p>Created this website using <strong>React, JS, CSS, and Firebase</strong>. Used material-ui for additional functionality and icons.</p>
                        </span>
                        <h2><a href = "" target = "_blank"><GitHubIcon/></a></h2>
                    </div>
                    <div className = "project_card">
                        <InstagramIcon fontSize = "large"/>
                        <h3>Instagram Clone</h3>
                        <span>
                            <p>Created this Instagram-clone using <strong>React, JS, CSS, and Firebase</strong>. Implemented functionalities such as signing in, uploading a picture and commenting.</p>
                        </span>
                        <h2><a href = "https://github.com/vp2305/Instagram-Clone" target = "_blank"><GitHubIcon/></a> <a href="https://instagram-clone-9babf.web.app/" target = "_blank"><LaunchIcon/></a></h2>
                    </div>
                </div>
            </div>

            

            <div className = "contact_container" id = "contact">
                <h1>Get In Touch</h1>
                <h2>
                    <a className = "icon"  href = "https://www.linkedin.com/in/vaibhav-patel-3125b6198/" target = "_blank"><LinkedInIcon fontSize = "large"/></a>
                    <a className = "icons"  href = "https://www.instagram.com/vaibhav.p23/" target = "_blank"><InstagramIcon fontSize = "large"/></a>
                    <a className = "icons"  href = "mailto:vaibhav.p2305@gmail.com" target = "_blank"><MailIcon fontSize = "large"/></a>
                    <a className = "icons"  href = "https://github.com/vp2305" target = "_blank"><GitHubIcon fontSize = "large"/></a>
                </h2>
                
            </div>

        </div>
    )
}

export default Home
