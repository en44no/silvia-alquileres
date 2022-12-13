import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  sm: '0em', // 0px to 479px, Mobile devices
  md: '30em', // 480px to 767px, iPads, Tablets
  lg: '48em', // 768px to 1023px, Small screens, laptops
  xl: '64em', // 1024px to 1599px, Desktops, large screens
  xxl: '100em' // 1600px to infinite, Extra large screens, TV
};

const theme = extendTheme({
  breakpoints,
  styles: {
    global: (props) => ({
      body: {
        bg: '#f0f6ff',
        color: '#394e6a'
      }
    })
  },
  components: {
    Link: {
      baseStyle: {
        fontWeight: 'semibold',
        _hover: {
          textDecoration: 'none'
        }
      }
    }
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
