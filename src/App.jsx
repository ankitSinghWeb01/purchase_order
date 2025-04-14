import { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider, Spin } from "antd";
import "./App.css";
import Protectedroutes from "./router/Protectedroutes";
const theme = {
  token: {
    colorPrimary: "#1677ff",
    borderRadius: 6,
    colorBgContainer: "#f5f5f5",
    fontFamily: "Inter, sans-serif",
  },
  components: {
    Button: {
      colorPrimary: "#3f51b5",
    },
  },
};

function App() {
  3
  return (
    <ConfigProvider theme={theme}>
      <Router>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <Spin size="large" />
            </div>
          }
        >
          <Protectedroutes />
        </Suspense>
      </Router>
    </ConfigProvider>
  );
}

export default App;
