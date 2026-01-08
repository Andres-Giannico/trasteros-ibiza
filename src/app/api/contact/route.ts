import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const emailContentText = `
Nuevo mensaje de contacto desde Trasteros Ibiza:

Nombre: ${name}
Email: ${email}
Teléfono: ${phone || 'No proporcionado'}

Mensaje:
${message}

---
Enviado desde el formulario de contacto de Trasteros Ibiza
    `.trim();

    const emailContentHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #ea580c; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background-color: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #ea580c; display: block; margin-bottom: 5px; }
    .value { color: #1f2937; padding: 10px; background-color: white; border-radius: 4px; border-left: 3px solid #ea580c; }
    .message-box { background-color: white; padding: 15px; border-radius: 4px; border-left: 3px solid #ea580c; margin-top: 10px; }
    .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nuevo mensaje de contacto</h1>
      <p style="margin: 0;">Trasteros Ibiza</p>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Nombre:</span>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <span class="label">Teléfono:</span>
        <div class="value">${phone || 'No proporcionado'}</div>
      </div>
      <div class="field">
        <span class="label">Mensaje:</span>
        <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      <p>Enviado desde el formulario de contacto de Trasteros Ibiza</p>
      <p>Puedes responder directamente a este email para contactar con ${name}</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    // Enviar email usando Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'Trasteros Ibiza <onboarding@resend.dev>', // Cambiar cuando tengas dominio verificado
          to: 'ibizatrasteros@gmail.com',
          replyTo: email,
          subject: `Nuevo contacto: ${name}`,
          text: emailContentText,
          html: emailContentHtml,
        });
      } catch (emailError) {
        console.error('Error enviando email con Resend:', emailError);
        // Si falla Resend, logueamos pero no fallamos el request
        // para que el usuario vea el mensaje de éxito
        console.log('Email que se enviaría (fallback):', {
          to: 'ibizatrasteros@gmail.com',
          subject: `Nuevo contacto: ${name}`,
          text: emailContentText,
        });
      }
    } else {
      // Fallback si no hay API key configurada
      console.log('RESEND_API_KEY no configurada. Email que se enviaría:', {
        to: 'ibizatrasteros@gmail.com',
        subject: `Nuevo contacto: ${name}`,
        text: emailContentText,
      });
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

