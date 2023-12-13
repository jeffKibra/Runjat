import {
  Container,
  Heading,
  Box,
  useMediaQuery
} from "@chakra-ui/react";
//
import {Carousel} from 'react-responsive-carousel'
//
import Image from 'next/image'

// Import css files
import "react-responsive-carousel/lib/styles/carousel.min.css";
//
import images from '../constants/worksImages'

function WorksImagesSlider (props) {

  const [isMediumAndAbove]=useMediaQuery("(min-width: 768px)", {ssr:true, fallback:false})
// console.log({isMediumAndAbove})
 

    const settings={
      centerMode: true,
      centerSlidePercentage:isMediumAndAbove ? 45 : 80,
      autoplay: true,
      interval:3000,
      // transitionTime: 4000,
      infiniteLoop:true,
      showArrows:true,
      dynamicHeight:false,
      showThumbs:false
    }

 return (
  
    <Container maxW="container.lg" px={8} mb="40px" pt="40px">
      <Heading  color="#A70106" pb={4}>
        OUR WORKS
      </Heading>

       <Carousel
        {...settings}
        >
        {images.map((data, i) => {
            return (
              <Box key={i} >
                  <Image height="700px" alt="image" src={data} objectFit='contain' />
              </Box>
            )
        })}
      </Carousel>

    </Container>
  );
  
 
}

export default WorksImagesSlider;
