import { NavBar, AsideNavBar, ScrollToTop, Footer } from "./layouts/index";
import AppRoutes from "./app-routes/AppRoutes"
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-container">
        <AsideNavBar />
        <AppRoutes/>
      </div>
        <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
