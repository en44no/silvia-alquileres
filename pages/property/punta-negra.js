import PageLayout from "../../components/PageLayout/PageLayout";
import PropertyDetails from "../../components/Property/PropertyDetails";

export default function Property() {
  return (
    <PageLayout title='Casa en Punta Negra' showGoBack={true}>

      <PropertyDetails
        price='4000'
        name='Casa en Punta Negra'
        simpleLocation='Punta Negra'
        description='Casa para dos personas ubicada en la ciudad de Piriápolis, en las calles Misiones y Piria (1113), a una cuadra del Hipercentro Devoto, a 6 de la playa y 4 de la terminal.'
        featuresLeftSide={['1 baño', '1 dormitorio, 1 cama', '2 huéspedes', 'Cochera', 'Rejas, cámaras']}
        featuresRightSide={['Parrillero', 'TV de 32 pulgadas con cable', 'Wifi', 'Cocina, heladera, microondas', 'Ventilador']}
        observations={['Luz y agua incluídos en el precio.', 'Mínimo de alquiler dos días.', 'Horario check in: 10:00', 'Horario check out: 12:00']}
        googleMapsSrc='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409.21279044420436!2d-55.26936714295279!3d-34.863706309384284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9575425fefb01769%3A0x6256a2b703d3cd69!2sMisiones%201113%2C%2020200%20Piri%C3%A1polis%2C%20Departamento%20de%20Maldonado!5e0!3m2!1ses-419!2suy!4v1670907535461!5m2!1ses-419!2suy'
      />

    </PageLayout>
  )
}