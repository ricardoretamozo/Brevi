import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import "../../assets/css/home.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import NavBar from "components/Landing/NavBar";
import Footer from "components/Landing/footer"
// reactstrap components
import {
   Button,
  Container,
  Row,
  Col
} from "reactstrap";

class Home extends React.Component {

  render() {
    return (
        <>
        <NavBar />
    <div className="mb-5 masthead">  
            <Container className="pt-5 h-100">
                <Row className="h-100">  
                    <Col lg="7" className="my-auto">    
              <div className="header-content mx-auto">
                <h1 className="mb-5">Descubre nuevas rutas y evita el caos del transporte público</h1>
                <Button className="but1" color="primary" size="lg">Descargalo YA!</Button>
              </div>       
            </Col>
            <Col lg="5" className="pt-5 my-auto"> 
                 <img src="https://i.ibb.co/4S50mnc/app.png" className="img-fluid" alt=""/>        
         </Col>
            </Row>
        </Container>  
    </div> 
    <Footer/>
          </>
        

    );
  }
}

export default Home;
