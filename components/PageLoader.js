import { HStack, Spinner, Text, VStack } from "@chakra-ui/react";

const PageLoader = () => {
  return (
    <VStack px='6' pt='32'>
      <HStack>
        <Spinner size='lg' />
        <Text
          textAlign='center'
          letterSpacing='1px'
          fontSize='lg'
          fontWeight='semibold'>
          Please wait...
        </Text>
      </HStack>
    </VStack>
  );
};

export default PageLoader;
