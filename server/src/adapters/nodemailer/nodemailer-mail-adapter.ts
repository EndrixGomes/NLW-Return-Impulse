import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "75abc763d8eb0f",
      pass: "7e7240a7dea3dc"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
           await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Endrix Gomes <endrixgc@gmail.com>',
            subject,
            html: body,
        });
    };
}