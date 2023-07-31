import "./App.css";
import Navbar from "./Components/Body/Navbar";
import Departments from "./Components/Homepage/Departments";
import Hero from "./Components/Homepage/Hero";
import Introduction from "./Components/Homepage/Introduction";
import AboutUs from "./Components/Homepage/AboutUs";
import Portfolio from "./Components/Homepage/Portfolio";
import Testimonials from "./Components/Homepage/Testimonials";
import ContactUs from "./Components/Homepage/ContactUs";
import Blogs from "./Components/Homepage/Blogs";
import Newsletter from "./Components/Homepage/Newsletter";
import Footer from "./Components/Body/Footer";

function App() {
  return (
    <div className="main" id="top">
      <Navbar />
      <Hero />
      <Departments />
      <Introduction />
      <AboutUs />
      <Portfolio />
      <Testimonials />
      <ContactUs />
      <Blogs />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
