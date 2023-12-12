import {Component} from 'react'
import {
  Container,
  Flex,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Slider from "react-slick";
//
import Image from 'next/image'
//

// Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Card, { CardContent, CardHeader } from "./ui/Card";


//
import images from '../constants/worksImages'

class ValuesSlider extends Component {
  constructor(){
    super()
    this.state={
      images
    }
  }

  sliders(){
 return this.state.images.map((data, i) => {
            return (
                <div key={i}>
                  <h3>{i}</h3>
                    {/* <Image alt="image" src={data} /> */}
                </div>
            )
        });
  }

  render(){
    const settings={
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000,
      arrow: false
    }

 return (
   <div>
    <Slider
    {...settings}
        // arrows
        // dots
        // infinite
        // speed={500}
        // slidesToShow={2}
        // // slidesToShow={1}
        // slidesToScroll={1}
        
        // autoplay
        // responsive={[
        //   {
        //     breakpoint: 678,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //     },
        //   },
        // ]}

      >
        {this.sliders()}
        {/* {images.map((src, i) => {
          

          return (
           <div key={i}>
             <h3>{i}</h3>
           </div>
            
            // <Image src={src} alt={`works image ${i}`} key={i} />
            
          );
        })} */}
      </Slider>
      </div>
    // <Container minW="container.lg" mb="40px" pt="40px">
    //   <Heading size="sm" color="blue" mb="5px">
    //     Our Works
    //   </Heading>

    //   <Slider
    //     arrows
    //     dots
    //     infinite
    //     speed={500}
    //     slidesToShow={2}
    //     slidesToShow={1}
    //     slidesToScroll={1}
        
    //     autoplay
    //     responsive={[
    //       {
    //         breakpoint: 678,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //         },
    //       },
    //     ]}
    //   >
    //     {images.map((src, i) => {
          

    //       return (
           
    //         <Flex key={i}>
    //            <div key={i}>
    //         <Image src={src} alt={`works image ${i}`} key={i} />
    //         </div>
    //         </Flex>
    //       );
    //     })}
    //   </Slider>
    // </Container>
  );
  }
 
}

export default ValuesSlider;
