import { BrowserRouter, Routes, Route } from "react-router-dom";

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

import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";

function Home() {
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


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter> 

  )
}
export default App;