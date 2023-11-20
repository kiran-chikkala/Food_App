import React from "react";
import Header from "./Header";

import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../Redux/store";
const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header /> <Outlet />{" "}
    </Provider>
  );
};

export default AppLayout;
