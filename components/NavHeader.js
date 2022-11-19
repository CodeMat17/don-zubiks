import { Box, HStack, Text } from "@chakra-ui/react"

const NavHeader = () => {
  return (
    <Box as='nav' px='6' py='4'>
      <HStack align='center' justify='space-between'>
        <Text fontWeight='semibold' fontSize='xl'>Don-Zubiks</Text>
        <Text>LOGO</Text>
      </HStack>
    </Box>
  );
}

export default NavHeader