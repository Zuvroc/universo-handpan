import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, email, categoria, mensaje } = body;

    if (!nombre || !email || !categoria || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Aquí iría la integración real (Resend, Nodemailer, Formspree, etc.)
    // Por ahora solo loggeamos y retornamos éxito
    console.log('Nuevo contacto:', { nombre, email, categoria, mensaje, fecha: new Date().toISOString() });

    // Simular delay de red
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({ success: true, message: 'Mensaje enviado correctamente' });
  } catch {
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}