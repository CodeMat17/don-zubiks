import { Box, Heading, Text } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box px='6' py='16' maxW='xl' mx='auto'>
      <Heading textAlign='center'>ABOUT US</Heading>
      <Box fontSize='lg' mt='10'>
        <Text mt='6'>
          DON-ZUBIKS is a metal construction company that deals in all types of
          metal contructs and building materials ranging from wrougth iron,
          stainless handrails, crystal handrails, aluminium rails, foreign
          doors, water collectors, PVC ceilings, suspended, tiles and marbles,
          roofing sheets, glass blocks, fencing wires, etc.
        </Text>
        <Text mt='6'>
          At DON-ZUBIKS METAL CONTRUCTION Company, our outmost concern is the
          satisfaction of our clients. Patronise us today for a special
          treatment and discount and will want to visit us again and again.
        </Text>
      </Box>
    </Box>
  );
};

export default AboutUs;
