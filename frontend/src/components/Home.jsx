import { Parallax } from 'react-parallax';

import Carousel from 'react-bootstrap/Carousel';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar';
import Contact from './Contact';

import bg1 from '../images/bg1.jpg'
import bg2 from '../images/bg2.jpg'
import bg3 from '../images/mancoding.jpg'
import me from '../images/Me.jpg'
import certificate1 from '../images/certificate1.jpeg'
import certificate2 from '../images/certificate2.jpeg'
import linkedin from '../images/linkedin.png'
import instagram from '../images/instagram.png'
import github from '../images/github.png'
import project1 from '../images/biblio.png'
import project2 from '../images/listkaro.png'
import project3 from '../images/facesecure.png'




import './Home.css'
const Home = () => {

    return(
        <>
            <Navbar/>
            <Parallax blur={3} className='firstbg' bgImage={bg1} strength={800}  bgClassName="custom-bg1">
                    <div className="firstcontent">
                        <span className='nameTitle'>MD ABU JABED <hr /> <p style={{fontSize:'14px'}}>Web Developer</p></span>
                    </div>
            </Parallax>

            <div className="homeAboutContainer">

                    <div className="imgContainer">
                        <img src={me} alt="" height={'400px'} width={'300px'} />
                    </div>

                    <div className="textContainer">
                        <p>A Mern Stack Developer <hr /> A web developer with expertise in the MERN stack (MongoDB,
                        Express.js, React.js, Node.js) and Python, with hands-on experience
                        from industrial training and projects. Developed an online bookstore
                        and an OCR-Based one click shopping platform, gaining knowledge in
                        both frontend and backend development. Additionally have basic
                        knowledge of Cloud Computing, Deployment of websites using AWS
                        and GitHub.</p>
                    </div>


            </div>

            <Parallax blur={5} className='secondbg' bgImage={bg2} strength={800}  bgClassName="custom-bg2">
                <span className='projectTitle'>Projects</span>

                <div className="projectContainer" style={{textAlign:'left'}} >
                    <Card style={{ width: '18rem', maxHeight:'500px'}}>
                        <Card.Img variant="top" src={project1} />
                        <Card.Body>
                            <Card.Title>Project Bibliophilia</Card.Title>
                            <Card.Text >
                            An online eCommerce platform for buying books, offering users a seamless shopping experience. Built using the MERN Stack,it includes features like signup and login, a shopping cart, and book listings. It provides a clean and responsive interface for easy browsing.
                            </Card.Text>
                            <Button variant="primary">Project On Github</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={project2} />
                        <Card.Body>
                            <Card.Title>Project ListKaro</Card.Title>
                            <Card.Text>
                            An Ocr Based ecommerce site where you upload a handwritten list of items or add manually products in a list, our site will search for the items with appropiate quantity and creates a cart for you. Saving your time and Efforts. Experience One Click Shopping
                            </Card.Text>
                            <Button variant="primary">Visit Site</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={project3} height={'250px'} width={'250px'} style={{objectFit:'cover'}}/>
                        <Card.Body>
                            <Card.Title>Project FaceSecure</Card.Title>
                            <Card.Text>
                            A System which allows you to sign up and login with your face. Instead of using traditional password login, Face Secure allows you to securely login to the site with face recognition method.
                            </Card.Text>
                            <Button variant="primary">Visit Site</Button>
                        </Card.Body>
                    </Card>
                </div>

            </Parallax>
            <div className='expTitle'>
                    <span >Experiences</span>
            </div>

            <Parallax blur={5} className='thirdbg' bgImage={bg3} strength={800}  bgClassName="custom-bg3">
            <div className="carouselWrapper">             
                <Carousel className="expCaro">
                <Carousel.Item>
                    <img
                    className="d-block w-100 certificate"
                    src={certificate1}
                    alt="First slide"
                    style={{
                        objectFit: 'contain',
                        height: '500px',
                    }}
                    />
                    <Carousel.Caption className='certificatecaption'>
                    <h5>1 Month Industrial Training</h5>
                    <p>on MERN Stack at Ardent Computech Pvt Ltd</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100 certificate"
                    src={certificate2}
                    alt="Second slide"
                    style={{
                        objectFit: 'contain',
                        height: '500px',
                    }}
                    />
                    <Carousel.Caption className='certificatecaption'>
                    <h5>3 Months Industrial Training and Internship</h5>
                    <p>on MERN Stack, Deployment and Professional Communication at Ardent Computech Pvt Ltd</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>   
            </Parallax>

            <div className='expTitle'>
                    <span >Contact Me</span>
            </div>
            <marquee style={{fontSize:'14px', color:'white', textAlign:'center', letterSpacing:'3px' }} scrollamount="10"  behavior="scroll" scrolldelay="0" direction="left">
                For hiring | inquiries |  collaborations | questions | Contact me by sending your message below. Your message will be responded within 48 hours of receiving </marquee>

            <Parallax blur={5} className='fivebg' bgImage={bg1} strength={800}  bgClassName="custom-bg">
                <Contact />
            </Parallax>

            <footer>
                <div className="footerleft">
                    Md Abu Jabed
                    <p style={{fontSize:'11px', letterSpacing:'3px'}}>This website is made by myself </p>
                </div>

                <div className="footerright">
                    Want to know more about me? Follow me :)
                    <div className='followicons'>
                        <a href="https://www.linkedin.com/in/imabujabed/"> <img src={linkedin} alt="" height={'50px'} width={'50px'}/></a>
                        <a href=""> <img src={github} alt="" height={'50px'} width={'50px'} /></a>
                        <a href=""> <img src={instagram} alt="" height={'50px'} width={'50px'}/></a>
                    </div>

                </div>

            </footer>



        </>
    )
}
export default Home;