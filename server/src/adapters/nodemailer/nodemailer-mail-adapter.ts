import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "06d78e83f43ebe",
    pass: "54bf19e09bd786"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <fragosooliveira773@gmail.com>',
      to: 'Gabriel Fragoso <gfragoso233@gmail.com>',
      subject,
      html: body,
    });
  };
}