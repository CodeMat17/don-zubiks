import { Box, Button, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ img, title, desc, url }) => {
  return (
    <Box
      maxW='250px'
      mx='auto'
      border='1px'
      borderColor='gray'
      rounded='md'
      p='4'>
      <VStack>
        <Box rounded='full' overflow='hidden'>
          <Box pos='relative' w='100px' h='100px'>
            <Image
              alt=''
              priority
              layout='fill'
              objectFit='cover'
              src={img}
            />
          </Box>
        </Box>
      </VStack>

      <Text mt='2' fontSize='2xl' fontWeight='semibold' textAlign='center'>
        {title}
      </Text>
      <Text textAlign='center'>{desc}</Text>
      <Box mt='6'>
        <Link href={url}>
          <Button
            color='white'
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            w='full'>
            CHECKOUT
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ProductCard;
