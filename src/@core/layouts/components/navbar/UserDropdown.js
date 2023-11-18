// ** React Imports
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// ** Custom Components
// import Avatar from "@components/Avatar";

// ** Utils
import { getUserData, isUserLoggedIn } from "@utils";

// ** Store & Actions
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "@store/authentication";
// import { getUsers } from "@store/users";

// ** Third Party Components
import { User, Power } from "react-feather";

// ** Reactstrap Imports
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="31"
    viewBox="0 0 32 31"
    fill="none"
  >
    <path
      d="M16.0002 20.25C19.2794 20.25 21.9377 17.5917 21.9377 14.3125C21.9377 11.0333 19.2794 8.375 16.0002 8.375C12.7211 8.375 10.0627 11.0333 10.0627 14.3125C10.0627 17.5917 12.7211 20.25 16.0002 20.25ZM16.0002 20.25C14.0266 20.25 12.0915 20.7956 10.4094 21.8281C8.72734 22.8605 7.36402 24.3386 6.47056 26.0984M16.0002 20.25C17.9739 20.25 19.909 20.7956 21.5911 21.8281C23.2731 22.8605 24.6365 24.3386 25.5299 26.0984M30.2502 15.5C30.2502 23.3701 23.8703 29.75 16.0002 29.75C8.13019 29.75 1.75024 23.3701 1.75024 15.5C1.75024 7.62994 8.13019 1.25 16.0002 1.25C23.8703 1.25 30.2502 7.62994 30.2502 15.5Z"
      stroke="#072847"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ** Tokens
  const token = localStorage.getItem("accessToken");
  const userInfo = getUserData();

  // ** State
  const [profileId, setProfileId] = useState(null);
  const [isProfile, setIsProfile] = useState(false);
  const [userData, setUserData] = useState(null);
  // const { components, loggedInUser } = useSelector((state) => ({
  //   components: state.permission.components,
  //   loggedInUser: state.users.loggedInUser,
  // }));

  // ** Hooks Users
  // useEffect(() => {
  //   if (token) {
  //     dispatch(getUsers());
  //     setUserData(userInfo);
  //   }
  // }, []);

  // ** Components
  // useEffect(() => {
  //   if (components.length) {
  //     if (components.includes("Menu_MyProfile")) setIsProfile(true);
  //     else setIsProfile(false);
  //   }
  // }, [components]);

  //** ComponentDidMount
  // useEffect(() => {
  //   if (
  //     loggedInUser &&
  //     userData &&
  //     loggedInUser.Email.toLowerCase() === userData.email.toLowerCase()
  //   )
  //     setProfileId(loggedInUser.Id);
  // }, [loggedInUser]);

  const goToProfile = () => {
    localStorage.setItem("userId", profileId);
    navigate("/dashboard/profile");
  };

  //** Vars
  // const userAvatar = (userData && userData.avatar) || defaultAvatar;

  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name fw-bold">
            {userData && userData["username"]}
          </span>
          <span className="user-status">{userData && userData["role"]}</span>
        </div>
        <UserIcon />
      </DropdownToggle>
      <DropdownMenu end>
        {/* {isProfile ? (
          <>
            <DropdownItem tag={Link} to="/dashboard/home" onClick={goToProfile}>
              <User size={14} className="me-75" />
              <span className="align-middle">Profile</span>
            </DropdownItem>
            <DropdownItem divider />
          </>
        ) : null} */}
        <DropdownItem tag={Link} to="/dashboard/home">
              <User size={14} className="me-75" />
              <span className="align-middle">Profile</span>
            </DropdownItem>
            <DropdownItem divider />
        <DropdownItem
          tag={Link}
          to="/login"
          onClick={() => dispatch(handleLogout())}
        >
          <Power size={14} className="me-75" />
          <span className="align-middle">Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;
