import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Card from "../components/cards/Card";

export const getStaticProps = () => {
  return {
    props: {
      data: [
        {
          id: 1,
          img: "/parks/59.webp",
        },
        {
          id: 2,
          img: "/parks/60.webp",
        },
        {
          id: 3,
          img: "/parks/61.webp",
        },
        {
          id: 4,
          img: "/parks/62.webp",
        },
        {
          id: 5,
          img: "/parks/63.webp",
        },
        {
          id: 6,
          img: "/parks/64.webp",
        },
        {
          id: 7,
          img: "/parks/65.webp",
        },
        {
          id: 8,
          img: "/parks/66.webp",
        },
        {
          id: 9,
          img: "/parks/67.webp",
        },
        {
          id: 10,
          img: "/parks/68.webp",
        },
      ],
    },
  };
};

const Parks = ({ data }) => {
  return (
    <Box px='6' py='20'>
      <Heading textAlign='center'>PARK SAMPLES</Heading>
      <SimpleGrid mt='12' columns={[1, 1, 2, 3]} spacing='40px'>
        {data &&
          data.map((item, index) => {
            return (
              <Card key={index} index={index + 1} pix={item.img} />
            );
          })}
      </SimpleGrid>
    </Box>
  );
};

export default Parks;
