import React, { Component } from "react";
import TextEditor from "../components/text-editor/textEditorNew";
import { v4 as uuidv4 } from "uuid";
import { EditorState } from "draft-js";
import Axios from "axios";
import { stateToHTML } from "draft-js-export-html";
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
import { FaTimes, FaCheck, FaUpload } from "react-icons/fa";
import { connect } from "react-redux";
import SelectInputField from "components/form/selectInputForm";
import { toast } from "react-toastify";
// import truncatedStr from "utils/truncatedStr";
// import HtmlParser from "react-html-parser";

class EditPost extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    images: [],
    errors: {},
    imagesUploading: false,
    categories: [],
  };

  componentDidMount() {
    const categories = this.props.categories || [];
    this.setState({ categories });
  }

  handleChangeEditorState = (editorState) => {
    this.setState({ editorState });
  };
  validationSchema = Yup.object().shape({
    title: Yup.string().min(3).required(),
    slug: Yup.string().min(3).required(),
    categoryId: Yup.string().required(
      "Veuillez choisir la cetegorie pour l'article."
    ),
  });
  handleAddImage = (e) => {
    const selectedImages = e.target.files;
    const images = [...this.state.images];
    const errors = { ...this.state.errors };

    if (selectedImages[0].size / 1024 > 1000) {
      toast.warning("L'image ne doit pas dépasser 1Mo");
    } else {
      errors.image = "";
      if (images.length <= 3) {
        images.push({
          _id: uuidv4(),
          isSent: false,
          image: selectedImages[0],
          unSent: false,
        });
      }
    }

    this.setState({ images, errors });
  };

  handleSendImagesToClourinary = () => {
    const images = [...this.state.images];
    const errors = { ...this.state.errors };
    this.setState({ imagesUploading: true });
    const unSentImages = images.filter((image) => image.isSent === false);
    unSentImages.map((item) => {
      const index = unSentImages.findIndex((image) => image._id === item._id);
      const formData = new FormData();
      formData.append("file", item.image);
      formData.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
      );
      return Axios.post(process.env.REACT_APP_CLOUDINARY_BASE_URL, formData)
        .then((res) => {
          unSentImages[index].isSent = true;
          unSentImages[index].url = res.data.secure_url;
          unSentImages[index].unSent = false;
          if (images.filter((image) => !image.isSent).length === 0) {
            this.setState({ imagesUploading: false });
            toast.success(
              `Toutes les ont été envoyée avec success.
               Note: Veuillez ne pas actualiser la page pour ne pas perdre les images envoyées.`
            );
          }
        })
        .catch((ex) => {
          unSentImages[index].unSent = true;
          const errors = { ...this.state.errors };
          errors.image =
            "Some images where not sent, please try to resend again...";
          this.setState({ imagesUploading: false });
          toast.error(
            `Désolé quelques une des images n'ont pas pu être envoyées.
             Veuillez vérifier votre connexion internet, puis cliquer sur le button d'envoi pour renvoyer les images non envoyées.`
          );
        });
    });
    this.setState({ images, errors });
  };

  handleDeleteImage = (_image) => {
    const _images = [...this.state.images];
    const images = _images.filter((image) => image._id !== _image._id);
    this.setState({ images });
  };
  handleSubmit = (values) => {
    const { editorState, images } = this.state;
    const courrentContent = editorState.getCurrentContent();
    const stateToHtmlCoversion = stateToHTML(courrentContent);

    if (stateToHtmlCoversion.trim().length < 30) {
      return toast.warning(
        "Veuillez entrer le contenu Principale de l'article"
      );
    }

    if (images.length > 0) {
      // eslint-disable-next-line
      images.map((image) => {
        if (!image.url) {
          return toast.warning(
            `Veuillez Envoyer les images sélectionnées en appuyant sur le bouton blue après les images,
             Avant de publier l'article .`
          );
        }
      });
    }

    const articleData = {
      title: values.title,
      imagesUrls: images.map((image) => image.url) || [],
      category: values.category,
      body: stateToHtmlCoversion,
    };
    console.log(articleData);
    // const htmlToState = convertFromHTML(stateToHtmlCoversion);
    // checking for the content of the
  };
  render() {
    const { editorState, images, errors, imagesUploading } = this.state;
    const imagesSentBtnDisabled =
      images.length === 0 ||
      images.filter((image) => image.isSent === false).length === 0;

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
              initialValues={{ title: "", categoryId: "", slug: "" }}
              onSubmit={this.handleSubmit}
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
                <Col className="pr-1 form-items" md="12">
                  <InputField
                    name="slug"
                    type="text"
                    label="Petit detail sur l'article"
                  />
                  <br />
                </Col>
              </Row>
              <Row>
                <Col className="pr-1 form-items" md="12">
                  <SelectInputField
                    name="categoryId"
                    label="La categorie de l'article"
                    placeholder="Categorie de l'article"
                    categories={this.state.categories}
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
                            <div key={image + index} className="selected-image">
                              <img
                                src={URL.createObjectURL(image.image)}
                                alt=""
                              />
                              <div
                                className="edit-post-delete-image-icon"
                                onClick={() => this.handleDeleteImage(image)}
                              >
                                <IconContext.Provider
                                  value={{ className: "edit-post-delete-icon" }}
                                >
                                  <FaTimes />
                                </IconContext.Provider>
                              </div>
                              {image.unSent && (
                                <div className="image-unsent-notifier">
                                  <IconContext.Provider
                                    value={{
                                      className: "edit-post-delete-icon-unsent",
                                    }}
                                  >
                                    <FaTimes />
                                  </IconContext.Provider>
                                </div>
                              )}
                              {image.isSent && (
                                <div className="image-sent-notifier">
                                  <IconContext.Provider
                                    value={{
                                      className: "edit-post-delete-icon-sent",
                                    }}
                                  >
                                    <FaCheck />
                                  </IconContext.Provider>
                                </div>
                              )}
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
                        <div className="send-images-area">
                          {imagesSentBtnDisabled || imagesUploading ? (
                            <div className="overlay-send-images"></div>
                          ) : (
                            ""
                          )}
                          <div
                            className="send-images-container"
                            onClick={this.handleSendImagesToClourinary}
                          >
                            {this.state.imagesUploading ? (
                              <div>
                                <div class="spinner-fast">
                                  <div class="spinner-fast">
                                    <div class="spinner-fast">
                                      <div class="spinner-fast"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <IconContext.Provider
                                value={{ className: "send-images-icon" }}
                              >
                                <FaUpload />
                              </IconContext.Provider>
                            )}
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
            </InputForm>
          </CardBody>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    categories: store.entities.categories.list,
  };
};

export default connect(mapStateToProps, null)(EditPost);
