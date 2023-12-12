import {Component} from 'react'
import {
  Container,
  Flex,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Box
} from "@chakra-ui/react";
//
import {Carousel} from 'react-responsive-carousel'
//
import Image from 'next/image'
//

// Import css files
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import Card, { CardContent, CardHeader } from "./ui/Card";


//
import images from '../constants/worksImages'

class WorksImagesSlider extends Component {
  constructor(){
    super()
    this.state={
      images
    }
  }

  sliders(){
 return 
  }

  render(){
    const settings={
      centerMode: true,
      centerSlidePercentage:40,
      autoplay: true,
      interval:3000,
      // transitionTime: 4000,
      infiniteLoop:true,
      showArrows:true,
      dynamicHeight:false
    }

 return (
  
    <Container minW="container.lg" mb="40px" pt="40px">
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
 
}

export default WorksImagesSlider;
