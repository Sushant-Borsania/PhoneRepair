const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

console.log(process.env);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

sgMail.setApiKey(process.env.API_KEY);

app.use(cors());

//welcome page
app.get("/", (req, res) => {
  res.send("welcome to the sendgrid mail - test");
});

//email page
app.post("/phoneRepair/address", (req, res) => {
  console.log(req.body.data);
  const { Reference, Email, FirstName, LastName, Address, HomePermit, company, color, model, issues, cost, date, time } = req.body.data;
  //sendgrid reqs
  const msg = {
    to: Email,
    cc: "cerebellum.flr@gmail.com",
    from: "sushant.yt@gmail.com",
    templateId: "d-724a46bd9d8e4b2ea388b56706d4f7a7",
    dynamic_template_data: {
      FirstName: FirstName,
      Email: Email,
      company: company,
      model: model,
      color: color,
      issues: issues,
      Address: Address,
      permit: HomePermit,
      city: "Edmonton",
      cost: cost,
      date: date,
      time: time,
      Reference: Reference
    }
  };
  sgMail.send(msg);
  res.send("Data received");
});

app.listen(4000, () => console.log("running on port 4000"));