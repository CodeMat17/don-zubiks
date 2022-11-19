import { Box, Flex, IconButton, Link, Text, VStack } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg='gray.800'>
      <Box px='6' py='8' maxW='6xl' mx='auto'>
        <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontWeight='semibold'
          fontSize='2xl'>
          Don-Zubiks Metal Construction Company
        </Text>
        <Flex mt='4' flexDir={["column", "row"]}>
          <VStack align='start'>
            <Text color='white' fontWeight='semibold'>
              Follow Us:
            </Text>
            <IconButton
              as='a'
              href='https://www.facebook.com/azubuike.donzubiks'
              target='_blank'
              isRound
              size='lg'
              color='blue.500'
              icon={<FaFacebookF size={23} />}
            />
          </VStack>

          <VStack align='start' mt={[6, 0]} ml={[0, 8]}>
            <Text color='white' fontWeight='semibold'>
              For business talk or further enquires:
            </Text>
            <IconButton
              as='a'
              href='https://wa.me/2348064181850'
              target='_blank'
              isRound
              size='lg'
              color='green.500'
              icon={<BsWhatsapp size={23} />}
            />
          </VStack>
        </Flex>
        <Text color='white' mt='12' fontSize='lg'>
          &copy; All rights reserved. Don-Zubiks 2022
        </Text>
        <Text fontSize='sm' color='gray'>
          This website is developed by{" "}
          <Link href='https://soft-lutions.com.ng' color='blue.500' isExternal>
            CodeMat Soft-lutions
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
