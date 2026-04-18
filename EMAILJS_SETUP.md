# EmailJS Setup Instructions

## Setting up EmailJS for Contact Form

1. **Create an EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Create an Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Add a new service (Gmail, Outlook, etc.)
   - Connect your email account and verify it

3. **Create an Email Template**
   - Go to "Email Templates" in your dashboard
   - Create a new template with these variables:
     ```
     Subject: {{subject}}

     From: {{from_name}} ({{from_email}})

     Message:
     {{message}}

     ---
     This message was sent from your portfolio contact form.
     ```

4. **Get Your Configuration Values**
   - Service ID: Found in Email Services section
   - Template ID: Found in Email Templates section
   - Public Key: Found in Account > General settings

5. **Update Environment Variables**
   - Open `.env.local` file in your project root
   - Replace the placeholder values with your actual EmailJS credentials:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
     ```

6. **Test the Contact Form**
   - Run your Next.js application: `npm run dev`
   - Go to the contact section
   - Fill out and submit the form
   - Check your email to confirm messages are being received

## Security Notes
- Never commit your `.env.local` file to version control
- The public key is safe to expose in frontend code
- Service ID and Template ID are also safe to expose
- Keep your EmailJS account secure and monitor usage

## Troubleshooting
- If emails aren't sending, check the browser console for errors
- Verify all environment variables are set correctly
- Make sure your email service is properly configured in EmailJS
- Check that your email template variables match exactly