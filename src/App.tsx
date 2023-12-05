import { Outlet } from "react-router-dom";

import "./App.css";
import NavigationBar from "./components/layout/NavigationBar.tsx";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
