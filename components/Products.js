import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const cards = [
  {
    id: 1,
    img: "/products/gate.webp",
    title: "GATES",
    url: "/gates",
    desc: "We construct all types of gates including wrougths and stainless gates.",
  },
  {
    id: 2,
    img: "/products/park.webp",
    title: "PARKS",
    url: "/parks",
    desc: "We construct all sizes of parks for relaxation and for cars.",
  },
  {
    id: 3,
    img: "/products/rail.webp",
    title: "HANDRAILS",
    url: "/rails",
    desc: "We construct different designs of handrails with stainless or wrougths iron.",
  },
  {
    id: 4,
    img: "/products/access.webp",
    title: "ACCESSORIES",
    url: "/accessories",
    desc: "We deal in all types of accessories for metal construction and for buildings.",
  },
  {
    id: 4,
    img: "/products/razor.webp",
    title: "RAZOR PAN DESIGN",
    url: "/razor-designs",
    desc: "We also do razor pan designs of asorted shapes and designs.",
  },
];

const Products = () => {
  return (
    <Box px='6' py='16' maxW='6xl' mx='auto'>
      <Heading textAlign='center'>OUR PRODUCTS</Heading>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing='40px' py='16'>
        {cards.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;
