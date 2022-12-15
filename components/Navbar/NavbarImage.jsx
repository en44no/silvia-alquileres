import { Box } from '@chakra-ui/react';
import React from 'react';
import logoImage from "../../public/images/logo.png"
import Image from 'next/image'
import Link from 'next/link';

const NavbarImage = (props) => {
  const { cursorPointer, imageSize } = props;

  return (
    <>
      <Link href='/'>
        <Box p="4" display='flex' gap='0.5rem'
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
            ml: '0.5'
          }}
          cursor={cursorPointer ? () => 'pointer' : null}>
          <Image
            src={logoImage}
            width={imageSize ? imageSize : 110}
            height={imageSize ? imageSize : 110}
            alt="Logo Silvia Alquileres"
          />
        </Box>
      </Link>
    </>
  );
};

export default NavbarImage;
