import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "../components/cards/Card";

export const getStaticProps = () => {
  return {
    props: {
      data: [
        {
          id: 1,
          img: "/razor/10.webp",
        },
        {
          id: 2,
          img: "/razor/14.webp",
        },
        {
          id: 3,
          img: "/razor/19.webp",
        },
        {
          id: 4,
          img: "/razor/25.webp",
        },
        {
          id: 5,
          img: "/razor/26.webp",
        },
        {
          id: 6,
          img: "/razor/27.webp",
        },
        {
          id: 7,
          img: "/razor/29.webp",
        },
        {
          id: 8,
          img: "/razor/30.webp",
        },
        {
          id: 9,
          img: "/razor/31.webp",
        },
        {
          id: 10,
          img: "/razor/34.webp",
        },
        {
          id: 11,
          img: "/razor/36.webp",
        },
        {
          id: 12,
          img: "/razor/37.webp",
        },
        {
          id: 13,
          img: "/razor/38.webp",
        },
        {
          id: 14,
          img: "/razor/39.webp",
        },
        {
          id: 15,
          img: "/razor/41.webp",
        },
      ],
    },
  };
};

const razor = ({ data }) => {
  return (
    <Box px='6' py='20'>
      <Heading textAlign='center'>RAZOR PAN DESIGNS</Heading>
      <SimpleGrid mt='12' columns={[1, 1, 2, 3]} spacing='40px'>
        {data &&
          data.map((item, index) => {
            return <Card key={index} index={index + 1} pix={item.img} />;
          })}
      </SimpleGrid>
    </Box>
  );
};

export default razor;
