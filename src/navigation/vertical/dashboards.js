// ** Icons
import { Home } from "react-feather";
// import Team from "../icons/Team";

// import Role from "../icons/Roles";

export default [
  {
    header: "People",
    // id: "Menu_MyTeam",
  },
  {
    // id: "Menu_MyTeam",
    title: "Home",
    icon: <Home size={12} />,
    navLink: "/dashboard/home",
    role: ["admin"]
  }
];
