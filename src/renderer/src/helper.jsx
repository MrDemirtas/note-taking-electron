import Login from "./components/Login";

const routers = [
  {
    url: '/login',
    component: <Login />,
  },
]

export const getPage = (url) => {
  return routers.find((router) => router.url === url)?.component || <h4>404</h4>;
};
