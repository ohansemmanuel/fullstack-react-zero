import React from "react";
import {
  Container,
  Heading,
  Text,
  Link,
  Center,
  Image,
} from "@chakra-ui/react";
import { PageWrapper } from "./client/makePages";

export default () => (
  <PageWrapper>
    <Container bg="black">
      <Heading textStyle="h1" mt={7} textAlign="center" color="white">
        You seem lost :({" "}
      </Heading>
      <Text textStyle="p" textAlign="center">
        <Link href="/" color="brand.900">
          Go home
        </Link>
      </Text>
      <Image src="https://i.imgur.com/lA3vpFh.png" />
    </Container>
  </PageWrapper>
);
