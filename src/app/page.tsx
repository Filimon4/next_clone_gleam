import Community from "@/components/Community";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Invite from "@/components/Invite";
import NavBar from "@/components/NavBar";
import People from "@/components/People";
import Support from "@/components/Support";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Support />
        <Features />
        <Community />
        <People />
        <Invite />
      </main>
      <Footer />
    </>
  );
}
