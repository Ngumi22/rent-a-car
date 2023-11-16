"use client";

import { getCarsList } from "../services";
import { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CarsList from "@/components/CarsList";
import SearchInput from "@/components/SearchInput";
import WhyChooseUs from "@/components/WhyChooseUs";
import Drivers from "@/components/Drivers";
import Stats from "@/components/Stats";
import DownloadApp from "@/components/DownloadApp";
import Testimonials from "@/components/Testimonials";
import Carousel from "@/components/Carousel";
import BlogNews from "@/components/BlogNews";

export default function Home() {
  const [carsList, setCarslist] = useState<any>([]);

  useEffect(() => {
    carList();
  }, []);

  const carList = async () => {
    const result: any = await getCarsList();
    setCarslist(result?.carLists);
  };

  return (
    <main>
      <Hero />
      <HowItWorks />
      <SearchInput />
      <CarsList carsList={carsList} />
      <WhyChooseUs />
      <Carousel />
      <Drivers />
      <Stats />
      <Testimonials />
      <DownloadApp />
      <BlogNews />
    </main>
  );
}
