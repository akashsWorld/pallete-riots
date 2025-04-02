import BrandName from "@/components/BrandName";
import Contact from "@/components/Contact";
import Description from "@/components/Description";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import WorkFields from "@/components/WorkFields";
import logo from "@/public/logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="w-full z-10 bg-white drop-shadow-xl">
        <Navbar />
      </header>
      <main className="w-full h-fit">
        <Hero />
        <Portfolio  />
        <WorkFields />
        <Description />
        <Contact />
      </main>
      <footer className="mx-auto margin-top w-fit mb-[19px]">
        <div className="flex flex-col items-center h-fit w-fit gap-3">
          <a href="/" className="h-[40px] flex items-center gap-2 w-fit">
            <div className="relative h-full w-[20px] overflow-hidden">
              <Image
                alt="logo"
                src={logo}
                height={200}
                width={200}
                className="h-full object-contain absolute left-1/2 -translate-x-1/2"
              />
            </div>
            <BrandName />
          </a>
        <p className="font-poppins font-normal text-xs text-center w-fit">© 2025 Ligft Media All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
