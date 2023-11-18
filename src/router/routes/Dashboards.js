import { lazy } from "react";

const MyTeam = lazy(() => import("../../views/dashboard/home"));

const DashboardRoutes = [
  {
    path: "/dashboard/home",
    element: <MyTeam />,
    // meta: {
    //   publicRoute: false,
    //   action: ["read", "write"],
    //   // resource: "Menu_MyTeam",
    //   resource: "Menu_MyTeam",
    //   restricted: true,
    // },
  },
];

export default DashboardRoutes;
