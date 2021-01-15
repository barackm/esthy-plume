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
import Dashboard from "views/Dashboard";
import Notifications from "views/Notifications";
import Users from "views/Users";
import Admins from "views/Admins";
import Discussions from "views/Discussions";
import Articles from "views/Articles";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },

  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-tile-56",
  //   component: Icons,
  //   layout: "/admin",
  // },
  {
    path: "/users",
    name: "Utilisateurs",
    icon: "nc-icon nc-single-02",
    component: Users,
    layout: "/admin",
  },
  {
    path: "/articles",
    name: "Articles",
    icon: "nc-icon nc-paper",
    component: Articles,
    layout: "/admin",
  },
  {
    path: "/admins",
    name: "Administrateurs",
    icon: "nc-icon nc-settings",
    component: Admins,
    layout: "/admin",
  },
  {
    path: "/discussion",
    name: "Discussion",
    icon: "nc-icon nc-chat-33",
    component: Discussions,
    layout: "/admin",
  },
  // {
  //   pro: true,
  //   path: "/",
  //   name: "Logout",
  //   icon: "nc-icon nc-spaceship",
  //   component: UpgradeToPro,
  //   layout: "/login",
  // },
];
export default routes;
