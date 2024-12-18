import PageLayout from "../../components/PageLayout/PageLayout";
import PropertyDetails from "../../components/Property/PropertyDetails";

export default function Property() {
  return (
    <PageLayout title='Casa en Punta Negra' showGoBack={true}>

      <PropertyDetails
        price='3500'
        name='Casa en Punta Negra'
        simpleLocation='Punta Negra'
        description='Casa con comodidades para 6 personas ubicada en Punta Negra. A una cuadra y media de la playa'
        featuresLeftSide={['1 baño', '2 dormitorios, 3 camas (matrimonial, cuchetas y marinera)', '6 huéspedes', 'Predio cercado', 'Parrilleros dentro y fuera de la casa', 'Aire acondicionado en living']}
        featuresRightSide={['TV con Directv', 'Cocina', 'Microondas', 'Lavadora', 'Ventiladores']}
        observations={['Para reservar se debe abonar el 30% del precio total, el resto se paga al llegar.', 'Gastos de luz aparte.', 'Mínimo de alquiler dos días.', 'Horario check in: 10:00', 'Horario check out: 12:00']}
        googleMapsSrc='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.6514437092255!2d-55.22008798423788!3d-34.890097980215145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb75bceddc2142409!2zMzTCsDUzJzI0LjQiUyA1NcKwMTMnMDQuNCJX!5e0!3m2!1ses!2suy!4v1672669319395!5m2!1ses!2suy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
        imagesSrc={['/images/puntaNegra/1.jpg', '/images/puntaNegra/2.jpg', '/images/puntaNegra/3.jpg', '/images/puntaNegra/4.jpg', '/images/puntaNegra/5.jpg', '/images/puntaNegra/6.jpg', '/images/puntaNegra/7.jpg', '/images/puntaNegra/8.jpg', '/images/puntaNegra/9.jpg', '/images/puntaNegra/10.jpg', '/images/puntaNegra/11.jpg', '/images/puntaNegra/12.jpg', '/images/puntaNegra/13.jpg', '/images/puntaNegra/14.jpg', '/images/puntaNegra/15.jpg', '/images/puntaNegra/16.jpg', '/images/puntaNegra/17.jpg', '/images/puntaNegra/18.jpg', '/images/puntaNegra/19.jpg', '/images/puntaNegra/20.jpg']}
      />

    </PageLayout>
  )
}