// Gmail SMTP Configuration
const config = {
  host: 'smtp.gmail.com',
  port: 587,
  username: 'joelkalimbwe3@gmail.com',
  password: 'yxdk iwgj rftt beel',
  toEmail: 'owellgraphics23@gmail.com'
};

export default function emailPlugin() {
  return {
    name: 'email-plugin',
    configureServer(server) {
      server.middlewares.use('/api/send-email', async (req, res, next) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method not allowed');
          return;
        }

        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });

        req.on('end', async () => {
          try {
            const formData = JSON.parse(body);
            const { firstName, lastName, company, phone, email, heardAbout, message } = formData;

            // Dynamic import nodemailer
            const nodemailer = await import('nodemailer');
            
            const transporter = nodemailer.default.createTransport({
              host: config.host,
              port: config.port,
              secure: false,
              auth: {
                user: config.username,
                pass: config.password
              }
            });

            await transporter.sendMail({
              from: config.username,
              to: config.toEmail,
              subject: `New Contact Form Submission from ${firstName} ${lastName}`,
              html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                <p><strong>Heard About Us:</strong> ${heardAbout || 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <p>${message || 'No message provided'}</p>
                <hr>
                <p><em>Reply to: ${email}</em></p>
              `,
              replyTo: email
            });

            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({ success: true, message: 'Email sent successfully' }));
          } catch (error) {
            console.error('Error sending email:', error);
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 500;
            res.end(JSON.stringify({ success: false, message: 'Failed to send email' }));
          }
        });
      });
    }
  };
}

