import React, { useRef } from "react";
import IdleTimer from "react-idle-timer";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  // create a ref for the idle timer
  const idleTimerRef = useRef(null);
  // get the history object from react-router-dom
  const history = useHistory();

  // define a function to handle the idle timeout
  const onIdle = () => {
    // clear the token from the local storage or cookie
    localStorage.removeItem("token");
    // redirect the user to the login page
    history.push("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {/* render the idle timer component with props */}
      <IdleTimer
        ref={idleTimerRef}
        timeout={15 * 60 * 1000} // 15 minutes in milliseconds
        onIdle={onIdle}
      />
    </div>
  );
};

export default Dashboard;
