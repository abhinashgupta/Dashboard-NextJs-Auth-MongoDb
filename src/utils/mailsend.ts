import nodemailer from 'nodemailer'
import User from '@/models/userModels';
import bcryptjs from "bcryptjs";

export const sendMail = async({email, emailType , userId}:any) => {
    try {
        
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, {
              verifyToken: hashedToken,
              verifyTokenExpiry:Date.now()+3600000,
            });
        } else if (emailType === "Reset") {
            await User.findByIdAndUpdate(userId, {
              forgotPasswordToken: hashedToken,
              forgotPasswordTokenExpiry: Date.now() + 3600000,
            });
        }
          var transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "668a2e2fc9e3d5",
              pass: "ed8e3b14e02b7a",
            },
          });

        const mailOptions = {
          from: "abhinashgupta1822@gmail.com",
          to: email,
          subject:
            emailType === "Verify"
              ? "Verify your email"
              : "Reset your password", // Subject line
          html: `<p>Click <a href=${
            process.env.DOMAIN
          }/verifyemail?token${hashedToken}>Here</a> to ${
            emailType === "VERIFY" ? "verify your email" : "reset yout password"
          } or copy and paste the link below in your browser.<br>
          ${process.env.DOMAIN}/verifyemail?token${hashedToken}</p>`,
        };

        const mailResponse = await transporter.sendMail(mailOptions)
        return mailResponse

    } catch (error:any) {
        throw new Error(error.message)
    }
}