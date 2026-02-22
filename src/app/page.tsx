import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Clients } from "@/components/clients";
import { Investment } from "@/components/investment";
import { Achievements, AchievementList } from "@/components/achievements";
import { Gallery } from "@/components/gallery";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Clients />
      <Investment />

      <section
        id="prestasi"
        className="relative py-24 lg:py-32 bg-gray-50/80 dark:bg-[#0d1325]/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Achievements />
          <AchievementList />
          <Gallery />
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}
