import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

const MobileMenuBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display={{ md: "none" }}>
      <IconButton
        onClick={onOpen}
        size='lg'
        _hover={{ bg: "gray.700" }}
        variant='ghost'
        icon={<HiMenuAlt3 size={32} color='white' />}
      />
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Don-Zubiks Metal Construction</DrawerHeader>

          <DrawerBody>
            <Link href='/'>
              <Button
                mt='8'
                mb='4'
                size='lg'
                onClick={onClose}
                w='full'
                variant='ghost'
                letterSpacing='1px'>
                HOME
              </Button>
            </Link>

            <Link href='/gates'>
              <Button
                mb='4'
                size='lg'
                onClick={onClose}
                w='full'
                variant='ghost'
                letterSpacing='1px'>
                GATES
              </Button>
            </Link>

            <Link href='/rails'>
              <Button
                mb='4'
                size='lg'
                onClick={onClose}
                w='full'
                variant='ghost'
                letterSpacing='1px'>
                HANDRAILS
              </Button>
            </Link>

            <Link href='/parks'>
              <Button
                mb='4'
                size='lg'
                onClick={onClose}
                w='full'
                variant='ghost'
                letterSpacing='1px'>
                PARK
              </Button>
            </Link>

            <Link href='/accessories'>
              <Button
                mb='4'
                size='lg'
                onClick={onClose}
                w='full'
                variant='ghost'
                letterSpacing='1px'>
                ACCESSORIES
              </Button>
            </Link>
          </DrawerBody>

          <DrawerFooter>
            <HStack align='center' justify='space-between' spacing='20px'>
              <VStack align='center' justify='center'>
                <IconButton
                  as='a'
                  href='https://www.facebook.com/azubuike.donzubiks'
                  target='_blank'
                  isRound
                  size='lg'
                  color='blue.500'
                  icon={<FaFacebookF size={23} />}
                />
                <Text>Follow Us</Text>
              </VStack>

              <VStack align='center' justify='center'>
                <IconButton
                  as='a'
                  href='https://wa.me/2348064181850'
                  target='_blank'
                  isRound
                  size='lg'
                  color='green.500'
                  icon={<BsWhatsapp size={23} />}
                />
                <Text>Contact Us</Text>
              </VStack>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileMenuBtn;
