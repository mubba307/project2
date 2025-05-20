import About from "@/component/about/about";
import Contact from "@/component/contact/contact";
import Hero from "@/component/hero/hero";
import Skills from "@/component/skills/skills";
import Project from "@/component/project/project";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Project/>
      <Skills />
      <Contact />
      
    </>
  );
}