import { NavBar, AsideNavBar, ScrollToTop, Footer } from "./layouts/index";
import AppRoutes from "./app-routes/AppRoutes";
import { useLocation } from "react-router-dom";
import "./App.css";

function App() {
  const { pathname } = useLocation();
  const sidebarRestrictedRoutes = ["/signin", "/signup", "/"];
  return (
    <div className="App">
      <NavBar />
      <div
        className={
          sidebarRestrictedRoutes.includes(pathname) ? "" : "main-container"
        }
      >
        {!sidebarRestrictedRoutes.includes(pathname) && <AsideNavBar />}
        <AppRoutes />
      </div>
      {!sidebarRestrictedRoutes.includes(pathname) && <ScrollToTop />}
      <Footer />
    </div>
  );
}

export default App;
