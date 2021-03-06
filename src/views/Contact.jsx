import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import * as Yup from "yup";

import InputField from "../components/form/InputField";
import SubmitBtn from "../components/common/SubmitBtn";
import InputForm from "../components/form/InputForm";

class Contact extends Component {
  state = {};
  validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Le Nom d'utilisateur doit avoir aumoins 3 characteres!")
      .required("Veuillez entrer votre Nom s'il vous plait")
      .label("Nom"),
    lastName: Yup.string()
      .min(3, "Le Post Nom doit avoir aumoins 3 characteres!")
      .required("Veuillez entrer votre Postnom")
      .label("PostNom"),
    email: Yup.string().email("Email doit etre un adress email valide!"),
    message: Yup.string()
      .min(3, "Le message doit avoir aumoins 3 characteres")
      .required("Veuillez entrer votre message!"),
    telephone: Yup.string()
      .min(10, "Le numero de Telephone ne doit pas avoir moins de 10 chiffres")
      .label("Numero de telephone"),
  });

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
            <InputForm
              initialValues={{
                name: "",
                lastName: "",
                email: "",
                address: "",
                message: "",
                telephone: "",
              }}
              validationSchema={this.validationSchema}
            >
              <Row>
                <Col className="pr-1" md="6">
                  <InputField
                    name="name"
                    type="text"
                    label="Nom"
                    placeholder="Ex: John"
                  />
                </Col>
                <Col className="pl-1" md="6">
                  <InputField
                    name="lastName"
                    type="text"
                    label="Post Nom"
                    placeholder="Ex: Doe"
                  />
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <InputField
                    name="email"
                    type="text"
                    label="Email"
                    placeholder="Ex: johndoe@gmail.com"
                  />

                  <InputField
                    name="address"
                    type="text"
                    label="Address"
                    placeholder="Ex: Goma katindo RDC "
                  />
                  <InputField
                    name="telephone"
                    type="text"
                    label="Numero de telephone"
                    placeholder="Ex: (+243) 977 432 122"
                  />
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <InputField
                    name="message"
                    type="textarea"
                    label="Message"
                    placeholder="Votre message par ici"
                  />
                </Col>
              </Row>
              <Row>
                <SubmitBtn label="Envoyer" />
              </Row>
            </InputForm>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Contact;
