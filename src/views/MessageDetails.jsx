import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";
class MessageDetails extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="message-details-main-container">
          <div className="message-wrapper">
            <Card className="message-details-card">
              <CardHeader>
                <CardTitle tag="h4" className="message-title">
                  Message de la part de: {"Jean luc"}
                </CardTitle>
                <hr />
              </CardHeader>
              <CardBody className="message-container">
                <Row>
                  <Col md="12">
                    <div>
                      <span className="title" tag="h3">
                        Nom: Jean luc
                      </span>
                    </div>
                    <div>
                      <span className="title" tag="h3">
                        PostNom: Mukanire
                      </span>
                    </div>
                    <div>
                      <span className="title" tag="h3">
                        Email: jeanlucmukanire@gmail.com
                      </span>
                    </div>
                    <div>
                      <span className="title" tag="h3">
                        Address: Goma katindo av. Masisi No 100
                      </span>
                    </div>
                    <div>
                      <span className="title" tag="h3">
                        Tel: +243 999 078 243
                      </span>
                    </div>
                    <br />
                    <span>Message:</span>
                    <hr />

                    <div className="message-received-content-area">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Recusandae aliquam nobis consequuntur soluta ex nulla ut,
                      ad ducimus distinctio maiores itaque laboriosam in, odio
                      enim porro sed possimus, saepe rerum. Lorem ipsum, dolor
                      sit amet consectetur adipisicing elit. Recusandae aliquam
                      nobis consequuntur soluta ex nulla ut, ad ducimus
                      distinctio maiores itaque laboriosam in, odio enim porro
                      sed possimus, saepe rerum.
                    </div>
                    <hr />
                  </Col>
                  <Col
                    md="12"
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      className="btn-round"
                      color="primary"
                      onClick={() =>
                        this.props.history.push("/admin/discussion/")
                      }
                    >
                      Retourner
                    </Button>
                    <Button className="btn-round" color="danger">
                      Supprimer
                    </Button>
                  </Col>
                  <hr />
                </Row>
              </CardBody>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default MessageDetails;
