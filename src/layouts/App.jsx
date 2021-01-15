import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin";
import WelcomePage from "views/WelcomePage";
import MainNavbar from "components/Navbars/MainNavbar";
import PostDetails from "views/PostDetails";
import Footer from "views/Footer";
import User from "views/User";
import Login from "views/Login";
import Signup from "views/Signup";
import EditPost from "views/EditPost";
import Contact from "views/Contact";
import AboutPage from "views/AboutPage";
// import { AiTwotoneCalculator } from "react-icons/ai";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="app-main-container">
        <MainNavbar />
        <Switch>
          <Route
            path="/admin/"
            render={(props) => <AdminLayout {...props} />}
          />
          <Route
            path="/news/:id"
            render={(props) => <PostDetails {...props} />}
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
          <Route path="/news" render={(props) => <WelcomePage {...props} />} />
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route path="/signup" render={(props) => <Signup {...props} />} />
          <Route path="/about" render={(props) => <AboutPage {...props} />} />
          <Route path="/contact" render={(props) => <Contact {...props} />} />
          <Redirect from="/" to="/news" />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
