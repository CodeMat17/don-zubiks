import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import AboutUs from "../components/AboutUs";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import NavHeader from "../components/NavHeader";
import Products from "../components/Products";

export const getStaticProps = async () => {
  // const data = await client.getEntries({
  //   content_type: "carousel",
  // });

  // const cleanslides = data.items.map((slide) => {
  //   const { sys, fields } = slide;
  //   const { id } = sys;
  //   const title = fields.title;
  //   const desc = fields.desc;
  //   const image = fields.image.fields.file.url;
  //   const currentSlide = { id, title, desc, image };
  //   return currentSlide;
  // });

  return {
    props: {
      slides: [
        {
          id: 1,
          title: "GATES",
          desc: "We construct both stainless and wrougth-iron gates.",
          url: "/gates/gate.webp",
        },
        {
          id: 2,
          title: "HAND RAILS",
          desc: "We design quality stainless and wrougth-iron hand rails.",
          url: "/gates/rail.webp",
        },
        {
          id: 3,
          title: "CAR PARK",
          desc: "We design different types and structures of car parks.",
          url: "/gates/park.webp",
        },
      ],
    },
    revalidate: 5,
  };
};

export default function Home({ slides }) {
  return (
    <div>
      <Head>
        <title>Don-Zubiks | Home</title>
        <meta name='description' content='Don-Zubiks is a .....' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box>
        {/* <NavHeader /> */}
        <Carousel slides={slides} />
        <AboutUs />
        <Products />
        {/* <Footer /> */}
      </Box>
    </div>
  );
}
