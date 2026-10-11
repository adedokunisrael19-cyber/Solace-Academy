import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Classes from "./components/Classes";
import Subjects from "./components/Subjects";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return(
    <div>
      <Navbar/>
      <Hero />
      <About/>
      <Classes/>
      <Subjects/>
      <HowItWorks/>
      <WhyChooseUs/>
      {/* <LearningApproach/> */}
      {/* <Testimonial/> */}
      {/* <CTA/> */}
      <Registration/>
      <Contact/>
      <Footer/>


    </div>
  );
}

export default App;