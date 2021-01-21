/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import * as Yup from "yup";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import InputForm from "components/form/InputForm";
import InputField from "components/form/InputField";
import SubmitBtn from "components/common/SubmitBtn";

class User extends React.Component {
  validationSchema = Yup.object().shape({
    startup: Yup.string(),
    username: Yup.string()
      .min(3, "Le Nom d'utilisateur doit avoir aumoins 3 characteres")
      .required("Veuillez entrer le Nom d'utilisatuer")
      .label("Nom d'utilisatuer"),
    email: Yup.string()
      .email("Email doit etre un adress email valide")
      .required("Veuillez entrer votre adress Email")
      .label("Email"),
    entreprise: Yup.string(),
    name: Yup.string().min(3, "Le Nom doit avoir aumoins 3 characteres"),
    lastName: Yup.string().min(
      3,
      "Le PostNom  doit avoir aumoins 3 characteres"
    ),
    address: Yup.string(),
    city: Yup.string(),
    country: Yup.string(),
    postalCode: Yup.number("Le code postal doit etre un nombre"),
    aboutMe: Yup.string(),
  });
  render() {
    return (
      <div className="profile-main-area">
        <div className="content profile-main-container">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/damir-bosnjak.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <input
                        type="file"
                        name="profile"
                        id=""
                        accept="image/*"
                        onChange={() => {}}
                        className="profile-image-selector"
                      />
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/mike.jpg")}
                      />
                      <input
                        type="file"
                        name="profile"
                        id=""
                        className="profile-image-selector"
                      />
                      <h5 className="title">Chet Faker</h5>
                    </a>
                    <p className="description">@chetfaker</p>
                  </div>
                  <p className="description text-center">
                    "I like the way you work it <br />
                    No diggity <br />I wanna bag it up"
                  </p>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      <Col className="ml-auto" lg="3" md="6" xs="6">
                        <h5>
                          12 <br />
                          <small>Files</small>
                        </h5>
                      </Col>
                      <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                        <h5>
                          2GB <br />
                          <small>Used</small>
                        </h5>
                      </Col>
                      <Col className="mr-auto" lg="3">
                        <h5>
                          24,6$ <br />
                          <small>Spent</small>
                        </h5>
                      </Col>
                    </Row>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Team Members</CardTitle>
                </CardHeader>
                <CardBody>
                  <ul className="list-unstyled team-members">
                    <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                            />
                          </div>
                        </Col>
                        <Col md="7" xs="7">
                          DJ Khaled <br />
                          <span className="text-muted">
                            <small>Offline</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                          >
                            <i className="fa fa-envelope" />
                          </Button>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require("assets/img/faces/joe-gardner-2.jpg")}
                            />
                          </div>
                        </Col>
                        <Col md="7" xs="7">
                          Creative Tim <br />
                          <span className="text-success">
                            <small>Available</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                          >
                            <i className="fa fa-envelope" />
                          </Button>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                            />
                          </div>
                        </Col>
                        <Col className="col-ms-7" xs="7">
                          Flume <br />
                          <span className="text-danger">
                            <small>Busy</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                          >
                            <i className="fa fa-envelope" />
                          </Button>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Editer votre Profile</CardTitle>
                </CardHeader>
                <CardBody>
                  <InputForm
                    initialValues={{
                      username: "",
                      name: "",
                      email: "",
                      lastName: "",
                      address: "",
                      aboutMe: "",
                      startup: "",
                      city: "",
                      country: "",
                      postalCode: "",
                    }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={this.validationSchema}
                  >
                    <Row>
                      <Col className="pr-1" md="5">
                        <InputField
                          name="startup"
                          label="Entreprise"
                          type="text"
                        />
                      </Col>
                      <Col className="px-1" md="3">
                        <InputField
                          name="username"
                          label="Nom d'utilisateur"
                          type="text"
                        />
                      </Col>
                      <Col className="pl-1" md="4">
                        <InputField
                          name="email"
                          label="Address Email"
                          type="text"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <InputField name="name" label="Nom" type="text" />
                      </Col>
                      <Col className="pl-1" md="6">
                        <InputField
                          name="lastname"
                          label="Post Nom"
                          type="text"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <InputField
                          name="address"
                          label="Address"
                          type="text"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <InputField name="city" label="Ville" type="text" />
                      </Col>
                      <Col className="px-1" md="4">
                        <InputField name="country" label="Pays" type="text" />
                      </Col>
                      <Col className="pl-1" md="4">
                        <InputField
                          name="postalCode"
                          label="Code Postal"
                          type="number"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <InputField
                          name="aboutMe"
                          label="Apropos de Moi"
                          type="textarea"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <SubmitBtn label="Metre a jour" />
                    </Row>
                  </InputForm>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default User;
