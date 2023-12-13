const nodemailer = require("nodemailer");
const handlebars = require("handlebars");

export default async function handler(req, res) {
  const { name, email, subject, message } = req.body;

  const source =
    "<p>name: <b>{{name}}</b></p>" +
    "<p>email: <b>{{email}}</b></p>" +
    "<p>subject: <b>{{subject}}</b></p>" +
    "<p>message: <i>{{message}}</i></p>";
  const template = handlebars.compile(source);

  const html = template({ name, email, subject, message });

  const transporter = nodemailer.createTransport({
    host: "mail.runjatbuilders.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "social@runjatbuilders.com",
      pass: "runjat@Factor",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: "social@runjatbuilders.com",
    to: "info@runjatbuilders.com",
    subject: "Leads",
    html,
  };

  try {
    const info = await transporter.sendMail({
      ...options,
    });

    console.log("email sent");
    console.log({ info });

    res.status(200).json({ message: "message delivered successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
