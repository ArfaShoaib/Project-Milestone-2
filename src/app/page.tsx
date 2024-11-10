import About from "@/component/About/About";
import Contact from "@/component/Contact/Contact";
import Footer from "@/component/Footer/Footer";
import Hero from "@/component/Hero/Hero";
import Navbar from "@/component/Navbar/Navbar";
import Project from "@/component/Project/Project";


export default function Home() {
  return (
    
    <div>
      <Navbar/>
      <Hero/>
      <Project/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}
