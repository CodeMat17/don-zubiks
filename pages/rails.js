import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "../components/cards/Card";

export const getStaticProps = () => {
  return {
    props: {
      data: [
        {
          id: 1,
          img: "/rails/5.webp",
        },
        {
          id: 2,
          img: "/rails/16.webp",
        },
        {
          id: 3,
          img: "/rails/32.webp",
        },
        {
          id: 4,
          img: "/rails/33.webp",
        },
        {
          id: 5,
          img: "/rails/42.webp",
        },
        {
          id: 6,
          img: "/rails/44.webp",
        },
        {
          id: 7,
          img: "/rails/45.webp",
        },
        {
          id: 8,
          img: "/rails/47.webp",
        },
        {
          id: 9,
          img: "/rails/49.webp",
        },
        {
          id: 10,
          img: "/rails/50.webp",
        },
        {
          id: 11,
          img: "/rails/51.webp",
        },
        {
          id: 12,
          img: "/rails/52.webp",
        },
        {
          id: 13,
          img: "/rails/53.webp",
        },
        {
          id: 14,
          img: "/rails/54.webp",
        },
        {
          id: 15,
          img: "/rails/55.webp",
        },
        {
          id: 16,
          img: "/rails/57.webp",
        },
        {
          id: 17,
          img: "/rails/58.webp",
        },
      ],
    },
  };
};

const Rails = ({ data }) => {
  return (
    <Box px='6' py='20'>
      <Heading textAlign='center'>HANDRAIL SAMPLES</Heading>
      <SimpleGrid mt='12' columns={[1, 1, 2, 3]} spacing='40px'>
        {data &&
          data.map((item, index) => {
            return <Card key={index} index={index + 1} pix={item.img} />;
          })}
      </SimpleGrid>
    </Box>
  );
};

export default Rails;
