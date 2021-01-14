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
} from "reactstrap";
class Signup extends Component {
  state = {};
  render() {
    return (
      <div className="login-page-main-container">
        <Card className="card-user login-main-area">
          <CardHeader className="login-header">
            <CardTitle tag="h4" className="login-title">
              Creer un compte
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Form>
              <Row>
                <Col className="pr-1 form-items" md="12">
                  <FormGroup>
                    <label>Nom d'utilisateur</label>
                    <Input defaultValue="" placeholder="" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <label>Address Email</label>
                    <Input defaultValue="" placeholder="" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <label>Mot de pass</label>
                    <Input defaultValue="" placeholder="" type="password" />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <div className="update ml-auto mr-auto">
                  <Button className="btn-round" color="primary" type="submit">
                    Creer mon compte
                  </Button>
                </div>
              </Row>
              <Row>
                <div className="update ml-auto mr-auto login-links">
                  <Link to="/login">Avez vous deja un compte ?</Link>
                </div>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Signup;
