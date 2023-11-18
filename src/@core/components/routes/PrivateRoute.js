// ** React Imports
import { Navigate } from "react-router-dom";
import { useContext, Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";

// ** Context Imports
import { AbilityContext } from "@src/utility/context/Can";

// ** Spinner Import
import Spinner from "../spinner/Loading-spinner";

const PrivateRoute = ({ children, route }) => {
  // ** Hooks & Vars
  // const [isLoading, setIsLoading] = useState(true);
  const ability = useContext(AbilityContext);
  const user = JSON.parse(localStorage.getItem("userData"));

  // ** Get components from Redux state
  // const components = useSelector((state) => state.permission.components);
  // const state = useSelector((state) => state);

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  // if (isLoading) {
  //   return <Spinner className="content-loader" />; // Replace this with your loading component
  // }

  if (route) {
    let action = null;
    let resource = null;
    let restrictedRoute = false;
    
    if (route.meta) {
      action = route.meta.action
      resource = route.meta.resource
      restrictedRoute = route.meta.restricted
    }
    if (!user) {
      return <Navigate to='/login' />
    }
    if (user && restrictedRoute) {
      return <Navigate to='/' />
    }
    if (user && restrictedRoute && (user.role === 'therapist' || user.role === 'admin' || user.role === 'superadmin')) {
      return <Navigate to='/access-control' />
    }
    if (user && !ability.can(action || 'read', resource)) {
      return <Navigate to='/misc/not-authorized' replace />
    }

    // if (route.meta) {
    //   action = route.meta.action;
    //   resource = route.meta.resource;
    //   restrictedRoute = route.meta.restricted;
    // }
    // if (!user) {
    //   return <Navigate to="/login" />;
    // }
    // if (
    //   user &&
    //   restrictedRoute &&
    //   components.length &&
    //   !components.includes(resource)
    // ) {
    //   return <Navigate to="/auth/not-auth" />;
    // }
    // if (user && !ability.can(action || "read", resource)) {
    //   return <Navigate to="/auth/not-auth" replace />;
    // }
  }

  return (
    <Suspense fallback={<Spinner className="content-loader" />}>
      {children}
    </Suspense>
  );
};

export default PrivateRoute;
