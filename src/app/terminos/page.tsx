'use client';

import Container from '@/components/ui/Container';
import { useLanguage } from '@/hooks/useLanguage';
import Link from 'next/link';

export default function TerminosPage() {
  const { language } = useLanguage();
  const isEs = language === 'es';

  return (
    <div id="main-content" className="min-h-screen bg-white py-16 text-gray-900">
      <Container>
        <div className="max-w-3xl mx-auto [&_p]:text-gray-900 [&_li]:text-gray-900 [&_a]:text-orange-600">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {isEs ? 'Términos y Condiciones' : 'Terms and Conditions'}
          </h1>
          <p className="text-sm text-gray-700 mb-8">
            {isEs ? 'Última actualización: marzo 2025' : 'Last updated: March 2025'}
          </p>

          {/* Marco legal UE y España */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {isEs ? '1. Marco legal y normativa aplicable' : '1. Legal framework and applicable regulations'}
            </h2>
            <p className="mb-4">
              {isEs
                ? 'El presente documento recoge los términos y condiciones generales del servicio de alquiler de trasteros ofrecido por Trasteros Ibiza (Ibiza Trasteros SL / Trasteros Ibiza SL), en el marco de la normativa española y de la Unión Europea aplicable.'
                : 'This document sets out the general terms and conditions for the storage unit rental service offered by Trasteros Ibiza (Ibiza Trasteros SL / Trasteros Ibiza SL), within the framework of applicable Spanish and European Union regulations.'}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                {isEs
                  ? 'Ley 29/1994, de 24 de noviembre, de Arrendamientos Urbanos (España).'
                  : 'Spanish Law 29/1994 of 24 November on Urban Leases.'}
              </li>
              <li>
                {isEs
                  ? 'Código Civil español (arrendamiento, depósito y obligaciones).'
                  : 'Spanish Civil Code (lease, deposit and obligations).'}
              </li>
              <li>
                {isEs
                  ? 'Directiva 2011/83/UE sobre derechos de los consumidores (información, desistimiento, prácticas comerciales).'
                  : 'EU Directive 2011/83/EU on consumer rights (information, withdrawal, commercial practices).'}
              </li>
              <li>
                {isEs
                  ? 'Reglamento (UE) 2016/679 (RGPD) y Ley Orgánica 3/2018 de protección de datos (LOPDGDD).'
                  : 'Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 on data protection (LOPDGDD).'}
              </li>
              <li>
                {isEs
                  ? 'Ley 3/2014 de defensa de las personas consumidoras y usuarias (España).'
                  : 'Spanish Law 3/2014 on the defence of consumers and users.'}
              </li>
            </ul>
          </section>

          {/* Identificación del prestador */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {isEs ? '2. Identificación del prestador' : '2. Service provider identification'}
            </h2>
            <p className="mb-2">
              <strong>Ibiza Trasteros SL</strong> / <strong>Trasteros Ibiza SL</strong>
            </p>
            <ul className="list-none space-y-1 text-gray-700">
              <li>CIF: B57946691</li>
              <li>
                {isEs ? 'Domicilio fiscal:' : 'Registered office:'} Calle Can Escandell nº 40 B.
              </li>
              <li>
                {isEs ? 'Domicilio comercial:' : 'Business address:'} Calle Menéndez Pidal nº 28, San Antonio; Av. Dr. Fleming 35, local 17, CP 07820, Ibiza.
              </li>
              <li>
                {isEs ? 'Administrador:' : 'Director:'} Andrés Omar Giannico, NIE X09814137Z.
              </li>
            </ul>
          </section>

          {/* Objeto y naturaleza del contrato */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {isEs ? '3. Objeto y naturaleza del contrato' : '3. Subject matter and nature of the contract'}
            </h2>
            <p className="mb-4">
              {isEs
                ? 'El contrato tiene por objeto la puesta a disposición de un módulo (trastero) físicamente delimitado para el almacenamiento de bienes muebles, maquinaria y mercancías. Es un contrato de arrendamiento en el ámbito de la Ley 29/1994 de Arrendamientos Urbanos y del Código Civil. El cliente declara haber conocido el espacio (o un modelo del mismo) y aceptarlo con la firma del contrato.'
                : 'The contract concerns the provision of a physically delimited storage unit for the storage of movable goods, machinery and merchandise. It is a lease contract within the scope of Spanish Law 29/1994 on Urban Leases and the Civil Code. The customer declares that they have inspected the space (or a model of it) and accept it by signing the contract.'}
            </p>
            <p className="mb-4">
              {isEs
                ? 'Trasteros Ibiza SL solo responderá por daños o robo sufridos en sus instalaciones por un valor máximo de 300 €. El precio del alquiler incluye IVA y un seguro incluido en la mensualidad hasta 300 € por módulo.'
                : 'Trasteros Ibiza SL shall only be liable for damage or theft occurring on its premises up to a maximum value of €300. The rental price includes VAT and insurance included in the monthly fee up to €300 per unit.'}
            </p>
          </section>

          {/* Duración, prórroga y preaviso */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {isEs ? '4. Duración, prórroga y preaviso' : '4. Term, renewal and notice'}
            </h2>
            <p className="mb-4">
              {isEs
                ? 'La duración mínima inicial es de 1 mes desde la firma, prorrogable mensualmente. Cualquiera de las partes puede no prorrogar mediante preaviso de 7 días naturales antes del fin del periodo en curso. El cliente puede desistir unilateralmente con preaviso de 15 días naturales, sin indemnización a favor de Trasteros Ibiza.'
                : 'The initial minimum term is 1 month from signing, renewable monthly. Either party may choose not to renew by giving 7 calendar days’ notice before the end of the current period. The customer may withdraw unilaterally with 15 calendar days’ notice, with no compensation due to Trasteros Ibiza.'}
            </p>
            <p className="mb-4">
              {isEs
                ? 'La prórroga tácita no aplica si el cliente no está al corriente de pago. Si el cliente desaloja con preaviso y antes de fin de periodo, se devolverá el importe del periodo pagado y no utilizado (salvo cobro mínimo de un mes), en un plazo máximo de 25 días desde la comunicación y desalojo.'
                : 'Tacit renewal does not apply if the customer is in arrears. If the customer vacates with notice and before the end of the period, the amount for the paid but unused period will be refunded (subject to a minimum charge of one month), within a maximum of 25 days from notification and vacating.'}
            </p>
          </section>

          {/* Precio y forma de pago */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {isEs ? '5. Precio y forma de pago' : '5. Price and payment'}
            </h2>
            <p className="mb-4">
              {isEs
                ? 'El precio se abona a la firma (incluye IVA). Los pagos sucesivos se realizan el primer día de cada prórroga, preferentemente por domiciliación bancaria. Medios admitidos: efectivo, tarjeta, transferencia (en la firma); para periodos siguientes, domiciliación bancaria salvo autorización expresa para otros medios.'
                : 'The price is paid on signing (including VAT). Subsequent payments are due on the first day of each renewal period, preferably by direct debit. Accepted methods: cash, card, transfer (on signing); for subsequent periods, direct debit unless express authorisation for other means.'}
            </p>
            <p className="mb-4">
              {isEs
                ? 'Revisión del precio: Trasteros Ibiza puede actualizar el precio cada diciembre según el IPC (Índice de Precios de Consumo), con comunicación al cliente con 30 días de antelación. El cliente puede resolver el contrato en el plazo de 15 días desde la recepción de dicha comunicación.'
                : 'Price review: Trasteros Ibiza may update the price each December in line with the Consumer Price Index, notifying the customer 30 days in advance. The customer may terminate the contract within 15 days of receiving such notice.'}
            </p>
          </section>

          {/* Uso y destino del módulo */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {isEs ? '6. Uso y destino del módulo' : '6. Use and purpose of the unit'}
            </h2>
            <p className="mb-4">
              {isEs
                ? 'El módulo se destina exclusivamente al almacenamiento de bienes. Queda prohibido: uso como domicilio o dirección postal; almacenar objetos robados, sustancias ilegales, alimentos o líquidos sin embalar adecuadamente, animales, plantas, gases, pinturas, combustibles, inflamables, químicos, radiactivos, armamento, estupefacientes, dinero en efectivo, joyas, documentos de identidad, móviles, máquinas conectadas a la red, etc. Los bienes deben estar depositados a más de 12 cm del suelo (estanterías, palets). Trasteros Ibiza queda exonerada de responsabilidad por tenencia de objetos robados o mercancías ilegales.'
                : 'The unit is for storage of goods only. The following are prohibited: use as a residence or postal address; storing stolen goods, illegal substances, unproperly packaged food or liquids, animals, plants, gases, paints, fuels, flammables, chemicals, radioactive materials, weapons, narcotics, cash, jewellery, identity documents, mobile phones, machines connected to the mains, etc. Goods must be stored more than 12 cm above the floor (shelving, pallets). Trasteros Ibiza is exempt from liability for the storage of stolen items or illegal goods.'}
            </p>
          </section>

          {/* Impago y resolución */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {isEs ? '7. Impago y resolución' : '7. Non-payment and termination'}
            </h2>
            <p className="mb-4">
              {isEs
                ? 'En caso de impago de 2 mensualidades, Trasteros Ibiza puede suspender el acceso y la cobertura del seguro. Se aplicarán recargos por mora (10 % desde el impago o 15º día de mora, mínimo 10 € + IVA; 20 % a partir del 21º día). Si transcurren 2 meses desde la comunicación de dejar libre el trastero por impago sin que el cliente desaloje, los bienes podrán considerarse abandonados y el contrato resuelto, sin perjuicio del cobro de cantidades adeudadas.'
                : 'In the event of non-payment of 2 instalments, Trasteros Ibiza may suspend access and insurance coverage. Late payment surcharges apply (10% from the date of default or 15th day of delay, minimum €10 + VAT; 20% from the 21st day). If 2 months pass from the notice to vacate due to non-payment without the customer vacating, the goods may be deemed abandoned and the contract terminated, without prejudice to recovery of sums owed.'}
            </p>
            <p className="mb-4">
              {isEs
                ? 'Ibiza Trasteros puede resolver el contrato por: falta de pago (más de 2 mensualidades), introducción de bienes prohibidos, incumplimiento de uso/mantenimiento o acceso. Salvo en impago, se requerirá al cliente por escrito para subsanar en un plazo de una semana antes de resolver.'
                : 'Ibiza Trasteros may terminate the contract for: non-payment (more than 2 instalments), storage of prohibited items, breach of use/maintenance or access rules. Except in cases of non-payment, the customer will be required in writing to remedy the breach within one week before termination.'}
            </p>
          </section>

          {/* Acceso, horario y seguridad */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {isEs ? '8. Acceso, horario y seguridad' : '8. Access, opening hours and security'}
            </h2>
            <p className="mb-4">
              {isEs
                ? 'Se garantiza el acceso al recinto y al módulo en el horario y condiciones establecidos en el contrato, siempre que el cliente esté al corriente de pago. El cliente debe instalar y custodiar su propio candado en la puerta del módulo. Ibiza Trasteros puede acceder al módulo: a solicitud de autoridades (policía, bomberos) sin preaviso; en urgencias que puedan causar daños, sin preaviso; para reparaciones urgentes con preaviso de una semana; en caso de impago si lo acuerda un órgano judicial; en caso de resolución por incumplimiento del cliente.'
                : 'Access to the premises and unit is guaranteed during the hours and under the conditions set out in the contract, provided the customer is up to date with payments. The customer must fit and keep their own padlock on the unit door. Ibiza Trasteros may access the unit: at the request of the authorities (police, fire service) without notice; in emergencies that could cause damage, without notice; for urgent repairs with one week’s notice; in case of non-payment if so ordered by a court; in case of termination for the customer’s breach.'}
            </p>
          </section>

          {/* Ley aplicable y jurisdicción */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {isEs ? '9. Ley aplicable y jurisdicción' : '9. Governing law and jurisdiction'}
            </h2>
            <p className="mb-4">
              {isEs
                ? 'El contrato se rige por el derecho español. Las partes se someten a los Juzgados y Tribunales de Ibiza, con renuncia expresa a cualquier otro foro. En caso de nulidad parcial, el resto del contrato permanece válido y las partes se comprometen a sustituir la parte nula por una de igual sentido.'
                : 'The contract is governed by Spanish law. The parties submit to the courts of Ibiza, with express waiver of any other jurisdiction. In the event of partial invalidity, the remainder of the contract remains in force and the parties undertake to replace the invalid part with one of equivalent effect.'}
            </p>
          </section>

          {/* Consumidor UE */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {isEs ? '10. Información al consumidor (Directiva 2011/83/UE)' : '10. Consumer information (Directive 2011/83/EU)'}
            </h2>
            <p className="mb-4">
              {isEs
                ? 'Si actúa usted como consumidor (persona física que actúa con fines ajenos a su actividad profesional), tiene derecho a la información precontractual prevista en la normativa de defensa de consumidores y usuarias y en la Directiva 2011/83/UE. Los presentes términos constituyen parte de dicha información. En contratos a distancia o fuera del establecimiento, la normativa puede reconocer derechos de desistimiento en los plazos legalmente previstos; en el caso del alquiler de trasteros iniciado a su solicitud, consulte el contrato firmado y la normativa vigente.'
                : 'If you are acting as a consumer (a natural person acting for purposes outside their trade, business or profession), you have the right to pre-contractual information under consumer protection law and Directive 2011/83/EU. These terms form part of that information. In distance or off-premises contracts, the law may provide for withdrawal rights within the statutory periods; for storage rental commenced at your request, please refer to the signed contract and applicable law.'}
            </p>
          </section>

          <p className="mt-12 text-sm text-gray-800">
            {isEs
              ? 'Para el texto íntegro del contrato de arrendamiento y sus anexos, consulte el documento firmado con Trasteros Ibiza. Para cualquier duda: info@trasteros-ibiza.com.'
              : 'For the full lease contract and annexes, please refer to the document signed with Trasteros Ibiza. For any questions: info@trasteros-ibiza.com.'}
          </p>

          <p className="mt-6">
            <Link href="/" className="text-orange-600 hover:text-orange-700 font-medium">
              {isEs ? '← Volver al inicio' : '← Back to home'}
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
