import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AdminLayout from "../layouts/Admin";
import WelcomePage from "../views/WelcomePage";
import MainNavbar from "../components/Navbars/MainNavbar";
import PostDetails from "../views/PostDetails";
import Footer from "../views/Footer";
import User from "../views/User";
import Login from "../views/Login";
import Signup from "../views/Signup";
import EditPost from "../views/EditPost";
import Contact from "../views/Contact";
import AboutPage from "../views/AboutPage";
import MessageDetails from "../views/MessageDetails";
import Loading from "../components/animation/Loading.jsx";

class App extends Component {
  state = {
    categories: [],
    selectedCategory: "",
    searchQuery: "",
    articles: [],
    search: false,
    isNavbarOpen: false,
  };
  componentDidMount() {
    const articles = this.props.articles;
    const categories = this.props.categories;
    this.setState({ categories, articles });
  }
  handleSearchArticle = (e) => {
    this.setState({ searchQuery: e.target.value });
  };
  handleSubmitSearch = () => {
    if (this.state.searchQuery.trim().length === 0) return;
    this.setState({ selectedCategory: "", search: true });
  };
  handleChangeCategory = (category) => {
    this.setState({
      selectedCategory: category,
      search: false,
      searchQuery: "",
    });
  };
  handleOpenNavbar = () => {
    this.setState({ isNavbarOpen: !this.state.isNavbarOpen });
  };
  handleCloseNavbar = () => {
    this.setState({ isNavbarOpen: false });
  };
  getFilteredArticles = () => {
    const { searchQuery, articles } = this.state;
    return articles.filter(
      (article) =>
        article.title.includes(searchQuery) ||
        article.body.includes(searchQuery)
    );
  };
  handleShowAllCategories = () => {
    this.setState({ selectedCategory: "", searchQuery: "", search: false });
  };
  handleResetSearch = () => {
    this.setState({ searchQuery: "" });
  };
  render() {
    const {
      articles,
      selectedCategory,
      categories,
      searchQuery,
      search,
      isNavbarOpen,
    } = this.state;
    return (
      <div className="app-main-container">
        <MainNavbar
          onOpenNavbar={this.handleOpenNavbar}
          onCloseNavbar={this.handleCloseNavbar}
          isNavbarOpen={isNavbarOpen}
          onSearch={this.handleSearchArticle}
          searchValue={searchQuery}
          onSubmitSearch={this.handleSubmitSearch}
        />
        <Switch>
          <Route
            path="/admin/"
            render={(props) => <AdminLayout {...props} />}
          />
          <Route
            path="/news/:id"
            render={(props) => (
              <PostDetails {...props} categories={categories} />
            )}
          />
          <Route
            path="/profile/:id"
            render={(props) => <User {...props} link={true} />}
          />
          <Route
            path="/edit-article/:id"
            render={(props) => <EditPost {...props} />}
          />
          <Route
            path="/edit-article"
            render={(props) => <EditPost {...props} />}
          />
          <Route
            path="/message/:id"
            render={(props) => <MessageDetails {...props} />}
          />
          <Route
            path="/news"
            render={(props) => (
              <WelcomePage
                {...props}
                categories={categories}
                onChangeCategory={this.handleChangeCategory}
                selectedCategory={selectedCategory}
                articles={articles}
                searchQuery={searchQuery}
                search={search}
                onShowAllCategories={this.handleShowAllCategories}
              />
            )}
          />
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route path="/signup" render={(props) => <Signup {...props} />} />
          <Route path="/about" render={(props) => <AboutPage {...props} />} />
          <Route path="/contact" render={(props) => <Contact {...props} />} />
          <Route path="/loading" render={(props) => <Loading {...props} />} />
          <Redirect from="/" to="/news" />

          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    articles: state.entities.articles.list,
    categories: state.entities.categories.list,
  };
};
const mapDispachToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispachToProps)(App);
