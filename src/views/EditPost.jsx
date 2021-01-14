import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
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
  FormText,
} from "reactstrap";

class EditPost extends Component {
  state = {};
  render() {
    return (
      <div className="new-post-page-main-container">
        <Card className="card-user new-post-main-area">
          <CardHeader className="login-header">
            <CardTitle tag="h4" className="login-title">
              Nouvel article
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <div className="editor-main-area">
                <CKEditor
                  className="editor"
                  editor={ClassicEditor}
                  data="<p>Hello from CKEditor 5!</p>"
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>
            </Row>
            <Form>
              <Row>
                <Col className="pr-1 form-items" md="12">
                  <FormGroup>
                    <label>Titre de l'article</label>
                    <Input defaultValue="" placeholder="" type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup row>
                    <Col sm={10}>
                      <Input type="file" name="file" id="exampleFile" />
                      <FormText color="muted">
                        Veuillez selectionner une image principale de l'article
                        qui doit pas depasser 1 Mo
                      </FormText>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <div className="update ml-auto mr-auto">
                  <Button className="btn-round" color="primary" type="submit">
                    Publier
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

export default EditPost;
