import "./App.css";
import Banner from "./components/Banner";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Profile />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
