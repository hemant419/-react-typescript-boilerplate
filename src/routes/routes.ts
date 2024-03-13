import { RouteConfig } from "./routerConfig";
import Login from "../components/Login/Login";
import UserDetails from "../components/UserDetails/UserDetails";
import UserForm from "../components/UserDetails/UserForm";

const routes: RouteConfig[] = [
  {
    path: "/",
    exact: true,
    component: Login,
  },
  {
    path: "/users",
    exact: true,
    component: UserDetails,
  },
  {
    path: "/user/add",
    exact: true,
    component: UserForm,
  },
  {
    path: "/user/edit/:userId",
    exact: true,
    component: UserForm,
  },
  // Add more routes as needed
];

export default routes;
