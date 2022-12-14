import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "../components/cards/Card";

export const getStaticProps = () => {
  return {
    props: {
      data: [
        {
          id: 1,
          img: "/accessories/1.webp",
        },
        {
          id: 2,
          img: "/accessories/2.webp",
        },
        {
          id: 3,
          img: "/accessories/3.webp",
        },
        {
          id: 4,
          img: "/accessories/4.webp",
        },
        {
          id: 5,
          img: "/accessories/5.webp",
        },
        {
          id: 6,
          img: "/accessories/7.webp",
        },
        {
          id: 7,
          img: "/accessories/8.webp",
        },
        {
          id: 8,
          img: "/accessories/9.webp",
        },
        {
          id: 9,
          img: "/accessories/10.webp",
        },
        {
          id: 10,
          img: "/accessories/11.webp",
        },
        {
          id: 11,
          img: "/accessories/12.webp",
        },
        {
          id: 12,
          img: "/accessories/13.webp",
        },
        {
          id: 13,
          img: "/accessories/14.webp",
        },
        {
          id: 14,
          img: "/accessories/15.webp",
        },
        {
          id: 15,
          img: "/accessories/16.webp",
        },
        {
          id: 16,
          img: "/accessories/17.webp",
        },
        {
          id: 17,
          img: "/accessories/18.webp",
        },
        {
          id: 18,
          img: "/accessories/19.webp",
        },
      ],
    },
  };
};

const Accessories = ({ data }) => {
  return (
    <Box px='6' py='20'>
      <Heading textAlign='center'>ACCESSORIES</Heading>
      <SimpleGrid mt='12' columns={[1, 1, 2, 3]} spacing='40px'>
        {data &&
          data.map((item, index) => {
            return <Card key={index} index={index + 1} pix={item.img} />;
          })}
      </SimpleGrid>
    </Box>
  );
};

export default Accessories;
