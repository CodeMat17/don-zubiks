import { AspectRatio, Box, HStack, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { BiRadioCircleMarked } from "react-icons/bi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ slides }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentSlide = useCallback((slideIndex) => {
    setCurrentIndex(slideIndex);
  }, []);

  const autoScroll = true;
  let intervalTime = 5000;
  let slideInterval;

  const auto = useCallback(() => {
    slideInterval = setInterval(nextSlide, intervalTime);
  }, [nextSlide, intervalTime]);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, autoScroll, slideInterval, auto]);

  return (
    <Box>
      <Box pos='relative'>
        <AspectRatio
          // opacity='0.9'
          pos='relative'
          maxW='100%'
          maxH='90vh'
          ratio={16 / 9}>
          <Image
            alt=''
            priority
            layout='fill'
            src={`${slides[currentIndex].url}`}
            //   objectFit='cover'
          />
        </AspectRatio>

        <Box
          color='white'
          px='4'
          pos='absolute'
          bottom={[12, 20, 32, 40]}
          left='0'
          right='0'>
          <Text
            fontSize={["4xl", "5xl", "6xl", "7xl"]}
            fontWeight='extrabold'
            letterSpacing='1px'
            textAlign='center'
            textShadow='0 0 20px black'>
            {/* {item.title} */}
            {`${slides[currentIndex].title}`}
          </Text>
          <Text
            textShadow='0 0 20px black'
            lineHeight='1'
            fontSize={["lg", "xl"]}
            textAlign='center'>
            {/* {slides.desc} */}
            {`${slides[currentIndex].desc}`}
          </Text>
        </Box>
      </Box>
      <HStack py='2' align='center' justify='center' spacing={[4, 8, 24]}>
        <IconButton
          onClick={previousSlide}
          // opacity='0.5'
          isRound
          icon={<FaChevronLeft size={20} />}
        />

        <HStack spacing={[2, 4, 6]} justify='center'>
          {slides.map((slide, slideIndex) => (
            <IconButton
              key={slideIndex}
              onClick={() => currentSlide(slideIndex)}
              icon={<BiRadioCircleMarked size={20} />}
              isRound
              opacity='0.5'
              size='sm'
            />
          ))}
        </HStack>

        <IconButton
          onClick={nextSlide}
          // opacity='0.5'
          isRound
          icon={<FaChevronRight size={20} />}
        />
      </HStack>
    </Box>
  );
};

export default Carousel;
