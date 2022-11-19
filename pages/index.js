import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import Carousel from "../components/Carousel";
import NavHeader from "../components/NavHeader";

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
          desc: "We construct both stainless and rot-iron gates.",
          url: "/gates/gate.webp",
        },
        {
          id: 2,
          title: "HAND RAILS",
          desc: "We design quality stainless and rot-iron hand rails.",
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
        <NavHeader />
        <Carousel slides={slides} />
        <Box px='6' mt='12'>
          <Text textAlign='center' fontSize='2xl' fontWeight='bold'>Work in progress</Text>
        </Box>
      </Box>
    </div>
  );
}
