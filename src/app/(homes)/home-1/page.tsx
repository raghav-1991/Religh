import React from "react";
import { Metadata } from "next";
import HomeMain from "@/pages/homes/home-1";

export const metadata: Metadata = {
  title: "Religh Technologies - Top-rated Digital Marketing Agency in Bangalore",
};


const Home = () => {
  return (
    <HomeMain/>
  );
};

export default Home;
