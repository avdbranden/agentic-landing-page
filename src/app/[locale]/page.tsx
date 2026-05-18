import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Credibility } from "@/components/sections/Credibility";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Benefits } from "@/components/sections/Benefits";
import { Process } from "@/components/sections/Process";
import { Founders } from "@/components/sections/Founders";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { GradientSeparator } from "@/components/ui/GradientSeparator";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <GradientSeparator direction="down" />
        <Credibility />
        <GradientSeparator direction="up" />
        <Problem />
        <GradientSeparator direction="down" />
        <Solution />
        <GradientSeparator direction="up" />
        <CaseStudy />
        <GradientSeparator direction="down" />
        <Benefits />
        <GradientSeparator direction="up" />
        <Process />
        <GradientSeparator direction="down" />
        <Founders />
        <GradientSeparator direction="up" />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
