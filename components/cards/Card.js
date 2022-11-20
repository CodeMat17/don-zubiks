import { AspectRatio, Box, Tag } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

const Card = ({ img, pix, index }) => {
  return (
    <Box mx='auto'>
      <Box
        as={motion.div}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
        pos='relative'
        rounded='md'
        overflow='hidden'
        shadow='md'
        w={["xs"]}
        h={["320px"]}>
        <AspectRatio pos='relative' ratio={1}>
          <>
            {img && (
              <Image alt='' src={`https:${img}`} priority layout='fill' />
            )}
            {pix && (
              <Image alt='' src={pix} priority layout='fill' />
            )}
            <Box>
              <Tag
                pos='absolute'
                top='2'
                right='2'
                size='lg'
                fontSize='lg'
                bg='purple'
                rounded='full'
                color='white'>
                {index}
              </Tag>
            </Box>
          </>
        </AspectRatio>
      </Box>
    </Box>
  );
};

export default Card;
