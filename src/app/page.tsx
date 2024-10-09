import Image from "next/image";
import Link from "next/link"
import About from "./components/about";
import Cards from "./components/cards";
import Contact from "./components/contact";

export default function Home() {
  return (
   <div>
     
           <About />
           <Cards />
           <Contact />
  
   </div>
  );
}
