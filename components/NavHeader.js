import { Box, HStack, Icon, Text } from "@chakra-ui/react"
import DesktopMenuBtn from "./menu/DesktopMenuBtn";
import MobileMenuBtn from "./menu/MobileMenuBtn";

const NavHeader = () => {
  return (
    <Box bg='gray.800' as='nav' px='6' py='4' shadow='md' pos='sticky' top='0' zIndex='60'>
      <HStack maxW='6xl' mx='auto' align='center' justify='space-between'>
        <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontWeight='semibold'
          fontSize='2xl'>
          Don-Zubiks
        </Text>
        <MobileMenuBtn />
        <DesktopMenuBtn />
      </HStack>
    </Box>
  );
}

export default NavHeader