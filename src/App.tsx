import React from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import { ThemeConfig } from "./theme";
import Router from "./routes";


export default function App() {
  // const { isInitialized } = useAuth();


  return (

    <ThemeConfig>
      {/* <Settings />
      {isInitialized ? : <LoadingScreen />} */}
      <Router /> 
    </ThemeConfig>
  );
}
