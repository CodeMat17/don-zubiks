import { Box, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";

const DesktopMenuBtn = () => {
  return (
    <Box display={{ base: "none", md: "flex" }}>
      <HStack spacing='0'>
        <Link href='/'>
          <Button
            _hover={{ bg: "gray.700" }}
            color='white'
            // size='lg'
            variant='ghost'>
            HOME
          </Button>
        </Link>

        <Link href='/gates'>
          <Button
            _hover={{ bg: "gray.700" }}
            color='white'
            // size='lg'
            variant='ghost'>
            GATES
          </Button>
        </Link>
        <Link href='/rails'>
          <Button
            _hover={{ bg: "gray.700" }}
            color='white'
            // size='lg'
            variant='ghost'>
            HANDRAILS
          </Button>
        </Link>
        <Link href='/parks'>
          <Button
            _hover={{ bg: "gray.700" }}
            color='white'
            // size='lg'
            variant='ghost'>
            PARKS
          </Button>
        </Link>
        <Link href='/accessories'>
          <Button
            _hover={{ bg: "gray.700" }}
            color='white'
            // size='lg'
            variant='ghost'>
            ACCESSORIES
          </Button>
        </Link>
      </HStack>
    </Box>
  );
};

export default DesktopMenuBtn;
