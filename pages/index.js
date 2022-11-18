import { Box, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Don-Zubiks | Home</title>
        <meta name='description' content='Don-Zubiks is a .....' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box px='6' pt='32'>
        <VStack>
          <Text textAlign='center' fontSize='4xl' fontWeight='bold'>
            Please check later, site is under a temporal maintenance. Thank you.
          </Text>
        </VStack>
      </Box>
    </div>
  );
}
