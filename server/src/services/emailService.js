import nodemailer from 'nodemailer';
import config from '../config/index.js';

// Create transporter
const transporter = nodemailer.createTransport({
    host: config.email.host,
    port: config.email.port,
    secure: false,
    auth: {
        user: config.email.user,
        pass: config.email.pass
    }
});

// Email templates
const templates = {
    visitorRegistration: (data) => ({
        subject: 'Welcome to Bandhoor - Registration Confirmed!',
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #6B1E2B; padding: 30px; text-align: center;">
          <h1 style="color: #C9A962; margin: 0;">Bandhoor</h1>
          <p style="color: #fff; margin: 10px 0 0;">Where Celebrations Find Their Perfect Match</p>
        </div>
        <div style="padding: 30px; background: #fff;">
          <h2 style="color: #6B1E2B;">Welcome, ${data.name}!</h2>
          <p>Thank you for registering with Bandhoor. We're excited to have you as part of our community!</p>
          <p>You'll receive updates about our upcoming wedding exhibitions and exclusive vendor showcases.</p>
          <div style="background: #FDF8F3; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #6B1E2B;"><strong>What's Next?</strong></p>
            <ul style="color: #666;">
              <li>Stay tuned for exhibition announcements</li>
              <li>Explore our curated vendor list</li>
              <li>Connect with premium wedding service providers</li>
            </ul>
          </div>
          <p>If you have any questions, feel free to reply to this email.</p>
          <p style="margin-top: 30px;">Warm regards,<br><strong>Team Bandhoor</strong></p>
        </div>
        <div style="background: #333; padding: 20px; text-align: center; color: #999; font-size: 12px;">
          <p>© ${new Date().getFullYear()} Bandhoor. All rights reserved.</p>
        </div>
      </div>
    `
    }),

    vendorApplication: (data) => ({
        subject: 'Bandhoor - Vendor Application Received',
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #6B1E2B; padding: 30px; text-align: center;">
          <h1 style="color: #C9A962; margin: 0;">Bandhoor</h1>
          <p style="color: #fff; margin: 10px 0 0;">Where Celebrations Find Their Perfect Match</p>
        </div>
        <div style="padding: 30px; background: #fff;">
          <h2 style="color: #6B1E2B;">Application Received!</h2>
          <p>Dear ${data.name},</p>
          <p>Thank you for submitting your vendor application for <strong>${data.company}</strong>.</p>
          <p>Our team will review your application and get back to you within 3-5 business days.</p>
          <div style="background: #FDF8F3; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #6B1E2B;"><strong>Application Status: Under Review</strong></p>
          </div>
          <p>If you have any questions, feel free to reach out.</p>
          <p style="margin-top: 30px;">Best regards,<br><strong>Team Bandhoor</strong></p>
        </div>
        <div style="background: #333; padding: 20px; text-align: center; color: #999; font-size: 12px;">
          <p>© ${new Date().getFullYear()} Bandhoor. All rights reserved.</p>
        </div>
      </div>
    `
    }),

    vendorApproved: (data) => ({
        subject: 'Congratulations! Your Bandhoor Application is Approved',
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #6B1E2B; padding: 30px; text-align: center;">
          <h1 style="color: #C9A962; margin: 0;">Bandhoor</h1>
          <p style="color: #fff; margin: 10px 0 0;">Where Celebrations Find Their Perfect Match</p>
        </div>
        <div style="padding: 30px; background: #fff;">
          <h2 style="color: #6B1E2B;">🎉 Congratulations!</h2>
          <p>Dear ${data.name},</p>
          <p>We're thrilled to inform you that <strong>${data.company}</strong> has been approved to participate in Bandhoor!</p>
          <div style="background: #FDF8F3; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #6B1E2B;"><strong>Application Status: APPROVED ✓</strong></p>
          </div>
          <p>Our team will contact you shortly with next steps.</p>
          <p style="margin-top: 30px;">Welcome to the Bandhoor family!<br><strong>Team Bandhoor</strong></p>
        </div>
        <div style="background: #333; padding: 20px; text-align: center; color: #999; font-size: 12px;">
          <p>© ${new Date().getFullYear()} Bandhoor. All rights reserved.</p>
        </div>
      </div>
    `
    }),

    enquiryAutoReply: (data) => ({
        subject: 'Bandhoor - We received your message',
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #6B1E2B; padding: 30px; text-align: center;">
          <h1 style="color: #C9A962; margin: 0;">Bandhoor</h1>
        </div>
        <div style="padding: 30px; background: #fff;">
          <h2 style="color: #6B1E2B;">Thank you for reaching out!</h2>
          <p>Dear ${data.name},</p>
          <p>We've received your message and our team will get back to you within 24-48 hours.</p>
          <p style="margin-top: 30px;">Best regards,<br><strong>Team Bandhoor</strong></p>
        </div>
      </div>
    `
    })
};

// Send email function
export const sendEmail = async ({ to, subject, template, data }) => {
    try {
        const emailTemplate = templates[template](data);

        await transporter.sendMail({
            from: `"Bandhoor" <${config.email.from}>`,
            to,
            subject: subject || emailTemplate.subject,
            html: emailTemplate.html
        });

        console.log(`Email sent to ${to}`);
        return true;
    } catch (error) {
        console.error('Email sending failed:', error);
        throw error;
    }
};
