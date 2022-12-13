import React from 'react';
import {
  Box, Flex, useMediaQuery
} from '@chakra-ui/react';
import Link from 'next/link'

const Links = () => {

  return (
    <>
      <Flex as="ul">
        <Box
          as="li"
          listStyleType='none'
          mr="1rem"
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
            color: '#3281ce',
            cursor: 'pointer',
            textDecoration: 'none'
          }}
          fontWeight="semibold"
        >
          <Link href='/contact'>CONTACTO</Link>
        </Box>
        <Box
          as="li"
          listStyleType='none'
          mr="1rem"
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
            color: '#3281ce',
            cursor: 'pointer',
            textDecoration: 'none'
          }}
          fontWeight="semibold"
        >
          <Link href='/paymentMethods'>MÉTODOS DE PAGO</Link>
        </Box>
      </Flex>
    </>
  );
};

export default Links;
