import React, { Component } from "react";

import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

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
                        Nom: Jean luc
                      </span>
                    </div>
                    <hr />
                  </Col>
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
