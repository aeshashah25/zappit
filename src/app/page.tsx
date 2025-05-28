import { Header } from "@/components/header";
import { Banner } from "@/components/banner";
import { User } from "@/components/user";
import { UserApp } from "@/components/user_app";
import Manager from "@/components/manager";
import { ManagerApp } from "@/components/manager_app";
<<<<<<< HEAD
import Footer  from "@/components/footer";
=======
import { Footer } from "@/components/footer";
>>>>>>> 87252843c6b89338908a95b4b759570e3cbe1c62

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Background video */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          src="/videos/turf1.mp4"
        />
        {/* Removed blur layer */}
      </div>

      {/* Foreground content */}
      <div className="relative z-20 w-full min-h-screen  text-black">
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

