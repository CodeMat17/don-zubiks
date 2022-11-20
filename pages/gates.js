import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "../components/cards/Card";
import { client } from "../contentfulClient";

export const getStaticProps = async () => {
  const gates = await client.getEntries({
    content_type: "gatesImages",
  });

  const cleanGates = gates.items.map((item) => {
    const images = item.fields.image.fields
    
    return {
      ...item.fields,
      images
    }
  })

  return {
    props: {
      cleanGates,
    },
  };
};

const Gates = ({ cleanGates }) => {
 
  return (
    <Box px='6' py='20'>
      <Heading textAlign='center'>GATE SAMPLES</Heading>
      <SimpleGrid mt='12' columns={[1, 1, 2, 3]} spacing='40px'>
        {cleanGates &&
          cleanGates.map((item, index) => {
            return <Card key={index} index={index + 1} img={item.images.file.url} />;
          })}
      </SimpleGrid>
    </Box>
  );
};

export default Gates;
