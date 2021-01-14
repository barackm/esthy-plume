import React, { Component } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-page-main-container">
        <Card className="card-user contact-main-area">
          <CardHeader className="login-header">
            <CardTitle tag="h4" className="login-title">
              Contactez nous
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Form>
              <Row>
                <Col className="pr-1" md="6">
                  <FormGroup>
                    <label>Nom</label>
                    <Input placeholder="ex: John" type="text" />
                  </FormGroup>
                </Col>
                <Col className="pl-1" md="6">
                  <FormGroup>
                    <label>Post Nom</label>
                    <Input placeholder="ex: Doe" type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <label>Email</label>
                    <Input placeholder="ex: me@gmail.com" type="email" />
                  </FormGroup>
                  <FormGroup>
                    <label>Address</label>
                    <Input placeholder="ex: Goma Katindo" type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <label>Message</label>
                    <Input
                      type="textarea"
                      placeholder="Votre message par ici"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <div className="update ml-auto mr-auto">
                  <Button className="btn-round" color="primary" type="submit">
                    Envoyer
                  </Button>
                </div>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Contact;
