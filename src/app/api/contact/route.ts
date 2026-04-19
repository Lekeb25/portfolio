
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, subject, message } = body;

        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: process.env.CONTACT_EMAIL!,
        subject: `[Portfolio] ${subject || 'New message'}`,
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #ff2d55;">New message from your portfolio</h2>
            <hr style="border-color: #eee;" />
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || '—'}</p>
            <hr style="border-color: #eee;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; color: #333;">${message}</p>
            <hr style="border-color: #eee;" />
            <p style="font-size: 12px; color: #999;">
                Sent from your portfolio contact form
            </p>
            </div>
        `,
        });

        return NextResponse.json({ success: true }, { status: 200});
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}