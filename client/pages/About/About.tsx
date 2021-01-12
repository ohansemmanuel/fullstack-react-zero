import { Box, Text, Heading } from "@chakra-ui/react";

export const About = () => {
  return (
    <Box
      flex="1.5"
      p={[10, 10, 20, 20]}
      minH="100vh"
      bg="linear-gradient(180.1deg, #CCD0E7 69.99%, rgba(144, 148, 180, 0.73) 99.96%)"
    >
      <Heading textStyle="h1"> About Angela McReynolds</Heading>
      <Text textStyle="p" color="black">
        I'll ask you to build this page in the blog. Get ready ;)
      </Text>
    </Box>
  );
};
