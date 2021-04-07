import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import "../../assets/css/contact.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";

// reactstrap components
import {
  Button,
  FormGroup,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";



class Contact extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        
        <main ref="main">

          {/* Contactanos */}
          <div id="fh5co-contact" classnames="fh5co-contact-outer container-fluid">
            <Container>
              <div className="text-center m-3">
                <h1>CONTÁCTANOS</h1>
              </div>              
              <hr/>
              <Row classnames="p-3">
                <Col lg="8" classnames="wow fadeIn animated" data-wow-delay="0.25s">
                  <form id="contact-form" action="#">
                    <Row classnames="text-center">
                      <Col lg="6" classnames="mb-2">
                        <FormGroup classnames="form-group">
                          <i className="fa fa-user"/>
                          <Input type="text" classnames="form-control-alternative" placeholder="Ingrese su nombre"/>
                        </FormGroup>                        
                      </Col>
                      <Col lg="6" classnames="mb-2">
                        <FormGroup classnames="form-group">
                          <i className="fa fa-envelope"/>
                          <Input type="text" classnames="form-control" placeholder="Ingrese su email"/>
                        </FormGroup>                         
                      </Col>
                    </Row>
                    <div classnames="form-group mt-2">
                      <FormGroup classnames="form-group">
                        <i className="fa fa-pencil-alt"/>
                        <Input type="text" classnames="form-control" placeholder="Ingrese su asunto"/>
                      </FormGroup>
                    </div>
                    <div classnames="form-group mt-2">
                      <FormGroup classnames="form-group">
                        <Input type="text" id="textarea" classnames="form-control-alternative md-textarea" placeholder="Redacte su mensaje"></Input>
                      </FormGroup>                      
                    </div>
                      <Button type="submit" classnames="button" value="Enviar">Enviar</Button>
                  </form>
                </Col>
                <Col id="banner" lg="4" classnames="wow fadeIn animated text-center  mt-0 mb-0" data-wow-delay="0.25s">
                  <center>
                    <img src="https://res.cloudinary.com/dyfo5owv8/image/upload/v1617633139/samples/breviLogo_uc4giz.png" alt=""/>
                    <Row id="row">
                      <i className="fa fa-envelope"/>
                      <p>(054) 426610</p>
                      <i className="fa fa-phone"/>
                      <p>brevi@gmail.com</p>
                    </Row>
                  </center>                  
                </Col>
              </Row>              
            </Container>
            
            
          </div>
          {/* End Contactanos */}

        </main>

        
      </>
    );
  }
}

export default Contact;
