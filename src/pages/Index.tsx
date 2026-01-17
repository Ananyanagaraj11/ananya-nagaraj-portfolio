import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import {Preloader} from "@/components/preloader"
import { AnimatePresence } from "framer-motion";


// const Index = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       easing: "ease-out-cubic",
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <Header />
//       <Preloader onComplete={function (): void {
//         throw new Error("Function not implemented.");
//       } }/>
//       <main>
//         {/* <Preloader/> */}
      
//         <Hero />
//         <About />
//         <Experience />
//         <Projects />
//         <Skills />
//         <Certifications />
//         <Education />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Index;








// import { useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import Preloader from '@/components/Preloader';
// import Header from '@/components/Header';
// import Hero from '@/components/Hero';
// import About from '@/components/About';
// import Experience from '@/components/Experience';
// import Projects from '@/components/Projects';
// import Skills from '@/components/Skills';
// import Certification from '@/components/Certification';
// import Education from '@/components/Education';
// import Contact from '@/components/Contact';
// import Footer from '@/components/Footer';


const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      {!isLoading && (
        <div className="min-h-screen">
          <Header />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Education />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
