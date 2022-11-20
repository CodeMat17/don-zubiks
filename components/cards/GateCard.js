import { AspectRatio, Box, Tag } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

const GateCard = ({ gate, index }) => {
  console.log(index);
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
          <Image alt='' src={`https:${gate}`} priority layout='fill' />
              </AspectRatio>
              <Box  zIndex='60'
          pos='absolute'
                  right='2'>
                   <Tag
        
          size='lg'
          fontSize='lg'
          bg='purple'
          rounded='full'
          color='white'>
          {index}
        </Tag>
          </Box>
       
      </Box>
    </Box>
  );
};

export default GateCard;
