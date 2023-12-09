import { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { RiArrowUpSLine } from "react-icons/ri";

function ScrollButton() {
  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    }

    window.onscroll = function () {
      handleScroll();
    };
  }, []);

  // When the user clicks on the button, scroll to the top of the document
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return visible ? (
    <IconButton
      zIndex={1000}
      colorScheme="cyan"
      fontSize="2xl"
      position="fixed"
      bottom="50"
      right="30"
      onClick={scrollToTop}
      icon={<RiArrowUpSLine />}
    />
  ) : null;
}

export default ScrollButton;
