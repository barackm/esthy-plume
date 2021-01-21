import React, { Component } from "react";
import TextEditor from "../components/text-editor/TextEditor";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import ReactHtmlParser from "react-html-parser";
import { AiFillCamera } from "react-icons/ai";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Row,
  Col,
} from "reactstrap";
import * as Yup from "yup";

import SubmitBtn from "components/common/SubmitBtn";
import InputForm from "components/form/InputForm";
import InputField from "components/form/InputField";
import { IconContext } from "react-icons";

class EditPost extends Component {
  state = { editorState: EditorState.createEmpty(), images: [], errors: {} };
  handleChangeEditorState = (editorState) => {
    this.setState({ editorState });
  };
  validationSchema = Yup.object().shape({
    title: Yup.string().min(3).required(),
  });
  handleAddImage = (e) => {
    const selectedImages = e.target.files;
    const images = [...this.state.images];
    const errors = { ...this.state.errors };
    // images.push(image);
    if (selectedImages[0].size / 1024 > 2500) {
      errors.image = "L'image ne doit pas depasser 2Mo";
    } else {
      errors.image = "";
      if (images.length <= 3) {
        images.push(selectedImages[0]);
      }
    }

    this.setState({ images, errors });
  };
  handleDeleteImage = (_image) => {
    const _images = [...this.state.images];
    const images = _images.filter((image) => image !== _image);
    this.setState({ images });
  };
  render() {
    const { editorState, images, errors } = this.state;
    var formData = new FormData();
    formData.append("image", images[0]);
    const courrentContent = editorState.getCurrentContent();
    const html = stateToHTML(courrentContent);
    return (
      <div className="new-post-page-main-container">
        <Card className="card-user new-post-main-area">
          <CardHeader className="login-header">
            <CardTitle tag="h4" className="login-title">
              Nouvel article
            </CardTitle>
          </CardHeader>
          <CardBody>
            <InputForm
              validationSchema={this.validationSchema}
              initialValues={{ title: "" }}
            >
              <Row>
                <Col className="pr-1 form-items" md="12">
                  <InputField
                    name="title"
                    type="text"
                    label="Titre Principale de l'article"
                  />
                  <br />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup row>
                    <Col sm={10}>
                      <div className="images-input-area">
                        <div className="selcted-images-wrapper">
                          {images.map((image, index) => (
                            <div
                              key={image + index}
                              className="selected-image"
                              onClick={() => this.handleDeleteImage(image)}
                            >
                              <img src={URL.createObjectURL(image)} alt="" />
                            </div>
                          ))}
                        </div>
                        <div
                          className={
                            images.length === 3
                              ? "file-input-container full"
                              : "file-input-container"
                          }
                        >
                          <div className="full-overlay"></div>
                          <div>
                            <input
                              type="file"
                              name="file"
                              id="exampleFile"
                              accept="image/*"
                              className="file-input-custom"
                              disabled={images.length === 3}
                              onChange={this.handleAddImage}
                            />
                            <IconContext.Provider
                              value={{ className: "file-icon-image" }}
                            >
                              <AiFillCamera />
                            </IconContext.Provider>
                          </div>
                        </div>
                      </div>
                      {errors.image && (
                        <span className="text text-danger">
                          {errors.image} <br />
                        </span>
                      )}
                      <br />
                      <span
                        className="text"
                        color="muted"
                        style={{ marginTop: 20, marginBottom: 20 }}
                      >
                        Veuillez selectionner une image principale de l'article
                        qui ne doit pas depasser 2Mo. Vous pouvez aussi
                        selectionner deux autres images au maximum pour
                        l'article.
                      </span>
                    </Col>
                  </FormGroup>
                  <br />
                  <hr />
                  <br />
                </Col>
              </Row>
              <Row>
                <span
                  className="text"
                  style={{ marginLeft: 20, marginBottom: 20 }}
                >
                  Contenu principale de l'article
                </span>
                <div className="editor-main-area">
                  <TextEditor
                    onChangeState={this.handleChangeEditorState}
                    editorState={editorState}
                  />
                </div>
              </Row>
              <Row>
                <SubmitBtn label="Publier" />
              </Row>
              <Row className="editor-html">{ReactHtmlParser(html)}</Row>
            </InputForm>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default EditPost;
