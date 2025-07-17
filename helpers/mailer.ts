import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import { User } from '@/models/userModel';

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {

    const plainToken = Math.random().toString(36).substring(2, 15);
    const salt = await bcrypt.genSalt(10);
    const hashedToken = await bcrypt.hash(plainToken, salt);

    const updateFields: any = {};
    if (emailType === 'VERIFY') {
      updateFields.verifyToken = hashedToken;
      updateFields.verifyTokenExpiry = Date.now() + 60 * 60 * 1000; // 1 hour
    } else if (emailType === 'RESET') {
      updateFields.forgotPasswordToken = hashedToken;
      updateFields.forgotPasswordTokenExpiry = Date.now() + 60 * 60 * 1000;
    }

    await User.findByIdAndUpdate(userId, updateFields);

    const transport = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'e30ae218aeef8e',
        pass: 'f42a55d7bd69c2',
      },
    });

    const route = emailType === 'VERIFY' ? 'verifyemail' : 'reset-password';

    const mailOptions = {
      from: 'sohaib@gmail.com',
      to: email,
      subject: emailType === 'VERIFY' ? 'Verify your email' : 'Reset your password',
      html: `
        <p>Click <a href="${process.env.DOMAIN}/${route}?token=${plainToken}">here</a> to ${
        emailType === 'VERIFY' ? 'verify your email' : 'reset your password'
      } or copy and paste the link below in your browser:</p>
        <p>${process.env.DOMAIN}/${route}?token=${plainToken}</p>
      `,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
