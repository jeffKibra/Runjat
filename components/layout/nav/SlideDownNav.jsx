import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

import Nav from "./Nav";

function SlideDownNav() {
  const [top, setTop] = useState(-60);

  useEffect(() => {
    window.onscroll = function () {
      handleScroll();
    };

    function handleScroll() {
      if (
        document.body.scrollTop > 60 ||
        document.documentElement.scrollTop > 60
      ) {
        setTop(0);
      } else {
        setTop(-60);
      }
    }
  }, []);

  return (
    <Box
      width="full"
      height="80px"
      position="fixed"
      top={top}
      left={0}
      transition="top 0.5s"
      bg="rgba(0,0,0,0.9)"
      zIndex={999}
    >
      <Nav />
    </Box>
  );
}

export default SlideDownNav;
