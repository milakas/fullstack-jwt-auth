const nodemailer = require('nodemailer');

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'Активация аккаунта на ' + process.env.API_URl,
      text: '',
      html: `
      <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px;">
        <h1 style="color: #333; font-size: 20px;">Спасибо за регистрацию 💛</h1>
        <p style="color: #333; font-size: 16px;">Для активации аккаунта, пожалуйста, перейдите по ссылке:</p>
        <a href="${link}" style="color: #007bff; text-decoration: none; font-size: 16px;">${link}</a>
        </div>
      `,
    });
  }
}

module.exports = new MailService();
