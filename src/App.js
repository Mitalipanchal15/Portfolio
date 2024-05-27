
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Experience from "./Components/Experience";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

function App() {
  return (
<div className="overflow-x-hidden text-neutral-300 antialiased slection:bg-cyan-300 selection:text-cyan-900 ">
  <div className="fixed top-0 -z-10 h-full w-full">

     <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 
    [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> 
{/* 
<div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
<div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div> */}
 
 
  </div>

    {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-
    [radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>  */}

    {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 
    [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
    
    {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white
     [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */}

    <div className="container mx-auto px-8">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/Hero" element={<Hero />} />
          <Route path="/About" element={<About />} />
          <Route path="/Technologies" element={<Technologies />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Project" element={<Project />} />
          <Route path="*" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
       {/* <Navbar/>
       <Hero/>
       <About/>
       <Technologies/>
       <Experience/>
       <Project/>
       <Contact/> */}
    </div>
  </div>

  );
};

export default App;
