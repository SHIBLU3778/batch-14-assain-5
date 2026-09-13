import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Technologies />
      <Footer />

      {/* ToastContainer renders the alert popups (add/remove/warning) */}
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default App;
