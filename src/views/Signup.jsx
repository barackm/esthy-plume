import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import InputForm from "components/form/InputForm";
import InputField from "components/form/InputField";
import SubmitBtn from "components/common/SubmitBtn";
class Signup extends Component {
  state = {};
  validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Le Nom d'utilisateur doit avoir aumoins 3 characteres")
      .required("Veuillez entrer le Nom d'utilisateur")
      .label("Nom d'utilisatuer"),
    email: Yup.string()
      .email("Email doit etre un adress email valide")
      .required("Veuillez entrer votre adress Email")
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
              Creer un compte
            </CardTitle>
          </CardHeader>
          <CardBody>
            <InputForm
              onSubmit={(values) => console.log(values)}
              initialValues={{ username: "", email: "", password: "" }}
              validationSchema={this.validationSchema}
            >
              <Row>
                <Col className="pr-1 form-items" md="12">
                  <InputField
                    name="username"
                    label="Nom d'utilisateur"
                    type="text"
                  />

                  <InputField name="email" label="Address Email" type="text" />

                  <InputField
                    name="password"
                    label="Mot de pass"
                    type="password"
                  />
                </Col>
              </Row>

              <Row>
                <SubmitBtn label="Creer mon compte" />
              </Row>
              <Row>
                <div className="update ml-auto mr-auto login-links">
                  <Link to="/login">Avez vous deja un compte ?</Link>
                </div>
              </Row>
            </InputForm>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Signup;
