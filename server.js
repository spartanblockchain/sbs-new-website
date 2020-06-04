const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-handlebars");

const app = express();

app.use(bodyParser());
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.listen(3000, () => {
  console.log("The server started on port 3000");
});

app.post("/sendEmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendEmail(user, (err, info) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({ error: "Sending Email failed!" });
    } else {
      console.log("Email sent!");
      res.send(info);
    }
  });
});

const sendEmail = (user, callback) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "", // VERY IMPORTANT: provide your email and email pass here or send a secret json file in
      pass: ""
    }
  });

  transporter.use(
    "compile",
    hbs({
      viewEngine: {
        partialsDir: "./src/app/pages/get-involved/views/",
        defaultLayout: ""
      },
      viewPath: "./src/app/pages/get-involved/views/",
      extName: ".hbs"
    })
  );

  const mailOptions = {
    from: "", // your email
    to: "", // your email
    subject: "Spartan Blockchain Solutions - New Message", // Whatever subject line you want
    template: "email",
    context: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      companyOrg: user.companyOrg,
      involvedSubject: user.involvedSubject,
      briefDescription: user.briefDescription
    }
  };
  transporter.sendMail(mailOptions, callback);
};
