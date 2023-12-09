import { Box, Heading } from "@chakra-ui/react";

export default function Card({ children }) {
  return (
    <Box zIndex={1000} height="full" bg="white" borderRadius={4} shadow="md">
      {children}
    </Box>
  );
}

export function CardContent({ children }) {
  return (
    <Box textAlign="center" p={4}>
      {children}
    </Box>
  );
}

export function CardHeader({ children }) {
  return (
    <Heading color="grey" textAlign="center" p={4} pb="0px" as="h3" size="md">
      {children}
    </Heading>
  );
}

export function CardActions({ children }) {
  return <Box p={4}>{children}</Box>;
}
