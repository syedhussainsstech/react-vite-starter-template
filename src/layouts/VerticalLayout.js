// ** React Imports
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

// ** Core Layout Import
// !Do not remove the Layout import
import Layout from "@layouts/VerticalLayout";

// ** Redux
import { useDispatch } from "react-redux";

// ** Menu Items Array
import navigation from "@src/navigation/vertical";

// ** JWT Parser
import jwt_decode from "jwt-decode";
// import { getComponentsFullName } from "@store/permission";

// ** Icons
// import Timesheets from "../navigation/icons/Timesheets";
// import Team from "../navigation/icons/Team";
// import Permissions from "../navigation/icons/Permissions";
// import Facility from "../navigation/icons/Facility";
// import Billings from "../navigation/icons/Billings";
// import Reports from "../navigation/icons/Reports";

// ** Menu Items
// const menuList = [
//   {
//     header: "People",
//     id: "Menu_MyTeam",
//   },
//   {
//     id: "Menu_MyTeam",
//     title: "My Team",
//     icon: <Team />,
//     navLink: "/dashboard/home",
//     role: ["admin"]
//   },
//   {
//     id: "Menu_Permission",
//     title: "Permissions",
//     icon: <Permissions />,
//     navLink: "/dashboard/permissions",
//     role: ["admin"]
//   },
//   {
//     header: "Enterprise",
//     id: 'Menu_SchoolDistrict'
//   },
//   {
//     id: "Menu_SchoolDistrict",
//     title: "School Districts",
//     icon: <Facility />,
//     navLink: "/dashboard/school-districts",
//     role: ["admin"]
//   },
//   {
//     header: "Pay Data",
//     id: 'Menu_Timesheets'
//   },
//   {
//     id: "Menu_Timesheets",
//     title: "Timesheets",
//     icon: <Timesheets />,
//     navLink: "/dashboard/timesheets",
//     role: ["admin"]
//   },
//   {
//     id: "Menu_Reports",
//     title: "Reports",
//     icon: <Reports />,
//     navLink: "/dashboard/reports",
//     role: ["admin"]
//   },
//   {
//     id: "Menu_Billing",
//     title: "Billings [Phase 2]",
//     icon: <Billings />,
//     navLink: "/dashboard/billings",
//     disabled: true,
//   },
// ];

const VerticalLayout = (props) => {
  const [menuData, setMenuData] = useState([]);
  const dispatch = useDispatch();

  const token = localStorage.getItem("accessToken");

  // ** For ServerSide navigation
  // useEffect(() => {
  //   if (token) {
  //     let decode = jwt_decode(token);
  //     if (decode) fetchComponentNames(decode.Permissions);
  //   }
  // }, []);

  // async function fetchComponentNames(ids) {
  //   const {
  //     payload: { Data },
  //   } = await dispatch(getComponentsFullName(ids));

  //   const dynamicMenuData = navigation.filter((item) =>
  //     item.id ? Data.includes(item.id) : true
  //   );

  //   setMenuData(dynamicMenuData);
  // }

  return (
    // navigation is hard coded you can use menuData that will be dynamic
    <Layout menuData={navigation} {...props}>
      <Outlet />
    </Layout>
  );
};

export default VerticalLayout;
