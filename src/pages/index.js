import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import UpcomingEvents from "@/components/UpcomingEvents";
import About from "@/components/About";
import ClubFlipCards from "@/components/ClubFlipCards";
import PastEvents from "@/components/PastEvents";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ClubHub</title>
      </Head>
      <main>
        <Navbar />
        <Header />
        <UpcomingEvents />
        <About />
        <ClubFlipCards />
        <PastEvents />
      </main>
    </>
  );
}
