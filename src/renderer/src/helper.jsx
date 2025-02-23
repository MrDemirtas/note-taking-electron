import Forgot from "./components/Login/Forgot";
import Login from "./components/Login/Login";
import NotFound from "./components/NoteFound";
import Notes from "./components/Main/Notes";
import SignUp from "./components/Login/SignUp";

const routers = [
  {
    url: "/login",
    component: <Login />,
    title: "Login",
  },
  {
    url: "/signup",
    component: <SignUp />,
    title: "Sign Up",
  },
  {
    url: "/forgot-password",
    component: <Forgot />,
    title: "Forgot Password",
  },
  {
    url: "/notes",
    component: <Notes />,
    title: "Notes",
  },
];

export const getPage = (url) => {
  return (
    routers.find((router) => router.url === url) || {
      component: <NotFound />,
      title: "404 Not Found",
    }
  );
};
