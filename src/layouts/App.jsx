import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin";
import WelcomePage from "views/WelcomePage";
import MainNavbar from "components/Navbars/MainNavbar";
import PostDetails from "views/PostDetails";
import Footer from "views/Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="app-main-container">
        <MainNavbar />
        <Switch>
          <Route
            path="/admin/dashboard"
            render={(props) => <AdminLayout {...props} />}
          />
          <Route
            path="/news/:id"
            render={(props) => <PostDetails {...props} />}
          />
          <Route path="/news" render={(props) => <WelcomePage {...props} />} />
          <Redirect from="/" to="/news" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
