# Mailgun Email Setup Guide

This project uses Mailgun for sending contact form emails with react-hook-form and Zod validation.

## Prerequisites

1. A Mailgun account (sign up at https://www.mailgun.com/)
2. Verified domain or use the sandbox domain for testing

## Setup Instructions

### 1. Get Your Mailgun Credentials

1. Log in to your Mailgun account
2. Navigate to **Settings** → **API Keys**
3. Copy your **Private API Key**
4. Go to **Sending** → **Domains** to find your domain name

### 2. Configure Environment Variables

Create a `.env.local` file in the root of your project:

```bash
# Mailgun Configuration
MAILGUN_API_KEY=your_mailgun_api_key_here
MAILGUN_DOMAIN=your_mailgun_domain_here
MAILGUN_TO_EMAIL=your_email@example.com
```

**Example:**

```bash
MAILGUN_API_KEY=test-12345678-12345678
MAILGUN_DOMAIN=sandbox123abc.mailgun.org
MAILGUN_TO_EMAIL=tarek@yourdomain.com
```

### 3. Verify Your Setup

- For production: Verify your domain in Mailgun
- For testing: Use the sandbox domain provided by Mailgun
- Note: Sandbox domains can only send to authorized recipients

### 4. Add Authorized Recipients (Sandbox Only)

If using a sandbox domain:

1. Go to **Sending** → **Domains** → **Your Sandbox Domain**
2. Click **Authorized Recipients**
3. Add the email addresses you want to test with

## Features Implemented

✅ **React Hook Form** for form state management
✅ **Zod** for schema validation with custom error messages
✅ **Mailgun.js** for email sending via API
✅ **Validation Rules:**

- Name: 2-50 characters
- Email: Valid email format
- Subject: 3-100 characters
- Message: 10-1000 characters

✅ **User Experience:**

- Real-time validation on blur
- Loading state during submission
- Success/error feedback messages
- Form reset after successful submission
- Disabled inputs during submission

## API Endpoint

**POST** `/api/contact`

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I would like to discuss..."
}
```

**Success Response:**

```json
{
  "success": true,
  "message": "Email sent successfully",
  "result": { ... }
}
```

**Error Response:**

```json
{
  "error": "Failed to send email",
  "details": "Error message"
}
```

## Testing

1. Start your development server:

```bash
npm run dev
```

2. Navigate to the contact section on your portfolio
3. Fill out the form
4. Check your configured email address for the message

## Troubleshooting

### Common Issues

1. **"Failed to send email"**

   - Verify your API key is correct
   - Check that the domain is correctly configured
   - Ensure environment variables are set in `.env.local`

2. **Email not received**

   - Check Mailgun logs: https://app.mailgun.com/app/logs
   - Verify the recipient email is authorized (sandbox)
   - Check spam folder

3. **Validation errors**
   - Ensure all fields meet the validation requirements
   - Check browser console for detailed error messages

## Production Deployment

When deploying to production (e.g., Vercel):

1. Add environment variables in your hosting platform:

   - `MAILGUN_API_KEY`
   - `MAILGUN_DOMAIN`
   - `MAILGUN_TO_EMAIL`

2. Verify your domain in Mailgun for production use

3. Test the contact form thoroughly before going live

## Security Notes

- ⚠️ Never commit `.env.local` to version control
- ⚠️ Keep your Mailgun API key secret
- ✅ Environment variables are only accessible server-side
- ✅ Client-side validation is paired with server-side checks

## Resources

- [Mailgun Documentation](https://documentation.mailgun.com/)
- [React Hook Form Docs](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
