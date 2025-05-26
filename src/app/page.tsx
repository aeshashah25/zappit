import { Header } from "@/components/header";
import { Banner } from "@/components/banner";
import { User } from "@/components/user";
import { UserApp } from "@/components/user_app";
import { Manager } from "@/components/manager";
import { ManagerApp } from "@/components/manager_app";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="fixed inset-0 w-full h-full object-cover z-0"
        src="/videos/turf1.mp4"
      />

      {/* Semi-transparent black overlay */}
      <div className="fixed inset-0 bg-white bg-opacity-60 z-10 pointer-events-none" />

      {/* Fullscreen white background */}
      <div className="relative z-20 w-full min-h-screen bg-white text-black">
        <Header />
        
        <section id="banner">
          <Banner />
        </section>

        <section id="user">
          <User />
        </section>

        <section id="user_app">
          <UserApp />
        </section>

        <section id="manager">
          <Manager />
        </section>

        <section id="manager_app">
          <ManagerApp />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
}

