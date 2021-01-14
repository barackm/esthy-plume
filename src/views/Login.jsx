import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  Label,
} from "reactstrap";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="login-page-main-container">
        <Card className="card-user login-main-area">
          <CardHeader className="login-header">
            <CardTitle tag="h4" className="login-title">
              Se connecter
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Form>
              <Row>
                <Col className="pr-1 form-items" md="12">
                  <FormGroup>
                    <label>Nom d'utilisateur ou address Email</label>
                    <Input defaultValue="" placeholder="" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <label>Mot de pass</label>
                    <Input defaultValue="" placeholder="" type="password" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" id="checkbox2" /> Rester connecte
                  </Label>
                </FormGroup>
              </Row>
              <Row>
                <div className="update ml-auto mr-auto">
                  <Button className="btn-round" color="primary" type="submit">
                    Se connecter
                  </Button>
                </div>
              </Row>
              <Row>
                <div className="update ml-auto mr-auto login-links">
                  <Link to="/signup">Mot de passe oublie ?</Link>
                  <Link to="/signup">Vous n'avez pas de compte ?</Link>
                </div>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Login;
