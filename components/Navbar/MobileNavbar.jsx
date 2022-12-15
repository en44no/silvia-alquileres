import React from 'react';
import {
  Flex, Box, Menu, MenuButton, MenuList, MenuItem, Button
} from '@chakra-ui/react';
import NavbarImage from './NavbarImage';
import { CgMenuLeftAlt } from 'react-icons/cg';
import Link from 'next/link';

const MobileNavbar = () => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <Box
        as="nav"
        position="relative"
        width="100%"
        height="auto"
        zIndex="100"
        pb="4"
        bg={'#f0f6ff'}
        display={{
          sm: "contents",
          md: "contents",
          lg: "none",
          xl: "none"
        }}
      >
        <Box display='flex' alignItems='center'>

          <Box w='50%'>
            <Menu>

              <MenuButton p='0' bg='#inherit' _hover={{ 'bg': 'none', 'boxShadow': 'none' }} _active={{ 'bg': 'none', 'boxShadow': 'none' }} as={Button} rightIcon={
                <CgMenuLeftAlt fontSize='2rem' />}>
              </MenuButton>

              <MenuList ml='0.5rem' borderRadius='18px' p='0.5rem'>
                <Link href='/'>
                  <MenuItem borderRadius='18px' fontWeight='500' fontSize='0.9rem'>INICIO</MenuItem>
                </Link>
                <Link href='/frequent-questions'>
                  <MenuItem borderRadius='18px' fontWeight='500' fontSize='0.9rem'>PREGUNTAS FRECUENTES</MenuItem>
                </Link>
                <Link href='/payment-methods'>
                  <MenuItem borderRadius='18px' fontWeight='500' fontSize='0.9rem'>MÉTODOS DE PAGO</MenuItem>
                </Link>
              </MenuList>

            </Menu>
          </Box>

          <Flex display='flex' justifyContent='center' flexShrink='0'>
            <NavbarImage imageSize={120} />
          </Flex>

          <Box w='50%'>
          </Box>

        </Box>

      </Box>
    </>
  );
};

export default MobileNavbar;
