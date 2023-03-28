import { ModuleConfig } from "@core/interfaces";

const config: ModuleConfig = {
  name: "Home",
  baseUrl: "/",
  routes: [
    {
      path: "/",
      page: "MainPage",
      title: "Home",
      exact: true,
    },
    {
      path: "/consumer",
      page: "Consumer",
      title: "Home",
      exact: true,
    },
  ],
  requireAuthenticated: false,
};

export default config;
