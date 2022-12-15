import React from 'react';
import {
  Flex, Spacer, Box, Center, Container
} from '@chakra-ui/react';
import Links from './Links';
import NavbarImage from './NavbarImage';

const Navbar = () => {

  return (
    <>
      <Box
        as="nav"
        position="fixed"
        width="100%"
        zIndex="100"
        pt="4"
        bg={"#f0f6ff"}
        display={{
          sm: "none",
          md: "none",
          lg: "contents",
          xl: "contents"
        }}
      >
        <Container maxW="container.xl">
          <Flex>
            <Center>
              <Box>
                <NavbarImage goToTop="true" cursorPointer="true" />
              </Box>
            </Center>
            <Spacer />
            <Center>
              <Box>
                <Links />
              </Box>
            </Center>
          </Flex>
        </Container>
      </Box>
    </>
    //
  );
};

export default Navbar;
