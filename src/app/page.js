import AllProducts from "@/Components/AllProducts";
import HeroPage from "@/Components/hero";
import Marquee from "@/Components/Marquee";
import Navbar from "@/Components/Navbar";
import PriceDecreased from "@/Components/PriceDecreased";
import PriceIncreased from "@/Components/PriceIncreased";
import Image from "next/image";

export default function Home() {
  return (
    <>
      
      <Marquee />
      <HeroPage />
      <PriceIncreased />
      <PriceDecreased />
      <AllProducts />
    </>
  );
}
