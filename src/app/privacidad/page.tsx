'use client';

import Container from '@/components/ui/Container';
import { useLanguage } from '@/hooks/useLanguage';
import Link from 'next/link';

export default function PrivacidadPage() {
  const { language } = useLanguage();
  const isEs = language === 'es';

  return (
    <div id="main-content" className="min-h-screen bg-white py-16 text-gray-900">
      <Container>
        <div className="max-w-3xl mx-auto [&_p]:text-gray-900 [&_li]:text-gray-900 [&_a]:text-orange-600">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {isEs ? 'Política de Privacidad' : 'Privacy Policy'}
          </h1>
          <p className="text-sm text-gray-700 mb-8">
            {isEs ? 'Última actualización: marzo 2025' : 'Last updated: March 2025'}
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {isEs ? '1. Responsable del tratamiento' : '1. Data controller'}
            </h2>
            <p className="mb-4">
              <strong>Ibiza Trasteros SL</strong> / <strong>Trasteros Ibiza SL</strong>
              <br />
              CIF: B57946691
              <br />
              {isEs ? 'Domicilio:' : 'Address:'} Calle Can Escandell nº 40 B; Calle Menéndez Pidal nº 28 y Av. Dr. Fleming 35, local 17, CP 07820, San Antonio de Portmany, Ibiza.
              <br />
              {isEs ? 'Contacto:' : 'Contact:'}{' '}
              <a href="mailto:info@trasteros-ibiza.com" className="text-orange-600 hover:underline">
                info@trasteros-ibiza.com
              </a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {isEs ? '2. Marco normativo (UE y España)' : '2. Legal framework (EU and Spain)'}
            </h2>
            <p className="mb-4">
              {isEs
                ? 'El tratamiento de sus datos personales se realiza de conformidad con:'
                : 'Your personal data are processed in accordance with:'}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Reglamento (UE) 2016/679</strong> (RGPD) — {isEs ? 'reglamento general de protección de datos de la Unión Europea.' : 'General Data Protection Regulation (GDPR).'}
              </li>
              <li>
                <strong>Ley Orgánica 3/2018</strong> (LOPDGDD) — {isEs ? 'protección de datos personales y garantía de los derechos digitales (España).' : 'Spanish organic law on data protection and digital rights.'}
              </li>
              <li>
                {isEs
                  ? 'Directiva 2002/58/CE (modificada por 2009/136/CE) en materia de privacidad en las comunicaciones electrónicas, en la medida aplicable.'
                  : 'Directive 2002/58/EC (as amended by 2009/136/EC) on privacy in electronic communications, where applicable.'}
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {isEs ? '3. Finalidad y legitimación' : '3. Purpose and legal basis'}
            </h2>
            <p className="mb-4">
              {isEs
                ? 'Tratamos sus datos para: gestión del contrato de arrendamiento del trastero, facturación, cobro y atención al cliente; cumplimiento de obligaciones legales; y, cuando corresponda, envío de comunicaciones comerciales sobre nuestros servicios (con su consentimiento o base legítima). La base legal es la ejecución del contrato, el cumplimiento legal y, en su caso, el consentimiento o el interés legítimo.'
                : 'We process your data for: management of the storage rental contract, billing, collection and customer service; compliance with legal obligations; and, where applicable, sending commercial communications about our services (with your consent or legitimate interest). The legal basis is performance of the contract, legal compliance and, where applicable, consent or legitimate interest.'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {isEs ? '4. Categorías de datos' : '4. Categories of data'}
            </h2>
            <p className="mb-4">
              {isEs
                ? 'Podemos tratar: datos de identificación (nombre, apellidos, DNI/NIE/CIF), dirección, teléfono, correo electrónico, datos de pago y facturación, y datos derivados del contrato y de la relación comercial. En las instalaciones operamos circuito cerrado de televisión (CCTV) por seguridad; las imágenes se tratan conforme a la normativa vigente.'
                : 'We may process: identification data (name, ID/passport/tax number), address, phone, email, payment and billing data, and data arising from the contract and business relationship. We operate closed-circuit television (CCTV) on our premises for security; images are processed in accordance with applicable law.'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {isEs ? '5. Destinatarios y transferencias' : '5. Recipients and transfers'}
            </h2>
            <p className="mb-4">
              {isEs
                ? 'Sus datos podrán ser comunicados a entidades necesarias para la ejecución del contrato (bancos, gestoría, aseguradoras) y a administraciones o autoridades cuando sea obligatorio por ley. No realizamos transferencias internacionales fuera del Espacio Económico Europeo (EEE) salvo que la normativa lo permita (decisiones de adecuación, garantías aprobadas, etc.).'
                : 'Your data may be disclosed to entities necessary for the performance of the contract (banks, administrative services, insurers) and to public bodies or authorities when required by law. We do not transfer data outside the European Economic Area (EEA) unless permitted by law (adequacy decisions, approved safeguards, etc.).'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {isEs ? '6. Conservación' : '6. Retention'}
            </h2>
            <p className="mb-4">
              {isEs
                ? 'Conservamos los datos mientras sea necesario para las finalidades indicadas y para atender reclamaciones o obligaciones legales, fiscales o contractuales. Las imágenes de CCTV se conservan el tiempo que permita la normativa aplicable. Pasado ese plazo se suprimen o se anonimizan.'
                : 'We retain data for as long as necessary for the stated purposes and to deal with claims or legal, tax or contractual obligations. CCTV images are retained for the period allowed by applicable law. After that period they are deleted or anonymised.'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {isEs ? '7. Derechos (RGPD y LOPDGDD)' : '7. Your rights (GDPR and LOPDGDD)'}
            </h2>
            <p className="mb-4">
              {isEs
                ? 'Usted puede ejercer ante Ibiza Trasteros SL los siguientes derechos:'
                : 'You may exercise the following rights with Ibiza Trasteros SL:'}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>{isEs ? 'Acceso' : 'Access'}</strong> — {isEs ? 'conocer si tratamos sus datos y obtener una copia.' : 'to know whether we process your data and to obtain a copy.'}</li>
              <li><strong>{isEs ? 'Rectificación' : 'Rectification'}</strong> — {isEs ? 'corregir datos inexactos o incompletos.' : 'to correct inaccurate or incomplete data.'}</li>
              <li><strong>{isEs ? 'Supresión' : 'Erasure'}</strong> — {isEs ? 'solicitar la eliminación cuando la ley lo permita.' : 'to request deletion where the law allows.'}</li>
              <li><strong>{isEs ? 'Limitación' : 'Restriction'}</strong> — {isEs ? 'limitar el tratamiento en los supuestos previstos.' : 'to restrict processing in the cases provided for.'}</li>
              <li><strong>{isEs ? 'Oposición' : 'Objection'}</strong> — {isEs ? 'oponerse al tratamiento en los casos previstos por la ley.' : 'to object to processing where the law provides.'}</li>
              <li><strong>{isEs ? 'Portabilidad' : 'Portability'}</strong> — {isEs ? 'recibir sus datos en formato estructurado de uso común.' : 'to receive your data in a commonly used structured format.'}</li>
            </ul>
            <p className="mt-4">
              {isEs
                ? 'Para ejercer estos derechos, diríjase por escrito a Ibiza Trasteros SL al domicilio indicado o a info@trasteros-ibiza.com, indicando su identidad y el derecho que desea ejercer. Tiene derecho a presentar una reclamación ante la Autoridad de Control competente: Agencia Española de Protección de Datos (www.aepd.es).'
                : 'To exercise these rights, please write to Ibiza Trasteros SL at the address above or at info@trasteros-ibiza.com, stating your identity and the right you wish to exercise. You have the right to lodge a complaint with the competent supervisory authority: Spanish Data Protection Agency (www.aepd.es).'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {isEs ? '8. Seguridad' : '8. Security'}
            </h2>
            <p className="mb-4">
              {isEs
                ? 'Aplicamos medidas técnicas y organizativas adecuadas para garantizar la seguridad e integridad de sus datos y evitar su alteración, pérdida o acceso no autorizado, conforme al RGPD y a la LOPDGDD.'
                : 'We implement appropriate technical and organisational measures to ensure the security and integrity of your data and to prevent their alteration, loss or unauthorised access, in accordance with the GDPR and LOPDGDD.'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {isEs ? '9. Cambios en la política' : '9. Changes to this policy'}
            </h2>
            <p className="mb-4">
              {isEs
                ? 'Nos reservamos el derecho a modificar esta política para adaptarla a cambios normativos o de actividad. Los cambios relevantes se comunicarán en esta página y, cuando la normativa lo exija, se le notificará o se solicitará su consentimiento.'
                : 'We reserve the right to modify this policy to reflect legal or operational changes. Material changes will be communicated on this page and, where required by law, we will notify you or seek your consent.'}
            </p>
          </section>

          <p className="mt-12 text-sm text-gray-800">
            {isEs
              ? 'Para cualquier consulta sobre privacidad: info@trasteros-ibiza.com.'
              : 'For any privacy enquiries: info@trasteros-ibiza.com.'}
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
