import {
  Container,
  Flex,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Slider from "react-slick";

import Card, { CardContent, CardHeader } from "./ui/Card";

import values from "../constants/values";

function ValuesSlider() {
  return (
    <Container minW="container.lg" mb="40px" pt="40px">
      <Heading size="sm" color="blue" mb="5px">
        VALUES
      </Heading>
      <Flex w="50px" h="3px" bg="cyan" mb="20px" />

      <Slider
        arrows
        dots
        infinite
        speed={500}
        slidesToShow={2}
        slidesToScroll={1}
        // autoplay
        responsive={[
          {
            breakpoint: 678,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {values.map((value, i) => {
          const { title, content } = value;

          return (
            <Flex key={i}>
              <Card>
                <CardHeader>{title}</CardHeader>
                <CardContent>{content}</CardContent>
              </Card>
            </Flex>
          );
        })}
      </Slider>
    </Container>
  );
}

export default ValuesSlider;
