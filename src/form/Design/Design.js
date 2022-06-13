import React from "react";
import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import mxplayer from "../../assets/mxplayer.svg";
import bannerGirlImg from "../../assets/bannerGirl.png";
import school from "../../assets/school.svg";
import demo from "../../assets/demo.svg";
import world from "../../assets/world.svg";
import login from "../../assets/login.png";
import scholarship from "../../assets/scholarship.png";
import course from "../../assets/course.png";
import learning from "../../assets/learning.png";
import computer from "../../assets/computer.png";
import lesson from "../../assets/lesson.svg";
import video from "../../assets/video.svg";
import corona from "../../assets/corona.png";
import laptop from "../../assets/laptop.png";
import woman from "../../assets/woman.png";
import blended from "../../assets/blended.png";
import distance from "../../assets/distance.png";
import happy from "../../assets/happy.png";
import train from "../../assets/train.svg";
import download from "../../assets/download.png";
import bihance from "../../assets/bihance.svg";
import internet from "../../assets/internet.svg";
import facebook from "../../assets/facebook.svg";
import "./Design.css";

function Design() {
  return (
    <div className="header container-fluid">
      <div className="container">
        <Navbar expand="lg" className="navbarMain">
          <Container>
            <div className="textheader">Eduo.</div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-center">
              <Nav
                className="my-2 my-lg-0 justify-center"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown title="Courses" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Innovations" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Platforms" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Resouces" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <div className="demo">
              <Button className="searchButton">Request Demo</Button>
            </div>
          </Container>
        </Navbar>
      </div>
      <div className="level container">
        <h1 className="headertxt">
          Take Your learning<br></br> To the Next Level.
        </h1>
        <span>
          Goin critical student insights when assossing while freeing <br></br>{" "}
          teachers from the poind of grading. simply add Eduo to your<br></br>{" "}
          learning platform.
        </span>
        <div className="paras">
          <div className="complete">
            <Button className="searchButton request">Request Demo</Button>
          </div>
          <div className="player">
            <img src={mxplayer} alt="mxplayer" />
          </div>
          <div className="what">
            <span>What's Eduo?</span>
          </div>
          <div>
            <img src={bannerGirlImg} className="contact" />
          </div>
        </div>
        <div>
          <div className="group">
            <div className="school">
              <img src={school} alt="school" className="student" />
              <p className="cam">16,032</p>
              <span className="camero">Schools</span>
            </div>
            <div className="one">
              <img src={demo} alt="demo" className="two" />
              <p className="three">10M</p>
              <span className="four">Users</span>
            </div>
            <div className="A">
              <img src={world} alt="world" className="B" />
              <p className="C">119</p>
              <span className="D">Countries</span>
            </div>
          </div>
        </div>
      </div>
      <div className="basic container">
        <img src={login} className="login" />
        <div className="debit">
          <span className="our">
            Benefit from our online<br></br> learning
          </span>
          <div className="do">
            <img src={scholarship} alt="scholarship" className="ship" />
            <div className="does">
              <span className="online">Online degrees</span>
              <p className="get">
                Get online bachelor's degree from from top universities,
                <br></br> apply now.
              </p>
            </div>
          </div>
          <div className="do">
            <img src={course} alt="course" className="ship" />
            <div className="does">
              <span className="online">Shorts courses</span>
              <p className="get">
                Get online bachelor's degree from from top universities,
                <br></br> apply now.
              </p>
            </div>
          </div>
          <div className="do">
            <img src={learning} alt="learning" className="ship" />
            <div className="does">
              <span className="online">Learn with experts</span>
              <p className="get">
                Get online bachelor's degree from from top universities,
                <br></br> apply now.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="main-header">
          <h2 className="popular">Our Popular Couses</h2>
          <span className="mit">
            Search Mit Machine Learning Course, Information from Trusted
            Internet Sources.
          </span>
          <p className="info">Useful & Relevant. Explore the Best Info Now.</p>
        </div>
      </div>
      <div className="box container">
        <div className="magic">
          <img src={computer} alt="computer" className="work" />
          <div className="time">
            <div className="master">
              <span className="english  p-2">English Master</span>
            </div>
            <div className="rate">
              <span className="star">⭐ 4.3</span>
            </div>
          </div>
          <div className="to">
            <p className="improve">
              Master English: How To Improve <br></br>Your English Speaking
            </p>
          </div>
          <div className="buds">
            <img src={lesson} alt="lesson" className="son" />
            <p className="graph">10s lesson</p>
            <img src={video} alt="video" className="audio" />
            <p className="class">online class</p>
          </div>
        </div>
        <div>
          <div className="magic">
            <img src={corona} alt="corona" className="work" />
            <div className="time">
              <div className="master">
                <span className="english  p-2">English Master</span>
              </div>
              <div className="rate">
                <span className="star">⭐ 4.5</span>
              </div>
            </div>
            <div className="to">
              <p className="improve">
                Master English: How To Improve <br></br>Your English Speaking
              </p>
            </div>
            <div className="buds">
              <img src={lesson} alt="lesson" className="son" />
              <p className="graph">10s lesson</p>
              <img src={video} alt="video" className="audio" />
              <p className="class">online class</p>
            </div>
          </div>
        </div>
        <div>
          <div className="magic">
            <img src={laptop} alt="laptop" className="work" />
            <div className="time">
              <div className="master">
                <span className="english  p-2">English Master</span>
              </div>
              <div className="rate">
                <span className="star">⭐ 4.9</span>
              </div>
            </div>
            <div className="to">
              <p className="improve">
                Master English: How To Improve <br></br>Your English Speaking
              </p>
            </div>
            <div className="buds">
              <img src={lesson} alt="lesson" className="son" />
              <p className="graph">10s lesson</p>
              <img src={video} alt="video" className="audio" />
              <p className="class">online class</p>
            </div>
          </div>
        </div>
      </div>
      <div className="first container">
        <div className="sec">
          <div>
            <h2 className="become">Become an instructor</h2>
          </div>
          <div className="program">
            <p className="apply">
              We apply coaching psychology in an easy to understand & practical{" "}
              <br></br>way. Uniquely designed programs for individuals or
              teams.Book your<br></br> free initial assessment! Personalised
              Approach.
            </p>
            <span className="apply">
              APAC Accredited. Degree programs: Psychology, Counselling,
              <br></br> Criminology, Social Work.
            </span>
          </div>
          <div className="here">
            <Button>Click Here To Apply</Button>
          </div>
        </div>
        <img src={woman} alt="woman" className="man" />
      </div>
      <div>
        <div className="for container">
          <div className="p-5">
            <h2 className="innovation">Our Innovations</h2>
            <span className="smart">
              Search Smart Manufacturing Solutions, Information from Trusted
              Internet Sources.
            </span>
            <p className="result">
              Services: Secure Search, No.1 Answers, Trusted Results.
            </p>
          </div>
          <div>
            <div className="line">
              <div className="service">
                <img src={blended} alt="blended" className="blen" />
                <h4 className="freed">Hours Freed</h4>
                <Button className="using">Show me</Button>
              </div>
              <div className="service">
                <img src={distance} alt="distance" className="real" />
                <h4 className="time">Real Time Intelligence</h4>
                <Button className="using">Show me</Button>
              </div>
              <div className="service">
                <img src={happy} alt="happy" className="real" />
                <h4 className="center">student centered</h4>
                <Button className="using">Show me</Button>
              </div>
            </div>
            <div className="streak">
              <div className="service">
                <img src={train} alt="train" className="real" />
                <h4 className="focus">Mastery Focused</h4>
                <Button className="using">Show me</Button>
              </div>
              <div className="service">
                <img src={distance} alt="distance" className="real" />
                <h4 className="any">Any Platform</h4>
                <Button className="using">Show me</Button>
              </div>
              <div className="service">
                <img src={train} alt="train" className="real" />
                <h4 className="focus">Mastery Focused</h4>
                <Button className="using">Show me</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="main-header">
          <h2 className="popular">Student Testimonial </h2>
          <span className="mit">
            Search Mit Machine Learning Course, Information from Trusted
            Internet Sources.
          </span>
          <p className="info">Useful & Relevant. Explore the Best Info Now.</p>
        </div>
      </div>
      <div>
        <div className="justien">
          <span className="topic">
            "A paragraph is a series of related sentences developing a central
            idea,
          </span>
          <br></br>
          <span className="argument">
            Paragraphs add one idea at a time to your broader argument.
          </span>
          <br></br>
          <span className="sentence">
            A paragraph consists of one or more sentences."
          </span>
          <div>
            <img src={download} alt="download" className="later" />
            <h6 className="doe">Jenifer Doe</h6>
            <p className="software">Student</p>
          </div>
        </div>
      </div>
      <div>
        <div className="in">
          <h1 className="touch">Get In Touch</h1>
          <span className="should">
            A good contact form should include 1 or 2 fields. The phone number
            and perhaps a name.
          </span>
          <p className="on">So what stands out on this page.</p>
          <div>
            <div className="put">
              <div className="address">
                <span className="email">Enter your email address</span>
              </div>
              <div className="cribe">
                <span>Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerMain">
        <div className="detail">
          <div className="tempor">
            <h1 className="loream">Eduo.</h1>
            <p className="dolor">
              Loream ipsum dolor sit amet,<br></br>consectetur adipiscing
              elit,sed do<br></br> eiusmod tempor incididunt.Loream<br></br>{" "}
              ipsum dolor sit
            </p>
            <div className="imgmain">
              <div>
                <img src={bihance} alt="bihance" className="footerimg" />
                <img src={internet} alt="internet" className="footerimg" />
                <img src={facebook} alt="facebook" className="footerimg" />
              </div>
            </div>
          </div>
          <div className="tempor">
            <h2 className="Company">Company</h2>
            <p className="dolor">About Us</p>
            <p className="dolor">Services</p>
            <p className="dolor">Company</p>
            <p className="dolor">Testimonial</p>
          </div>
          <div className="tempor">
            <h2 className="Company">Support</h2>
            <p className="dolor">Help Center</p>
            <p className="dolor">Tweet @ Us</p>
            <p className="dolor">Webians</p>
            <p className="dolor">Feedback</p>
          </div>
          <div className="tempor">
            <h2 className="Company">Links</h2>
            <p className="dolor">Courses</p>
            <p className="dolor">become teacher</p>
            <p className="dolor">Service</p>
            <p className="dolor">All in one</p>
          </div>
          <div className="tempor">
            <h2 className="Company">Contact us</h2>
            <p className="dolor">(880)112 345 678</p>
            <p className="dolor">support@ mail.com</p>
          </div>
        </div>
        <div className="footerTxt">
          <span>Copyright @ 2020 All rights Reserved - Eduo</span>
        </div>
      </div>
    </div>
  );
}

export default Design;
