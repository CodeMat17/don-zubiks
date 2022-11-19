import { Box, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";

const DesktopMenuBtn = () => {
  return (
    <Box display={{ base: "none", md: "flex" }}>
      <HStack>
        <Link href='/gates'>
          <Button size='lg' variant='ghost'>
            GATES
          </Button>
        </Link>
        <Link href='/rails'>
          <Button size='lg' variant='ghost'>
            HANDRAILS
          </Button>
        </Link>
        <Link href='/parks'>
          <Button size='lg' variant='ghost'>
            PARKS
          </Button>
        </Link>
        <Link href='/accessories'>
          <Button size='lg' variant='ghost'>
            ACCESSORIES
          </Button>
        </Link>
      </HStack>
    </Box>
  );
};

export default DesktopMenuBtn;
