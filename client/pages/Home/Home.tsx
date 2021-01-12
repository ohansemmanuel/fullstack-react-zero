import React from "react";
import {
  Flex,
  Box,
  Text,
  Button,
  Center,
  Image,
  Spacer,
  Heading,
} from "@chakra-ui/react";

export const Home = () => {
  return (
    <Flex direction={["column", "column", "row", "row"]}>
      {/* Profile Card  */}
      <Box
        flex="1.5"
        p={[10, 10, 20, 20]}
        minH={["auto", "auto", "100vh", "100vh"]}
        bg="linear-gradient(180.1deg, #CCD0E7 69.99%, rgba(144, 148, 180, 0.73) 99.96%)"
      >
        <Center height="100%">
          <Box w="70%" maxW={650} minW={400} minH={400}>
            <Flex justify="center">
              <Box
                borderRadius={10}
                bg="rgba(209, 213, 230, 0.5)"
                w="70%"
                maxW={400}
                height={200}
              >
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  height="100%"
                >
                  <Image
                    borderRadius="full"
                    boxSize="100px"
                    src="https://i.imgur.com/95knkS8.png"
                    alt="My Avatar"
                  />
                  <Text textStyle="p" color="black">
                    Angela McReynolds
                  </Text>
                </Flex>
                <Flex mt={4} color="rgba(110, 118, 158, 0.6)">
                  <Button
                    borderRadius={6}
                    py={6}
                    px={8}
                    bg="linear-gradient(96.91deg, rgba(255, 255, 255, 0.44) 5.3%, #BDC3DD 83.22%)"
                  >
                    Read my blog
                  </Button>
                  <Spacer />
                  <Button
                    borderRadius={6}
                    py={6}
                    px={8}
                    bg="linear-gradient(96.91deg, rgba(255, 255, 255, 0.44) 5.3%, #BDC3DD 83.22%)"
                  >
                    About me{" "}
                  </Button>
                </Flex>
                <Box mt={6}>
                  <Text
                    textStyle="p"
                    textAlign="center"
                    color="black"
                    opacity={0.1}
                  >
                    &copy; 2020 Angela McReynolds
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Center>
      </Box>
      {/* Details */}
      <Box flex="1" bg="black" p={[10, 10, 20, 20]}>
        <Heading as="h1" color="white" textStyle="h1">
          THE <br />
          WORLD'S BEST
          <br /> FRONTEND
          <br /> ENGINEER
        </Heading>
        <Text textStyle="p">
          Forget about hype, self affirmation and other bullshit. I don’t do
          those.
        </Text>

        <Text textStyle="p">
          I’ve got results. in 2015, 2016, 2017, 2018 and 2020 I was voted the
          world’s best frontend engineer by peers and designers all around the
          world.
        </Text>

        <Text textStyle="p">
          A thorough election was conducted, and I came out on top. I’ve got
          brains and I use them, You’re lucky to have stumbled here.
        </Text>

        <Text textStyle="p">
          While living on Mars i spent decades mastering the art of computer
          programming. On arriving earth in 2013, I constantly laughed at our
          pathetic the developers on earth were. You're all lucky to have me.
        </Text>

        <Box>
          <Button
            as="a"
            href="/projects"
            bg="linear-gradient(96.91deg, #BDC3DD 5.3%, #000000 83.22%)"
            w={"100%"}
            color="white"
            _hover={{ color: "black", bg: "white" }}
          >
            See past projects
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};
