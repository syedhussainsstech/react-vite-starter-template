// ** Router imports
import { lazy } from "react";

// ** Router imports
import { useRoutes, useNavigate, Navigate } from "react-router-dom";

// ** Layouts
import BlankLayout from "@layouts/BlankLayout";

// ** Hooks Imports
import { useLayout } from "@hooks/useLayout";
import { useIdleTimer } from "react-idle-timer";

// ** Utils
import { getUserData, getHomeRouteForLoggedInUser } from "../utility/Utils";

// ** Redux and Actions
import { useDispatch } from "react-redux";
import { handleLogout } from "@store/authentication";

// ** GetRoutes
import { getRoutes } from "./routes";

// ** Components
const Error = lazy(() => import("../views/pages/misc/Error"));
const Login = lazy(() => import("../views/pages/authentication/Login"));
const NotAuthorized = lazy(() => import("../views/pages/misc/NotAuthorized"));

const Router = () => {
  // ** Hooks
  const { layout } = useLayout();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ** Get routes based on permissions
  const allRoutes = getRoutes(layout);

  const getHomeRoute = () => {
    const user = getUserData();
    if (user) {
      return getHomeRouteForLoggedInUser(user.role);
    } else {
      return "/login";
    }
  };

  const onIdle = async () => {
    await dispatch(handleLogout());
    navigate("/login");
  };

  const { reset, pause, resume } = useIdleTimer({
    timeout: 1000 * 60 * 15, // 15 min timeout
    onIdle: () => onIdle(),
    debounce: 500,
  });

  const routes = useRoutes([
    {
      path: "/",
      index: true,
      element: <Navigate replace to={getHomeRoute()} />,
    },
    {
      path: "/login",
      element: <BlankLayout />,
      children: [{ path: "/login", element: <Login /> }],
    },
    {
      path: "/auth/not-auth",
      element: <BlankLayout />,
      children: [{ path: "/auth/not-auth", element: <NotAuthorized /> }],
    },
    {
      path: "*",
      element: <BlankLayout />,
      children: [{ path: "*", element: <Error /> }],
    },
    ...allRoutes,
  ]);

  return <>{routes}</>;
};

export default Router;
