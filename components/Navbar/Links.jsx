import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
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
          <Link href='/'>INICIO</Link>
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
          <Link href='/frequent-questions'>PREGUNTAS FRECUENTES</Link>
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
          <Link href='/payment-methods'>MÉTODOS DE PAGO</Link>
        </Box>
      </Flex>
    </>
  );
};

export default Links;
