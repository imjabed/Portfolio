import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import project1 from '../images/biblio.png'
import project2 from '../images/listkaro.png'
import project3 from '../images/facesecure.png'

import './ProjectCss.css'
import MyNavbar from "./Navbar";
const Project = () => {
  return (
    <>
        <MyNavbar/>

        <div className="projectContainer" style={{textAlign:'left'}} >
                    <Card style={{ width: '18rem', maxHeight:'500px'}}>
                        <Card.Img variant="top" src={project1} />
                        <Card.Body>
                            <Card.Title>Project Bibliophilia</Card.Title>
                            <Card.Text >
                            An online eCommerce platform for buying books, offering users a seamless shopping experience. Built using the MERN Stack,it includes features like signup and login, a shopping cart, and book listings. It provides a clean and responsive interface for easy browsing.
                            </Card.Text>
                            <a href="https://github.com/imjabed/Bibliophilia">
                                <Button variant="primary">Project On Github</Button>
                            </a>
                        </Card.Body>
                    </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={project2} />
                            <Card.Body>
                                <Card.Title>Project ListKaro</Card.Title>
                                <Card.Text>
                                An Ocr Based ecommerce site where you upload a handwritten list of items or add manually products in a list, our site will search for the items with appropiate quantity and creates a cart for you. Saving your time and Efforts. Experience One Click Shopping
                                </Card.Text>
                                <a href="https://list-karo.vercel.app/">
                                <Button variant="primary">Visit Site</Button>
                                </a>
                            </Card.Body>
                        </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={project3} height={'250px'} width={'250px'} style={{objectFit:'cover'}}/>
                        <Card.Body>
                            <Card.Title>Project FaceSecure</Card.Title>
                            <Card.Text>
                            A System which allows you to sign up and login with your face. Instead of using traditional password login, Face Secure allows you to securely login to the site with face recognition method.
                            </Card.Text>
                            <a href="https://github.com/imjabed/FaceSecure">
                            <Button variant="primary">Github Project</Button>
                            </a>
                        </Card.Body>
                    </Card>
        </div>



        
    </>
  );
};

export default Project;
