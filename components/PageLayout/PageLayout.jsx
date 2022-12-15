import React from 'react';
import { Container, Box, Text, Button } from '@chakra-ui/react';
import Head from 'next/head';
import PageLayoutSubtitle from './PageLayoutSubtitle';
import PageLayoutHeader from './PageLayoutHeader';
import PageLayoutNextButton from './PageLayoutNextButton';
import Navbar from '../Navbar/Navbar';
import { FaAngleLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';

const PageLayout = (props) => {

  const router = useRouter()

  const {
    id,
    title,
    subtitle,
    sectionNextButton,
    children,
    sectionHome,
    marginBottomInTitle,
    showGoBack = false,
    centerChildren = true
  } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Silvia alquileres'></meta>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>


      <Container
        as="section"
        id={id}
        w="100%"
        maxW="container.xl"
        height={{
          sm: sectionHome ? '80vh' : 'auto', md: '100vh', lg: '100vh', xl: '100vh'
        }}
        position="relative"
        display="flex"
        flexDirection="column"
      >
        <Navbar />

        {showGoBack && (
          <Button onClick={() => router.push(`/`)} border='1px solid' bg='#fff' _hover={{ 'bg': '#394e6a', 'color': '#fff' }} borderRadius='18px' display='flex' alignItems='center' gap='0.5rem' justifyContent='center' p='0.8rem'>
            <FaAngleLeft fontSize='1.1rem' />
            <Text fontSize='0.9rem' fontWeight='medium'>VOLVER A ATRÁS</Text>
          </Button>
        )}

        {title
          ? (
            <Box
              as="section"
              textAlign="center"
              position="relative"
              w="100%"
              mb={marginBottomInTitle || '1rem'}
            >
              <PageLayoutHeader title={title} />
            </Box>
          )
          : null}
        {subtitle
          ? (
            <Box as="section" textAlign="center" h="2rem" position="relative" top="6rem" w="100%">
              <PageLayoutSubtitle subtitle={subtitle} />
            </Box>
          )
          : null}
        {children
          ? (
            <Box
              display="flex"
              alignItems={centerChildren ? 'center' : 'start'}
              justifyContent={centerChildren ? 'center' : 'start'}
              flexDirection="column"
              height="100%"
              width="100%"
            >
              {children}
            </Box>
          )
          : null}
        {sectionNextButton
          ? (
            <Box
              as="section"
              textAlign="center"
              position="relative"
              w="100%"
              bottom={{
                sm: '5rem', md: null, lg: '2rem', xl: '2rem'
              }}
              display={{
                sm: 'none', md: 'none', lg: 'block', xl: 'block'
              }}
            >
              <PageLayoutNextButton section={sectionNextButton} />
            </Box>
          )
          : null}
      </Container>
    </>
  );
};

export default PageLayout;
