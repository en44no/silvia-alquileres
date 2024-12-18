import { Box } from '@chakra-ui/react'
import PageLayout from '../components/PageLayout/PageLayout'
import piriapolisImage from '../public/images/piriapolis.jpg'
import puntaNegraImage from '../public/images/punta-negra.jpeg'
import PropertyCard from '../components/Property/PropertyCard'

export default function Home() {

  return (
    <PageLayout title='Propiedades'>
      <Box w='100%' display='flex' flexDirection='column' alignItems='center' mb={{ sm: '2rem', md: '2rem', lg: '2rem', xl: '0' }}>

        <Box display='flex' justifyContent='center' gap={{ sm: '1rem', md: '1rem', lg: '1rem', xl: '5rem' }} mt={{ sm: '0', md: '0', lg: '1rem', xl: '1rem', xxl: '2rem' }} flexFlow='wrap'>

          <PropertyCard name='Piriápolis' src={piriapolisImage} address='Misiones 1113 esq. Piria' toiletQuantity='1' bedQuantity='1' peopleQuantity='2' price='$2500 UYU' route='piriapolis' />

          <PropertyCard name='Punta Negra' src={puntaNegraImage} address='Copacabana entre Estados Unidos y México' toiletQuantity='1' bedQuantity='2' peopleQuantity='6' price='$3500 UYU' route='punta-negra' />

        </Box>
      </Box>
    </PageLayout>
  )
}
