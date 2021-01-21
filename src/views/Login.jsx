import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import InputForm from "../components/form/InputForm";
import InputField from "../components/form/InputField";
import SubmitBtn from "../components/common/SubmitBtn";

class Login extends Component {
  state = {};
  validationSchema = Yup.object().shape({
    email: Yup.string()
      // .email("Email doit etre un adress email valide")
      .required("Veuillez entrer votre adress Email ou Nom d'utilisateur")
      .label("Email"),
    password: Yup.string()
      .min(4, "Le mot de pass ne doit pas etre court")
      .required("Veuillez entrer votre mot de pass")
      .label("Mot de pass"),
  });
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
            <InputForm
              onSubmit={(values) => console.log(values)}
              validationSchema={this.validationSchema}
              initialValues={{ email: "", password: "" }}
            >
              <Row>
                <Col className="pr-1 form-items" md="12">
                  <InputField
                    name="email"
                    label="Email ou Nom d'utilisateur"
                    type="text"
                  />
                  <InputField
                    name="password"
                    label="Mot de pass"
                    type="password"
                  />
                </Col>
              </Row>

              <Row>
                <SubmitBtn label="Se connecter" />
              </Row>
              <Row>
                <div className="update ml-auto mr-auto login-links">
                  <Link to="/signup">Mot de passe oublie ?</Link>
                  <Link to="/signup">Vous n'avez pas de compte ?</Link>
                </div>
              </Row>
            </InputForm>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Login;
