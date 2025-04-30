import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Curated from "./Components/Curated";
import AdSlider from "./Components/AdSlider";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <Navbar/>
    <Landing/>
    <Curated/>
    {/* <AdSlider/> */}
    <Footer/>
    </>
  );
}
