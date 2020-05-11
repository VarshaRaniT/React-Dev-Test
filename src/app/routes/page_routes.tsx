/**
 * Pages Route File
 */
import LoginForm from "../containers/App/Form/LoginForm";
import SignUpForm from "../containers/App/Form/signUpForm";
const pageRoutes = [
  {
    name: "/login",
    component: LoginForm,
    key: "login"
},
{
    name: "/signup",
    component: SignUpForm,
    key: "signup"
}
];

export default pageRoutes;
