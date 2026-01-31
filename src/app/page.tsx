import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Partners } from "@/components/Partners";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Services />
      <Partners />

      <Contact />
    </div>
  );
}
