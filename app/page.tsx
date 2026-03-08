import { Header } from "@/components/f1/header";
import { HeroSection } from "@/components/f1/hero-section";
import { DriversSection } from "@/components/f1/drivers-section";
import { RaceSchedule } from "@/components/f1/race-schedule";
import { NewsSection } from "@/components/f1/news-section";
import { TeamStandings } from "@/components/f1/team-standings";
import { Footer } from "@/components/f1/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DriversSection />
      <RaceSchedule />
      <NewsSection />
      <TeamStandings />
      <Footer />
    </main>
  );
}
