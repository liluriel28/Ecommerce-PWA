import { Categories } from "@/components/Categories";
import { Hero } from "@/components/Hero";
import { Banner } from "@/components/Banner";

export const metadata = {
  title: "LilU",
  description: "LilUriel Shop for developers",

}

export default function Home(){
  return(
    <>
      <Banner/>
      <Hero/>
      <Categories/>
    </>
  )
}