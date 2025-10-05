import { NextRequest, NextResponse } from 'next/server'
import formData from 'form-data'
import Mailgun from 'mailgun.js'

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables first
    const apiKey = process.env.MAILGUN_API_KEY
    const domain = process.env.MAILGUN_DOMAIN
    const toEmail = process.env.MAILGUN_TO_EMAIL

    if (!apiKey || !domain || !toEmail) {
      console.error('Missing Mailgun configuration:', {
        hasApiKey: !!apiKey,
        hasDomain: !!domain,
        hasToEmail: !!toEmail,
      })
      return NextResponse.json(
        {
          error: 'Email service not configured',
          details: 'Missing required environment variables',
        },
        { status: 500 },
      )
    }

    const body = await request.json()
    const { id, name, email, subject, message } = body

    // Validate required fields
    if (!id || !name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 },
      )
    }

    // Initialize Mailgun client with validated credentials
    const mailgun = new Mailgun(formData)
    const mg = mailgun.client({
      username: 'api',
      key: apiKey,
    })

    // Send email using Mailgun
    const result = await mg.messages.create(domain, {
      from: `${name} <${email}>`,
      to: toEmail,
      subject: `Portfolio Contact: ${subject}`,
      text: message,
      html: `
					<div style="font-family: Arial, sans-serif; padding: 20px;">
						<h2 style="color: #f97316;">New Contact Form Submission</h2>
						<div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
							<p style="margin: 10px 0;"><strong>ID:</strong> ${id}</p>
							<p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
							<p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
							<p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
						</div>
						<div style="background-color: #fff; padding: 15px; border-left: 4px solid #f97316; margin: 20px 0;">
							<h3 style="margin-top: 0;">Message:</h3>
							<p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
						</div>
					</div>
				`,
    })

    return NextResponse.json(
      { success: true, message: 'Email sent successfully', result },
      { status: 200 },
    )
  } catch (error) {
    console.error('Mailgun error:', error)
    return NextResponse.json(
      {
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
