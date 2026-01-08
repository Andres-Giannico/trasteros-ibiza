import { NextRequest, NextResponse } from 'next/server';

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

    // Enviar email usando el servicio de email de Next.js
    // Por ahora, simplemente logueamos y retornamos éxito
    // En producción, usarías un servicio como Resend, SendGrid, o Nodemailer
    
    const emailContent = `
Nuevo mensaje de contacto desde Trasteros Ibiza:

Nombre: ${name}
Email: ${email}
Teléfono: ${phone || 'No proporcionado'}

Mensaje:
${message}

---
Enviado desde el formulario de contacto de Trasteros Ibiza
    `.trim();

    // Aquí deberías integrar tu servicio de email
    // Por ejemplo, usando Resend:
    // await resend.emails.send({
    //   from: 'contacto@trasterosibiza.com',
    //   to: 'ibizatrasteros@gmail.com',
    //   subject: `Nuevo contacto: ${name}`,
    //   text: emailContent,
    // });

    // Por ahora, retornamos éxito
    // En producción, implementa el envío real de email
    console.log('Email que se enviaría:', {
      to: 'ibizatrasteros@gmail.com',
      subject: `Nuevo contacto: ${name}`,
      text: emailContent,
    });

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

