import React, { Component } from "react";
import * as Yup from "yup";
import { connect } from "react-redux";
import CategoryModal from "../components/CategoryModal";
import {
  Table,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";
import InputForm from "../components/form/InputForm";
import Header from "../components/Navbars/DemoNavbar";
import AppModal from "components/common/AppModal";
class Categories extends Component {
  state = {
    categories: [],
    modalOpen: false,
    confirmationModalOpen: false,
    category: {
      name: "",
    },
    categoryToDelete: null,
  };
  componentDidMount() {
    this.setState({ categories: this.props.categories || [] });
  }

  handleOpenModal = () => {
    const category = { ...this.state.category };
    category.name = "";
    this.setState({ modalOpen: true, category });
  };
  handleToggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };
  handleCloseModal = () => {
    console.log("closed");
    this.setState({ modalOpen: false });
  };
  handleSubmit = (values) => {
    console.log(values);
  };
  validationSchema = Yup.object().shape({
    name: Yup.string().min(3).required(),
  });
  handleModifyCategory = (category) => {
    this.setState({ category, modalOpen: true });
  };
  handleSubmit = (values) => {
    const category = { ...this.state.category };
    category.name = values.name;
    this.setState({ category, modalOpen: false });
  };

  handleOpenConfirmationModal = (category) => {
    this.setState({ confirmationModalOpen: true, categoryToDelete: category });
  };
  handleToggleConfimationModal = () => {
    this.setState({ confirmationModalOpen: !this.state.confirmationModalOpen });
  };
  handleDeleteCategory = () => {
    this.setState({ confirmationModalOpen: false });
  };

  render() {
    const { modalOpen, category, confirmationModalOpen } = this.state;

    return (
      <>
        <InputForm
          initialValues={{ name: "" }}
          onSubmit={this.handleSubmit}
          validationSchema={this.validationSchema}
          enableReinitialize={true}
        >
          <div className="content">
            <Header
              {...this.props}
              onSearch={() => {}}
              placeholder={`Ex: mars 25, 2021...`}
            />
            <Row>
              <Col md="12">
                <Card>
                  <CardHeader
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <CardTitle tag="h5">Categories pour les articles</CardTitle>
                    <div
                      onClick={this.handleOpenModal}
                      to="/edit-article"
                      className="btn btn-primary add-article-btn"
                    >
                      Ajouter une categorie
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Table responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>Nom</th>
                          <th>Modifier</th>
                          <th>Supprimer</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.categories.map((category) => (
                          <tr key={category.id}>
                            <td>{category.name}</td>
                            <td>
                              <Button
                                className="btn-round"
                                color="primary"
                                onClick={() =>
                                  this.handleModifyCategory(category)
                                }
                              >
                                Modifier
                              </Button>
                            </td>
                            <td>
                              <Button
                                className="btn-round"
                                color="danger"
                                onClick={() =>
                                  this.handleOpenConfirmationModal(category)
                                }
                              >
                                Supprimer
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>

          <CategoryModal
            modalOpen={modalOpen}
            onCloseModal={this.handleOpenModal}
            onToggleModal={this.handleToggleModal}
            onSubmit={this.handleSubmit}
            fieldValue={category.name}
          />
          <AppModal
            onToggleModal={this.handleToggleConfimationModal}
            modalOpen={confirmationModalOpen}
            title="Supression de categorie"
            success="Suprimer"
            fail="Non"
            body="Etes vous sure de vouloir suprimer cette categorie ? "
            onSuccess={this.handleDeleteCategory}
          />
        </InputForm>
      </>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    categories: store.entities.categories.list,
  };
};
export default connect(mapStateToProps, null)(Categories);
