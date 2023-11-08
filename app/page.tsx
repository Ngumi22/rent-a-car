"use client";

import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CarsList from "@/components/CarsList";
import SearchInput from "@/components/SearchInput";

import { getCarsList } from "../services";
import { useEffect, useState } from "react";
import WhyChooseUs from "@/components/WhyChooseUs";

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
    <>
      <Hero />
      <SearchInput />
      <HowItWorks />
      <CarsList carsList={carsList} />
      <WhyChooseUs />
    </>
  );
}
